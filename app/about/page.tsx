import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { CTABand } from '@/components/sections/cta-band';
import { ZincBand } from '@/components/sections/zinc-band';

const title = 'About Jim Zaslaw';
const description =
  'Jim Zaslaw is the CEO of ZINC and the founder of Jim Zaslaw Consulting. More than 25 years of building digital systems, applied to AI specifically.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    title,
    description,
    url: '/about',
    images: [`/og?title=${encodeURIComponent('Strategy from someone who has actually shipped the work.')}&eyebrow=${encodeURIComponent('About Jim')}`],
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
      {/* Dark hero — sits flush under the fixed header */}
      <section className="dark-hero pb-24 md:pb-32">
        <Container className="pt-12 md:pt-16">
          <div className="max-w-3xl">
            <p className="eyebrow">About Jim</p>
            <h1 className="mt-4 text-[clamp(40px,6vw,64px)] tracking-[-0.03em] leading-[1.05] font-semibold">
              Strategy from someone who has actually shipped the work.
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.6] max-w-[60ch] text-pretty">
              Jim Zaslaw helps growing businesses turn scattered AI usage into
              practical systems for marketing, content, operations, and brand
              execution.
            </p>
            <p className="mt-4 text-[18px] md:text-[20px] leading-[1.6] max-w-[60ch] text-pretty">
              His perspective is grounded in more than 25 years leading ZINC —
              building brands, websites, ecommerce platforms, marketing
              systems, and technology integrations for real businesses.
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
                href="/services"
                size="lg"
                variant="ghost"
                className="!text-white !border !border-white/30 hover:!border-white hover:!bg-white/10"
              >
                Explore Services
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
                  src="/jz-headshot-v2.png"
                  alt="Jim Zaslaw, Founder"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-7 prose-jz">
              <h2>Background</h2>
              <p>
                Jim Zaslaw is the CEO of ZINC, a digital agency he has led for
                over two decades, helping hundreds of businesses design, build,
                and scale digital systems across branding, marketing, and
                technology. Brands, websites, e-commerce platforms, marketing
                engines, internal tools — the operating systems businesses
                actually run on.
              </p>
              <h2>What he believes about AI</h2>
              <p>
                AI is not a separate discipline. It&apos;s the next layer on the
                same stack. The companies that will get value from AI are the
                ones whose advisor understands how digital systems are built —
                not just how to write a prompt.
              </p>
              <p>
                The gap most teams hit isn&apos;t access to tools. It&apos;s the
                absence of structure. The work is to translate fragmented usage
                into something repeatable, on-brand, and tied to outcomes
                leadership can articulate.
              </p>
              <h2>The relationship to ZINC</h2>
              <p>
                Jim Zaslaw Consulting is strategic advisory. ZINC is execution.
                Most engagements stand on the consulting work alone. When the
                need goes beyond strategy — a website redesign, brand refresh,
                advanced integrations, e-commerce — ZINC is right behind it,
                with more than two decades of agency execution capacity ready
                to deploy.
              </p>
              <p>
                That continuity is rare. Most AI consultants can&apos;t build
                what they recommend. ZINC can.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <ZincBand />
      <CTABand
        title="Ready to organize AI into a practical business advantage?"
        body="The first step is a 60–90 minute working session. Free. No commitment."
        primaryLabel="Get a Free AI Opportunity Assessment"
        secondaryLabel="Email Jim"
        secondaryHref="mailto:jim@jimzaslaw.com"
      />
    </>
  );
}
