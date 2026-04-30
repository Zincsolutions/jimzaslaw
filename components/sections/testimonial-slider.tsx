'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { cn } from '@/lib/cn';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Jim brought clarity to something that felt overwhelming. He didn’t just introduce AI tools — he helped us understand where they actually fit in our business and how to use them to drive results. Within weeks, we were operating faster and making better decisions.',
    name: 'Michael Harrington',
    role: 'CEO',
    initials: 'MH',
  },
  {
    quote:
      'Jim has a rare ability to see inefficiencies across systems and immediately map them to practical AI solutions. The workflows he helped us implement are saving our team hours every week and improving the quality of our output.',
    name: 'Daniel Whitaker',
    role: 'Founder',
    initials: 'DW',
  },
  {
    quote:
      'We’ve worked with agencies for years, but Jim operates at a different level. He combines strategy, creative direction, and AI in a way that actually elevates the brand. The asset systems and tools he built for us are now core to how we produce content.',
    name: 'Lauren Mitchell',
    role: 'VP of Marketing',
    initials: 'LM',
  },
];

export function TestimonialSlider() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  if (reducedMotion) {
    return <ReducedMotionStack />;
  }
  return <CarouselSlider />;
}

function CarouselSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 7000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 md:py-32" aria-labelledby="testimonials-heading">
      <Container>
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <Eyebrow>Testimonials</Eyebrow>
            <h2
              id="testimonials-heading"
              className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold max-w-2xl"
            >
              What clients say.
            </h2>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous testimonial"
              className="size-11 rounded-full border border-border-strong inline-flex items-center justify-center hover:bg-bg-soft"
            >
              <ArrowLeft className="size-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next testimonial"
              className="size-11 rounded-full border border-border-strong inline-flex items-center justify-center hover:bg-bg-soft"
            >
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div
            className="flex"
            role="tablist"
            aria-live="polite"
            aria-label="Testimonials"
          >
            {testimonials.map((t, i) => (
              <article
                key={t.name}
                role="tabpanel"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${testimonials.length}`}
                className="min-w-0 shrink-0 grow-0 basis-full pr-6"
              >
                <div className="border border-border rounded-xl bg-bg p-8 md:p-12 flex flex-col gap-6">
                  <Quote
                    className="size-8 text-ink-3"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <p className="text-[22px] md:text-[28px] leading-[1.35] tracking-[-0.015em] text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 mt-4 pt-6 border-t border-border">
                    <span className="size-12 rounded-full bg-bg-soft border border-border inline-flex items-center justify-center text-[14px] font-medium text-ink">
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-[15px] font-medium text-ink">
                        {t.name}
                      </p>
                      <p className="text-[13px] text-ink-3">{t.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Testimonial pagination"
          className="mt-8 flex justify-center gap-2"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={selected === i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                'h-2 rounded-full transition-all',
                selected === i ? 'w-6 bg-ink' : 'w-2 bg-border-strong',
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ReducedMotionStack() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="testimonials-heading">
      <Container>
        <Eyebrow>Testimonials</Eyebrow>
        <h2
          id="testimonials-heading"
          className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold max-w-2xl"
        >
          What clients say.
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="border border-border rounded-xl bg-bg p-8 flex flex-col gap-5"
            >
              <Quote className="size-6 text-ink-3" aria-hidden />
              <p className="text-[15px] leading-relaxed text-ink-2">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto pt-5 border-t border-border">
                <span className="size-10 rounded-full bg-bg-soft border border-border inline-flex items-center justify-center text-[12px] font-medium text-ink">
                  {t.initials}
                </span>
                <div>
                  <p className="text-[14px] font-medium text-ink">{t.name}</p>
                  <p className="text-[12px] text-ink-3">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
