import { Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';

const youReceive = [
  'A short written summary',
  '2–3 high-impact recommendations',
  'A suggested first project',
  'No commitment',
];

export function FreeAssessment() {
  return (
    <section id="assessment" className="py-24 md:py-32 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>Free Assessment</Eyebrow>
            <h2 className="mt-4 text-[clamp(28px,4vw,44px)] tracking-[-0.025em] leading-[1.08] font-semibold">
              Start with a Free AI Opportunity Assessment.
            </h2>
            <p className="mt-6 text-[18px] md:text-[19px] leading-[1.6] text-ink-2 max-w-2xl">
              In one focused working session, Jim will help identify where AI
              can create the most immediate value in your business.
            </p>
            <p className="mt-4 text-[18px] md:text-[19px] leading-[1.6] text-ink-2 max-w-2xl">
              This is not a generic AI demo. It&apos;s a practical review of
              your workflows, marketing, content, tools, brand assets, and
              business opportunities.
            </p>
            <div className="mt-8 flex">
              <Button href="/contact" size="lg" withArrow>
                Request Your Free AI Opportunity Assessment
              </Button>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="border border-border rounded-xl bg-bg p-7">
              <p className="eyebrow mb-4">You receive</p>
              <ul className="flex flex-col gap-3">
                {youReceive.map((y) => (
                  <li
                    key={y}
                    className="flex items-start gap-2.5 text-[16px] text-ink"
                  >
                    <Check
                      className="size-4 mt-1 shrink-0 text-ink"
                      strokeWidth={2}
                      aria-hidden
                    />
                    {y}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
