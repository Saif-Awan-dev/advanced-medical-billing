import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { firstName, lastName, email, company, phone, zipCode, message } = await req.json();

    // 🔥 Direct Resend API call
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Advanced Medical Billing <noreply@advancedmedicalbilling.org>", // Safe default sender
        to: process.env.CONTACT_RECEIVER,
        reply_to: email,
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
      }),
    });

    const data = await response.json();

    console.log("Resend API response:", data);

    if (!response.ok) {
      return NextResponse.json({ success: false, data }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
