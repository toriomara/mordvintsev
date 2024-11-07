import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: "next@next.ru",
      to: "next@resend.com",
      subject: "Hello from the other side",
      html: "<h1>Hello from the NEXT.JS</h1>",
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
