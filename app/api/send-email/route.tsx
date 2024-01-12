import ContactEmail from "@/emails/ContactEmail";
import { NextRequest, NextResponse } from "next/server";
import contactSchema from "./schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = contactSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  await resend.emails.send({
    from: "no-reply@resend.dev",
    to: "sachinlakshan04@gmail.com",
    subject: "...",
    react: (
      <ContactEmail
        name={body.name}
        email={body.email}
        message={body.message}
        subject={body.subject}
      />
    ),
  });

  return NextResponse.json({ mesg: "success" }, { status: 201 });
}
