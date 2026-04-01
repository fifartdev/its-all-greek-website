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
    const { allowed, retryAfterMs } = checkRateLimit(`transfer:${ip}`);
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
    const { date, time, from, to, passengers, luggages, message, _hp, _t } = body;

    // Honeypot check — bots fill hidden fields, humans don't
    if (_hp) {
      return NextResponse.json({ success: true }); // silently discard
    }

    // Timing check — reject submissions faster than 3 seconds
    if (typeof _t === "number" && Date.now() - _t < 3000) {
      return NextResponse.json({ success: true }); // silently discard
    }

    if (!date || !time || !from || !to || !passengers || luggages === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Transfer Request</title>
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
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#eaf4fb;">New Transfer Request</h1>
              <p style="margin:6px 0 0;font-size:13px;color:#7aabca;">Received via itsallgreek2me.tours</p>
            </td>
          </tr>

          <!-- Journey summary banner -->
          <tr>
            <td style="padding:20px 40px;background:#0c3966;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align:center;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#7aabca;">Journey</p>
                    <p style="margin:0;font-size:18px;font-weight:700;color:#eaf4fb;">${from}</p>
                    <p style="margin:6px 0;font-size:20px;color:#7bc5ea;">→</p>
                    <p style="margin:0;font-size:18px;font-weight:700;color:#eaf4fb;">${to}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Details grid -->
          <tr>
            <td style="padding:28px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td colspan="2" style="padding-bottom:16px;border-bottom:1px solid #1a4a7a;">
                    <p style="margin:0 0 2px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#7aabca;">Date &amp; Time</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#eaf4fb;">${formattedDate} at ${time}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:16px 16px 16px 0;border-bottom:1px solid #1a4a7a;width:50%;vertical-align:top;">
                    <p style="margin:0 0 2px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#7aabca;">Passengers</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#eaf4fb;">${passengers} ${Number(passengers) === 1 ? "person" : "people"}</p>
                  </td>
                  <td style="padding:16px 0 16px 16px;border-bottom:1px solid #1a4a7a;vertical-align:top;">
                    <p style="margin:0 0 2px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#7aabca;">Luggages</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#eaf4fb;">${luggages} ${Number(luggages) === 1 ? "bag" : "bags"}</p>
                  </td>
                </tr>

                ${
                  message
                    ? `<tr>
                  <td colspan="2" style="padding-top:16px;">
                    <p style="margin:0 0 6px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#7aabca;">Special Requests</p>
                    <p style="margin:0;font-size:14px;color:#a0c4dc;line-height:1.6;background:#0c3060;padding:12px 16px;border-radius:8px;border-left:3px solid #7bc5ea;">${message}</p>
                  </td>
                </tr>`
                    : ""
                }

              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 40px 32px;">
              <p style="margin:0 0 16px;font-size:13px;color:#7aabca;">Please respond to this request as soon as possible. The customer expects a reply within 1 hour.</p>
              <a href="mailto:${process.env.RESEND_CONTACT_TO}" style="display:inline-block;padding:12px 28px;background:#7bc5ea;color:#071e38;font-size:13px;font-weight:700;border-radius:6px;text-decoration:none;letter-spacing:0.05em;">Reply to Customer</a>
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
      to: [process.env.RESEND_TRANSFER_TO!],
      subject: `🚘 Transfer Request — ${formattedDate} · ${from} → ${to}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Transfer API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
