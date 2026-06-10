import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

export const runtime = 'nodejs';

const optionalString = z.string().max(500).optional().or(z.literal(''));

const ContactSchema = z.object({
  // Required
  firstName: z.string().min(1).max(120),
  lastName: z.string().min(1).max(120),
  email: z.string().email().max(160),
  company: z.string().min(1).max(160),
  businessType: z.string().min(1).max(80),
  aiUsageLevel: z.string().min(1).max(120),
  helpAreas: z.array(z.string().max(120)).min(1).max(20),
  context: z.string().min(1).max(4000),

  // Optional
  role: optionalString,
  website: optionalString,
  companySize: optionalString,
  timeline: optionalString,

  // Honeypot
  _hp: z.string().max(0).optional().or(z.literal('')),
});

type ContactPayload = z.infer<typeof ContactSchema>;

// Simple in-memory rate limit: 5 submissions per IP per 10 minutes.
// Per-instance state — a fresh serverless instance starts a fresh window,
// so this is a throttle on bursts, not a hard global guarantee. Good
// enough to keep a script from flooding the inbox and the Resend bill.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const rateHits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (rateHits.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS,
  );
  if (recent.length >= RATE_MAX) {
    rateHits.set(ip, recent);
    return true;
  }
  recent.push(now);
  if (rateHits.size > 5000) rateHits.clear();
  rateHits.set(ip, recent);
  return false;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a few minutes.' },
      { status: 429 },
    );
  }

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
    const subject = 'New AI Opportunity Assessment Request';
    const html = renderEmail(data);
    await resend.emails.send({
      from: `Jim Zaslaw Site <${from}>`,
      to,
      replyTo: data.email.replace(/[\r\n]/g, ''),
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

function renderEmail(data: ContactPayload) {
  const row = (label: string, value: string | undefined | null) =>
    value
      ? `<tr><td style="padding:6px 12px 6px 0;color:#6B6566;vertical-align:top;white-space:nowrap;font-size:13px;">${escape(label)}</td><td style="padding:6px 0;color:#231F20;font-size:14px;">${escape(value)}</td></tr>`
      : '';

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#231F20;">
      <h2 style="font-size:20px;margin:0 0 16px;font-weight:600;">New AI Opportunity Assessment Request</h2>

      <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#6B6566;margin:24px 0 8px;font-weight:600;">Contact</h3>
      <table style="border-collapse:collapse;width:100%;">
        ${row('Name', `${data.firstName} ${data.lastName}`)}
        ${row('Email', data.email)}
        ${row('Company', data.company)}
        ${row('Role / Title', data.role || '')}
        ${row('Website', data.website || '')}
      </table>

      <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#6B6566;margin:24px 0 8px;font-weight:600;">Business</h3>
      <table style="border-collapse:collapse;width:100%;">
        ${row('Business type', data.businessType)}
        ${row('Company size', data.companySize || '')}
        ${row('Current AI usage', data.aiUsageLevel)}
        ${row('Timeline', data.timeline || '')}
      </table>

      <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#6B6566;margin:24px 0 8px;font-weight:600;">Where AI could help most</h3>
      <ul style="margin:0 0 16px;padding-left:20px;color:#231F20;font-size:14px;line-height:1.5;">
        ${data.helpAreas.map((a) => `<li>${escape(a)}</li>`).join('')}
      </ul>

      <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#6B6566;margin:24px 0 8px;font-weight:600;">What they want help with</h3>
      <p style="margin:0;color:#231F20;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escape(data.context).replace(/\n/g, '<br/>')}</p>
    </div>
  `;
}

function escape(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
