import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { CTABand } from '@/components/sections/cta-band';
import { site, dispatch } from '@/lib/site';

const title = 'About Jim Zaslaw: AI Consultant & CEO of ZINC';
const description =
  'Jim Zaslaw is an AI consultant and CEO of ZINC. He helps leadership teams make practical AI and website decisions, grounded in 25+ years of building the work.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    title,
    description,
    url: '/about',
    images: [`/og?title=${encodeURIComponent('I advise from the perspective of someone who has built the work.')}&eyebrow=${encodeURIComponent('About Jim')}`],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Dark hero, flush under the fixed header */}
      <section className="dark-hero pb-24 md:pb-32">
        <Container className="pt-12 md:pt-16">
          <div className="max-w-3xl">
            <p className="eyebrow">About Jim</p>
            <h1 className="mt-4 text-[clamp(40px,6vw,64px)] tracking-[-0.03em] leading-[1.05] font-semibold">
              I advise from the perspective of someone who has built the work.
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.6] max-w-[60ch] text-pretty">
              For more than 25 years, I have helped businesses make decisions
              about brand, websites, e-commerce, marketing, and technology.
              Today, I apply that experience to the decisions AI is forcing
              every leadership team to make.
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
                href="/services"
                size="lg"
                variant="ghost"
                className="!text-white !border !border-white/30 hover:!border-white hover:!bg-white/10"
              >
                Explore the four services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Light content below */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border max-w-md">
                <Image
                  src="/jim-zaslaw.jpg"
                  alt="Jim Zaslaw, AI consultant and CEO of ZINC"
                  title="Jim Zaslaw"
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-7 prose-jz [&>p+p]:mt-4">
              <h2>My background</h2>
              <p>
                I am the CEO of ZINC, a strategy, creative, and technology
                agency I have led for more than 25 years. Across hundreds of
                projects, we have helped businesses build and evolve the
                systems they actually run on: brands, websites, e-commerce
                platforms, marketing engines, content operations, and
                technology integrations.
              </p>
              <p>
                That work taught me that a good recommendation cannot live in a
                slide deck. It has to account for the people who will use it,
                the brand it represents, the systems it touches, the risk of
                getting it wrong, and the realities of implementation.
              </p>
              <h2>What I believe about AI</h2>
              <p>
                AI is not a separate department. It is a new operating layer
                across the business.
              </p>
              <p>
                The companies that get lasting value from it will not be the
                ones that adopt the most tools. They will be the ones that make
                better decisions about where AI belongs, what context it needs,
                what people must approve, and how the work connects to business
                outcomes.
              </p>
              <p>
                That is especially true for websites. The question is no longer
                only how the site looks or which CMS it uses. Leaders also need
                to decide how agents will work on it, how the company keeps
                control, and whether an AI-native foundation is the right next
                step.
              </p>
              <h2>The relationship to ZINC and Dispatch</h2>
              <p>
                Jim Zaslaw Consulting is my advisory practice.{' '}
                <a href={site.zinc.url} target="_blank" rel="noopener noreferrer">
                  ZINC
                </a>{' '}
                is the agency I lead.
              </p>
              <p>
                Some engagements end with a decision, roadmap, and leadership
                alignment. Others reveal a need for brand, design, development,
                migration, integration, e-commerce, or ongoing support. When
                execution is needed, ZINC can take the work forward without a
                handoff to a team that was not part of the strategy.
              </p>
              <p>
                For companies moving toward AI-powered websites,{' '}
                <a href={dispatch.url} target="_blank" rel="noopener noreferrer">
                  Dispatch
                </a>{' '}
                can provide the management layer around agent work: requests,
                previews, approvals, attribution, monitoring, and restore
                capability.
              </p>
              <p>
                The roles stay clear: I advise, ZINC executes, and Dispatch
                governs AI website operations where it fits.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <CTABand
        title="Start with the decision that matters most."
        body="The first step is a 60–90 minute working session. Free. No commitment."
        primaryLabel="Request an AI Opportunity Assessment"
        secondaryLabel="Email Jim"
        secondaryHref="mailto:jim@jimzaslaw.com"
      />
    </>
  );
}
