import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const stages = [
  {
    num: '01',
    title: 'AI Opportunity Snapshot',
    timebox: 'Free · 60–90 min',
    chip: 'Free',
    body: 'A focused diagnostic with the founder and one or two key team members. Where AI is being used, where the inefficiencies are, and which service would deliver the most value first.',
    bullets: [
      'A short written summary',
      '2–3 high-impact recommendations',
      'A clear next step',
    ],
  },
  {
    num: '02',
    title: 'Implementation',
    timebox: 'Fixed-scope, fixed-fee',
    body: 'Following the snapshot, the engagement moves into one or more services. Each service is a discrete, productized engagement with defined deliverables and a defined timeline.',
    bullets: [
      'One, two, or all three services',
      'Defined deliverables per service',
      'Defined timeline per service',
    ],
  },
  {
    num: '03',
    title: 'Retainer',
    timebox: 'Ongoing · monthly',
    body: 'AI moves fast enough that systems built in Stage 2 will be out of date within months without active maintenance. The retainer keeps the client current as the landscape evolves.',
    bullets: [
      'Tool / model upgrades',
      'New capability evaluation',
      'Systems updates as needed',
    ],
  },
];

export function EngagementStages() {
  return (
    <section id="engagement" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="How it works"
          title="Three stages. Each one stands on its own."
          lede="Designed to deliver value at each step without locking the client into a long-term commitment up front."
        />
        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {stages.map((s) => (
            <article
              key={s.num}
              className="bg-bg p-8 md:p-10 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-3">
                  Stage {s.num}
                </span>
                {s.chip ? (
                  <span className="chip chip-orange">{s.chip}</span>
                ) : null}
              </div>
              <h3 className="text-[24px] tracking-[-0.02em] font-semibold leading-[1.15]">
                {s.title}
              </h3>
              <p className="text-[13px] font-mono uppercase tracking-[0.06em] text-ink-3">
                {s.timebox}
              </p>
              <p className="text-[15px] leading-relaxed text-ink-2">
                {s.body}
              </p>
              <ul className="mt-2 flex flex-col gap-2 border-t border-border pt-5">
                {s.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[14px] text-ink-2"
                  >
                    <Check
                      className="size-4 mt-0.5 shrink-0 text-ink"
                      strokeWidth={2}
                      aria-hidden
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/contact" size="lg" withArrow>
            Start with a free Snapshot
          </Button>
        </div>
      </Container>
    </section>
  );
}
