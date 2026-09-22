import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import type { Faq } from '@/lib/faqs';

// Closing FAQ block that sits directly above the footer on every page.
// Answers stay in the server-rendered HTML (inside <details>) and are
// mirrored in FAQPage JSON-LD so search and AI crawlers can read both.
export function PageFaq({
  id,
  faqs,
  title = 'Frequently asked questions.',
  intro,
  ctaLabel = 'Request an AI Opportunity Assessment',
  ctaHref = '/contact',
  className,
}: {
  id: string;
  faqs: Faq[];
  title?: string;
  intro?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}) {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section id="faq" className={cn('py-20 md:py-28 scroll-mt-24', className)}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold">
              {title}
            </h2>
            {intro ? (
              <p className="text-[16px] leading-relaxed text-ink-2">{intro}</p>
            ) : null}
            <div className="mt-2 flex">
              <Button href={ctaHref} variant="secondary" withArrow>
                {ctaLabel}
              </Button>
            </div>
          </div>
          <div className="lg:col-span-8 border-t border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-border py-5">
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                  <h3 className="text-[17px] font-medium text-ink">{f.q}</h3>
                  <span
                    aria-hidden
                    className="size-7 shrink-0 rounded-full border border-border-strong inline-flex items-center justify-center text-ink-3 group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2 max-w-[70ch]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
      <script
        id={`ld-faq-${id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </section>
  );
}
