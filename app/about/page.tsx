import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';
import { CTABand } from '@/components/sections/cta-band';
import { PageFaq } from '@/components/sections/page-faq';
import { aboutFaqs } from '@/lib/faqs';
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
    images: [`/og?title=${encodeURIComponent('I’ve spent 25 years building what AI is now changing.')}&eyebrow=${encodeURIComponent('About Jim')}`],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

const roles = [
  {
    role: 'Advises',
    name: 'Me',
    body: 'I work directly with you and your leadership team. Diagnosis, decisions, setup, and a plan you can run.',
  },
  {
    role: 'Builds',
    name: site.zinc.name,
    href: site.zinc.url,
    body: 'When the work needs a full team (design, development, migration, integrations), ZINC builds it. I stay involved.',
  },
  {
    role: 'Keeps you in control',
    name: dispatch.name,
    href: dispatch.url,
    body: 'ZINC’s governance platform. When your website runs on AI agents, Dispatch keeps you in control.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Dark hero, flush under the fixed header */}
      <section className="dark-hero pb-24 md:pb-32">
        <Container className="pt-12 md:pt-16">
          <div className="max-w-3xl">
            <p className="eyebrow">About Jim</p>
            <h1 className="mt-4 text-[clamp(40px,6vw,64px)] tracking-[-0.03em] leading-[1.05] font-semibold">
              I&apos;ve spent 25 years building what AI is now changing.
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.6] max-w-[60ch] text-pretty">
              Now I help founders and CEOs make the right AI calls, and put
              them to work before their competitors do.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button
                href="/contact"
                size="lg"
                variant="primary-on-ink"
                withArrow
              >
                Get a free assessment
              </Button>
              <Button
                href="/services"
                size="lg"
                variant="ghost"
                className="!text-white !border !border-white/30 hover:!border-white hover:!bg-white/10"
              >
                See the four services
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
                I&apos;m the CEO of{' '}
                <a href={site.zinc.url} target="_blank" rel="noopener noreferrer">
                  ZINC
                </a>
                , a strategy, creative, and technology agency I&apos;ve led for
                more than 25 years. Brands, websites, commerce, marketing
                systems. 300+ projects.
              </p>
              <p>
                That taught me one thing: a good recommendation can&apos;t live
                in a slide deck. It has to work for your people, your brand, and
                the systems you already run.
              </p>
              <h2>What I believe</h2>
              <p>
                AI isn&apos;t a department. It&apos;s a new layer across the
                whole business.
              </p>
              <p>
                The winners won&apos;t have the most tools. They&apos;ll make
                the best decisions about where AI belongs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Jim, ZINC, Dispatch */}
      <section className="py-20 md:py-28 bg-bg-soft border-y border-border">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Jim, ZINC, and Dispatch</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
              How it fits together.
            </h2>
          </div>
          <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((r) => (
              <li
                key={r.name}
                className="flex flex-col gap-2 border border-border rounded-xl bg-bg p-6 md:p-7"
              >
                <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-3">
                  {r.role}
                </p>
                {r.href ? (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 self-start text-[20px] font-semibold tracking-[-0.015em] hover:text-accent transition-colors"
                  >
                    {r.name}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                ) : (
                  <p className="text-[20px] font-semibold tracking-[-0.015em] text-ink">
                    {r.name}
                  </p>
                )}
                <p className="text-[16px] leading-relaxed text-ink-2">{r.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-[clamp(22px,3vw,28px)] tracking-[-0.02em] leading-[1.25] font-semibold text-ink">
            I advise. ZINC builds. {dispatch.name} keeps you in control.
          </p>
        </Container>
      </section>
      <CTABand />
      <PageFaq
        id="about"
        faqs={aboutFaqs}
        title="Questions about Jim Zaslaw."
        intro="Background, how I work, and how Jim Zaslaw Consulting, ZINC, and Dispatch fit together."
      />
    </>
  );
}
