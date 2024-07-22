// app/api/sendMail/route.ts
import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await sendMail({
      to: "elanchezhian2712.m@gmail.com", // Replace with your email
      name,
      email,
      subject: "New Project Inquiry",
      body: message,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
