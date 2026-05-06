import {
  LayoutGrid,
  GitBranch,
  Database,
  Search,
  Image as ImageIcon,
  LineChart,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/cn';

const problems = [
  {
    icon: LayoutGrid,
    chip: 'amber' as const,
    title: 'Fragmented usage',
    body: 'AI is used inconsistently across people. No shared system, no standards, no visibility into who’s doing what.',
  },
  {
    icon: GitBranch,
    chip: 'sky' as const,
    title: 'No defined workflows',
    body: 'There’s no agreed-upon way that AI fits into how marketing, sales, ops, or content actually get done day-to-day.',
  },
  {
    icon: Database,
    chip: 'violet' as const,
    title: 'Lost institutional knowledge',
    body: 'The prompts, outputs, and lessons learned live in individual chat histories. Nothing compounds.',
  },
  {
    icon: Search,
    chip: 'orange' as const,
    title: 'Invisible in AI search',
    body: 'Customers ask ChatGPT, Claude, Perplexity, and Google AI Overviews questions in your category — and the company isn’t showing up.',
  },
  {
    icon: ImageIcon,
    chip: 'blush' as const,
    title: 'Inconsistent creative output',
    body: 'AI-generated visuals don’t match the brand, vary wildly in quality, and require manual cleanup that wipes out the time savings.',
  },
  {
    icon: LineChart,
    chip: 'stone' as const,
    title: 'No tie to business outcomes',
    body: 'AI usage hasn’t moved a single number on the P&L, and leadership can’t articulate why.',
  },
];

export function ProblemGrid() {
  return (
    <section className="py-24 md:py-32" id="problem">
      <Container>
        <SectionHeader
          eyebrow="The problem"
          title="AI is already in your business. But is it working for the business?"
          lede="Most companies are experimenting with AI in disconnected ways. Prompts live in personal chat histories. Employees use different tools in different ways. Good outputs are hard to repeat. Brand quality is inconsistent. Content is not tied to visibility, sales, or growth."
        />
        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
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
              <p className="text-[15px] leading-relaxed text-ink-2">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-[24px] md:text-[28px] tracking-[-0.02em] leading-[1.25] font-semibold max-w-2xl text-ink">
          The problem is not access to AI. The problem is lack of structure.
        </p>
      </Container>
    </section>
  );
}
