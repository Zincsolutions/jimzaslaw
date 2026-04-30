import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';
import { CTABand } from '@/components/sections/cta-band';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How engagements work',
  description:
    'Three stages — Snapshot, Implementation, Retainer. Each one stands on its own. Designed to deliver value at every step.',
};

const stages = [
  {
    num: '01',
    chip: 'Free',
    title: 'AI Opportunity Snapshot',
    timebox: '60–90 minute working session',
    body: 'A focused diagnostic with the founder and one or two key team members. The session covers how AI is currently being used, where the inefficiencies are, and which of the three services would deliver the most value first.',
    bullets: [
      'A short written summary',
      'Two to three high-impact recommendations',
      'A clear next step',
      'No commitment beyond the session',
    ],
  },
  {
    num: '02',
    title: 'Implementation',
    timebox: 'Fixed-scope, fixed-fee',
    body: 'Following the Snapshot, the engagement moves into one or more of the three services. Each service is a discrete, productized engagement with defined deliverables and a defined timeline.',
    bullets: [
      'Clients can engage one service, two, or all three',
      'Each service has its own timeline and fee',
      'Productized — not custom consulting hours',
      'This is where the structured systems get built',
    ],
  },
  {
    num: '03',
    title: 'Retainer',
    timebox: 'Ongoing · monthly',
    body: 'AI moves fast enough that the systems built in Stage 2 will be out of date within months without active maintenance. The retainer keeps the client current on tool changes, model upgrades, new capabilities, and emerging best practices.',
    bullets: [
      'Tool and model upgrades evaluated and applied',
      'New capabilities pressure-tested before adoption',
      'Systems updated as the landscape shifts',
      'Most consultants stop at Stage 2 — this is where long-term value compounds',
    ],
  },
];

const faqs = [
  {
    q: 'Do I have to engage all three services?',
    a: 'No. The Snapshot identifies which services matter most for your business. Many engagements start with one. Some companies do all three over time.',
  },
  {
    q: 'How long does a service engagement take?',
    a: 'Most services run between 6 and 10 weeks of active build, depending on team size and existing systems. Timelines are defined up front before you commit.',
  },
  {
    q: 'Who does the work — Jim, or a team?',
    a: 'Jim leads every engagement directly. When execution scope expands beyond consulting (a website rebuild, a brand refresh, technical integration), that work runs through ZINC with Jim still leading.',
  },
  {
    q: 'How is this different from hiring an AI consultant?',
    a: 'Most AI consultants today have eighteen months of experience. Jim has spent twenty years building digital systems for actual businesses. AI is the next layer on a stack he has been building since the early 2000s.',
  },
  {
    q: 'Do you sign NDAs and work with sensitive data?',
    a: 'Yes. Standard practice. Engagements regularly involve confidential strategy, customer data, and internal workflows.',
  },
  {
    q: 'What does the retainer cost?',
    a: 'Retainer pricing depends on scope and team size. Discussed after Stage 2 deliverables are scoped.',
  },
];

export default function EngagementPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>How it works</Eyebrow>
            <h1 className="mt-4 text-[clamp(40px,6vw,64px)] tracking-[-0.03em] leading-[1.05] font-semibold">
              Three stages. Each one stands on its own.
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.6] text-ink-2">
              Designed to deliver value at each step without locking you into a
              long-term commitment up front.
            </p>
            <div className="mt-8 flex gap-3">
              <Button href="/contact" size="lg" withArrow>
                Start with a free Snapshot
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {stages.map((s, i) => (
        <section
          key={s.num}
          className={`py-20 md:py-28 border-t border-border ${
            i % 2 === 1 ? 'bg-bg-soft' : ''
          }`}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <p className="font-mono text-[13px] uppercase tracking-[0.08em] text-ink-3">
                  Stage {s.num}
                </p>
                <h2 className="mt-3 text-[clamp(28px,4vw,42px)] tracking-[-0.025em] leading-[1.1] font-semibold">
                  {s.title}
                </h2>
                <p className="mt-3 text-[14px] font-mono uppercase tracking-[0.06em] text-ink-3">
                  {s.timebox}
                </p>
                {s.chip ? (
                  <span className="chip chip-orange mt-4 self-start inline-flex">
                    {s.chip}
                  </span>
                ) : null}
              </div>
              <div className="lg:col-span-8">
                <p className="text-[18px] leading-[1.6] text-ink-2">{s.body}</p>
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {s.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-3 border border-border rounded-md bg-bg p-4"
                    >
                      <Check
                        className="size-4 mt-0.5 shrink-0 text-ink"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <p className="text-[15px] leading-relaxed text-ink">
                        {b}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="py-24 md:py-32 border-t border-border">
        <Container>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold max-w-2xl">
            Common questions before the first conversation.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border-b border-border py-5"
              >
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                  <h3 className="text-[17px] font-medium text-ink">{f.q}</h3>
                  <span
                    aria-hidden
                    className="size-7 rounded-full border border-border-strong inline-flex items-center justify-center text-ink-3 group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
