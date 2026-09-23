import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

const secondaryClasses =
  'inline-flex items-center justify-center gap-2 min-h-12 py-2.5 px-6 max-w-full text-center leading-snug rounded-pill border border-white/30 text-white text-[16px] transition-all duration-200 ease-out hover:bg-accent hover:border-accent active:scale-[0.97]';

export function CTABand({
  title = 'Start with one free conversation.',
  body = '60–90 minutes with me. You leave with two or three clear moves and a recommended first step. No pitch. No commitment.',
  primaryLabel = 'Get a free assessment',
  primaryHref = '/contact',
  secondaryLabel = 'Or email me',
  secondaryHref = `mailto:${site.email}`,
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
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
              href={primaryHref}
              size="lg"
              variant="primary-on-ink"
              withArrow
            >
              {primaryLabel}
            </Button>
            {secondaryHref.startsWith('mailto:') ? (
              <a href={secondaryHref} className={secondaryClasses}>
                {secondaryLabel}
              </a>
            ) : (
              <Link href={secondaryHref} className={secondaryClasses}>
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
