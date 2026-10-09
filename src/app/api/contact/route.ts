import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, message } = body as Partial<ContactPayload>;

  // Server-side validation
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return NextResponse.json({ message: 'Name is required.' }, { status: 422 });
  }
  if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
    return NextResponse.json({ message: 'A valid email address is required.' }, { status: 422 });
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return NextResponse.json(
      { message: 'Message must be at least 10 characters.' },
      { status: 422 },
    );
  }

  // ─── Demonstration mode ───────────────────────────────────────────────────
  // No email service or database is configured in this demonstration build.
  // To connect a real email provider (e.g. Resend, SendGrid, Nodemailer),
  // add the relevant SDK and credentials via environment variables and replace
  // the block below with the actual send logic.
  //
  // Example with Resend:
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({ from: '...', to: '...', subject: '...', html: '...' });
  // ──────────────────────────────────────────────────────────────────────────

  console.log('[Contact form — demo mode]', {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  });

  return NextResponse.json(
    {
      message:
        'Thank you for reaching out! This form is running in demonstration mode — ' +
        'your message has been logged but no email has been sent. ' +
        "We'll be in touch once a real email service is connected.",
    },
    { status: 200 },
  );
}
