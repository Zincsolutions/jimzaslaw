import * as React from 'react';
import { cn } from '@/lib/cn';

export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={cn('eyebrow', className)}>{children}</p>;
}
