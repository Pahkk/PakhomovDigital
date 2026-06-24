const TO_EMAIL = "npakhomov14@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, business, projectType, budget, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "PDS Website <onboarding@resend.dev>",
        to: TO_EMAIL,
        reply_to: email,
        subject: `New project request from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Business: ${business || "-"}`,
          `Project Type: ${projectType || "-"}`,
          `Budget: ${budget || "-"}`,
          "",
          "Message:",
          message
        ].join("\n")
      })
    });

    if (!response.ok) {
      console.error("Resend error:", await response.text());
      return res.status(502).json({ error: "Failed to send email." });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact handler error:", error);
    return res.status(500).json({ error: "Unexpected server error." });
  }
}
