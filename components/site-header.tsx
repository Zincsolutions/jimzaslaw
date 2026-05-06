'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Button } from './ui/button';
import { services } from '@/lib/site';

type MenuKey = 'services' | null;

const DARK_PAGES = ['/about', '/services'];

function isDarkPath(pathname: string | null): boolean {
  if (!pathname) return false;
  return DARK_PAGES.some(
    (p) => pathname === p || pathname.startsWith(p + '/'),
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const dark = isDarkPath(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const openWithIntent = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  // Header background: respects dark vs light pages, plus scrolled vs at-top
  const headerBg = (() => {
    if (dark) {
      // On dark pages: transparent over hero, dark-blurred when scrolled or menu open
      return scrolled || openMenu
        ? 'bg-[var(--dark-bg)]/90 backdrop-blur-md border-b border-[var(--dark-border)]'
        : 'bg-transparent';
    }
    return scrolled || openMenu
      ? 'bg-bg/85 backdrop-blur-md border-b border-border'
      : 'bg-transparent';
  })();

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-colors duration-200',
        headerBg,
      )}
      data-theme={dark ? 'dark' : 'light'}
      onMouseLeave={scheduleClose}
    >
      <div className="container-x flex items-center justify-between h-[72px] gap-6">
        <Link
          href="/"
          aria-label="Jim Zaslaw Consulting — Home"
          className="flex items-center gap-2 shrink-0"
        >
          <Image
            src={dark ? '/logos/zaslaw-white.svg' : '/logos/zaslaw-black.svg'}
            alt=""
            width={130}
            height={20}
            priority
            className="h-5 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-1"
        >
          <NavTrigger
            label="Services"
            isOpen={openMenu === 'services'}
            onOpen={() => openWithIntent('services')}
            onClose={scheduleClose}
            dark={dark}
          />
          <NavLink href="/how-it-works" dark={dark}>
            How It Works
          </NavLink>
          <NavLink href="/about" dark={dark}>
            About Jim
          </NavLink>
          <NavLink href="/blog" dark={dark}>
            Field Notes
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            href="/contact"
            size="md"
            withArrow
            variant={dark ? 'primary-on-ink' : 'primary'}
          >
            Get a Free Assessment
          </Button>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          className={cn(
            'md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-md',
            dark
              ? 'text-white hover:bg-white/10'
              : 'hover:bg-bg-soft',
          )}
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="size-5" aria-hidden />
        </button>
      </div>

      {/* Mega-menu panels */}
      <MegaMenuPanel
        isOpen={openMenu === 'services'}
        onMouseEnter={() => openWithIntent('services')}
        onMouseLeave={scheduleClose}
        dark={dark}
      >
        <ServicesMenuContent dark={dark} />
      </MegaMenuPanel>

      {/* Mobile sheet */}
      {mobileOpen ? (
        <MobileNav
          onClose={() => setMobileOpen(false)}
          dark={dark}
        />
      ) : null}
    </header>
  );
}

function NavLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'px-3 py-2 text-[15px] rounded-md transition-colors',
        dark
          ? 'text-white/75 hover:text-white'
          : 'text-ink-2 hover:text-ink',
      )}
    >
      {children}
    </Link>
  );
}

function NavTrigger({
  label,
  isOpen,
  onOpen,
  onClose,
  dark = false,
}: {
  label: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  dark?: boolean;
}) {
  const colorActive = dark ? 'text-white' : 'text-ink';
  const colorIdle = dark
    ? 'text-white/75 hover:text-white'
    : 'text-ink-2 hover:text-ink';
  return (
    <button
      aria-haspopup="true"
      aria-expanded={isOpen}
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onBlur={onClose}
      onClick={() => (isOpen ? onClose() : onOpen())}
      className={cn(
        'inline-flex items-center gap-1 px-3 py-2 text-[15px] rounded-md transition-colors',
        isOpen ? colorActive : colorIdle,
      )}
    >
      {label}
      <ChevronDown
        className={cn(
          'size-3.5 transition-transform duration-200',
          isOpen ? 'rotate-180' : '',
        )}
        aria-hidden
      />
    </button>
  );
}

function MegaMenuPanel({
  isOpen,
  children,
  onMouseEnter,
  onMouseLeave,
  dark = false,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  dark?: boolean;
}) {
  return (
    <div
      role="region"
      aria-hidden={!isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        'absolute inset-x-0 top-full transition-all duration-200 ease-out border-b',
        dark
          ? 'bg-[var(--dark-bg-soft)] border-[var(--dark-border)]'
          : 'bg-bg border-border',
        isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none',
      )}
      style={{ boxShadow: dark ? '0 24px 80px rgba(0,0,0,0.4)' : 'var(--shadow-pop)' }}
    >
      <div className="container-x py-10">{children}</div>
    </div>
  );
}

