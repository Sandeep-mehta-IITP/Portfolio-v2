import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 🔍 Verify transporter (VERY IMPORTANT)
    await transporter.verify();

    const FROM_EMAIL = process.env.SENDER_EMAIL; 

    // Mail to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${FROM_EMAIL}>`,
      to: FROM_EMAIL,
      subject: `New Contact: ${subject || "No Subject"}`,
      html: `
  <div style="font-family: Inter, Arial, sans-serif; background:#f9fafb; padding:24px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb;">
      
      <div style="padding:20px 24px; background:linear-gradient(135deg,#6366f1,#4f46e5); color:#ffffff;">
        <h2 style="margin:0; font-size:20px;">📩 New Portfolio Contact</h2>
        <p style="margin:6px 0 0; font-size:14px; opacity:0.9;">
          Someone reached out through your portfolio
        </p>
      </div>

      <div style="padding:24px;">
        <div style="margin-bottom:16px;">
          <p style="margin:0; font-size:13px; color:#6b7280;">FROM</p>
          <p style="margin:4px 0 0; font-size:15px; font-weight:600;">${name}</p>
          <p style="margin:2px 0 0; font-size:14px; color:#2563eb;">${email}</p>
        </div>

        <div style="margin-bottom:16px;">
          <p style="margin:0; font-size:13px; color:#6b7280;">SUBJECT</p>
          <p style="margin:4px 0 0; font-size:15px;">${
            subject || "No Subject"
          }</p>
        </div>

        <div>
          <p style="margin:0 0 8px; font-size:13px; color:#6b7280;">MESSAGE</p>
          <div style="background:#f3f4f6; padding:16px; border-radius:8px; font-size:14px; line-height:1.6; color:#111827;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      </div>

      <div style="padding:16px 24px; background:#f9fafb; font-size:12px; color:#6b7280; text-align:center;">
        Sent from your portfolio contact form
      </div>
    </div>
  </div>
`,
    });

    // Auto-reply to USER (IMPORTANT: same FROM email)
    await transporter.sendMail({
      from: `"Sandeep Mehta" <${FROM_EMAIL}>`,
      to: email,
      subject: "Thanks for reaching out 👋",
      html: `
  <div style="font-family: Inter, Arial, sans-serif; background:#f9fafb; padding:24px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb;">

      <div style="padding:28px 24px; background:#111827; color:#ffffff;">
        <h2 style="margin:0; font-size:22px;">Thanks for reaching out 👋</h2>
        <p style="margin:8px 0 0; font-size:15px; color:#d1d5db;">
          I’m really glad you took the time to contact me.
        </p>
      </div>

      <div style="padding:24px; font-size:15px; line-height:1.7; color:#111827;">
        <p>Hi <strong>${name}</strong>,</p>

        <p>
          Thanks for getting in touch through my portfolio!  
          I’ve received your message and will personally review it.
        </p>

        <p>
          I usually respond within <strong>24–48 hours</strong>.  
          If your message is time-sensitive, feel free to reply to this email.
        </p>

        <p>
          Looking forward to connecting and exploring how we can work together.
        </p>

        <p style="margin-top:24px;">
          Best regards,<br/>
          <strong>Sandeep Mehta</strong><br/>
          <span style="color:#6b7280; font-size:14px;">
            Software Engineer · MERN Stack Developer
          </span>
        </p>
      </div>

      <div style="padding:16px 24px; background:#f9fafb; font-size:12px; color:#6b7280; text-align:center;">
        This is an automated confirmation. No need to reply unless necessary.
      </div>
    </div>
  </div>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
