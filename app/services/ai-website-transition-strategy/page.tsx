import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';
import { CTABand } from '@/components/sections/cta-band';
import { PageFaq } from '@/components/sections/page-faq';
import { websiteTransitionFaqs } from '@/lib/faqs';
import { MockupWebsite } from '@/components/mockups/mockup-website';
import { services, site, dispatch, zincWebsiteMigrationUrl } from '@/lib/site';

const slug = 'ai-website-transition-strategy';
const path = `/services/${slug}`;
const contactHref = '/contact?interest=website';

const title = 'AI Website Transition Strategy';
const metaTitle = 'AI Website Migration & AI-Native Website Strategy';
const description =
  'Plan your move to an AI-native website. Decide whether to improve, migrate, or redesign, with an AI migration roadmap for search, integrations, and risk.';
const ogImage = `/og?title=${encodeURIComponent('Fix it, move it, or rebuild it? Decide before you spend.')}&eyebrow=${encodeURIComponent('Service 04: AI Website Transition Strategy')}`;

export const metadata: Metadata = {
  title: metaTitle,
  description,
  alternates: { canonical: path },
  openGraph: { title: metaTitle, description, url: path, images: [ogImage] },
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description,
    images: [ogImage],
  },
};

const paths = [
  { name: 'Improve in place.', body: 'Your platform still works. Make it better.' },
  { name: 'Migrate as-is.', body: 'Same site, new AI-ready foundation.' },
  { name: 'Migrate + improve.', body: 'Move it and fix what’s holding it back.' },
  {
    name: 'Redesign + migrate.',
    body: 'New brand expression, new foundation, one project.',
  },
];

const lookAt = [
  'What the site must do for sales, marketing, and customers',
  'What your brand and search rankings can’t afford to lose',
  'Every form, integration, and tool that has to keep working',
  'Who owns the code, the accounts, and the keys',
  'What AI agents may change, and who signs off',
];

const caseFacts = [
  { label: 'Client', value: 'Private investment firm' },
  { label: 'Path chosen', value: 'Migrate + improve' },
  { label: 'First build to launch', value: 'About 4 weeks' },
  { label: 'Updates in first 2 weeks live', value: '250+' },
];

