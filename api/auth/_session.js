import crypto from "node:crypto";

const SESSION_COOKIE = "pds_session";
const OAUTH_STATE_COOKIE = "pds_oauth_state";
const OAUTH_VERIFIER_COOKIE = "pds_oauth_verifier";
const WEEK = 60 * 60 * 24 * 7;

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

function parseCookies(req) {
  return Object.fromEntries((req.headers.cookie || "").split(";").filter(Boolean).map((cookie) => {
    const index = cookie.indexOf("=");
    return [cookie.slice(0, index).trim(), decodeURIComponent(cookie.slice(index + 1))];
  }));
}

function serializeCookie(name, value, maxAge = WEEK) {
  const secure = process.env.VERCEL ? "; Secure" : "";
  return `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax${secure}`;
}

function sign(value) {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET is required.");
  return crypto.createHmac("sha256", secret).update(value).digest("base64url");
}

export function createSessionCookie(user) {
  const payload = base64url(JSON.stringify({ user, exp: Math.floor(Date.now() / 1000) + WEEK }));
  return serializeCookie(SESSION_COOKIE, `${payload}.${sign(payload)}`);
}

export function readSession(req) {
  const token = parseCookies(req)[SESSION_COOKIE];
  if (!token) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature || signature !== sign(payload)) return null;
  const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  if (!session.exp || session.exp < Math.floor(Date.now() / 1000)) return null;
  return session.user || null;
}

export function clearSessionCookie() {
  return serializeCookie(SESSION_COOKIE, "", 0);
}

export function createOAuthCookies(state, verifier) {
  return [serializeCookie(OAUTH_STATE_COOKIE, state, 600), serializeCookie(OAUTH_VERIFIER_COOKIE, verifier, 600)];
}

export function readOAuthCookies(req) {
  const cookies = parseCookies(req);
  return { state: cookies[OAUTH_STATE_COOKIE], verifier: cookies[OAUTH_VERIFIER_COOKIE] };
}

export function clearOAuthCookies() {
  return [serializeCookie(OAUTH_STATE_COOKIE, "", 0), serializeCookie(OAUTH_VERIFIER_COOKIE, "", 0)];
}

export function randomToken(bytes = 32) {
  return crypto.randomBytes(bytes).toString("base64url");
}

export function pkceChallenge(verifier) {
  return crypto.createHash("sha256").update(verifier).digest("base64url");
}
