'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Button } from './ui/button';
import { services } from '@/lib/site';

type MenuKey = 'approach' | 'services' | null;

export function SiteHeader() {
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

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-colors duration-200',
        scrolled || openMenu
          ? 'bg-bg/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent',
      )}
      onMouseLeave={scheduleClose}
    >
      <div className="container-x flex items-center justify-between h-[72px] gap-6">
        <Link
          href="/"
          aria-label="Jim Zaslaw Consulting — Home"
          className="flex items-center gap-2 shrink-0"
        >
          <Image
            src="/logos/zaslaw-black.svg"
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
            label="Approach"
            isOpen={openMenu === 'approach'}
            onOpen={() => openWithIntent('approach')}
            onClose={scheduleClose}
          />
          <NavTrigger
            label="Services"
            isOpen={openMenu === 'services'}
            onOpen={() => openWithIntent('services')}
            onClose={scheduleClose}
          />
          <NavLink href="/engagement">Engagement</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-[15px] text-ink-2 hover:text-ink"
          >
            Contact
          </Link>
          <Button href="/contact" size="md" withArrow>
            Schedule an Assessment
          </Button>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-md hover:bg-bg-soft"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="size-5" aria-hidden />
        </button>
      </div>

      {/* Mega-menu panels */}
      <MegaMenuPanel
        isOpen={openMenu === 'approach'}
        onMouseEnter={() => openWithIntent('approach')}
        onMouseLeave={scheduleClose}
      >
        <ApproachMenuContent />
      </MegaMenuPanel>
      <MegaMenuPanel
        isOpen={openMenu === 'services'}
        onMouseEnter={() => openWithIntent('services')}
        onMouseLeave={scheduleClose}
      >
        <ServicesMenuContent />
      </MegaMenuPanel>

      {/* Mobile sheet */}
      {mobileOpen ? (
        <MobileNav onClose={() => setMobileOpen(false)} />
      ) : null}
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-[15px] text-ink-2 hover:text-ink rounded-md transition-colors"
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
}: {
  label: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
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
        isOpen ? 'text-ink' : 'text-ink-2 hover:text-ink',
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
}: {
  isOpen: boolean;
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      role="region"
      aria-hidden={!isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        'absolute inset-x-0 top-full bg-bg border-b border-border transition-all duration-200 ease-out',
        isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none',
      )}
      style={{ boxShadow: 'var(--shadow-pop)' }}
    >
      <div className="container-x py-10">{children}</div>
    </div>
  );
}

function ApproachMenuContent() {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-6">
        <MenuItem
          chip="orange"
          title="Clarity first"
          desc="Understand current state. Identify what actually moves the business."
          href="/#approach"
        />
        <MenuItem
          chip="sky"
          title="Structure second"
          desc="Build repeatable systems your team can run on day two."
          href="/#approach"
        />
        <MenuItem
          chip="blush"
          title="Scale third"
          desc="Compound the work as the AI landscape evolves."
          href="/#approach"
        />
        <MenuItem
          chip="amber"
          title="Engagement model"
          desc="Three stages — each one stands on its own."
          href="/engagement"
        />
      </div>
      <div className="col-span-4 border-l border-border pl-8">
        <p className="eyebrow mb-3">Get started</p>
        <ul className="flex flex-col gap-2 text-[15px]">
          <li>
            <Link href="/contact" className="hover:text-ink text-ink-2">
              Schedule an Assessment →
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-ink text-ink-2">
              About Jim
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-ink text-ink-2">
              Read the field notes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ServicesMenuContent() {
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
          />
        ))}
      </div>
      <div className="col-span-4 border-l border-border pl-8">
        <p className="eyebrow mb-3">Overview</p>
        <ul className="flex flex-col gap-2 text-[15px]">
          <li>
            <Link href="/services" className="hover:text-ink text-ink-2">
              All three services →
            </Link>
          </li>
          <li>
            <Link href="/engagement" className="hover:text-ink text-ink-2">
              How engagements work
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-ink text-ink-2">
              Start with a free Snapshot
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
}: {
  chip: 'orange' | 'sky' | 'blush' | 'amber' | 'violet' | 'stone';
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex gap-3 p-2 -m-2 rounded-md hover:bg-bg-soft transition-colors"
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
        <span className="text-[15px] font-medium text-ink">{title}</span>
        <span className="text-[13px] text-ink-3 leading-snug mt-0.5">
          {desc}
        </span>
      </span>
    </Link>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
      className="md:hidden fixed inset-0 z-[60] bg-bg flex flex-col"
    >
      <div className="container-x flex items-center justify-between h-[72px]">
        <Link href="/" onClick={onClose} aria-label="Home">
          <Image
            src="/logos/zaslaw-black.svg"
            alt=""
            width={130}
            height={20}
            className="h-5 w-auto"
          />
        </Link>
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-md hover:bg-bg-soft"
        >
          <X className="size-5" aria-hidden />
        </button>
      </div>
      <nav
        aria-label="Mobile primary"
        className="container-x flex flex-col gap-1 py-6"
      >
        <MobileLink href="/#approach" onClose={onClose}>
          Approach
        </MobileLink>
        <MobileLink href="/services" onClose={onClose}>
          Services
        </MobileLink>
        <MobileLink href="/engagement" onClose={onClose}>
          Engagement
        </MobileLink>
        <MobileLink href="/blog" onClose={onClose}>
          Blog
        </MobileLink>
        <MobileLink href="/about" onClose={onClose}>
          About
        </MobileLink>
        <MobileLink href="/contact" onClose={onClose}>
          Contact
        </MobileLink>
      </nav>
      <div className="container-x mt-auto pb-10">
        <Button href="/contact" size="lg" withArrow className="w-full">
          Schedule an Assessment
        </Button>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  onClose,
  children,
}: {
  href: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="text-[22px] tracking-[-0.02em] py-3 border-b border-border text-ink"
    >
      {children}
    </Link>
  );
}
