const nodemailer = require("nodemailer");
const path = require("path");

const LOGO_PATH = path.resolve(__dirname, "../../backend/assets/logoBlack.png");
const LOGO_CID = "oni-logo";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hasEmailConfig() {
  return (
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.QUOTE_TO
  );
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: String(process.env.SMTP_SECURE) === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function buildInternalEmail({ name, email, phone, service, address, details }) {
  return {
    subject: `New Oni Aerial Quote Request - ${service}`,
    text: `
New quote request received

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Needed: ${service}
Property Address: ${address || "Not provided"}

Project Details:
${details}
    `.trim(),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>New Oni Aerial Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
        <p><strong>Property Address:</strong> ${address || "Not provided"}</p>
        <h3>Project Details</h3>
        <p>${String(details).replace(/\n/g, "<br />")}</p>
      </div>
    `,
  };
}

function buildCustomerEmail({ name, service }) {
  return {
    subject: "We received your quote request | Oni Aerial",
    text: `
Hi ${name},

Thanks for reaching out to Oni Aerial.

We received your quote request for: ${service}

Our team will review your project details and respond within 24 hours.

If your request is urgent, you can call us directly at 303-747-5637.

Regards,
Oni Aerial
FAA Part 107 Certified | Veteran-Owned Drone Services
    `.trim(),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>We received your quote request</h2>
        <p>Hi ${name},</p>
        <p>Thanks for reaching out to Oni Aerial.</p>
        <p><strong>Service requested:</strong> ${service}</p>
        <p>We’ll review your project details and respond within 24 hours.</p>
        <p>If your request is urgent, you can call us directly at <strong>303-747-5637</strong>.</p>
        <p style="margin-top: 24px;">
          Regards,<br />
          Oni Aerial
        </p>
        <img
          src="cid:${LOGO_CID}"
          alt="Oni Aerial logo"
          style="display:block; margin-top:12px; max-width:180px; height:auto;"
        />
      </div>
    `,
    attachments: [
      {
        filename: "logoBlack.png",
        path: LOGO_PATH,
        cid: LOGO_CID,
      },
    ],
  };
}

async function submitQuote(req, res) {
  try {
    const { name, email, phone, service, address, details } = req.body;

    if (!name || !email || !phone || !service || !details) {
      return res.status(400).json({
        success: false,
        message: "Please fill out all required fields.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!hasEmailConfig()) {
      return res.status(500).json({
        success: false,
        message: "Server email configuration is incomplete.",
      });
    }

    const transporter = createTransporter();

    const internalEmail = buildInternalEmail({
      name,
      email,
      phone,
      service,
      address,
      details,
    });

    await transporter.sendMail({
      from: process.env.QUOTE_FROM || process.env.SMTP_USER,
      to: process.env.QUOTE_TO,
      replyTo: email,
      subject: internalEmail.subject,
      text: internalEmail.text,
      html: internalEmail.html,
    });

    const customerEmail = buildCustomerEmail({ name, service });

    await transporter.sendMail({
      from: process.env.QUOTE_FROM || process.env.SMTP_USER,
      to: email,
      subject: customerEmail.subject,
      text: customerEmail.text,
      html: customerEmail.html,
      attachments: customerEmail.attachments,
    });

    return res.status(200).json({
      success: true,
      message: "Quote request sent successfully.",
    });
  } catch (error) {
    console.error("Quote submission error:");
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Response:", error.response);
    console.error("Full error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send quote request right now.",
    });
  }
}

module.exports = { submitQuote };