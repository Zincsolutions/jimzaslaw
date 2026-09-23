import type { ComponentType } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';
import { CTABand } from '@/components/sections/cta-band';
import { PageFaq } from '@/components/sections/page-faq';
import { serviceFaqs } from '@/lib/faqs';
import { services, site, pricing, type Service } from '@/lib/site';
import { MockupOS } from '@/components/mockups/mockup-os';
import { MockupVisibility } from '@/components/mockups/mockup-visibility';
import { MockupBrand } from '@/components/mockups/mockup-brand';

// AI Website Transition Strategy has its own hand-built route at
// app/services/ai-website-transition-strategy, so it is excluded here.
type TemplatedSlug = Exclude<Service['slug'], 'ai-website-transition-strategy'>;
type TemplatedService = Service & { slug: TemplatedSlug };

const templated = services.filter(
  (s): s is TemplatedService => s.slug !== 'ai-website-transition-strategy',
);

const mockups: Record<TemplatedSlug, ComponentType> = {
  'ai-operating-system': MockupOS,
  'ai-visibility-engine': MockupVisibility,
  'ai-brand-asset-system': MockupBrand,
};

const faqTitles: Record<TemplatedSlug, string> = {
  'ai-operating-system': 'Questions about AI operating systems.',
  'ai-visibility-engine': 'Questions about AI search visibility.',
  'ai-brand-asset-system': 'Questions about AI brand assets.',
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return templated.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

const SERVICE_SEO: Record<TemplatedSlug, { title: string; description: string }> = {
  'ai-operating-system': {
    title: 'AI Operating System for Business',
    description:
      'Build an AI operating system for your business: tools, prompts, workflows, standards, and shared knowledge organized into a system your team can actually use.',
  },
  'ai-visibility-engine': {
    title: 'AI Visibility (AEO) for Business',
    description:
      'AI Visibility Engine: Answer Engine Optimization (AEO) for growing businesses. Be easier to find and understand when buyers ask ChatGPT, Claude, Perplexity, and Google AI Overviews.',
  },
  'ai-brand-asset-system': {
    title: 'AI Brand Asset System',
    description:
      'Create on-brand marketing visuals faster with an AI Brand Asset System: brand-ready guidelines, visual prompt libraries, and asset workflows for your team.',
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = templated.find((x) => x.slug === slug);
  if (!p) return {};
  const seo = SERVICE_SEO[p.slug];
  const ogImage = `/og?title=${encodeURIComponent(p.title)}&eyebrow=${encodeURIComponent(`Service ${p.number}: ${p.short}`)}`;
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: `/services/${p.slug}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `/services/${p.slug}`,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [ogImage],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const p = templated.find((x) => x.slug === slug);
  if (!p) notFound();
  const Mockup = mockups[p.slug];
  const others = services.filter((x) => x.slug !== p.slug);

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${site.url}/services/${p.slug}#service`,
    name: p.short,
    description: p.objective,
    serviceType: p.short,
    url: `${site.url}/services/${p.slug}`,
    provider: { '@id': `${site.url}#org` },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${p.short} deliverables`,
      itemListElement: p.deliverables.map((d) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: d },
      })),
    },
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
      { '@type': 'ListItem', position: 3, name: p.short, item: `${site.url}/services/${p.slug}` },
    ],
  };

  return (
    <>
      {/* Dark hero */}
      <section className="dark-hero pb-16 md:pb-24">
        <Container className="pt-12 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className={`chip chip-${p.chip}`}>
                  Service {p.number}
                </span>
                <span className="eyebrow">{p.short}</span>
              </div>
              <h1 className="text-[clamp(36px,5vw,56px)] tracking-[-0.025em] leading-[1.05] font-semibold">
                {p.title}
              </h1>
              <div className="flex flex-col gap-4">
                {p.objective.split('\n\n').map((para, i) => (
                  <p
                    key={i}
                    className="text-[18px] md:text-[20px] leading-[1.55] max-w-[58ch] text-pretty"
                  >
                    {para}
                  </p>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button
                  href="/contact"
                  size="lg"
                  variant="primary-on-ink"
                  withArrow
                >
                  Get a free assessment
                </Button>
                <Button
                  href="/how-it-works"
                  size="lg"
                  variant="ghost"
                  className="!text-white !border !border-white/30 hover:!border-white hover:!bg-white/10"
                >
                  How It Works
                </Button>
              </div>
              <p className="font-mono text-[13px] uppercase tracking-[0.06em] text-white/60">
                Fixed scope · From {pricing.implementationFrom}
                {p.timeline ? ` · ${p.timeline}` : ''}
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="dark-card rounded-xl p-3 md:p-4">
                <Mockup />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Deliverables</Eyebrow>
              <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
                What you get.
              </h2>
            </div>
            <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {p.deliverables.map((d, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border border-border rounded-md bg-bg p-5"
                >
                  <Check
                    className="size-4 mt-1 text-ink shrink-0"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <p className="text-[15px] leading-relaxed text-ink">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-bg-soft border-y border-border">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Outcome</Eyebrow>
            <p className="mt-4 text-[clamp(22px,3vw,28px)] leading-[1.35] tracking-[-0.015em] text-ink">
              {p.outcome}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Eyebrow>Other services</Eyebrow>
          <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
            Often combined with.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group border border-border rounded-xl p-6 hover:border-accent/40 transition-colors flex items-center justify-between gap-4"
              >
                <div className="flex flex-col gap-2">
                  <span className={`chip chip-${o.chip} self-start`}>
                    Service {o.number}
                  </span>
                  <p className="text-[20px] tracking-[-0.015em] font-semibold transition-colors group-hover:text-accent">
                    {o.short}
                  </p>
                  <p className="text-[14px] text-ink-2">{o.tagline}</p>
                </div>
                <ArrowRight
                  className="size-5 shrink-0 group-hover:translate-x-1 transition-transform"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
      <PageFaq
        id={p.slug}
        faqs={serviceFaqs[p.slug]}
        title={faqTitles[p.slug]}
        intro={`What leaders ask about the ${p.short}, answered plainly.`}
      />

      <script
        id={`ld-service-${p.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        id={`ld-breadcrumb-${p.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
