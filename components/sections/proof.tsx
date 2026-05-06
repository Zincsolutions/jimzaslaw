import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';

const proofs = [
  {
    stat: '25+',
    label: 'years building digital systems',
  },
  {
    stat: '300+',
    label: 'projects launched',
  },
  {
    stat: '6',
    label: 'disciplines under one roof',
    sub: 'websites, ecommerce, branding, content, automation, CRM',
  },
  {
    stat: '1',
    label: 'founder-led practice',
    sub: 'agency execution support when needed',
  },
];

export function Proof() {
  return (
    <section className="py-24 md:py-32 bg-bg-soft border-t border-border">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Experience that reduces risk</Eyebrow>
          <h2 className="mt-4 text-[clamp(28px,4vw,42px)] tracking-[-0.025em] leading-[1.1] font-semibold">
            Backed by decades of real digital execution.
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-ink-2">
            Jim&apos;s consulting is backed by decades of real digital
            execution through ZINC.
          </p>
        </div>
        <dl className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {proofs.map((p, i) => (
            <div
              key={i}
              className="bg-bg p-8 md:p-10 flex flex-col gap-3 min-h-[180px]"
            >
              <dt className="text-[12px] uppercase tracking-[0.08em] text-ink-3 font-mono">
                {p.label}
              </dt>
              <dd className="text-[clamp(40px,5vw,56px)] tracking-[-0.025em] font-semibold leading-none text-ink">
                {p.stat}
              </dd>
              {p.sub ? (
                <p className="text-[13px] leading-relaxed text-ink-3 mt-auto">
                  {p.sub}
                </p>
              ) : null}
            </div>
          ))}
        </dl>
        <div className="mt-12 flex">
          <Button href="/contact" size="lg" withArrow>
            Schedule Your Free Assessment
          </Button>
        </div>
      </Container>
    </section>
  );
}
