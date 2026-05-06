import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';

const proofs = [
  {
    stat: '25+',
    label: 'Years building digital systems',
  },
  {
    stat: '300+',
    label: 'Projects launched',
  },
  {
    stat: '100s',
    label: 'Businesses helped',
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
        <dl className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {proofs.map((p, i) => (
            <div
              key={i}
              className="bg-bg p-8 md:p-10 flex flex-col justify-between gap-6 min-h-[200px]"
            >
              <dt className="text-[12px] uppercase tracking-[0.08em] text-ink-3 font-mono">
                {p.label}
              </dt>
              <dd className="text-[clamp(56px,7vw,84px)] tracking-[-0.03em] font-semibold leading-none text-ink">
                {p.stat}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-12 flex">
          <Button href="/contact" size="lg" withArrow>
            Request Your Free Assessment
          </Button>
        </div>
      </Container>
    </section>
  );
}
