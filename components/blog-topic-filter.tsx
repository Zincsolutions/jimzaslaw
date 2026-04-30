'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

export function BlogTopicFilter({
  topics,
  active,
}: {
  topics: string[];
  active?: string;
}) {
  const items = ['All', ...topics];
  return (
    <nav
      aria-label="Filter by topic"
      className="flex gap-2 overflow-x-auto py-4 -mx-1 px-1"
    >
      {items.map((t) => {
        const isAll = t === 'All';
        const isActive = isAll ? !active : active === t;
        const href = isAll ? '/blog' : `/blog?topic=${encodeURIComponent(t)}`;
        return (
          <Link
            key={t}
            href={href}
            scroll={false}
            className={cn(
              'shrink-0 rounded-pill px-3.5 py-1.5 text-[13px] font-medium border transition-colors whitespace-nowrap',
              isActive
                ? 'bg-ink text-white border-ink'
                : 'bg-bg text-ink-2 border-border hover:border-border-strong',
            )}
          >
            {t}
          </Link>
        );
      })}
    </nav>
  );
}
