import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Eyebrow } from '@/components/ui/eyebrow';
import { CTABand } from '@/components/sections/cta-band';
import { PageFaq } from '@/components/sections/page-faq';
import { servicesFaqs } from '@/lib/faqs';
import { services, pricing } from '@/lib/site';
import { MockupOS } from '@/components/mockups/mockup-os';
import { MockupVisibility } from '@/components/mockups/mockup-visibility';
import { MockupBrand } from '@/components/mockups/mockup-brand';
import { MockupWebsite } from '@/components/mockups/mockup-website';

const title = 'AI Consulting Services';
const description =
  'AI consulting services for growing businesses: AI Operating System, AI Visibility Engine, AI Brand Asset System, and AI Website Transition Strategy.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    title,
    description,
    url: '/services',
    images: [`/og?title=${encodeURIComponent('Four focused services for putting AI to work.')}&eyebrow=${encodeURIComponent('Services')}`],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

const mockups = {
  'ai-operating-system': MockupOS,
  'ai-visibility-engine': MockupVisibility,
  'ai-brand-asset-system': MockupBrand,
  'ai-website-transition-strategy': MockupWebsite,
};

const startHere = [
  {
    problem:
      'Everyone uses AI differently and useful knowledge is scattered',
    slug: 'ai-operating-system',
  },
  {
    problem:
      'Buyers ask AI systems for recommendations and your company is hard to find or understand',
    slug: 'ai-visibility-engine',
  },
  {
    problem: 'AI-generated visual work is inconsistent or off-brand',
    slug: 'ai-brand-asset-system',
  },
  {
    problem:
      'You are weighing an AI-native website, a migration, or another major website decision',
    slug: 'ai-website-transition-strategy',
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      {/* Dark hero */}
      <section className="dark-hero pb-20 md:pb-28">
        <Container className="pt-12 md:pt-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h1 className="mt-4 text-[clamp(40px,6vw,64px)] tracking-[-0.03em] leading-[1.05] font-semibold">
              Four focused services for putting AI to work.
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.6] max-w-[60ch] text-pretty">
              I help leadership teams turn AI from scattered activity into
              clear systems and decisions. Start with an assessment, then
              engage the service that addresses the most valuable problem
              first.
            </p>
            <p className="mt-5 font-mono text-[13px] uppercase tracking-[0.06em] text-white/60">
              {pricing.implementation} · {pricing.retainer}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button
                href="/contact"
                size="lg"
                variant="primary-on-ink"
                withArrow
              >
                Request an AI Opportunity Assessment
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((p) => {
              const Mockup = mockups[p.slug];
              return (
                <Link
                  key={p.slug}
                  href={`/services/${p.slug}`}
                  className="group flex flex-col gap-6 border border-border rounded-xl bg-bg p-6 hover:border-accent/40 transition-colors"
                >
                  <Mockup />
                  <div className="flex items-center gap-2">
                    <span className={`chip chip-${p.chip}`}>
                      Service {p.number}
                    </span>
                  </div>
                  <h2 className="text-[24px] tracking-[-0.02em] leading-[1.15] font-semibold transition-colors group-hover:text-accent">
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

      {/* Which service first */}
      <section
        id="which-first"
        className="py-24 md:py-32 bg-bg-soft border-t border-border"
      >
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Where to start</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
              Which service should come first?
            </h2>
            <p className="mt-4 text-[18px] leading-[1.55] text-ink-2">
              Most clients start with one. The assessment confirms the right
              starting point before you commit.
            </p>
          </div>
          <table className="mt-12 w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border-strong">
                <th
                  scope="col"
                  className="pb-3 pr-6 font-mono text-[12px] uppercase tracking-[0.08em] text-ink-3 font-normal"
                >
                  If this is the problem
                </th>
                <th
                  scope="col"
                  className="pb-3 font-mono text-[12px] uppercase tracking-[0.08em] text-ink-3 font-normal w-[38%]"
                >
                  Start here
                </th>
              </tr>
            </thead>
            <tbody>
              {startHere.map((row) => {
                const svc = services.find((x) => x.slug === row.slug)!;
                return (
                  <tr key={row.slug} className="border-b border-border align-top">
                    <td className="py-5 pr-6 text-[16px] md:text-[17px] leading-relaxed text-ink">
                      {row.problem}
                    </td>
                    <td className="py-5">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="group inline-flex items-start gap-1.5 text-[15px] md:text-[16px] font-medium text-ink hover:text-accent transition-colors"
                      >
                        {svc.short}
                        <ArrowRight
                          className="size-4 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform"
                          aria-hidden
                        />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Container>
      </section>

      <CTABand />
      <PageFaq
        id="services"
        faqs={servicesFaqs}
        title="Questions about the four services."
        intro="How the services work, what they cost, and how to choose where to start."
      />
    </>
  );
}
