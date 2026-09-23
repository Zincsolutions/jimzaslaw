import { LayoutGrid, Bot, Megaphone, Users, Wrench } from 'lucide-react';

export function MockupOS() {
  return (
    <div
      className="relative w-full aspect-[4/3] rounded-xl border border-border bg-bg overflow-hidden"
      style={{ boxShadow: 'var(--shadow-card)' }}
      aria-hidden
    >
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-border bg-bg-soft">
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="ml-3 text-[11px] font-mono text-ink-3">
          ai-workspace · prompts
        </span>
      </div>

      <div className="flex h-[calc(100%-2.25rem)]">
        {/* Sidebar */}
        <aside className="w-[34%] border-r border-border bg-bg-soft p-3 flex flex-col gap-1.5">
          {[
            { icon: LayoutGrid, label: 'Marketing', active: true },
            { icon: Megaphone, label: 'Content' },
            { icon: Users, label: 'Sales' },
            { icon: Wrench, label: 'Operations' },
            { icon: Bot, label: 'Tooling' },
          ].map((it, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] ${
                it.active ? 'bg-bg text-ink shadow-sm' : 'text-ink-2'
              }`}
            >
              <it.icon className="size-3.5" strokeWidth={1.75} />
              <span>{it.label}</span>
            </div>
          ))}
        </aside>

        {/* Prompt list */}
        <div className="flex-1 p-4 flex flex-col gap-2.5 overflow-hidden">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-mono uppercase tracking-[0.08em] text-ink-3">
              Prompt library
            </p>
          </div>
          {[
            { t: 'Weekly LinkedIn post', tag: 'Marketing' },
            { t: 'Webinar follow-up email', tag: 'Marketing' },
            { t: 'Sales call summary', tag: 'Sales' },
            { t: 'Ad headline variations', tag: 'Content' },
            { t: 'Proposal first draft', tag: 'Sales' },
          ].map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-3 border border-border rounded-md bg-bg px-3 py-2"
            >
              <p className="text-[12px] text-ink truncate">{p.t}</p>
              <span className="chip chip-stone shrink-0">{p.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
