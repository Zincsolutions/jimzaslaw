'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';

const teamSizes = ['Just me', '2–10', '11–50', '51–200', '200+'];

type Status =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success' }
  | { state: 'error'; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const [, startTransition] = useTransition();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ state: 'submitting' });

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    // Honeypot
    if (payload._hp) {
      setStatus({ state: 'success' });
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json?.error || 'Something went wrong. Try again.');
      }
      startTransition(() => {
        setStatus({ state: 'success' });
        (e.target as HTMLFormElement).reset();
      });
    } catch (err) {
      setStatus({
        state: 'error',
        message:
          err instanceof Error
            ? err.message
            : 'Something went wrong. Try again.',
      });
    }
  }

  if (status.state === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-border rounded-xl bg-bg-soft p-8"
      >
        <h3 className="text-[20px] font-semibold tracking-[-0.015em]">
          Got it — thanks.
        </h3>
        <p className="mt-2 text-[15px] text-ink-2">
          Jim will be in touch within one business day. If it&apos;s urgent,
          email{' '}
          <a className="underline underline-offset-4" href="mailto:jim@jimzaslaw.com">
            jim@jimzaslaw.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] top-[-9999px]"
        aria-hidden
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field
          label="Work email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Company" name="company" autoComplete="organization" />
        <Field label="Your role" name="role" autoComplete="organization-title" />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="teamSize"
          className="text-[13px] font-medium text-ink-2"
        >
          Team size
        </label>
        <select
          id="teamSize"
          name="teamSize"
          className="h-11 rounded-md border border-border px-3.5 text-[15px] text-ink bg-bg focus:border-ink"
        >
          <option value="">Select…</option>
          {teamSizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="context"
          className="text-[13px] font-medium text-ink-2"
        >
          What&apos;s the current AI usage at your company?
          <span className="text-ink-3 ml-1">(optional, but helpful)</span>
        </label>
        <textarea
          id="context"
          name="context"
          rows={5}
          className="rounded-md border border-border p-3.5 text-[15px] text-ink bg-bg focus:border-ink leading-relaxed"
          placeholder="A few sentences on who's using what, where it's stuck, and what would be most useful to talk through."
        />
      </div>

      {status.state === 'error' ? (
        <p
          role="alert"
          className="text-[14px] text-[color:var(--chip-blush-fg)] bg-[color:var(--chip-blush)] rounded-md px-3 py-2"
        >
          {status.message}
        </p>
      ) : null}

      <div className="flex items-center gap-4 pt-2">
        <Button
          type="submit"
          size="lg"
          withArrow
          disabled={status.state === 'submitting'}
        >
          {status.state === 'submitting' ? 'Sending…' : 'Send'}
        </Button>
        <p className="text-[13px] text-ink-3">
          Replies within one business day.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[13px] font-medium text-ink-2">
        {label}
        {required ? <span className="text-ink-3 ml-0.5">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="h-11 rounded-md border border-border px-3.5 text-[15px] text-ink bg-bg focus:border-ink"
      />
    </div>
  );
}
