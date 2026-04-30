import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { site } from '@/lib/site';

export function ZincBand() {
  return (
    <section className="on-ink">
      <Container className="py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <p className="eyebrow">When execution is needed</p>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-white/90">
              Jim Zaslaw Consulting is strategic advisory.{' '}
              <span className="text-white">ZINC</span> is execution. When the
              work calls for a website redesign, brand refresh, advanced
              integrations, or e-commerce — twenty years of agency execution
              capacity is right behind it.
            </p>
          </div>
          <a
            href={site.zinc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-center px-5 h-11 rounded-pill border border-white/30 hover:border-white text-white text-[15px]"
          >
            Visit ZINC
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  );
}
