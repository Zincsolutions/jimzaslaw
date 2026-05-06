import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

export function CTABand({
  title = 'Know where AI can help your business next.',
  body = 'Start with a Free AI Opportunity Assessment. You will leave with clarity, recommendations, and a practical next step.',
  primaryLabel = 'Get a Free AI Opportunity Assessment',
  secondaryLabel = 'Contact Jim',
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
} = {}) {
  return (
    <section className="on-ink relative overflow-hidden">
      <Image
        src="/logos/jim-mark.svg"
        alt=""
        width={420}
        height={420}
        aria-hidden
        className="absolute -right-16 -bottom-24 w-[320px] md:w-[420px] opacity-[0.07] pointer-events-none"
      />
      <Container className="relative py-20 md:py-28">
        <div className="flex flex-col gap-6 max-w-3xl">
          <h2 className="text-[clamp(32px,5vw,52px)] tracking-[-0.025em] leading-[1.05] font-semibold">
            {title}
          </h2>
          <p className="text-[18px] md:text-[20px] leading-relaxed text-white/80 max-w-2xl">
            {body}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button
              href="/contact"
              size="lg"
              variant="primary-on-ink"
              withArrow
            >
              {primaryLabel}
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-pill border border-white/30 hover:border-white text-white text-[16px]"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
