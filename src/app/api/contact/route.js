import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: "mail.procuresolutions.org", // if GoDaddy Workspace → "smtp.secureserver.net"
      port: 587,
      secure: false, // use true if you switch to port 465
      auth: {
    user: "info@procuresolutions.org",
    pass: "Motorola@123@@",
      },
        tls: {
        rejectUnauthorized: false, // helps avoid some SSL issues on GoDaddy
    },
      logger: true,
  debug: true, // <-- this will print SMTP logs in your server console
    pool: true,          // 👈 reuse SMTP connection
  maxConnections: 1,   // 👈 only one at a time
  maxMessages: 100, 
    });

    // ✅ check connection before sending
    await transporter.verify();
    console.log("✅ SMTP connection established");

    await transporter.sendMail({
      from: "info@procuresolutions.org",
      to: "saifawan997@gmail.com",
      bcc: "info@procuresolutions.org",
      replyTo: body.email,
      subject: "New Contact Form Submission",
      text: `
        New contact form submission:

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
      { status: 200 }
      
    );
  } catch (error) {
  console.error("❌ Email send error:", error.message, error);
  return new Response(
    JSON.stringify({ success: false, message: error.message }),
    { status: 500 }
  );
}
}
