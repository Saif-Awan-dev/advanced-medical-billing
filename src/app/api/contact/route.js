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

// app/api/contact/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow all origins or specify your domain
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, phone, zipCode, message } = body;

    await resend.emails.send({
      from: 'Procure Solutions <noreply@procuresolutions.org>', // use a domain you verified
      to: process.env.CONTACT_RECEIVER, // your receiving email
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Zip Code:</b> ${zipCode}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins or specify your domain
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, message: err.message }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}


