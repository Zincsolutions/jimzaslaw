import { Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';

const youReceive = [
  'A short written summary',
  'Two or three high-impact recommendations',
  'A suggested first engagement or decision path',
  'A clear distinction between strategy, implementation, and ongoing governance',
  'No commitment beyond the session',
];

export function FreeAssessment() {
  return (
    <section id="assessment" className="py-24 md:py-32 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>Free Assessment</Eyebrow>
            <h2 className="mt-4 text-[clamp(28px,4vw,44px)] tracking-[-0.025em] leading-[1.08] font-semibold">
              Start with an AI and Digital Opportunity Assessment.
            </h2>
            <p className="mt-6 text-[18px] md:text-[19px] leading-[1.6] text-ink-2 max-w-2xl">
              In one focused working session, I will help identify where AI can
              create near-term value, where it creates new risk, and which
              decision should come first.
            </p>
            <p className="mt-4 text-[18px] md:text-[19px] leading-[1.6] text-ink-2 max-w-2xl">
              We can review your workflows, website, marketing, content, tools,
              brand assets, team practices, and upcoming platform decisions.
            </p>
            <div className="mt-8 flex">
              <Button href="/contact" size="lg" withArrow>
                Request an Assessment
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