function ServicesMenuContent({ dark = false }: { dark?: boolean }) {
  const sideLink = dark
    ? 'text-white/75 hover:text-white'
    : 'text-ink-2 hover:text-ink';
  const sideBorder = dark
    ? 'border-l border-[var(--dark-border)]'
    : 'border-l border-border';
  const eyebrowClass = dark
    ? 'text-[12px] uppercase tracking-[0.08em] text-white/60 font-medium mb-3'
    : 'eyebrow mb-3';
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-8 grid grid-cols-3 gap-6">
        {services.map((p) => (
          <MenuItem
            key={p.slug}
            chip={p.chip}
            title={p.short}
            desc={p.tagline}
            href={`/services/${p.slug}`}
            dark={dark}
          />
        ))}
      </div>
      <div className={cn('col-span-4 pl-8', sideBorder)}>
        <p className={eyebrowClass}>Overview</p>
        <ul className="flex flex-col gap-2 text-[15px]">
          <li>
            <Link href="/services" className={sideLink}>
              All three services →
            </Link>
          </li>
          <li>
            <Link href="/how-it-works" className={sideLink}>
              How it works
            </Link>
          </li>
          <li>
            <Link href="/contact" className={sideLink}>
              Get a Free Assessment
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function MenuItem({
  chip,
  title,
  desc,
  href,
  dark = false,
}: {
  chip: 'orange' | 'sky' | 'blush' | 'amber' | 'violet' | 'stone';
  title: string;
  desc: string;
  href: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex gap-3 p-2 -m-2 rounded-md transition-colors',
        dark ? 'hover:bg-white/5' : 'hover:bg-bg-soft',
      )}
    >
      <span
        className={cn(
          'shrink-0 w-9 h-9 rounded-md flex items-center justify-center text-[14px] font-medium',
          `chip-${chip}`,
        )}
      >
        ◆
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            'text-[15px] font-medium',
            dark ? 'text-white' : 'text-ink',
          )}
        >
          {title}
        </span>
        <span
          className={cn(
            'text-[13px] leading-snug mt-0.5',
            dark ? 'text-white/60' : 'text-ink-3',
          )}
        >
          {desc}
        </span>
      </span>
    </Link>
  );
}

function MobileNav({
  onClose,
  dark = false,
}: {
  onClose: () => void;
  dark?: boolean;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
      className={cn(
        'md:hidden fixed inset-0 z-[60] flex flex-col',
        dark ? 'bg-[var(--dark-bg)] text-white' : 'bg-bg',
      )}
    >
      <div className="container-x flex items-center justify-between h-[72px]">
        <Link href="/" onClick={onClose} aria-label="Home">
          <Image
            src={dark ? '/logos/zaslaw-white.svg' : '/logos/zaslaw-black.svg'}
            alt=""
            width={130}
            height={20}
            className="h-5 w-auto"
          />
        </Link>
        <button
          aria-label="Close menu"
          onClick={onClose}
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-md',
            dark ? 'text-white hover:bg-white/10' : 'hover:bg-bg-soft',
          )}
        >
          <X className="size-5" aria-hidden />
        </button>
      </div>
      <nav
        aria-label="Mobile primary"
        className="container-x flex flex-col gap-1 py-6"
      >
        <MobileLink href="/services" onClose={onClose} dark={dark}>
          Services
        </MobileLink>
        <MobileLink href="/how-it-works" onClose={onClose} dark={dark}>
          How It Works
        </MobileLink>
        <MobileLink href="/about" onClose={onClose} dark={dark}>
          About Jim
        </MobileLink>
        <MobileLink href="/blog" onClose={onClose} dark={dark}>
          Field Notes
        </MobileLink>
      </nav>
      <div className="container-x mt-auto pb-10">
        <Button
          href="/contact"
          size="lg"
          withArrow
          className="w-full"
          variant={dark ? 'primary-on-ink' : 'primary'}
        >
          Get a Free Assessment
        </Button>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  onClose,
  children,
  dark = false,
}: {
  href: string;
  onClose: () => void;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className={cn(
        'text-[22px] tracking-[-0.02em] py-3 border-b',
        dark
          ? 'text-white border-[var(--dark-border)]'
          : 'text-ink border-border',
      )}
    >
      {children}
    </Link>
  );
}
