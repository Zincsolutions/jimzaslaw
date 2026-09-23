import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { ContactForm } from '@/components/contact-form';
import { PageFaq } from '@/components/sections/page-faq';
import { contactFaqs } from '@/lib/faqs';
import { site } from '@/lib/site';

const title = 'Get a Free AI Assessment';
const description =
  'Tell Jim Zaslaw about the AI, workflow, or website decision you are facing. He will review it and follow up to schedule a free, focused working session.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title,
    description,
    url: '/contact',
    images: [`/og?title=${encodeURIComponent('Let’s find your first move.')}&eyebrow=${encodeURIComponent('Contact')}`],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Free assessment</Eyebrow>
              <h1 className="mt-4 text-[clamp(36px,5vw,56px)] tracking-[-0.025em] leading-[1.05] font-semibold text-balance">
                Let&apos;s find your first move.
              </h1>
              <p className="mt-6 text-[18px] md:text-[19px] leading-[1.6] text-ink-2 max-w-xl">
                Tell me what you&apos;re trying to fix. I&apos;ll reply within
                one business day to set up a free 60–90 minute session.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-28 flex flex-col gap-8 border border-border rounded-xl p-8 bg-bg">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logos/jim-mark.svg"
                    alt=""
                    width={56}
                    height={56}
                    className="size-14"
                  />
                  <div>
                    <p className="text-[16px] font-medium text-ink">
                      Jim Zaslaw
                    </p>
                    <p className="text-[13px] text-ink-3">
                      Founder · CEO of ZINC
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-[14px]">
                  <div>
                    <p className="text-ink-3 text-[12px] uppercase tracking-[0.08em] font-mono">
                      Email
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-ink hover:text-accent hover:underline underline-offset-4 transition-colors"
                    >
                      {site.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-ink-3 text-[12px] uppercase tracking-[0.08em] font-mono">
                      What you get
                    </p>
                    <ul className="mt-1 flex flex-col gap-1 text-ink-2">
                      <li>· 60–90 minutes with me</li>
                      <li>· A short written summary</li>
                      <li>· Two or three high-impact moves</li>
                      <li>· A recommended first step</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-ink-3 text-[12px] uppercase tracking-[0.08em] font-mono">
                      What it costs
                    </p>
                    <p className="text-ink-2">Free. No commitment.</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
      <PageFaq
        id="contact"
        faqs={contactFaqs}
        title="Questions before you reach out."
        intro="What happens after you submit, how to prepare, and what it costs."
        ctaLabel="Email Jim"
        ctaHref={`mailto:${site.email}`}
        className="border-t border-border bg-bg-soft"
      />
    </>
  );
}
