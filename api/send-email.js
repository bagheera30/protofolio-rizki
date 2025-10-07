import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Please fill in all fields." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, 
      subject: "New Message from Portfolio Contact Form",
      html: `
        <p><strong>From:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });
    console.log(email, message);

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
