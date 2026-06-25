import { readSession } from "./_session.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    return res.status(200).json({ user: readSession(req) });
  } catch {
    return res.status(200).json({ user: null });
  }
}
