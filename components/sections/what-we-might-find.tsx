import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Workflow,
  Search,
  Target,
  Image as ImageIcon,
  TrendingUp,
  LayoutGrid,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/cn';

const findings = [
  {
    icon: Workflow,
    chip: 'orange' as const,
    text: 'A repeated workflow AI can cut in half',
  },
  {
    icon: Target,
    chip: 'sky' as const,
    text: 'A content opportunity competitors are missing',
  },
  {
    icon: LayoutGrid,
    chip: 'violet' as const,
    text: 'A prompt system for sales, marketing, proposals, or support',
  },
  {
    icon: ImageIcon,
    chip: 'blush' as const,
    text: 'A brand asset workflow that reduces design bottlenecks',
  },
  {
    icon: Search,
    chip: 'amber' as const,
    text: 'AI search gaps where your company is not showing up',
  },
  {
    icon: TrendingUp,
    chip: 'stone' as const,
    text: 'A cleaner way to organize how your team uses AI',
  },
];

export function WhatWeMightFind() {
  return (
    <section className="py-24 md:py-32 bg-bg-soft border-t border-border">
      <Container>
        <SectionHeader
          eyebrow="In your assessment"
          title="What could AI improve first?"
          lede="In your assessment, we may uncover any of the following."
        />
        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {findings.map(({ icon: Icon, chip, text }, i) => (
            <div
              key={i}
              className="bg-bg p-7 md:p-8 flex items-start gap-4"
            >
              <span
                className={cn(
                  'shrink-0 w-10 h-10 rounded-md inline-flex items-center justify-center',
                  `chip-${chip}`,
                )}
                aria-hidden
              >
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <p className="text-[16px] leading-relaxed text-ink pt-1.5">
                {text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-ink hover:text-accent hover:gap-2 transition-all"
          >
            Find Your First AI Opportunity
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
