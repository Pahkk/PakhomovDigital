export function getAuthOrigin(req) {
  if (process.env.AUTH_BASE_URL) return process.env.AUTH_BASE_URL.replace(/\/$/, "");

  const host = req.headers.host;
  const proto = req.headers["x-forwarded-proto"] || (host?.startsWith("localhost") || host?.startsWith("127.0.0.1") ? "http" : "https");
  return `${proto}://${host}`;
}
