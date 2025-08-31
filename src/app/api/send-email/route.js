import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from 'nodemailer'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, company, phone, zipCode, message } = body;

    // send email
    await resend.emails.send({
      from: "info@procuresolutions.org", // must be a verified domain in Resend
      to: "saifawan997@gmail.com",  // your recipient email
      bcc: "info@procuresolutions.org",
      reply_to: email,             // user's email
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Zip:</b> ${zipCode}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
