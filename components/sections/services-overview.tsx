import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { services } from '@/lib/site';

const overviews = {
  'ai-operating-system': {
    subtitle: 'Organize how your team uses AI.',
    body: 'Turn scattered experimentation into shared prompts, workflows, standards, and repeatable processes your team can actually use.',
    bestFor: 'Best for teams using AI inconsistently.',
    deliverables: [
      'AI workspace',
      'Prompt library',
      'Workflow templates',
      'Tool guidelines',
      'Team onboarding',
    ],
  },
  'ai-visibility-engine': {
    subtitle: 'Get found when buyers ask AI for recommendations.',
    body: 'Identify the questions your customers are asking ChatGPT, Claude, Perplexity, and Google AI Overviews — then build content designed to make your business easier to understand, cite, and recommend.',
    bestFor: 'Best for businesses that rely on inbound leads, authority, and search visibility.',
    deliverables: [
      'Question map',
      'Content plan',
      'Answer-ready pages',
      'Publishing workflow',
    ],
  },
  'ai-brand-asset-system': {
    subtitle: 'Create on-brand visuals faster.',
    body: 'Build AI-ready brand guidelines, master prompts, and asset workflows so your team can generate better visuals with less cleanup.',
    bestFor: 'Best for teams that need more campaign, social, website, or sales visuals.',
    deliverables: [
      'Visual prompt system',
      'AI image workflow',
      'Asset library',
      'Brand usage rules',
    ],
  },
} as const;

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-border">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="Three practical ways to put AI to work."
          lede="Start with one focused assessment. Then build the system your business needs most."
        />
        <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const o = overviews[s.slug];
            return (
              <article
                key={s.slug}
                className="flex flex-col gap-5 border border-border rounded-xl bg-bg p-7 hover:border-border-strong transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className={`chip chip-${s.chip}`}>{s.short}</span>
                </div>
                <h3 className="text-[24px] tracking-[-0.02em] leading-[1.15] font-semibold">
                  {o.subtitle}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-2">
                  {o.body}
                </p>
                <p className="text-[13px] font-mono uppercase tracking-[0.06em] text-ink-3">
                  {o.bestFor}
                </p>
                <ul className="flex flex-col gap-2 pt-2 border-t border-border">
                  {o.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-[14px] text-ink-2"
                    >
                      <Check
                        className="size-3.5 mt-1 shrink-0 text-ink"
                        strokeWidth={2}
                        aria-hidden
                      />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-auto pt-2 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink hover:gap-2 transition-all"
                >
                  Explore {s.short}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
