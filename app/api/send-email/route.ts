import { NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    console.log("Form Data:", formData);

    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;

    const email = formData.get("email") as string;
    const fields = Object.fromEntries(formData.entries());

    const uploadedFile = formData.get("file-upload") as File | null;

    // Generate PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { height } = page.getSize()
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    let y = 280; // starting y position
    const labelX = 50;
    const valueX = 200; // second column start
    const lineHeight = 24; // space between lines
    const fontSize = 14

    page.drawText('Intake Form', {
    x: labelX,
    y: height - 4 * fontSize,
    size: 18,
    font: helveticaFont,
    color: rgb(0, 0.53, 0.71),
  })

   page.drawText(`Date: ${formattedDate}`, {
            x: 50,
            y: height - 6 * fontSize,
            font: helveticaFont,
            size: 9,
            color: rgb(0, 0, 0),
        });

  for (const [key, value] of Object.entries(fields)) {

     if (value instanceof File) continue;

      page.drawText(`${key}:`, {
    x: labelX,
    y,
    size: fontSize,
    font: helveticaFont,
  });

  page.drawText(String(value), {
    x: valueX,
    y,
    size: fontSize,
    font: helveticaFont,
  });
        y -= lineHeight;
        
    }

    const pdfBytes = await pdfDoc.save();

    // Setup email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    // Build attachments
    const attachments = [
      {
        filename: `intake-form-${firstname} ${lastname}.pdf`,
        content: Buffer.from(pdfBytes),
        contentType: "application/pdf",
      },
    ];

    if (uploadedFile) {
      const arrayBuffer = await uploadedFile.arrayBuffer();
      attachments.push({
        filename: uploadedFile.name,
        content: Buffer.from(arrayBuffer),
        contentType: uploadedFile.type,
      });
    }

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Intake Form Submission from ${firstname} ${lastname}`,
      text: `New Intake Form submission from ${firstname} ${lastname} (${email})`,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
