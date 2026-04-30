import * as React from 'react';
import { cn } from '@/lib/cn';
import { Eyebrow } from './eyebrow';

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}) {
  const isCenter = align === 'center';
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        isCenter ? 'items-center text-center max-w-3xl mx-auto' : 'max-w-3xl',
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-[clamp(26px,4vw,38px)] font-semibold tracking-[-0.02em] leading-[1.1]">
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            'text-[18px] md:text-[20px] leading-[1.55] text-ink-2',
            isCenter ? 'max-w-2xl' : 'max-w-2xl',
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
