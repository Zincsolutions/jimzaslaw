import { LayoutGrid, Search, LineChart, Globe } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/cn';

// Survival sound bites: what the reader is losing right now.
const problems = [
  {
    icon: LayoutGrid,
    chip: 'amber' as const,
    title: 'Your know-how walks out the door',
    body: 'Everyone uses AI their own way. Your best prompts leave when your people do.',
  },
  {
    icon: Search,
    chip: 'orange' as const,
    title: 'Buyers can’t find you',
    body: 'Buyers are shortlisting vendors inside ChatGPT. You’re not on the list.',
  },
  {
    icon: LineChart,
    chip: 'stone' as const,
    title: 'Nothing hits the P&L',
    body: 'Plenty of AI activity. Not one number on the P&L has moved.',
  },
  {
    icon: Globe,
    chip: 'violet' as const,
    title: 'Your website is built for yesterday',
    body: 'Rebuild on the wrong foundation and your next site is outdated the day it launches.',
  },
];

export function ProblemGrid() {
  return (
    <section className="py-24 md:py-32" id="problem">
      <Container>
        <SectionHeader
          eyebrow="The problem"
          title="Your team is using AI. Your business isn’t."
        />
        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {problems.map(({ icon: Icon, chip, title, body }) => (
            <div
              key={title}
              className="bg-bg p-8 md:p-10 flex flex-col gap-4"
            >
              <span
                className={cn(
                  'w-12 h-12 rounded-md inline-flex items-center justify-center',
                  `chip-${chip}`,
                )}
                aria-hidden
              >
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-[20px] font-semibold tracking-[-0.015em]">
                {title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-2 max-w-[80ch]">
                {body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-[24px] md:text-[28px] tracking-[-0.02em] leading-[1.25] font-semibold max-w-2xl text-ink">
          The problem isn’t access to AI. It’s that nobody’s in charge of it.
        </p>
      </Container>
    </section>
  );
}
