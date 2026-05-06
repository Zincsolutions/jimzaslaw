import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';
import { CTABand } from '@/components/sections/cta-band';
import { services } from '@/lib/site';
import { MockupOS } from '@/components/mockups/mockup-os';
import { MockupVisibility } from '@/components/mockups/mockup-visibility';
import { MockupBrand } from '@/components/mockups/mockup-brand';

const mockups = {
  'ai-operating-system': MockupOS,
  'ai-visibility-engine': MockupVisibility,
  'ai-brand-asset-system': MockupBrand,
};

export async function generateStaticParams() {
  return services.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = services.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.short,
    description: p.tagline,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const p = services.find((x) => x.slug === slug);
  if (!p) notFound();
  const Mockup = mockups[p.slug];
  const others = services.filter((x) => x.slug !== p.slug);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className={`chip chip-${p.chip}`}>
                  Service {p.number}
                </span>
                <Eyebrow>{p.short}</Eyebrow>
              </div>
              <h1 className="text-[clamp(36px,5vw,56px)] tracking-[-0.025em] leading-[1.05] font-semibold">
                {p.title}
              </h1>
              <p className="text-[18px] md:text-[20px] leading-[1.55] text-ink-2">
                {p.objective}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button href="/contact" size="lg" withArrow>
                  Get a Free Assessment
                </Button>
                <Button href="/how-it-works" size="lg" variant="secondary">
                  How It Works
                </Button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <Mockup />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-bg-soft border-y border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Scope</Eyebrow>
              <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
                What&apos;s covered.
              </h2>
            </div>
            <ul className="lg:col-span-7 flex flex-col divide-y divide-border border-y border-border">
              {p.scope.map((s, i) => (
                <li key={i} className="py-4 flex items-start gap-3">
                  <span
                    className="font-mono text-[12px] uppercase tracking-[0.06em] text-ink-3 w-8 shrink-0 mt-1"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[16px] leading-relaxed text-ink">{s}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Deliverables</Eyebrow>
              <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
                What you take away.
              </h2>
            </div>
            <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {p.deliverables.map((d, i) => (
                <li
                  key={i}
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

      <section className="py-20 md:py-28 bg-bg-soft border-y border-border">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Outcome</Eyebrow>
            <p className="mt-4 text-[clamp(22px,3vw,28px)] leading-[1.35] tracking-[-0.015em] text-ink">
              &ldquo;{p.outcome}&rdquo;
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Eyebrow>Other services</Eyebrow>
          <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
            Often combined with.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group border border-border rounded-xl p-6 hover:border-border-strong transition-colors flex items-center justify-between gap-4"
              >
                <div className="flex flex-col gap-2">
                  <span className={`chip chip-${o.chip} self-start`}>
                    Service {o.number}
                  </span>
                  <p className="text-[20px] tracking-[-0.015em] font-semibold">
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

      <CTABand />
    </>
  );
}
