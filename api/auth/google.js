import { createOAuthCookies, pkceChallenge, randomToken } from "./_session.js";

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";

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

  if (!process.env.GOOGLE_CLIENT_ID) {
    return res.status(501).json({ error: "Google sign-in needs GOOGLE_CLIENT_ID." });
  }

  const state = randomToken();
  const verifier = randomToken(64);
  const redirectUri = `${getOrigin(req)}/api/auth/google/callback`;
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "openid email profile",
    state,
    code_challenge: pkceChallenge(verifier),
    code_challenge_method: "S256",
    prompt: "select_account"
  });

  res.setHeader("Set-Cookie", createOAuthCookies(state, verifier));
  return res.redirect(`${GOOGLE_AUTH_URL}?${params.toString()}`);
}
