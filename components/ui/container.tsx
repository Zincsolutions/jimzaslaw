import * as React from 'react';
import { cn } from '@/lib/cn';

export function Container({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('container-x', className)} {...rest}>
      {children}
    </div>
  );
}
