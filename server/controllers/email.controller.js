import nodemailer from "nodemailer";
import validator from "validator";

export const workWithMe = async (req, res) => {
  try {
    const { senderEmail, emailBody } = req.body;

    // Validate input data
    if (!senderEmail || !emailBody) {
      return res
        .status(400)
        .json({ error: "Sender email and email body are required" });
    }

    // Validate and sanitize senderEmail
    if (!validator.isEmail(senderEmail)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Compose an email using the configured mail transporter
    const mailTransporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD,
      },
    });

    // Send email
    await mailTransporter.sendMail({
      from: senderEmail,
      to: process.env.AUTH_EMAIL,
      subject: "Freelance Contact",
      html: emailBody,
    });

    // Log success message
    console.log("Your email was successfully sent");
    return res
      .status(200)
      .json({ message: "Your email was successfully sent" });
  } catch (error) {
    // Log error message
    console.error("An error occurred while sending your email:", error.message);
    return res
      .status(500)
      .json({ error: "An error occurred while sending your email" });
  }
};
