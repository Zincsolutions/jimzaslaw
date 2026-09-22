import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';
import { CTABand } from '@/components/sections/cta-band';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/lib/site';

const title = 'How AI Consulting Engagements Work';
const description =
  'How Jim Zaslaw structures AI and digital strategy engagements: a free assessment, a fixed-scope engagement, and ongoing advisory, each with a useful outcome.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/how-it-works' },
  openGraph: {
    title,
    description,
    url: '/how-it-works',
    images: [`/og?title=${encodeURIComponent('Three stages. A useful outcome at every stage.')}&eyebrow=${encodeURIComponent('How It Works')}`],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

type Stage = {
  num: string;
  chip?: string;
  title: string;
  timebox: string;
  body: string[];
  bullets: { label: string; href?: string }[];
  bulletsLabel?: string;
};

const stages: Stage[] = [
  {
    num: '01',
    chip: 'Free',
    title: 'AI and Digital Opportunity Assessment',
    timebox: '60–90 minute working session',
    body: [
      'I meet with the founder and one or two key leaders to understand how AI is being used, where the friction is, and which decision or service would create the most value first.',
      'The conversation can cover team workflows, marketing, content, brand assets, AI visibility, or a website-platform transition.',
    ],
    bulletsLabel: 'You receive',
    bullets: [
      { label: 'A short written summary' },
      { label: 'Two or three high-impact recommendations' },
      { label: 'A suggested first engagement or decision path' },
      { label: 'No commitment beyond the session' },
    ],
  },
  {
    num: '02',
    title: 'Fixed-scope engagement',
    timebox: 'Defined deliverables and fee · Most engagements start at $15K',
    body: [
      'Following the assessment, the work moves into one or more of four productized services. Each engagement has a defined outcome, timeline, deliverables, and fee.',
      'The website-transition engagement may lead to a separate ZINC implementation proposal, but strategy does not require the client to use ZINC.',
    ],
    bulletsLabel: 'The four services',
    bullets: services.map((s) => ({
      label: s.short,
      href: `/services/${s.slug}`,
    })),
  },
  {
    num: '03',
    title: 'Ongoing advisory',
    timebox: 'Ongoing · From $5K/month',
    body: [
      'AI tools, models, search behavior, and website operating practices keep changing. An advisory retainer gives leadership a senior decision partner who can evaluate what changed, separate signal from noise, and update the plan without chasing every release.',
    ],
    bullets: [
      { label: 'Tool and model upgrades evaluated and applied' },
      { label: 'New capabilities pressure-tested before adoption' },
      { label: 'Website operating practices and search behavior reviewed' },
      {
        label:
          'Most consultants stop at Stage 2. This is where long-term value compounds.',
      },
    ],
  },
];

const faqs = [
  {
    q: 'Do I have to engage all four services?',
    a: 'No. The assessment identifies the decision or service that matters most. Many clients start with one and add another only when the work creates a clear reason to do so.',
  },
  {
    q: 'How long does an engagement take?',
    a: 'Most system-building engagements run six to ten weeks. An AI Website Transition Strategy may be shorter or longer depending on site size, integrations, stakeholders, and the depth of technical assessment required. The timeline is defined before you commit.',
  },
  {
    q: 'Who does the work?',
    a: 'I lead every engagement directly. When the scope moves from advisory into brand, design, development, website migration, integrations, or e-commerce, that execution can run through ZINC with me still involved.',
  },
  {
    q: 'Do I have to use ZINC for implementation?',
    a: 'No. The strategy and roadmap should be usable by your existing team or another qualified partner. ZINC is available when you want continuity from decision through delivery.',
  },
  {
    q: 'How is this different from hiring an AI consultant?',
    a: 'My work is grounded in more than 25 years of building brands, websites, commerce platforms, marketing systems, and integrations. AI is changing that stack, not replacing the need to understand it.',
  },
  {
    q: 'Do you sign NDAs and work with sensitive data?',
    a: 'Yes. Standard practice. Engagements regularly involve confidential strategy, customer data, and internal workflows.',
  },
  {
    q: 'What do engagements cost?',
    a: 'Most fixed-scope engagements start at $15K. Final pricing depends on the service, business requirements, stakeholders, and technical depth. Any ZINC execution is scoped separately so the advisory decision and implementation commitment remain clear.',
  },
  {
    q: 'What does the retainer cost?',
    a: 'Advisory retainers start at $5K/month. Final pricing depends on scope and team size, and is defined once the Stage 2 work is scoped.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>How it works</Eyebrow>
            <h1 className="mt-4 text-[clamp(40px,6vw,64px)] tracking-[-0.03em] leading-[1.05] font-semibold">
              Three stages. A useful outcome at every stage.
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.6] text-ink-2 text-pretty">
              Start with a focused assessment. Move into a fixed-scope strategy
              or system engagement only when the opportunity is clear. Add
              ongoing advisory if the business needs help keeping the work
              current.
            </p>
            <div className="mt-8 flex gap-3">
              <Button href="/contact" size="lg" withArrow>
                Request an AI Opportunity Assessment
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {stages.map((s, i) => (
        <section
          key={s.num}
          className={`py-20 md:py-28 border-t border-border ${
            i % 2 === 1 ? 'bg-bg-soft' : ''
          }`}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <p className="font-mono text-[13px] uppercase tracking-[0.08em] text-ink-3">
                  Stage {s.num}
                </p>
                <h2 className="mt-3 text-[clamp(28px,4vw,42px)] tracking-[-0.025em] leading-[1.1] font-semibold">
                  {s.title}
                </h2>
                <p className="mt-3 text-[14px] font-mono uppercase tracking-[0.06em] text-ink-3">
                  {s.timebox}
                </p>
                {s.chip ? (
                  <span className="chip chip-orange mt-4 self-start inline-flex">
                    {s.chip}
                  </span>
                ) : null}
              </div>
              <div className="lg:col-span-8">
                <div className="flex flex-col gap-4">
                  {s.body.map((para, pi) => (
                    <p key={pi} className="text-[18px] leading-[1.6] text-ink-2">
                      {para}
                    </p>
                  ))}
                </div>
                {s.bulletsLabel ? (
                  <p className="eyebrow mt-8">{s.bulletsLabel}</p>
                ) : null}
                <ul
                  className={`${s.bulletsLabel ? 'mt-4' : 'mt-8'} grid grid-cols-1 sm:grid-cols-2 gap-3`}
                >
                  {s.bullets.map((b) => (
                    <li key={b.label}>
                      {b.href ? (
                        <Link
                          href={b.href}
                          className="group h-full flex items-start gap-3 border border-border rounded-md bg-bg p-4 hover:border-accent/40 transition-colors"
                        >
                          <ArrowRight
                            className="size-4 mt-1 shrink-0 text-ink group-hover:translate-x-0.5 transition-transform"
                            strokeWidth={2}
                            aria-hidden
                          />
                          <span className="text-[15px] leading-relaxed text-ink font-medium transition-colors group-hover:text-accent">
                            {b.label}
                          </span>
                        </Link>
                      ) : (
                        <div className="h-full flex items-start gap-3 border border-border rounded-md bg-bg p-4">
                          <Check
                            className="size-4 mt-1 shrink-0 text-ink"
                            strokeWidth={2}
                            aria-hidden
                          />
                          <p className="text-[15px] leading-relaxed text-ink">
                            {b.label}
                          </p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="py-24 md:py-32 border-t border-border">
        <Container>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold max-w-2xl">
            Common questions before the first conversation.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border-b border-border py-5"
              >
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                  <h3 className="text-[17px] font-medium text-ink">{f.q}</h3>
                  <span
                    aria-hidden
                    className="size-7 rounded-full border border-border-strong inline-flex items-center justify-center text-ink-3 group-open:rotate-45 transition-transform"
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

      <CTABand />

      <script
        id="ld-faq-how-it-works"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
