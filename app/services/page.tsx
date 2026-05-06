import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { CTABand } from '@/components/sections/cta-band';
import { services } from '@/lib/site';
import { MockupOS } from '@/components/mockups/mockup-os';
import { MockupVisibility } from '@/components/mockups/mockup-visibility';
import { MockupBrand } from '@/components/mockups/mockup-brand';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI Operating System, AI Visibility Engine, AI Brand Asset System — three practical ways to put AI to work inside your business.',
};

const mockups = {
  'ai-operating-system': MockupOS,
  'ai-visibility-engine': MockupVisibility,
  'ai-brand-asset-system': MockupBrand,
};

export default function ServicesPage() {
  return (
    <>
      {/* Dark hero */}
      <section className="dark-hero pb-20 md:pb-28">
        <Container className="pt-12 md:pt-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h1 className="mt-4 text-[clamp(40px,6vw,64px)] tracking-[-0.03em] leading-[1.05] font-semibold">
              Three practical ways to put AI to work.
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.6] max-w-[60ch] text-pretty">
              Start with a focused assessment. Then build the system your
              business needs most — from internal AI workflows to AI visibility
              and brand asset creation.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button
                href="/contact"
                size="lg"
                variant="primary-on-ink"
                withArrow
              >
                Get a Free Assessment
              </Button>
              <Button
                href="#compare"
                size="lg"
                variant="ghost"
                className="!text-white !border !border-white/30 hover:!border-white hover:!bg-white/10"
              >
                Compare Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Light content section — service cards */}
      <section id="compare" className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((p) => {
              const Mockup = mockups[p.slug];
              return (
                <Link
                  key={p.slug}
                  href={`/services/${p.slug}`}
                  className="group flex flex-col gap-6 border border-border rounded-xl bg-bg p-6 hover:border-border-strong transition-colors"
                >
                  <Mockup />
                  <div className="flex items-center gap-2">
                    <span className={`chip chip-${p.chip}`}>
                      Service {p.number}
                    </span>
                  </div>
                  <h2 className="text-[24px] tracking-[-0.02em] leading-[1.15] font-semibold">
                    {p.short}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-ink-2">
                    {p.tagline}
                  </p>
                  <div className="mt-auto pt-2 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink">
                    Explore
                    <ArrowRight
                      className="size-4 group-hover:translate-x-0.5 transition-transform"
                      aria-hidden
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
