import { NextRequest, NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const { email, name, message } = await request.json();

  try {
    await sendgrid.send({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Message from ${name} (${email})`,
      text: message,
    });

    return NextResponse.json({ message: "Email sent!" }, { status: 200 });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { message: "Failed to send", error: err.message },
      { status: 500 }
    );
  }
}
