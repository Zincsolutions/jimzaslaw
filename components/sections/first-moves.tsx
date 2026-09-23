import {
  Workflow,
  Target,
  Search,
  Image as ImageIcon,
  LayoutGrid,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';

// Curiosity sound bites: what the free assessment goes looking for.
const moves = [
  { icon: Workflow, chip: 'orange', text: 'The workflow AI could cut in half' },
  { icon: Target, chip: 'sky', text: 'The content gap your competitors haven’t noticed' },
  { icon: Search, chip: 'amber', text: 'The buyer questions AI answers without you' },
  { icon: ImageIcon, chip: 'blush', text: 'The brand bottleneck slowing every campaign' },
  { icon: LayoutGrid, chip: 'violet', text: 'The prompt system your sales team is missing' },
  { icon: ShieldCheck, chip: 'stone', text: 'The website risk hiding in your current platform' },
] as const;

export function FirstMoves() {
  return (
    <section className="py-24 md:py-32 bg-bg-soft border-t border-border">
      <Container>
        <SectionHeader
          eyebrow="Your free assessment"
          title="What could AI improve first?"
          lede="In one 60–90 minute session, we go looking for:"
        />
        <ul className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {moves.map(({ icon: Icon, chip, text }) => (
            <li
              key={text}
              className="flex items-center gap-4 border border-border rounded-lg bg-bg p-5"
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
              <p className="text-[16px] leading-snug text-ink font-medium">{text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex">
          <Button href="/contact" size="lg" withArrow>
            Get a free assessment
          </Button>
        </div>
      </Container>
    </section>
  );
}
