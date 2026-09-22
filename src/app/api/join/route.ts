import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";
    const source =
      typeof body?.source === "string" ? body.source : "join";

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "A valid email is required" },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const notifyTo =
      process.env.JOIN_NOTIFY_EMAIL || gmailUser || "";

    if (!gmailUser || !gmailPass) {
      return NextResponse.json(
        {
          error:
            "Email notify is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.",
        },
        { status: 503 }
      );
    }

    if (!notifyTo) {
      return NextResponse.json(
        { error: "JOIN_NOTIFY_EMAIL (or GMAIL_USER) is not set." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    const subject =
      source === "contact"
        ? `[No Face Patriot] Contact from ${name || email}`
        : `[No Face Patriot] New join: ${email}`;

    const text = [
      `Source: ${source}`,
      `Email: ${email}`,
      name ? `Name: ${name}` : null,
      message ? `Message:\n${message}` : null,
      `Time: ${new Date().toISOString()}`,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from: gmailUser,
      to: notifyTo,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({
      ok: true,
      message:
        source === "contact"
          ? "Message sent. We'll be in touch."
          : "You're on the list. Welcome.",
    });
  } catch (err) {
    console.error("join/notify error", err);
    return NextResponse.json(
      { error: "Failed to send notification email" },
      { status: 500 }
    );
  }
}
