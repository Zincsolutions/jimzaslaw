import { Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';

// The success picture: what the reader's business looks like after.
const outcomes = [
  'Your team gets more done with the same headcount.',
  'Repeated work runs on a system, not on memory.',
  'Everything you publish looks and sounds like your brand.',
  'Buyers find you when they ask AI who to hire.',
  'What your team learns stays with the business.',
];

export function Success() {
  return (
    <section className="py-24 md:py-32 bg-bg-soft">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>What&apos;s possible</Eyebrow>
            <h2 className="mt-4 text-[clamp(28px,4vw,42px)] leading-[1.1] tracking-[-0.025em] font-semibold">
              The businesses that win with AI won&apos;t have the most tools.
            </h2>
            <p className="mt-4 text-[20px] md:text-[22px] tracking-[-0.015em] leading-[1.3] text-ink font-semibold">
              They&apos;ll have the smartest systems.
            </p>
          </div>
          <ul className="lg:col-span-7 flex flex-col divide-y divide-border border-y border-border">
            {outcomes.map((o) => (
              <li key={o} className="py-4 flex items-start gap-4">
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
