import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { services, pricing } from '@/lib/site';

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-border">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="Four ways to put AI to work in your business."
        />
        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col gap-5 border border-border rounded-xl bg-bg p-7 hover:border-accent/40 transition-colors"
            >
              <span className={`chip chip-${s.chip} self-start`}>{s.short}</span>
              <h3 className="text-[22px] md:text-[24px] tracking-[-0.02em] leading-[1.2] font-semibold transition-colors group-hover:text-accent">
                {s.tagline}
              </h3>
              <p className="text-[14px] leading-relaxed text-ink-2">
                <span className="font-medium text-ink">Best if</span>{' '}
                {s.bestIf}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-all group-hover:text-accent group-hover:gap-2">
                See how
                <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center font-mono text-[13px] uppercase tracking-[0.06em] text-ink-3">
          {pricing.implementation} · {pricing.retainer}
        </p>
      </Container>
    </section>
  );
}
