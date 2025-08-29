// test-smtp.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "mail.procuresolutions.org",
  port: 587,
  secure: false,
  auth: {
    user: "info@procuresolutions.org",
    pass: "Motorola@123@@",
  },
  tls: { rejectUnauthorized: false },
});

transporter.verify((err, success) => {
  if (err) {
    console.error("❌ Connection failed:", err);
  } else {
    console.log("✅ Server is ready to send messages");
  }
});
