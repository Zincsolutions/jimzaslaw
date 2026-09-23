import Image from 'next/image';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';

const bullets = [
  'Business-first, not tool-first.',
  'Brand-aware, not generic.',
  'Clear about risk, ownership, and implementation.',
  'I lead every engagement myself.',
];

const roles = [
  { role: 'Advises', name: 'Jim', body: 'Diagnosis, decisions, setup, and a plan you can run.' },
  { role: 'Builds', name: 'ZINC', body: 'Design, development, migration, and integrations when the work needs a full team.' },
  { role: 'Keeps you in control', name: 'Dispatch', body: 'ZINC’s governance platform, for websites that run on AI agents.' },
];

export function WhyJim() {
  return (
    <section id="about-jim" className="py-24 md:py-32 border-t border-border">
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
            <Eyebrow>Your guide</Eyebrow>
            <h2 className="text-[clamp(28px,4vw,42px)] tracking-[-0.025em] leading-[1.1] font-semibold">
              You don&apos;t need an AI vendor. You need someone who&apos;s built
              this before.
            </h2>
            <p className="text-[18px] leading-relaxed text-ink-2">
              You&apos;re running a business, not an AI lab. Keeping up with
              every new tool shouldn&apos;t be your job.
            </p>
            <p className="text-[18px] leading-relaxed text-ink-2">
              I&apos;ve spent 25+ years helping companies build brands,
              websites, commerce, and marketing systems through ZINC. AI
              doesn&apos;t sit outside that work. It touches your website,
              content, brand, sales, and team habits, and that&apos;s exactly
              where I&apos;ve worked.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
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
        <ul className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border pt-10">
          {roles.map((r) => (
            <li key={r.name} className="flex flex-col gap-1.5">
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-3">
                {r.role}
              </p>
              <p className="text-[20px] font-semibold tracking-[-0.015em] text-ink">
                {r.name}
              </p>
              <p className="text-[15px] leading-relaxed text-ink-2">{r.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-[clamp(20px,2.6vw,26px)] tracking-[-0.02em] leading-[1.3] font-semibold text-ink">
          I advise. ZINC builds. Dispatch keeps you in control.
        </p>
      </Container>
    </section>
  );
}
