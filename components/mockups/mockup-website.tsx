import { Check, Compass } from 'lucide-react';

const paths = [
  { name: 'Improve in place', note: 'Workflow gaps remain', fit: 2 },
  { name: 'Migrate as-is', note: 'Carries content debt forward', fit: 3 },
  {
    name: 'Migrate + improve',
    note: 'Keeps the brand, fixes key journeys',
    fit: 4,
    recommended: true,
  },
  { name: 'Redesign + migrate', note: 'Scope exceeds the need', fit: 2 },
];

const checks = ['URLs mapped', 'Redirects', 'Forms + CRM', 'Analytics', 'Approvals'];

export function MockupWebsite() {
  return (
    <div
      className="relative w-full aspect-[4/3] rounded-xl border border-border bg-bg overflow-hidden p-4 sm:p-5 flex flex-col gap-3 sm:gap-4"
      style={{ boxShadow: 'var(--shadow-card)' }}
      aria-hidden
    >
      <div className="flex items-center gap-2">
        <span className="chip chip-violet">
          <Compass className="size-3" />
          Transition decision
        </span>
        <span className="text-[11px] font-mono text-ink-3 ml-auto">Sample</span>
      </div>

      <div className="flex flex-col gap-1.5 sm:gap-2 flex-1 overflow-hidden">
        {paths.map((p) => (
          <div
            key={p.name}
            className={`flex items-center justify-between gap-3 border rounded-md px-3 py-1.5 sm:py-2 ${
              p.recommended
                ? 'border-border-strong bg-bg-soft'
                : 'border-border bg-bg'
            }`}
          >
            <div className="min-w-0">
              <p className="text-[12px] text-ink truncate">{p.name}</p>
              <p className="hidden sm:block text-[11px] text-ink-3 truncate">
                {p.note}
              </p>
            </div>
            {p.recommended ? (
              <span className="chip chip-violet shrink-0">Recommended</span>
            ) : (
              <span className="flex items-center gap-1 shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-3 rounded-full ${
                      i < p.fit ? 'bg-ink-3' : 'bg-border'
                    }`}
                  />
                ))}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="hidden sm:flex flex-wrap gap-x-3 gap-y-1.5 pt-3 border-t border-border">
        {checks.map((c) => (
          <span
            key={c}
            className="inline-flex items-center gap-1 text-[11px] font-mono text-ink-3"
          >
            <Check className="size-3 text-ink-2" strokeWidth={2} />
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
