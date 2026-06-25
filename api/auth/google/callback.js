import { clearOAuthCookies, createSessionCookie, readOAuthCookies } from "../_session.js";

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_USERINFO_URL = "https://openidconnect.googleapis.com/v1/userinfo";

function getOrigin(req) {
  const host = req.headers.host;
  const proto = req.headers["x-forwarded-proto"] || (host?.startsWith("localhost") || host?.startsWith("127.0.0.1") ? "http" : "https");
  return `${proto}://${host}`;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { code, state } = req.query || {};
  const cookies = readOAuthCookies(req);
  if (!code || !state || state !== cookies.state || !cookies.verifier) {
    res.setHeader("Set-Cookie", clearOAuthCookies());
    return res.redirect("/?auth=failed");
  }

  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.AUTH_SECRET) {
    res.setHeader("Set-Cookie", clearOAuthCookies());
    return res.redirect("/?auth=missing-config");
  }

  try {
    const redirectUri = `${getOrigin(req)}/api/auth/google/callback`;
    const tokenResponse = await fetch(GOOGLE_TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        code,
        code_verifier: cookies.verifier,
        grant_type: "authorization_code",
        redirect_uri: redirectUri
      })
    });

    if (!tokenResponse.ok) throw new Error("Google token exchange failed.");
    const token = await tokenResponse.json();
    const profileResponse = await fetch(GOOGLE_USERINFO_URL, {
      headers: { Authorization: `Bearer ${token.access_token}` }
    });

    if (!profileResponse.ok) throw new Error("Google profile lookup failed.");
    const profile = await profileResponse.json();
    const user = {
      id: profile.sub,
      email: profile.email,
      name: profile.name,
      picture: profile.picture
    };

    res.setHeader("Set-Cookie", [...clearOAuthCookies(), createSessionCookie(user)]);
    return res.redirect("/?auth=success");
  } catch (error) {
    console.error("Google auth callback error:", error);
    res.setHeader("Set-Cookie", clearOAuthCookies());
    return res.redirect("/?auth=failed");
  }
}
