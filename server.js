import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const port = Number(process.env.PORT || 3001);
const contactRecipient = process.env.CONTACT_TO || "info@senelainternational.com";

app.use(express.json({ limit: "20kb" }));
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));

const requiredFields = ["fullName", "email", "phone", "interestedService", "message"];

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validateSubmission(body) {
  const submission = Object.fromEntries(
    Object.entries(body || {}).map(([key, value]) => [key, clean(value)])
  );
  const errors = {};

  requiredFields.forEach((field) => {
    if (!submission[field]) errors[field] = `${field} is required`;
  });
  if (submission.email && !/^\S+@\S+\.\S+$/.test(submission.email)) {
    errors.email = "A valid email is required";
  }

  return { submission, errors };
}

function createTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error("SMTP_HOST, SMTP_USER and SMTP_PASS must be configured");
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS.replace(/\s+/g, ""),
    },
  });
}

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.post("/api/contact", async (request, response) => {
  const { submission, errors } = validateSubmission(request.body);
  if (Object.keys(errors).length > 0) {
    return response.status(400).json({ message: "Please check the submitted fields.", errors });
  }

  try {
    const transporter = createTransporter();
    const subject = `New enquiry from ${submission.fullName} - ${submission.interestedService}`;
    const text = [
      `Full Name: ${submission.fullName}`,
      `Company Name: ${submission.companyName || "N/A"}`,
      `Email: ${submission.email}`,
      `Phone: ${submission.phone}`,
      `Country: ${submission.country || "N/A"}`,
      `Interested Service: ${submission.interestedService}`,
      `Project Type: ${submission.projectType || "N/A"}`,
      `Estimated Capacity: ${submission.estimatedCapacity || "N/A"}`,
      "",
      "Message:",
      submission.message,
    ].join("\n");

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: contactRecipient,
      replyTo: submission.email,
      subject,
      text,
    });

    return response.status(202).json({ ok: true });
  } catch (error) {
    console.error("Contact email failed:", error.message);
    return response.status(500).json({ message: "Unable to send the enquiry right now." });
  }
});

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("SMTP is not configured. Add SMTP_HOST, SMTP_USER and SMTP_PASS to .env before submitting the contact form.");
  }
});