export default function AIWebsiteTransitionStrategyPage() {
  const service = services.find((s) => s.slug === slug)!;
  const others = services.filter((s) => s.slug !== slug);

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${site.url}${path}#service`,
    name: title,
    description: service.objective,
    serviceType: title,
    url: `${site.url}${path}`,
    provider: { '@id': `${site.url}#org` },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${title} deliverables`,
      itemListElement: service.deliverables.map((d) => ({
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
      { '@type': 'ListItem', position: 3, name: title, item: `${site.url}${path}` },
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
                <span className={`chip chip-${service.chip}`}>
                  Service {service.number}
                </span>
                <span className="eyebrow">{title}</span>
              </div>
              <h1 className="text-[clamp(36px,5vw,56px)] tracking-[-0.025em] leading-[1.05] font-semibold text-balance">
                {service.title}
              </h1>
              <p className="text-[18px] md:text-[20px] leading-[1.55] max-w-[58ch] text-pretty">
                {service.objective}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button
                  href={contactHref}
                  size="lg"
                  variant="primary-on-ink"
                  withArrow
                >
                  Get a free assessment
                </Button>
                <Button
                  href="#paths"
                  size="lg"
                  variant="ghost"
                  className="!text-white !border !border-white/30 hover:!border-white hover:!bg-white/10"
                >
                  See the four paths
                </Button>
              </div>
              <p className="font-mono text-[13px] uppercase tracking-[0.06em] text-white/60">
                Fixed scope · Fee set after the free assessment
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="dark-card rounded-xl p-3 md:p-4">
                <MockupWebsite />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stakes (survival) */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>What&apos;s at stake</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
              A website move is easy to get wrong, and expensive to undo.
            </h2>
          </div>
          <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.stakes.map((st) => (
              <li
                key={st}
                className="border border-border rounded-xl bg-bg p-6 md:p-7 text-[17px] leading-snug text-ink"
              >
                {st}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Why now (curiosity) */}
      <section className="py-20 md:py-28 bg-bg-soft border-y border-border">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Why now</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
              The question used to be &ldquo;Which CMS?&rdquo;
            </h2>
            <p className="mt-5 text-[18px] leading-relaxed text-ink-2">
              Now it&apos;s: How will AI agents work on your site? Who approves
              changes? What happens if one is wrong? Get those answers first.
              Then build.
            </p>
          </div>
        </Container>
      </section>

      {/* Four paths */}
      <section id="paths" className="py-20 md:py-28 scroll-mt-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Transition paths</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
              Four paths. One fits your business.
            </h2>
          </div>
          <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {paths.map((p, i) => (
              <li
                key={p.name}
                className="flex flex-col gap-2 border border-border rounded-xl bg-bg p-6 md:p-7"
              >
                <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-3">
                  Path {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[18px] leading-snug text-ink">
                  <span className="font-semibold">{p.name}</span> {p.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* What I look at / what you get */}
      <section className="py-20 md:py-28 bg-bg-soft border-y border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {[
              { eyebrow: 'Scope', heading: 'What we look at.', items: lookAt },
              {
                eyebrow: 'Deliverables',
                heading: 'What you get.',
                items: service.deliverables,
              },
            ].map((col) => (
              <div key={col.heading}>
                <Eyebrow>{col.eyebrow}</Eyebrow>
                <h2 className="mt-3 text-[clamp(24px,3.5vw,32px)] tracking-[-0.02em] leading-[1.1] font-semibold">
                  {col.heading}
                </h2>
                <ul className="mt-6 flex flex-col gap-3">
                  {col.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-[16px] leading-relaxed text-ink"
                    >
                      <Check
                        className="size-4 mt-1 shrink-0 text-ink"
                        strokeWidth={2}
                        aria-hidden
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Anonymized client example */}
      <section id="example" className="py-20 md:py-28 scroll-mt-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Recent example</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
              Keep the brand. Change how the site runs.
            </h2>
          </div>
          <div className="mt-12 border border-border rounded-xl overflow-hidden">
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border-b border-border">
              {caseFacts.map((f) => (
                <div
                  key={f.label}
                  className="bg-bg-soft p-5 md:p-6 flex flex-col gap-2"
                >
                  <dt className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.08em] text-ink-3">
                    {f.label}
                  </dt>
                  <dd className="text-[18px] md:text-[22px] tracking-[-0.015em] font-semibold text-ink">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="bg-bg p-7 md:p-8 text-[17px] leading-relaxed text-ink-2 max-w-3xl">
              The team now updates the site by asking an AI agent in plain
              language. Every change is recorded and can be restored.
            </p>
          </div>
        </Container>
      </section>

      {/* Control / Dispatch */}
      <section className="py-20 md:py-28 bg-bg-soft border-y border-border">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Control</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
              AI can change your site. You stay in charge.
            </h2>
            <p className="mt-5 text-[18px] leading-relaxed text-ink-2">
              Where it fits, the site runs under ZINC&apos;s governance
              platform, {dispatch.name}: approvals, a record of every change,
              monitoring, and one-click restore.
            </p>
            <p className="mt-4 text-[18px] leading-relaxed text-ink">
              {dispatch.name} isn&apos;t a reason to migrate. It&apos;s how you
              stay in control if you do.
            </p>
            <a
              href={dispatch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink hover:text-accent transition-colors"
            >
              See how {dispatch.name} works
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </Container>
      </section>

      {/* Platform-neutral / ZINC */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[clamp(22px,3vw,28px)] leading-[1.35] tracking-[-0.015em] text-ink">
              I&apos;m platform-neutral. If your current site is the right
              answer, I&apos;ll tell you. If you migrate, you can use ZINC or
              any qualified team.
            </p>
            <a
              href={zincWebsiteMigrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink hover:text-accent transition-colors"
            >
              ZINC: AI website migration, with control built in
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </Container>
      </section>

      {/* Other services */}
      <section className="py-20 md:py-28 border-t border-border">
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

      <CTABand primaryHref={contactHref} />
      <PageFaq
        id="ai-website-transition-strategy"
        faqs={websiteTransitionFaqs}
        title="Questions leaders ask before a website decision."
        intro="AI-native websites, AI website migration, platforms, search risk, and cost."
        ctaHref={contactHref}
      />

      <script
        id="ld-service-ai-website-transition-strategy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        id="ld-breadcrumb-ai-website-transition-strategy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
