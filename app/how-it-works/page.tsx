import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';
import { CTABand } from '@/components/sections/cta-band';
import { PageFaq } from '@/components/sections/page-faq';
import { planSteps } from '@/lib/site';
import { howItWorksFaqs } from '@/lib/faqs';
import Link from 'next/link';

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
    images: [`/og?title=${encodeURIComponent('Three steps. Clear value at each one.')}&eyebrow=${encodeURIComponent('How It Works')}`],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};


export default function HowItWorksPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>How it works</Eyebrow>
            <h1 className="mt-4 text-[clamp(40px,6vw,64px)] tracking-[-0.03em] leading-[1.05] font-semibold">
              Three steps. Clear value at each one.
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.6] text-ink-2 text-pretty">
              Start free. Commit only when the opportunity is obvious.
            </p>
            <div className="mt-8 flex gap-3">
              <Button href="/contact" size="lg" withArrow>
                Get a free assessment
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-t border-border bg-bg-soft">
        <Container>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planSteps.map((st, i) => (
              <li
                key={st.name}
                className="flex flex-col gap-3 border border-border rounded-xl bg-bg p-7"
              >
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-3">
                  Step {i + 1}
                </p>
                <h2 className="text-[28px] tracking-[-0.025em] leading-[1.1] font-semibold">
                  {st.name}
                </h2>
                <p className="font-mono text-[13px] uppercase tracking-[0.06em] text-accent">
                  {st.meta}
                </p>
                <p className="text-[16px] leading-relaxed text-ink-2">{st.body}</p>
                {'get' in st ? (
                  <p className="mt-auto pt-4 border-t border-border text-[15px] leading-relaxed text-ink">
                    <span className="font-medium">You get:</span> {st.get}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-10 text-[clamp(20px,2.6vw,26px)] tracking-[-0.02em] leading-[1.3] font-semibold text-ink">
            Most consultants stop at step 2. Step 3 is where it compounds.
          </p>
          <p className="mt-6 text-[16px] text-ink-2">
            Step 2 is one of{' '}
            <Link href="/services" className="font-medium text-ink underline underline-offset-4 decoration-1 hover:text-accent">
              four services
            </Link>
            .
          </p>
        </Container>
      </section>

      <CTABand />
      <PageFaq
        id="how-it-works"
        faqs={howItWorksFaqs}
        title="Common questions before the first conversation."
        intro="What to expect from the assessment, engagements, timelines, and pricing."
      />

    </>
  );
}
