import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { services } from '@/lib/site';
import { cn } from '@/lib/cn';
import { MockupOS } from '@/components/mockups/mockup-os';
import { MockupVisibility } from '@/components/mockups/mockup-visibility';
import { MockupBrand } from '@/components/mockups/mockup-brand';

const mockups = {
  'ai-operating-system': MockupOS,
  'ai-visibility-engine': MockupVisibility,
  'ai-brand-asset-system': MockupBrand,
};

export function ServicesRows() {
  return (
    <section id="services" aria-labelledby="services-heading">
      <Container className="pt-24 md:pt-32 pb-12">
        <h2 id="services-heading" className="sr-only">
          The three services
        </h2>
      </Container>
      {services.map((p, i) => {
        const Mockup = mockups[p.slug];
        const reversed = i % 2 === 1;
        return (
          <div
            key={p.slug}
            className={cn(
              'border-y border-border',
              i % 2 === 1 ? 'bg-bg-soft' : 'bg-bg',
            )}
          >
            <Container className="py-20 md:py-32">
              <div
                className={cn(
                  'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center',
                )}
              >
                <div
                  className={cn(
                    'lg:col-span-5 flex flex-col gap-6',
                    reversed ? 'lg:order-2 lg:col-start-8' : '',
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className={`chip chip-${p.chip}`}>
                      Service {p.number}
                    </span>
                    <Eyebrow>{p.short}</Eyebrow>
                  </div>
                  <h3 className="text-[clamp(28px,4vw,42px)] tracking-[-0.025em] leading-[1.1] font-semibold">
                    {p.title}
                  </h3>
                  <p className="text-[18px] leading-relaxed text-ink-2">
                    {p.objective}
                  </p>
                  <ul className="flex flex-col gap-2.5 mt-2">
                    {p.deliverables.slice(0, 4).map((d, di) => (
                      <li key={di} className="flex items-start gap-2.5">
                        <Check
                          className="size-4 mt-1 text-ink shrink-0"
                          strokeWidth={2}
                          aria-hidden
                        />
                        <span className="text-[15px] text-ink-2">{d}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-[15px] font-medium text-ink hover:gap-2 transition-all w-fit"
                  >
                    Explore this service
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
                <div
                  className={cn(
                    'lg:col-span-7',
                    reversed ? 'lg:order-1 lg:col-start-1' : '',
                  )}
                >
                  <Mockup />
                </div>
              </div>
            </Container>
          </div>
        );
      })}
    </section>
  );
}
