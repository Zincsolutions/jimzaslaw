import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';

const outcomes = [
  'More content, with the same headcount.',
  'Repeated work automated and standardized.',
  'Brand quality consistent across every output.',
  'Visibility in AI-driven search where buyers now start.',
  'Scattered knowledge turned into a business asset.',
];

export function Opportunity() {
  return (
    <section className="py-24 md:py-32 bg-bg-soft">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>The opportunity</Eyebrow>
            <h2 className="mt-4 text-[clamp(28px,4vw,42px)] leading-[1.1] tracking-[-0.025em] font-semibold">
              The businesses that win with AI will not use the most tools.
            </h2>
            <p className="mt-4 text-[20px] md:text-[22px] tracking-[-0.015em] leading-[1.3] text-ink font-semibold">
              They&apos;ll have the smartest systems.
            </p>
            <p className="mt-6 text-[17px] text-ink-2 leading-relaxed">
              With the right structure, AI can help your team create more
              content, automate repeated tasks, improve brand consistency, show
              up in AI search, and turn scattered knowledge into a business
              asset.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink hover:gap-2 transition-all"
            >
              Find Your First AI Opportunity
              <ArrowRight className="size-4" aria-hidden />
            </Link>
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
