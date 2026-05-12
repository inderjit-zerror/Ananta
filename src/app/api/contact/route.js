import nodemailer from "nodemailer";


export async function POST(req) {
  try {
    const body = await req.json();

    const {
      firstName,
      email,
      city,
      phone,
      mode,
      message,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    // 📩 HTML EMAIL TEMPLATE
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background:#f8f8f8;">
        
        <div style="max-width:600px; margin:auto; background:white; padding:30px; border-radius:10px;">
          
          <h2 style="color:#9c6b25; margin-bottom:20px;">
            New Contact Form Submission
          </h2>

          <table style="border-collapse: collapse; width: 100%;">

            <tr>
              <td style="border:1px solid #ddd; padding:12px;">
                <strong>First Name</strong>
              </td>

              <td style="border:1px solid #ddd; padding:12px;">
                ${firstName || "-"}
              </td>
            </tr>

            <tr>
              <td style="border:1px solid #ddd; padding:12px;">
                <strong>Email</strong>
              </td>

              <td style="border:1px solid #ddd; padding:12px;">
                ${email || "-"}
              </td>
            </tr>

            <tr>
              <td style="border:1px solid #ddd; padding:12px;">
                <strong>City / Country</strong>
              </td>

              <td style="border:1px solid #ddd; padding:12px;">
                ${city || "-"}
              </td>
            </tr>

            <tr>
              <td style="border:1px solid #ddd; padding:12px;">
                <strong>Phone Number</strong>
              </td>

              <td style="border:1px solid #ddd; padding:12px;">
                ${phone || "-"}
              </td>
            </tr>

            <tr>
              <td style="border:1px solid #ddd; padding:12px;">
                <strong>Preferred Mode</strong>
              </td>

              <td style="border:1px solid #ddd; padding:12px;">
                ${mode || "-"}
              </td>
            </tr>

            <tr>
              <td style="border:1px solid #ddd; padding:12px;">
                <strong>Message</strong>
              </td>

              <td style="border:1px solid #ddd; padding:12px;">
                ${message || "-"}
              </td>
            </tr>

          </table>

        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Ananta Website" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      subject: "New Contact Form Submission",
      html: htmlTemplate,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.log(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}