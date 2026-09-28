import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

const PORT = Number(process.env.PORT || 3001);

const CONTACT_TO =
  process.env.CONTACT_TO || "info@senelainternational.com";

/* =========================================================
   CORS
========================================================= */

const allowedOrigins = [
  "http://localhost:5173",
  "https://senelasolar.tech",
  "https://www.senelasolar.tech",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn("Blocked CORS origin:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

/* =========================================================
   BODY PARSER
========================================================= */

app.use(express.json({ limit: "20kb" }));

/* =========================================================
   REQUIRED CONTACT FORM FIELDS
========================================================= */

const requiredFields = [
  "fullName",
  "email",
  "phone",
  "interestedService",
  "message",
];

/* =========================================================
   CLEAN INPUT
========================================================= */

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

/* =========================================================
   VALIDATE CONTACT FORM
========================================================= */

function validateSubmission(body) {
  const submission = Object.fromEntries(
    Object.entries(body || {}).map(([key, value]) => [
      key,
      clean(value),
    ])
  );

  const errors = {};

  requiredFields.forEach((field) => {
    if (!submission[field]) {
      errors[field] = `${field} is required`;
    }
  });

  // Email validation
  if (
    submission.email &&
    !/^\S+@\S+\.\S+$/.test(submission.email)
  ) {
    errors.email = "A valid email is required";
  }

  return {
    submission,
    errors,
  };
}

/* =========================================================
   SMTP TRANSPORTER
========================================================= */

function createTransporter() {
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    throw new Error(
      "SMTP_HOST, SMTP_USER and SMTP_PASS must be configured"
    );
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

function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  );
}

/* =========================================================
   HEALTH CHECK
========================================================= */

app.get("/api/health", (_request, response) => {
  response.status(200).json({
    ok: true,
    message: "Senela Solar API is running",
  });
});

/* =========================================================
   CONTACT FORM
========================================================= */

app.post("/api/contact", async (request, response) => {
  // Validate form
  const { submission, errors } =
    validateSubmission(request.body);

  // Return validation errors
  if (Object.keys(errors).length > 0) {
    return response.status(400).json({
      ok: false,
      message: "Please check the submitted fields.",
      errors,
    });
  }

  if (!isSmtpConfigured()) {
    return response.status(503).json({
      ok: false,
      message: "Contact email is not configured. Add SMTP settings to the server .env file.",
    });
  }

  try {
    /* -------------------------------------------------------
       Create SMTP transporter
    ------------------------------------------------------- */

    const transporter = createTransporter();

    /* -------------------------------------------------------
       Email subject
    ------------------------------------------------------- */

    const subject =
      `New enquiry from ${submission.fullName} - ` +
      `${submission.interestedService}`;

    /* -------------------------------------------------------
       Email content
    ------------------------------------------------------- */

    const text = [
      
      `Full Name: ${submission.fullName}`,
      `Company Name: ${
        submission.companyName || "N/A"
      }`,
      `Email: ${submission.email}`,
      `Phone: ${submission.phone}`,
      `Country: ${
        submission.country || "N/A"
      }`,
      `Interested Service: ${
        submission.interestedService
      }`,
      `Project Type: ${
        submission.projectType || "N/A"
      }`,
      `Estimated Capacity: ${
        submission.estimatedCapacity || "N/A"
      }`,
      "",
      "Message:",
      submission.message,
    ].join("\n");

    /* -------------------------------------------------------
       Send email
    ------------------------------------------------------- */

    await transporter.sendMail({
      from:
        process.env.MAIL_FROM ||
        process.env.SMTP_USER,

      to: CONTACT_TO,

      replyTo: submission.email,

      subject: subject,

      text: text,
    });

    /* -------------------------------------------------------
       Success response
    ------------------------------------------------------- */

    return response.status(202).json({
      ok: true,
      message: "Your enquiry has been sent successfully.",
    });

  } catch (error) {
    console.error("Contact email failed:", error);

    return response.status(500).json({
      ok: false,
      message: "Unable to send the enquiry right now.",
    });
  }
});

/* =========================================================
   START SERVER
========================================================= */

app.listen(PORT, () => {
  console.log(
    `Senela Solar API running on port ${PORT}`
  );

  console.log(
    `Health check: http://localhost:${PORT}/api/health`
  );

  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    console.warn(
      "WARNING: SMTP is not configured."
    );

    console.warn(
      "Please add SMTP_HOST, SMTP_USER and SMTP_PASS to .env"
    );
  }
});