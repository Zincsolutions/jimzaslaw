import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { ContactForm } from '@/components/contact-form';
// import { CalendlyEmbed } from '@/components/calendly-embed';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Request a Free AI Opportunity Assessment',
  description:
    'Tell Jim Zaslaw about your business and where AI could help. He’ll review your information and follow up to schedule a focused assessment conversation.',
};

export default function ContactPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>Free AI Opportunity Assessment</Eyebrow>
            <h1 className="mt-4 text-[clamp(36px,5vw,56px)] tracking-[-0.025em] leading-[1.05] font-semibold">
              Request a Free AI Opportunity Assessment.
            </h1>
            <p className="mt-6 text-[18px] md:text-[19px] leading-[1.6] text-ink-2 max-w-xl">
              Tell me a little about your business and where you think AI could
              help. I&apos;ll review your information and follow up to schedule
              a focused assessment conversation.
            </p>

            {/*
              Calendly embed temporarily disabled — visitors now request the
              assessment via the form below, and Jim follows up directly to
              schedule. Restore by uncommenting the import + this section.

              <div className="mt-10">
                <h2 className="text-[14px] font-medium uppercase tracking-[0.08em] text-ink-3 mb-3">
                  Pick a time directly
                </h2>
                <CalendlyEmbed url={site.calendly} />
              </div>
            */}

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
                    <li>· A 60–90 minute working session</li>
                    <li>· A short written summary</li>
                    <li>· 2–3 high-impact recommendations</li>
                    <li>· A clear next step</li>
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
  );
}
