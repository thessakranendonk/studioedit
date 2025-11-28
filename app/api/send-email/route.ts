// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import { PDFDocument } from "pdf-lib";
// import formidable, { Files, Fields } from "formidable";

// export const config = {
//   api: {
//     bodyParser: false, // important: disable Next.js default body parser
//   },
// };

// const parseForm = (req: NextRequest): Promise<{ fields: Fields; files: Files }> => {
//   return new Promise((resolve, reject) => {
//     const form = formidable({ multiples: true });

//     // @ts-ignore: formidable expects Node.js IncomingMessage
//     form.parse(req, (err, fields, files) => {
//       if (err) reject(err);
//       else resolve({ fields, files }); // files is of type Files
//     });
//   });
// };

// export async function POST(req: NextRequest) {
//   try {
//    const { fields, files } = await parseForm(req);

//     console.log("Fields:", fields);
//     console.log("Files:", files);
    
//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage([600, 400]);
//     page.drawText(`Name: ${fields.name}`);
//     page.drawText(`Email: ${fields.email}`, { y: 380 });
//     page.drawText(`Project Details: ${fields.projectDetails}`, { y: 360 });
//     const pdfBytes = await pdfDoc.save();

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     await transporter.sendMail({
//         from: process.env.SMTP_USER,
//         to: "thessakranendonk@gmail.com",
//         subject: "New Intake Form Submission",
//         text: `You have a new intake form submission from ${fields.name} (${fields.email}).`,
//         attachments: [
//           {
//             filename: `intake-form-${fields.name}.pdf`, 
//             content: Buffer.from(pdfBytes),
//             contentType: "application/pdf",
//           },
//         ],
//       });

//       return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
//     }   
// }

import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";
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

    let y = 380; // starting y position
    const x = 50; // horizontal offset from the left
    const lineHeight = 24; // space between lines
    for (const [key, value] of Object.entries(fields)) {
     page.drawText(`${key}: ${value}`, { x,y });
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
