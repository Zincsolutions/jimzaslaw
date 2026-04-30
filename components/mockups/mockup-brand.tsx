import { Image as ImageIcon, Wand2 } from 'lucide-react';

export function MockupBrand() {
  const tiles = [
    'chip-orange',
    'chip-sky',
    'chip-blush',
    'chip-amber',
    'chip-violet',
    'chip-stone',
  ];
  return (
    <div
      className="relative w-full aspect-[4/3] rounded-xl border border-border bg-bg overflow-hidden p-5 flex flex-col gap-4"
      style={{ boxShadow: 'var(--shadow-card)' }}
      aria-hidden
    >
      <div className="flex items-center gap-2">
        <span className="chip chip-blush">
          <Wand2 className="size-3" />
          Brand-locked prompts
        </span>
        <span className="text-[11px] font-mono text-ink-3 ml-auto">
          v2.1 · Aurora palette
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2.5 flex-1">
        {tiles.map((c, i) => (
          <div
            key={i}
            className={`relative ${c} rounded-md flex items-end p-2 text-[10px] font-mono`}
            style={{ aspectRatio: '1 / 1' }}
          >
            <span className="absolute top-1.5 left-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-white/70 text-ink text-[9px]">
              <ImageIcon className="size-2.5" strokeWidth={2} />
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-ink/70">on-brand</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border border-border rounded-md bg-bg-soft px-3 py-2">
        <span className="text-[11px] font-mono text-ink-3">prompt://</span>
        <p className="text-[12px] text-ink-2 truncate">
          editorial photo · soft daylight · brand-aligned palette · 4:5
        </p>
      </div>
    </div>
  );
}
