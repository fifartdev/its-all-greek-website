import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Rate limiting by IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";
    const { allowed, retryAfterMs } = checkRateLimit(`contact:${ip}`);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil(retryAfterMs / 1000)) },
        }
      );
    }

    const body = await request.json();
    const { name, email, phone, subject, message, _hp, _t } = body;

    // Honeypot check — bots fill hidden fields, humans don't
    if (_hp) {
      return NextResponse.json({ success: true }); // silently discard
    }

    // Timing check — reject submissions faster than 3 seconds
    if (typeof _t === "number" && Date.now() - _t < 3000) {
      return NextResponse.json({ success: true }); // silently discard
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#071e38;border-radius:12px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 40px 24px;border-bottom:1px solid #1a4a7a;">
              <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#7bc5ea;">It's All Greek To Me</p>
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#eaf4fb;">New Contact Message</h1>
              <p style="margin:6px 0 0;font-size:13px;color:#7aabca;">Received via itsallgreek2me.tours</p>
            </td>
          </tr>

          <!-- Subject banner -->
          <tr>
            <td style="padding:16px 40px;background:#0c3966;">
              <p style="margin:0 0 2px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#7aabca;">Subject</p>
              <p style="margin:0;font-size:16px;font-weight:700;color:#7bc5ea;">${subject}</p>
            </td>
          </tr>

          <!-- Sender details -->
          <tr>
            <td style="padding:28px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding-bottom:16px;border-bottom:1px solid #1a4a7a;width:50%;vertical-align:top;padding-right:16px;">
                    <p style="margin:0 0 2px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#7aabca;">Name</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#eaf4fb;">${name}</p>
                  </td>
                  <td style="padding-bottom:16px;border-bottom:1px solid #1a4a7a;vertical-align:top;padding-left:16px;">
                    <p style="margin:0 0 2px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#7aabca;">Email</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#eaf4fb;">
                      <a href="mailto:${email}" style="color:#7bc5ea;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>

                ${
                  phone
                    ? `<tr>
                  <td colspan="2" style="padding:16px 0;border-bottom:1px solid #1a4a7a;">
                    <p style="margin:0 0 2px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#7aabca;">Phone</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#eaf4fb;">
                      <a href="tel:${phone}" style="color:#7bc5ea;text-decoration:none;">${phone}</a>
                    </p>
                  </td>
                </tr>`
                    : ""
                }

              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:20px 40px 32px;">
              <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#7aabca;">Message</p>
              <div style="background:#0c3060;border-radius:8px;padding:16px 20px;border-left:3px solid #7bc5ea;">
                <p style="margin:0;font-size:14px;color:#a0c4dc;line-height:1.7;white-space:pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="padding:0 40px 32px;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;padding:12px 28px;background:#7bc5ea;color:#071e38;font-size:13px;font-weight:700;border-radius:6px;text-decoration:none;letter-spacing:0.05em;">Reply to ${name}</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 40px;background:#061525;border-top:1px solid #133d6b;">
              <p style="margin:0;font-size:11px;color:#4a7896;text-align:center;">It's All Greek To Me — by XIKE Travel · itsallgreek2me.tours</p>
              <p style="margin:4px 0 0;font-size:10px;color:#4a7896;text-align:center;">GNTO REG. No 0206E60000614201 | Reg. No 143755201000</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.RESEND_CONTACT_TO!],
      replyTo: email,
      subject: `✉️ ${subject} — Message from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
