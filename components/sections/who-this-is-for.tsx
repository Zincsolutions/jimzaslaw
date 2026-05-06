import { Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';

const points = [
  'Your team is already using AI, but everyone is doing it differently.',
  'You know AI matters, but don’t have time to figure out every tool yourself.',
  'You want practical workflows, not abstract AI strategy.',
  'Your marketing team needs more content, visuals, or campaign output.',
  'You want your business to show up when buyers ask AI tools for recommendations.',
  'You need a senior advisor who understands brand, websites, content, ecommerce, and operations.',
];

export function WhoThisIsFor() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>Who this is for</Eyebrow>
            <h2 className="mt-4 text-[clamp(28px,4vw,42px)] tracking-[-0.025em] leading-[1.1] font-semibold">
              For business leaders who know AI matters, but need a practical
              plan.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-2 max-w-md">
              This is not a generic AI keynote or a list of trendy tools. It is
              a practical path to using AI inside the real work of your
              business.
            </p>
          </div>
          <ul className="lg:col-span-7 grid grid-cols-1 gap-4">
            {points.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-3 border border-border rounded-md bg-bg p-5"
              >
                <Check
                  className="size-4 mt-1 shrink-0 text-ink"
                  strokeWidth={2}
                  aria-hidden
                />
                <p className="text-[16px] leading-relaxed text-ink">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
