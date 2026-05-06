import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

export const runtime = 'nodejs';

const ContactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(160),
  company: z.string().max(160).optional().or(z.literal('')),
  role: z.string().max(120).optional().or(z.literal('')),
  teamSize: z.string().max(40).optional().or(z.literal('')),
  context: z.string().max(4000).optional().or(z.literal('')),
  _hp: z.string().max(0).optional().or(z.literal('')),
});

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please check your inputs and try again.' },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'jim@jimzaslaw.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'site@jimzaslaw.com';

  // If RESEND_API_KEY isn't configured (preview / local), log and accept.
  if (!apiKey) {
    console.log('[contact] (no RESEND_API_KEY set) submission:', data);
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const subject = `New AI Assessment request — ${data.name}${
      data.company ? ` · ${data.company}` : ''
    }`;
    const html = `
      <h2>New AI Opportunity Assessment request</h2>
      <p><strong>Name:</strong> ${escape(data.name)}</p>
      <p><strong>Email:</strong> ${escape(data.email)}</p>
      ${data.company ? `<p><strong>Company:</strong> ${escape(data.company)}</p>` : ''}
      ${data.role ? `<p><strong>Role:</strong> ${escape(data.role)}</p>` : ''}
      ${data.teamSize ? `<p><strong>Team size:</strong> ${escape(data.teamSize)}</p>` : ''}
      ${data.context ? `<p><strong>Context:</strong></p><p>${escape(data.context).replace(/\n/g, '<br/>')}</p>` : ''}
    `;
    await resend.emails.send({
      from: `Jim Zaslaw Site <${from}>`,
      to,
      replyTo: data.email,
      subject,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] resend error', err);
    return NextResponse.json(
      { error: "Couldn't send right now. Please email jim@jimzaslaw.com." },
      { status: 500 },
    );
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
