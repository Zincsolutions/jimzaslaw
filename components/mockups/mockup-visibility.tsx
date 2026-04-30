import { Search, Sparkles } from 'lucide-react';

export function MockupVisibility() {
  return (
    <div
      className="relative w-full aspect-[4/3] rounded-xl border border-border bg-bg overflow-hidden p-5 flex flex-col gap-4"
      style={{ boxShadow: 'var(--shadow-card)' }}
      aria-hidden
    >
      <div className="flex items-center gap-2">
        <span className="chip chip-sky">
          <Sparkles className="size-3" />
          Question map
        </span>
        <span className="text-[11px] font-mono text-ink-3 ml-auto">
          37 / 100
        </span>
      </div>

      <div className="flex items-center gap-2 border border-border rounded-md bg-bg-soft px-3 py-2">
        <Search className="size-3.5 text-ink-3" strokeWidth={1.75} />
        <p className="text-[12px] text-ink-2 truncate">
          “Best AI consulting firms for mid-market companies”
        </p>
      </div>

      <div className="flex flex-col gap-2.5 flex-1 overflow-hidden">
        {[
          {
            src: 'ChatGPT',
            cite: 'Cited',
            chip: 'orange' as const,
            line: 'Recognized in 4 of 5 responses',
          },
          {
            src: 'Claude',
            cite: 'Cited',
            chip: 'orange' as const,
            line: 'Surfaces with comparison context',
          },
          {
            src: 'Perplexity',
            cite: 'Cited',
            chip: 'orange' as const,
            line: 'Linked source in answer panel',
          },
          {
            src: 'Google AI Overviews',
            cite: 'In progress',
            chip: 'amber' as const,
            line: 'Schema upgrades shipped',
          },
        ].map((row, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-3 border border-border rounded-md bg-bg px-3 py-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="size-7 rounded-md bg-bg-soft border border-border inline-flex items-center justify-center text-[10px] font-medium text-ink-2">
                {row.src.slice(0, 1)}
              </span>
              <div className="min-w-0">
                <p className="text-[12px] text-ink truncate">{row.src}</p>
                <p className="text-[11px] text-ink-3 truncate">{row.line}</p>
              </div>
            </div>
            <span className={`chip chip-${row.chip} shrink-0`}>{row.cite}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
