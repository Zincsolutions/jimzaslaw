import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';
import { CTABand } from '@/components/sections/cta-band';
import { MockupWebsite } from '@/components/mockups/mockup-website';
import { services, site, dispatch, zincWebsiteMigrationUrl } from '@/lib/site';

const slug = 'ai-website-transition-strategy';
const path = `/services/${slug}`;
const contactHref = '/contact?interest=website';

const title = 'AI Website Transition Strategy';
const description =
  'Decide whether to improve, migrate, or redesign your website. Get a practical transition roadmap covering architecture, search, integrations, AI governance, risk, scope, and execution.';
const ogImage = `/og?title=${encodeURIComponent('Decide what your website should become before you start rebuilding it.')}&eyebrow=${encodeURIComponent('Service 04: AI Website Transition Strategy')}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, images: [ogImage] },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
};

const questions = [
  'What should the team be able to change with an agent?',
  'Which work must be reviewed before it goes live?',
  'What protects brand quality, search visibility, and integrations?',
  'Does the current CMS still fit the business?',
  'Is migration worth the cost and disruption?',
  'Should the company preserve the current design or use the transition to improve it?',
  'Who owns the code, hosting, accounts, and operating process after launch?',
];

const paths = [
  {
    num: '01',
    name: 'Improve in place',
    body: 'Keep the current platform and fix the workflow, content, performance, integration, or governance issues that matter most.',
    bestWhen:
      'The CMS is still serving the business and the case for migration is weak.',
  },
  {
    num: '02',
    name: 'Migrate as-is',
    body: 'Preserve the agreed design and content while moving the website to a more agent-ready foundation.',
    bestWhen:
      'The customer experience works but the underlying platform or publishing process is holding the team back.',
  },
  {
    num: '03',
    name: 'Migrate + improve',
    body: 'Move the website while improving selected content, user journeys, accessibility, conversion, performance, or search foundations.',
    bestWhen:
      'A direct migration would carry too many existing problems forward, but a full redesign is unnecessary.',
  },
  {
    num: '04',
    name: 'Redesign + migrate',
    body: 'Use the transition to rethink the brand expression, content structure, experience, and technical foundation together.',
    bestWhen: 'The website and the platform both need to change.',
  },
];

const evaluate = [
  {
    heading: 'Business and brand',
    items: [
      'What the website must do for customers, sales, marketing, recruiting, and operations.',
      'What the brand must preserve.',
      'Which improvements matter enough to include in the transition.',
    ],
  },
  {
    heading: 'Content and search',
    items: [
      'Page inventory, templates, content types, and ownership.',
      'URLs, metadata, internal links, structured data, and redirect requirements.',
      'Search and AI-visibility risks that need monitoring before and after launch.',
    ],
  },
  {
    heading: 'Functionality and integrations',
    items: [
      'Forms, CRM, analytics, consent, commerce, search, member features, and third-party services.',
      'Which CMS-dependent functions require rebuilding, replacement, or a different recommendation.',
    ],
  },
  {
    heading: 'Architecture and ownership',
    items: [
      'Current CMS and technical debt.',
      'Candidate architecture, hosting, repository, and deployment model.',
      'Account ownership, access, documentation, handoff, and support.',
    ],
  },
  {
    heading: 'AI operations and governance',
    items: [
      'Tasks an agent can prepare or execute.',
      'Roles, permissions, approval thresholds, and review queues.',
      'Attribution, version history, monitoring, alerts, and restore process.',
      'Where a management layer such as Dispatch fits.',
    ],
  },
];

const receive = [
  'Executive recommendation: improve, migrate, or redesign',
  'Current-state findings and constraints',
  'Comparison of viable paths and tradeoffs',
  'Recommended website architecture and operating model',
  'Content, URL, redirect, and search-transition requirements',
  'Integration inventory and disposition plan',
  'Governance model for people and AI agents',
  'Risk register and launch safeguards',
  'Phased roadmap with responsibilities and decision points',
  'Budget range and execution options',
  'Leadership readout and working session',
];

const controls = [
  'Requests',
  'Previews',
  'Approvals',
  'Risk tiers',
  'Attribution',
  'Monitoring',
  'Restore',
];

const faqs = [
  {
    q: 'Do we have to migrate?',
    a: 'No. The purpose of the engagement is to choose the right path. If your current platform still fits the business, I will recommend improving it rather than moving for the sake of moving.',
  },
  {
    q: 'Can you assess WordPress and Webflow websites?',
    a: 'Yes. The analysis is based on the site’s content, functionality, integrations, workflow, ownership, and business requirements. A feature tied to the current CMS may need to remain, be rebuilt, or move to another service.',
  },
  {
    q: 'Will a migration preserve our search rankings?',
    a: 'No responsible advisor should promise unchanged rankings. The plan will address URL continuity, redirects, metadata, internal links, structured data, crawlability, performance, and post-launch monitoring to reduce avoidable risk.',
  },
  {
    q: 'Do we need to redesign?',
    a: 'Not necessarily. A transition can preserve the agreed design and content, include targeted improvements, or support a full redesign. The recommendation depends on what is working and what the business needs next.',
  },
  {
    q: 'Who executes the roadmap?',
    a: 'The strategy can be used by your existing team or implementation partner. If you want one team from strategy through launch, ZINC can handle the execution with me remaining involved.',
  },
  {
    q: 'What is Dispatch?',
    a: 'Dispatch is a management layer for AI-powered websites. It helps teams govern work produced by coding agents through review, approvals, risk controls, attribution, monitoring, and restore capability.',
  },
  {
    q: 'Will our team need to code?',
    a: 'Not for every supported task. An agent-ready operating model can let team members begin work with plain-language requests, but the organization still needs clear review, approval, and escalation rules.',
  },
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
      itemListElement: receive.map((d) => ({
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
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
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
                Your website may still look fine while the way it is built,
                updated, and governed is falling behind. I help leadership
                teams decide whether to improve the current platform, migrate
                the existing experience to an agent-ready foundation, or
                redesign and migrate at the same time.
              </p>
              <p className="text-[16px] md:text-[17px] leading-[1.6] max-w-[58ch] text-pretty">
                The goal is not to force a migration. It is to make the right
                business decision with the risks, tradeoffs, and implementation
                path visible before the work begins.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button
                  href={contactHref}
                  size="lg"
                  variant="primary-on-ink"
                  withArrow
                >
                  Request a Website Transition Assessment
                </Button>
                <Button
                  href="#decisions"
                  size="lg"
                  variant="ghost"
                  className="!text-white !border !border-white/30 hover:!border-white hover:!bg-white/10"
                >
                  See the decisions we will make
                </Button>
              </div>
              <p className="font-mono text-[13px] uppercase tracking-[0.06em] text-white/60">
                Fixed-scope strategy engagement · Scope and fee defined after
                the initial assessment
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

      {/* The decision */}
      <section
        id="decisions"
        className="py-20 md:py-28 bg-bg-soft border-y border-border scroll-mt-24"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>The decision</Eyebrow>
              <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
                The decision is no longer just &ldquo;Which CMS?&rdquo;
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-ink-2">
                AI coding agents can now create pages, update content, improve
                metadata, and make sitewide changes directly against a modern
                codebase. That creates new possibilities, but it also raises
                business questions that a platform demo cannot answer.
              </p>
              <p className="mt-5 text-[17px] leading-relaxed text-ink font-medium">
                I help your leadership team make those decisions before
                implementation starts.
              </p>
            </div>
            <ul className="lg:col-span-7 flex flex-col divide-y divide-border border-y border-border">
              {questions.map((q, i) => (
                <li key={q} className="py-4 flex items-start gap-3">
                  <span
                    className="font-mono text-[12px] uppercase tracking-[0.06em] text-ink-3 w-8 shrink-0 mt-1"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[16px] leading-relaxed text-ink">{q}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Four paths */}
      <section id="paths" className="py-20 md:py-28 scroll-mt-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Transition paths</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
              Four paths. One should fit the business.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {paths.map((p) => (
              <article
                key={p.name}
                className="flex flex-col gap-4 border border-border rounded-xl bg-bg p-7"
              >
                <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-3">
                  Path {p.num}
                </span>
                <h3 className="text-[22px] tracking-[-0.015em] leading-[1.2] font-semibold">
                  {p.name}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-2">
                  {p.body}
                </p>
                <p className="mt-auto pt-4 border-t border-border text-[14px] leading-relaxed text-ink">
                  <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-ink-3 mr-2">
                    Best when
                  </span>
                  {p.bestWhen}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-[20px] md:text-[22px] tracking-[-0.015em] leading-[1.35] font-semibold max-w-3xl text-ink">
            I will recommend the path that fits the business. If staying on the
            current platform is the right answer, that is the recommendation.
          </p>
        </Container>
      </section>

      {/* What I evaluate */}
      <section className="py-20 md:py-28 bg-bg-soft border-y border-border">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Scope</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
              What I evaluate.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
            {evaluate.map((g) => (
              <div key={g.heading} className="bg-bg p-7 md:p-8 flex flex-col gap-4">
                <h3 className="text-[18px] font-semibold tracking-[-0.01em]">
                  {g.heading}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink-2"
                    >
                      <Check
                        className="size-3.5 mt-1.5 shrink-0 text-ink"
                        strokeWidth={2}
                        aria-hidden
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="bg-bg p-7 md:p-8 flex flex-col gap-4">
              <h3 className="text-[18px] font-semibold tracking-[-0.01em]">
                Platform-neutral by design
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-2">
                WordPress, Webflow, or another current platform. The
                recommendation follows your content model, workflow,
                integrations, team, and governance needs, not a preferred
                stack.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What you receive */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>Deliverables</Eyebrow>
              <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
                What you receive.
              </h2>
            </div>
            <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {receive.map((d) => (
                <li
                  key={d}
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

      {/* Governance / Dispatch */}
      <section className="py-20 md:py-28 bg-bg-soft border-y border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <Eyebrow>Governance</Eyebrow>
              <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
                Control should improve as the website becomes more capable.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-ink-2">
                The biggest concern with an AI-powered website is not whether
                an agent can make changes. It is whether the business can see,
                review, approve, attribute, and undo those changes.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
                {dispatch.name} is a management layer for AI-powered websites.
                It can sit above the coding agent, repository, and host to keep
                requests, previews, approvals, risk tiers, attribution,
                monitoring, and restore capability in one operating record.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
                Your team can bring the agent it already uses, such as Codex or
                Claude Code. The governance model should be designed around the
                business, not around a single AI vendor.
              </p>
              <a
                href={dispatch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink hover:text-accent transition-colors"
              >
                See how Dispatch governs agent-made website changes
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="border border-border rounded-xl bg-bg p-6">
                <p className="eyebrow mb-4">One operating record</p>
                <ul className="flex flex-wrap gap-2">
                  {controls.map((c) => (
                    <li key={c} className="chip chip-violet">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border rounded-xl bg-bg p-6">
                <p className="text-[15px] leading-relaxed text-ink">
                  <span className="font-semibold">Important:</span>{' '}
                  {dispatch.name} is not a reason by itself to migrate. It is
                  one option for governing an AI-powered site when that
                  operating model fits the company.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Strategy stands alone / ZINC */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>Execution</Eyebrow>
              <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
                Strategy can stand on its own.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[17px] leading-relaxed text-ink-2">
                You can take the roadmap to your current team, another
                implementation partner, or ZINC.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
                When you want continuity from strategy through delivery, ZINC
                can handle brand, design, development, migration,
                integrations, launch, and support. I remain involved so the
                execution stays aligned with the decisions made in the
                strategy engagement.
              </p>
              <a
                href={zincWebsiteMigrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink hover:text-accent transition-colors"
              >
                Explore ZINC&apos;s AI Website Migration services
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-bg-soft border-t border-border">
        <Container>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold max-w-2xl">
            Questions leaders ask before a website decision.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-border py-5">
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                  <h3 className="text-[17px] font-medium text-ink">{f.q}</h3>
                  <span
                    aria-hidden
                    className="size-7 shrink-0 rounded-full border border-border-strong inline-flex items-center justify-center text-ink-3 group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                  {f.a}
                </p>
              </details>
            ))}
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

      <CTABand
        title="Start with the decision, not the rebuild."
        body="Share your current website, what is not working, and what you want the team to be able to do next. I will help you determine whether the right answer is to improve the platform you have, migrate it, or redesign it."
        primaryLabel="Request a Website Transition Assessment"
        primaryHref={contactHref}
        secondaryLabel="Request an AI Opportunity Assessment"
        secondaryHref="/contact"
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
      <script
        id="ld-faq-ai-website-transition-strategy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
