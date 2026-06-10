'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';

const businessTypes = [
  'Small business',
  'Mid-sized business',
  'Founder-led company',
  'Marketing team',
  'Ecommerce business',
  'Professional services firm',
  'Other',
];

const aiHelpAreas = [
  'Marketing content',
  'Website content',
  'Sales follow-up',
  'Internal workflows',
  'Team productivity',
  'Brand visuals / image generation',
  'AI search visibility',
  'Tool selection and setup',
  'Operations / automation',
  'Not sure yet',
];

const aiUsageLevels = [
  'We are barely using AI',
  'A few people are experimenting',
  'Several team members use AI regularly',
  'We use AI often, but without much structure',
  'We have tools in place but need better workflows',
  'Not sure',
];

const companySizes = [
  '1–5 employees',
  '6–20 employees',
  '21–50 employees',
  '51–100 employees',
  '100+ employees',
];

const timelines = [
  'Immediately',
  'Within 30 days',
  '1–3 months',
  'Just exploring',
];

type Status =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success' }
  | { state: 'error'; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const [helpAreas, setHelpAreas] = useState<string[]>([]);
  const [helpAreasError, setHelpAreasError] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  const toggleHelpArea = (area: string) => {
    setHelpAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area],
    );
    setHelpAreasError(null);
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (helpAreas.length === 0) {
      setHelpAreasError('Please select at least one area.');
      return;
    }

    setStatus({ state: 'submitting' });

    const formData = new FormData(e.currentTarget);
    const payload: Record<string, string | string[]> = {};
    formData.forEach((value, key) => {
      if (typeof value === 'string') payload[key] = value;
    });
    payload.helpAreas = helpAreas;

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
        setHelpAreas([]);
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
        <h3 className="text-[22px] font-semibold tracking-[-0.015em]">
          Thank you — your request has been received.
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
          Jim will review your information and follow up directly to schedule
          a time for your AI Opportunity Assessment.
        </p>
        <p className="mt-3 text-[14px] text-ink-3">
          If it&apos;s urgent, email{' '}
          <a
            className="underline underline-offset-4"
            href="mailto:jim@jimzaslaw.com"
          >
            jim@jimzaslaw.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] top-[-9999px]"
        aria-hidden
      />

      {/* About you */}
      <fieldset className="flex flex-col gap-5">
        <legend className="eyebrow mb-2">About you</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field
            label="First name"
            name="firstName"
            autoComplete="given-name"
            required
          />
          <Field
            label="Last name"
            name="lastName"
            autoComplete="family-name"
            required
          />
        </div>
        <Field
          label="Work email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field
            label="Role / Title"
            name="role"
            autoComplete="organization-title"
          />
          <Field
            label="Website"
            name="website"
            type="url"
            autoComplete="url"
            placeholder="https://"
          />
        </div>
      </fieldset>

      {/* About the business */}
      <fieldset className="flex flex-col gap-5">
        <legend className="eyebrow mb-2">About the business</legend>
        <Field
          label="Company name"
          name="company"
          autoComplete="organization"
          required
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <SelectField
            label="What best describes your business?"
            name="businessType"
            options={businessTypes}
            required
          />
          <SelectField
            label="Approximate company size"
            name="companySize"
            options={companySizes}
          />
        </div>
      </fieldset>

      {/* AI context */}
      <fieldset className="flex flex-col gap-5">
        <legend className="eyebrow mb-2">AI context</legend>
        <SelectField
          label="What is your current level of AI usage?"
          name="aiUsageLevel"
          options={aiUsageLevels}
          required
        />

        <div className="flex flex-col gap-3">
          <span className="text-[13px] font-medium text-ink-2">
            Where do you think AI could help most?{' '}
            <span className="text-ink-3">
              (select all that apply)
              <span className="text-ink-3 ml-0.5">*</span>
            </span>
          </span>
          <div
            role="group"
            aria-label="Where AI could help most"
            aria-describedby={helpAreasError ? 'help-areas-error' : undefined}
            aria-invalid={helpAreasError ? 'true' : undefined}
            className="flex flex-wrap gap-2"
          >
            {aiHelpAreas.map((area) => {
              const active = helpAreas.includes(area);
              return (
                <button
                  key={area}
                  type="button"
                  onClick={() => toggleHelpArea(area)}
                  aria-pressed={active}
                  className={cn(
                    'rounded-pill px-3.5 py-1.5 text-[13px] font-medium border transition-colors whitespace-nowrap',
                    active
                      ? 'bg-ink text-white border-ink'
                      : 'bg-bg text-ink-2 border-border hover:border-border-strong',
                  )}
                >
                  {area}
                </button>
              );
            })}
          </div>
          {helpAreasError ? (
            <p
              id="help-areas-error"
              role="alert"
              className="text-[13px] text-[color:var(--chip-blush-fg)]"
            >
              {helpAreasError}
            </p>
          ) : null}
        </div>
      </fieldset>

      {/* What you'd like help with */}
      <fieldset className="flex flex-col gap-5">
        <legend className="eyebrow mb-2">What you’re looking for</legend>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="context"
            className="text-[13px] font-medium text-ink-2"
          >
            Briefly describe what you would like help with
            <span className="text-ink-3 ml-0.5">*</span>
          </label>
          <textarea
            id="context"
            name="context"
            rows={5}
            required
            className="rounded-md border border-border p-3.5 text-[15px] text-ink bg-bg focus:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 leading-relaxed"
            placeholder="Example: We are using ChatGPT and Canva a little, but we do not have a clear process. We need help figuring out which tools to use, how to organize prompts and workflows, and how AI could help our marketing team create more content."
          />
        </div>
        <SelectField
          label="How soon are you looking to get started?"
          name="timeline"
          options={timelines}
        />
      </fieldset>

      {status.state === 'error' ? (
        <p
          role="alert"
          className="text-[14px] text-[color:var(--chip-blush-fg)] bg-[color:var(--chip-blush)] rounded-md px-3 py-2"
        >
          {status.message}
        </p>
      ) : null}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <Button
          type="submit"
          size="lg"
          withArrow
          disabled={status.state === 'submitting'}
        >
          {status.state === 'submitting'
            ? 'Sending…'
            : 'Submit Assessment Request'}
        </Button>
        <p className="text-[13px] text-ink-3">
          Replies typically come within one business day.
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
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
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
        placeholder={placeholder}
        className="h-11 rounded-md border border-border px-3.5 text-[15px] text-ink bg-bg focus:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[13px] font-medium text-ink-2">
        {label}
        {required ? <span className="text-ink-3 ml-0.5">*</span> : null}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="h-11 rounded-md border border-border px-3.5 text-[15px] text-ink bg-bg focus:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
