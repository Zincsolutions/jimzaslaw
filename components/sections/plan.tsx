import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { planSteps } from '@/lib/site';

export function Plan() {
  return (
    <section className="py-24 md:py-32 bg-bg-soft border-y border-border">
      <Container>
        <SectionHeader
          eyebrow="The plan"
          title="Three steps from scattered to systematic."
        />
        <ol className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {planSteps.map((st, i) => (
            <li
              key={st.name}
              className="flex flex-col gap-3 border border-border rounded-xl bg-bg p-7"
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-3">
                Step {i + 1}
              </p>
              <h3 className="text-[26px] tracking-[-0.025em] leading-[1.1] font-semibold">
                {st.name}
              </h3>
              <p className="font-mono text-[13px] uppercase tracking-[0.06em] text-accent">
                {st.meta}
              </p>
              <p className="text-[16px] leading-relaxed text-ink-2">{st.body}</p>
            </li>
          ))}
        </ol>
        <Link
          href="/how-it-works"
          className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink hover:text-accent hover:gap-2 transition-all"
        >
          See how it works
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Container>
    </section>
  );
}
