import Image from 'next/image';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';

const bullets = [
  'Business first. Tools second.',
  'I lead every engagement myself.',
  'When the job gets big, my team at ZINC builds it.',
];

export function WhyJim() {
  return (
    <section id="about-jim" className="py-24 md:py-32 bg-bg-soft">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border max-w-md">
              <Image
                src="/jim-zaslaw.jpg"
                alt="Jim Zaslaw, AI consultant and CEO of ZINC"
                title="Jim Zaslaw"
                fill
                unoptimized
                priority={false}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Eyebrow>Why me</Eyebrow>
            <h2 className="text-[clamp(28px,4vw,42px)] tracking-[-0.025em] leading-[1.1] font-semibold">
              Advice from someone who&apos;s built the work.
            </h2>
            <p className="text-[18px] leading-relaxed text-ink-2">
              I&apos;ve spent 25+ years helping companies build brands,
              websites, commerce, and marketing systems. That&apos;s exactly
              what AI is changing now. I don&apos;t sell tools. I help you make
              the right calls, set them up, and make them stick.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-[15px] text-ink"
                >
                  <Check
                    className="size-4 mt-1 shrink-0 text-ink"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex">
              <Button href="/about" size="lg" variant="secondary" withArrow>
                More about me
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
