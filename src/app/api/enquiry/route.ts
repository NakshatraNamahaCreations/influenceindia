import { NextResponse } from "next/server";

type Enquiry = {
  name: string;
  email: string;
  organisation?: string;
  phone: string;
  city: string;
  note?: string;
  topics?: string[];
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: Partial<Enquiry>): string | null {
  if (!data.name?.trim()) return "Please enter your name.";
  if (!data.email?.trim() || !EMAIL_RE.test(data.email)) return "Please enter a valid email address.";
  if (!data.phone?.trim()) return "Please enter a phone number.";
  if (!data.city?.trim()) return "Please enter your city.";
  return null;
}

export async function POST(request: Request) {
  let body: Partial<Enquiry>;

  try {
    body = (await request.json()) as Partial<Enquiry>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const error = validate(body);
  if (error) {
    return NextResponse.json({ ok: false, error }, { status: 422 });
  }

  // ---------------------------------------------------------------------
  // INTEGRATION POINT
  // The enquiry is validated and logged server-side. To deliver it, wire up
  // an email provider or CRM here — e.g. Resend, SendGrid, Zoho, or a
  // Google Sheet webhook — using an API key from the environment:
  //
  //   await resend.emails.send({
  //     from: "site@projectinfluenceindia.com",
  //     to: process.env.ENQUIRY_INBOX!,
  //     subject: `New enquiry — ${body.name}`,
  //     text: JSON.stringify(body, null, 2),
  //   });
  //
  // Until that is configured, submissions only appear in the server logs.
  // ---------------------------------------------------------------------
  console.info("[enquiry]", {
    ...body,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
