import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

export function CTABand({
  title = 'Get a free AI Opportunity Snapshot.',
  body = 'A 60–90 minute working session. A short written summary, two to three high-impact recommendations, and a clear next step. No commitment.',
}: {
  title?: string;
  body?: string;
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
              Schedule an Assessment
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-pill border border-white/30 hover:border-white text-white text-[16px]"
            >
              Talk first
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
