import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'primary-on-ink';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-pill transition-all duration-200 ease-out disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-white hover:bg-black active:translate-y-[1px]',
  secondary:
    'bg-bg text-ink border border-border-strong hover:border-ink hover:bg-bg-soft',
  ghost: 'text-ink hover:bg-bg-soft',
  'primary-on-ink':
    'bg-white text-ink hover:bg-bg-soft active:translate-y-[1px]',
};

const sizes: Record<Size, string> = {
  md: 'h-10 px-5 text-[15px]',
  lg: 'h-12 px-6 text-[16px]',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    external?: boolean;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = 'primary',
    size = 'md',
    withArrow = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowRight aria-hidden className="size-4 -mr-0.5" />
      ) : null}
    </>
  );

  if ('href' in rest && typeof rest.href === 'string') {
    const { href, external, ...anchorRest } =
      rest as Omit<ButtonAsLink, keyof CommonProps>;
    if (external) {
      return (
        <a
          {...(anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        {...(anchorRest as Omit<
          React.AnchorHTMLAttributes<HTMLAnchorElement>,
          'href'
        >)}
        href={href}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {content}
    </button>
  );
}
