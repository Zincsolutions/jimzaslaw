'use client';

import { useEffect, useState, useTransition } from 'react';
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

const websiteHelpAreas = [
  'Website strategy or platform decision',
  'WordPress assessment or migration',
  'AI-native website or AI migration',
  'Website redesign and migration',
  'Governance for AI-made website changes',
];

const helpAreaOptions = [
  'Team AI tools and workflows',
  'Marketing or content production',
  'Sales follow-up',
  'Operations or automation',
  'Brand visuals and asset creation',
  'AI-driven search visibility',
  ...websiteHelpAreas,
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

const websitePlatforms = [
  'WordPress',
  'Webflow',
  'Shopify',
  'HubSpot CMS',
  'Squarespace or Wix',
  'Drupal',
  'Custom or headless',
  'Other',
  'Not sure',
];

const websitePaths = [
  'Improve current site',
  'Migrate current site',
  'Redesign and migrate',
  'Not sure',
];

const websiteIntegrationOptions = [
  'CRM',
  'Forms',
  'Commerce',
  'Membership',
  'Analytics',
  'Other',
];

const websiteTimings = [
  'Within 3 months',
  '3–6 months',
  '6–12 months',
  '12–18 months',
  'Not sure',
];

const helpTypes = [
  'A decision and roadmap',
  'Strategy plus execution',
  'A second opinion on an existing plan',
  'Ongoing advisory',
  'Not sure yet',
];

// ?interest=website preselects the website decision so links from the
// AI Website Transition Strategy page land with the right fields open.
const interestPrefill: Record<string, string> = {
  website: 'Website strategy or platform decision',
};

type Status =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success' }
  | { state: 'error'; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const [helpAreas, setHelpAreas] = useState<string[]>([]);
  const [helpAreasError, setHelpAreasError] = useState<string | null>(null);
  const [integrations, setIntegrations] = useState<string[]>([]);
  const [, startTransition] = useTransition();

  const websiteSelected = helpAreas.some((a) => websiteHelpAreas.includes(a));

  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get(
      'interest',
    );
    const area = interest ? interestPrefill[interest] : undefined;
    if (area) setHelpAreas((prev) => (prev.includes(area) ? prev : [...prev, area]));
  }, []);

  const toggleHelpArea = (area: string) => {
    setHelpAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area],
    );
    setHelpAreasError(null);
  };

  const toggleIntegration = (item: string) => {
    setIntegrations((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (helpAreas.length === 0) {
      setHelpAreasError('Please select at least one area.');
      document
        .getElementById('help-areas')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus({ state: 'submitting' });

    // Serialize for Netlify Forms: URL-encoded body, form-name in the payload.
    // Multi-selects are joined into single comma-separated strings so each
    // lands as one readable field in the email + Netlify dashboard.
    // The "bot-field" honeypot is included as-is; Netlify silently drops any
    // submission where it has a value.
    const formData = new FormData(form);
    const params = new URLSearchParams();
    params.set('form-name', 'ai-opportunity-assessment');
    formData.forEach((value, key) => {
      if (typeof value === 'string') params.set(key, value);
    });
    params.set('helpAreas', helpAreas.join(', '));
    if (websiteSelected && integrations.length > 0) {
      params.set('websiteIntegrations', integrations.join(', '));
    }

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      if (!res.ok) {
        throw new Error('Something went wrong. Try again.');
      }
      startTransition(() => {
        setStatus({ state: 'success' });
        form.reset();
        setHelpAreas([]);
        setIntegrations([]);
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
          Thank you. Your request has been received.
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
          I will review your information and reply within one business day. If
          the need is primarily execution, I may recommend a ZINC working
          session. If the decision comes first, we will begin with the
          assessment.
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
    <form
      name="ai-opportunity-assessment"
      onSubmit={onSubmit}
      className="flex flex-col gap-8"
      noValidate
    >
      {/* Netlify honeypot: submissions with any value here are silently dropped. */}
      <input
        type="text"
        name="bot-field"
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
            label={websiteSelected ? 'Current website URL' : 'Website'}
            name="website"
            type="url"
            autoComplete="url"
            placeholder="https://"
            required={websiteSelected}
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
        <legend className="eyebrow mb-2">AI and digital context</legend>
        <SelectField
          label="What is your current level of AI usage?"
          name="aiUsageLevel"
          options={aiUsageLevels}
          required
        />

        <div id="help-areas" className="flex flex-col gap-3 scroll-mt-28">
          <span className="text-[13px] font-medium text-ink-2">
            Where could AI or digital change help most?{' '}
            <span className="text-ink-3">
              (select all that apply)
              <span className="text-ink-3 ml-0.5">*</span>
            </span>
          </span>
          <PillGroup
            label="Where AI or digital change could help most"
            options={helpAreaOptions}
            selected={helpAreas}
            onToggle={toggleHelpArea}
            errorId={helpAreasError ? 'help-areas-error' : undefined}
          />
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

      {/* Website details, only when a website option is selected */}
      {websiteSelected ? (
        <fieldset className="flex flex-col gap-5 border border-border rounded-xl bg-bg-soft p-5 sm:p-6">
          <legend className="eyebrow px-2 -ml-2">About your website</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <SelectField
              label="Current platform, if known"
              name="websitePlatform"
              options={websitePlatforms}
            />
            <SelectField
              label="Preferred path"
              name="websitePath"
              options={websitePaths}
            />
          </div>
          <TextAreaField
            label="What is prompting the decision now?"
            name="websiteTrigger"
            rows={3}
            placeholder="Example: Publishing is slow, plugin updates keep breaking things, and we want the team to be able to make changes with AI safely."
          />
          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-medium text-ink-2">
              Important integrations{' '}
              <span className="text-ink-3">(select all that apply)</span>
            </span>
            <PillGroup
              label="Important website integrations"
              options={websiteIntegrationOptions}
              selected={integrations}
              onToggle={toggleIntegration}
            />
          </div>
          <SelectField
            label="Desired timing for the website"
            name="websiteTiming"
            options={websiteTimings}
          />
        </fieldset>
      ) : null}

      {/* What you'd like help with */}
      <fieldset className="flex flex-col gap-5">
        <legend className="eyebrow mb-2">What you’re looking for</legend>
        <SelectField
          label="What kind of help are you looking for?"
          name="helpType"
          options={helpTypes}
        />
        <TextAreaField
          label="Briefly describe what you would like help with"
          name="context"
          rows={5}
          required
          placeholder="Example: We are using ChatGPT and Canva a little, but we do not have a clear process. We need help figuring out which tools to use, how to organize prompts and workflows, and how AI could help our marketing team create more content."
        />
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

function PillGroup({
  label,
  options,
  selected,
  onToggle,
  errorId,
}: {
  label: string;
  options: readonly string[];
  selected: string[];
  onToggle: (option: string) => void;
  errorId?: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      aria-describedby={errorId}
      aria-invalid={errorId ? 'true' : undefined}
      className="flex flex-wrap gap-2"
    >
      {options.map((option) => {
        const active = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => onToggle(option)}
            aria-pressed={active}
            className={cn(
              'rounded-pill px-3.5 py-1.5 text-[13px] font-medium border transition-colors whitespace-nowrap',
              active
                ? 'bg-ink text-white border-ink'
                : 'bg-bg text-ink-2 border-border hover:border-border-strong',
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
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

function TextAreaField({
  label,
  name,
  rows,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  rows: number;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[13px] font-medium text-ink-2">
        {label}
        {required ? <span className="text-ink-3 ml-0.5">*</span> : null}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        className="rounded-md border border-border p-3.5 text-[15px] text-ink bg-bg focus:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 leading-relaxed"
        placeholder={placeholder}
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
