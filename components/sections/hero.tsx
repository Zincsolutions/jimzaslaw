import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="hero-glow" aria-hidden />
      <Container className="relative">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <span className="chip chip-orange">
            AI and digital strategy
          </span>
          <h1 className="mt-6 text-[44px] md:text-[72px] leading-[1.02] tracking-[-0.03em] font-semibold text-balance">
            <span className="md:block">Stop experimenting with AI.</span>{' '}
            <span className="md:block">Start scaling with it.</span>
          </h1>
          <p className="mt-6 text-[18px] md:text-[20px] leading-[1.55] text-ink-2 max-w-[56ch] text-balance">
            I help growing businesses turn scattered AI use into a real
            operating plan: the right tools, clear SOPs, and an{' '}
            <span className="whitespace-nowrap">AI-native</span> website and
            marketing engine built to grow with you.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-3">
            <Button href="/contact" size="lg" withArrow>
              Get a free assessment
            </Button>
            <Button href="/how-it-works" size="lg" variant="secondary">
              See how it works
            </Button>
          </div>
          <ul className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.08em] text-ink-3 font-mono">
            <li>25+ years building digital systems</li>
            <li aria-hidden className="hidden sm:block">·</li>
            <li>300+ projects launched</li>
            <li aria-hidden className="hidden sm:block">·</li>
            <li>CEO of ZINC</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
