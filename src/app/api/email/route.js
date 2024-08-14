import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, name, message } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Message from ${name} (${email})`,
      text: message,
    });

    return NextResponse.json({ message: "Email sent!" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to send", error: err.message },
      { status: 500 }
    );
  }
}
