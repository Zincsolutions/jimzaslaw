import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="hero-glow" aria-hidden />
      <Container className="relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="chip chip-orange">
            AI strategy and implementation
          </span>
          <h1 className="mt-6 text-[44px] md:text-[72px] leading-[1.02] tracking-[-0.03em] font-semibold max-w-[16ch]">
            Turning AI usage into business advantage.
          </h1>
          <p className="mt-6 text-[18px] md:text-[20px] leading-[1.55] text-ink-2 max-w-[58ch]">
            For executives and founders whose teams are already using AI — but
            whose investment in it isn&apos;t yet showing up in the work that
            ships, the speed it ships at, or the numbers on the P&amp;L.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-3">
            <Button href="/contact" size="lg" withArrow>
              Schedule an Assessment
            </Button>
            <Button href="/#approach" size="lg" variant="secondary">
              See the approach
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.08em] text-ink-3 font-mono">
            <li>20+ years building digital systems</li>
            <li aria-hidden>·</li>
            <li>100s of businesses</li>
            <li aria-hidden>·</li>
            <li>Strategy → execution under one roof</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
