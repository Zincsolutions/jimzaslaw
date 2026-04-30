import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { CTABand } from '@/components/sections/cta-band';
import { ZincBand } from '@/components/sections/zinc-band';

export const metadata: Metadata = {
  title: 'About Jim Zaslaw',
  description:
    'Jim Zaslaw is the CEO of ZINC and the founder of Jim Zaslaw Consulting. Twenty years of building digital systems, applied to AI specifically.',
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-28">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-4 text-[clamp(40px,6vw,64px)] tracking-[-0.03em] leading-[1.05] font-semibold">
              Strategy from someone who has actually shipped the work.
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.6] text-ink-2">
              Most people calling themselves &ldquo;AI consultants&rdquo; today
              have been doing this work for eighteen months. Jim has spent
              twenty years translating new technology into operating systems
              that businesses actually run on.
            </p>
          </div>
          <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
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
                technology. Websites, brands, e-commerce platforms, marketing
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
                with twenty years of agency execution capacity ready to deploy.
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
        title="Want to talk?"
        body="The first conversation is a 60–90 minute working session. Free. No commitment."
      />
    </>
  );
}
