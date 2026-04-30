import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

const stages = [
  {
    num: '01',
    title: 'Clarity',
    body: 'Identify what actually matters for the business. Look at how the company runs today and where AI fits in — and where it doesn’t.',
    pills: ['Practical', 'Diagnostic'],
  },
  {
    num: '02',
    title: 'Structure',
    body: 'Put repeatable systems in place — workspaces, prompt libraries, workflows, brand-aligned visual production, content engines.',
    pills: ['Structured', 'Efficient'],
  },
  {
    num: '03',
    title: 'Scale',
    body: 'Enable the team to operate without the founder driving every detail, and keep systems current as the AI landscape evolves.',
    pills: ['Scalable', 'Compounding'],
  },
];

export function Approach() {
  return (
    <section id="approach" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="The approach"
          title="Clarity first. Structure second. Scale third."
          lede="Not about overwhelming teams with new tools or theory. About identifying what actually matters, putting practical systems in place, and enabling the team to operate more effectively without the founder having to drive every detail."
        />
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {stages.map((s) => (
            <div
              key={s.num}
              className="bg-bg p-8 md:p-10 flex flex-col gap-5 min-h-[260px]"
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-3">
                Stage {s.num}
              </p>
              <h3 className="text-[28px] md:text-[32px] tracking-[-0.025em] font-semibold leading-[1.1]">
                {s.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-ink-2">{s.body}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {s.pills.map((p) => (
                  <span key={p} className="chip chip-stone">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
