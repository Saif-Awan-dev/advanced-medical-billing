import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = [
  "https://procuresolutions.org",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

function cors(origin) {
  const allowed = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(req) {
  const origin = req.headers.get("origin") || "";
  return new Response(null, { status: 200, headers: cors(origin) });
}

export async function POST(req) {
  const origin = req.headers.get("origin") || "";

  try {
    const body = await req.json();
    const { firstName, lastName, email, company, phone, zipCode, message } = body;

    // ✅ Use Resend default domain until your domain is verified
    const fromAddress = "Procure Solutions <noreply@procuresolutions.org>";

    // ✅ Send using Resend API (no SMTP)
    const emailResult = await resend.emails.send({
      from: fromAddress,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${firstName ?? ""} ${lastName ?? ""}</p>
        <p><b>Email:</b> ${email ?? ""}</p>
        <p><b>Company:</b> ${company ?? ""}</p>
        <p><b>Phone:</b> ${phone ?? ""}</p>
        <p><b>Zip Code:</b> ${zipCode ?? ""}</p>
        <p><b>Message:</b> ${message ?? ""}</p>
      `,
    });

    // Log to verify API call succeeded
    console.log("Resend response:", emailResult);

    return NextResponse.json(
      { success: true },
      { status: 200, headers: cors(origin) }
    );
  } catch (err) {
    console.error("Full Resend error:", JSON.stringify(err, null, 2));
    return NextResponse.json(
      { success: false, message: err?.message || "Email failed" },
      { status: 500, headers: cors(origin) }
    );
  }
}





