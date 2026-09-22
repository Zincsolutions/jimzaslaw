import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { site, dispatch } from '@/lib/site';

const roles = [
  {
    name: 'Jim Zaslaw Consulting',
    role: 'Advises',
    body: 'Diagnosis, decisions, risk analysis, roadmap, and ongoing counsel.',
  },
  {
    name: site.zinc.name,
    role: 'Executes',
    body: 'Brand, design, development, migration, integrations, and support.',
    href: site.zinc.url,
  },
  {
    name: dispatch.name,
    role: 'Governs',
    body: 'Review, approvals, attribution, monitoring, and restore for AI website operations.',
    href: dispatch.url,
  },
];

export function ZincBand() {
  return (
    <section className="on-ink">
      <Container className="py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <p className="eyebrow">How the roles fit</p>
            <h2 className="text-[clamp(28px,4vw,40px)] tracking-[-0.025em] leading-[1.1] font-semibold">
              Advice first. Execution when it is useful.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4">
            <p className="text-[17px] md:text-[18px] leading-relaxed">
              Jim Zaslaw Consulting is my advisory practice. ZINC is the
              strategy, creative, and technology agency I lead.
            </p>
            <p className="text-[17px] md:text-[18px] leading-relaxed">
              Many clients only need a clear decision and roadmap. When the
              plan calls for brand work, design, a website migration,
              development, integrations, e-commerce, or ongoing support, ZINC
              can execute it without the strategy getting lost in handoff.
            </p>
            <p className="text-[17px] md:text-[18px] leading-relaxed">
              For AI-powered websites, Dispatch can add the management layer
              around agent-made changes: review, approvals, attribution,
              monitoring, and a restore path.
            </p>
            <Link
              href="/how-it-works"
              className="mt-2 inline-flex items-center gap-2 self-start px-5 h-11 rounded-pill border border-white/30 hover:border-accent hover:bg-accent text-white text-[15px] transition-colors"
            >
              See how engagements work
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>

        <ul className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 border-t">
          {roles.map((r) => (
            <li
              key={r.role}
              className="py-6 md:pb-0 md:pr-8 flex flex-col gap-2 border-b md:border-b-0 last:border-b-0"
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] !text-white/50">
                {r.role}
              </p>
              {r.href ? (
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[18px] font-semibold text-white hover:text-accent transition-colors self-start"
                >
                  {r.name}
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              ) : (
                <p className="text-[18px] font-semibold !text-white">{r.name}</p>
              )}
              <p className="text-[15px] leading-relaxed">{r.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
