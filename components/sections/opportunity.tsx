import { Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';

const outcomes = [
  'Marketing teams ship two to three times the content with the same headcount.',
  'Sales and ops teams reclaim hours per week on work AI does faster and better.',
  'The brand shows up consistently in AI-driven discovery — where buyers increasingly start.',
  'Visual content production becomes a system, not a fire drill.',
  'Leadership has a clear answer to "what’s our AI strategy?" — backed by tools the team is actually using.',
];

export function Opportunity() {
  return (
    <section className="py-24 md:py-32 bg-bg-soft">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>The opportunity</Eyebrow>
            <h2 className="mt-4 text-[clamp(28px,4vw,42px)] leading-[1.1] tracking-[-0.025em] font-semibold">
              Companies that move from ad hoc usage to a structured system get
              defensible gains.
            </h2>
            <p className="mt-6 text-[18px] text-ink-2 leading-relaxed">
              The gap between experimentation and structured implementation is
              where this consulting practice operates.
            </p>
          </div>
          <ul className="lg:col-span-7 flex flex-col divide-y divide-border border-y border-border">
            {outcomes.map((o, i) => (
              <li key={i} className="py-5 flex items-start gap-4">
                <span
                  className="shrink-0 w-7 h-7 rounded-full chip-orange inline-flex items-center justify-center mt-0.5"
                  aria-hidden
                >
                  <Check className="size-4" strokeWidth={2} />
                </span>
                <p className="text-[17px] leading-relaxed text-ink">{o}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
