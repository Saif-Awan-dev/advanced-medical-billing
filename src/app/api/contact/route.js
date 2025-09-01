// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const transporter = nodemailer.createTransport({
//       host: "mail.procuresolutions.org", // or "smtp.secureserver.net" if Workspace
//       port: 587,
//       secure: false, 
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: { rejectUnauthorized: false },
//       logger: true,
//       debug: true,
//       pool: true,
//       maxConnections: 1,
//       maxMessages: 100,
//     });

//     await transporter.verify();
//     console.log("✅ SMTP connection established");

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       bcc: process.env.EMAIL_USER,
//       replyTo: body.email,
//       subject: "New Contact Form Submission",
//       text: `
//         Name: ${body.firstName} ${body.lastName}
//         Email: ${body.email}
//         Company: ${body.company}
//         Phone: ${body.phone}
//         Zip: ${body.zipCode}
//         Message: ${body.message}
//       `,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><b>Name:</b> ${body.firstName} ${body.lastName}</p>
//         <p><b>Email:</b> ${body.email}</p>
//         <p><b>Company:</b> ${body.company}</p>
//         <p><b>Phone:</b> ${body.phone}</p>
//         <p><b>Zip:</b> ${body.zipCode}</p>
//         <p><b>Message:</b> ${body.message}</p>
//       `,
//     });

//     return new Response(
//       JSON.stringify({ success: true, message: "Email sent successfully" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("❌ Email send error:", error.message, error);
//     return new Response(
//       JSON.stringify({ success: false, message: error.message }),
//       { status: 500 }
//     );
//   }
// }

// app/api/contact/route.js
import nodemailer from "nodemailer";

const allowedOrigins = [
  "https://procuresolutions.org",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

function getCorsHeaders(origin) {
  const allowedOrigin = allowedOrigins.includes(origin)
    ? origin
    : allowedOrigins[0]; // default to production domain

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Credentials": "true"
  };
}

export async function OPTIONS(req) {
  const origin = req.headers.get("origin") || "";
  return new Response(null,
    {
    status: 204,
    headers: getCorsHeaders(origin),
  });
}

export async function POST(req) {
  const origin = req.headers.get("origin") || "";

  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: "mail.procuresolutions.org",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.verify();
    console.log("✅ SMTP connection established");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      bcc: process.env.EMAIL_USER,
      replyTo: body.email,
      subject: "New Contact Form Submission",
      text: `
        Name: ${body.firstName} ${body.lastName}
        Email: ${body.email}
        Company: ${body.company}
        Phone: ${body.phone}
        Zip: ${body.zipCode}
        Message: ${body.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${body.firstName} ${body.lastName}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Company:</b> ${body.company}</p>
        <p><b>Phone:</b> ${body.phone}</p>
        <p><b>Zip:</b> ${body.zipCode}</p>
        <p><b>Message:</b> ${body.message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200, headers: getCorsHeaders(origin) }
    );
  } catch (error) {
    console.error("❌ Email send error:", error.message);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers: getCorsHeaders(origin) }
    );
  }
}
