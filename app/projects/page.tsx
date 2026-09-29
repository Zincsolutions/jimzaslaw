import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { CTABand } from '@/components/sections/cta-band';
import { PageFaq } from '@/components/sections/page-faq';
import { ProjectBrand } from '@/components/project-brand';
import { projects } from '@/lib/projects';
import { projectsFaqs } from '@/lib/faqs';
import { site } from '@/lib/site';

const title = 'AI Projects: DiscoverArt, Predictant, GarageWire, Dispatch';
const description =
  'The AI-powered products Jim Zaslaw is building: DiscoverArt, Predictant, GarageWire, and Dispatch. Where new AI tools get tested before they reach clients.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/projects' },
  openGraph: {
    title,
    description,
    url: '/projects',
    images: [
      `/og?title=${encodeURIComponent('Where I build and test AI before I bring it to clients.')}&eyebrow=${encodeURIComponent('AI Projects')}`,
    ],
  },
  twitter: { card: 'summary_large_image', title, description },
};

export default function ProjectsPage() {
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AI projects by Jim Zaslaw',
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'WebSite',
        name: p.name,
        url: p.url,
        description: p.summary,
        creator: { '@id': `${site.url}#jim` },
      },
    })),
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${site.url}/about` },
      { '@type': 'ListItem', position: 3, name: 'AI Projects', item: `${site.url}/projects` },
    ],
  };

  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>AI projects</Eyebrow>
            <h1 className="mt-4 text-[clamp(40px,6vw,64px)] tracking-[-0.03em] leading-[1.05] font-semibold text-balance">
              Where I build and test AI before I bring it to clients.
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.6] text-ink-2 text-pretty">
              Alongside my consulting practice and ZINC, I’m developing
              AI-powered products of my own. Each one is a proving ground: new
              tools, models, and workflows get tested on real users and real
              data here first, and what holds up becomes part of how I help
              clients scale.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] uppercase tracking-[0.08em] text-ink-3">
              {projects.map((p) => (
                <li key={p.slug}>
                  <a href={`#${p.slug}`} className="hover:text-accent transition-colors">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {projects.map((p, i) => (
        <section
          key={p.slug}
          id={p.slug}
          className={`py-16 md:py-24 border-t border-border scroll-mt-24 ${
            i % 2 === 1 ? 'bg-bg-soft' : ''
          }`}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${p.name}`}
                  className="block transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ boxShadow: 'var(--shadow-card)', borderRadius: 'var(--r-xl)' }}
                >
                  <ProjectBrand project={p} />
                </a>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-5">
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-3">
                  {String(i + 1).padStart(2, '0')} · {p.category}
                </p>
                <h2 className="text-[clamp(30px,4vw,44px)] tracking-[-0.025em] leading-[1.05] font-semibold">
                  {p.name}
                </h2>
                <p className="text-[20px] md:text-[22px] tracking-[-0.015em] leading-[1.3] font-semibold text-ink">
                  {p.tagline}
                </p>
                <p className="text-[17px] leading-relaxed text-ink-2">{p.summary}</p>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="border-t border-border pt-4">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3">
                      AI at work
                    </dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-ink">
                      {p.aiAtWork}
                    </dd>
                  </div>
                  <div className="border-t border-border pt-4">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3">
                      What carries over to clients
                    </dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-ink">
                      {p.forClients}
                    </dd>
                  </div>
                </dl>
                <div className="pt-2">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[15px] font-medium text-ink hover:text-accent transition-colors"
                  >
                    Visit {p.domain}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="py-16 md:py-24 border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>Built the way I recommend</Eyebrow>
              <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
                AI-native from the first commit.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              <p className="text-[17px] leading-relaxed text-ink-2">
                Each project is an AI-native codebase, built and maintained with
                AI coding agents. That is the same operating model I help
                clients evaluate, so the advice comes from running it, not
                reading about it: the speed, the review process, and where
                people still need to be in the loop.
              </p>
              <Link
                href="/services/ai-website-transition-strategy"
                className="inline-flex items-center gap-1.5 self-start text-[15px] font-medium text-ink hover:text-accent transition-colors"
              >
                See AI Website Transition Strategy
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        title="Put what’s working to work in your business."
        body="The free assessment is where we find which AI tools and workflows fit your business first. 60–90 minutes. No pitch. No commitment."
      />
      <PageFaq
        id="projects"
        faqs={projectsFaqs}
        title="Questions about Jim’s AI projects."
        intro="What each product does, how they use AI, and how the work carries over to clients."
      />

      <script
        id="ld-itemlist-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <script
        id="ld-breadcrumb-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
