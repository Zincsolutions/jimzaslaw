'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Quiet scroll pacing, ported from wearezinc.com (Sept 2026). Section
// headings and card groups fade up the first time they scroll into view.
// Deliberately restrained:
// - only elements that start below the fold are ever hidden, so nothing on
//   screen at load blinks;
// - content is fully visible without JS (the hide attribute is added here);
// - forms, FAQs, the header and page heroes are never hidden;
// - each element animates once. Reduced motion is handled by the global
//   rule in globals.css (transitions collapse to instant).
// Styles live in globals.css under [data-reveal] and .dark-fade.

// Card grids: responsive column grids. The 12-column layout grids are page
// structure, not card groups, so they are left alone.
const CARD_GROUPS =
  '[class*="sm:grid-cols-"], [class*="md:grid-cols-"], [class*="lg:grid-cols-"]:not([class*="grid-cols-12"])';
const NEVER =
  'form, #faq, header, footer, .dark-hero, [class*="prose"], [data-no-reveal], .dark-fade';

// Reads any CSS color (including oklch) as perceived brightness 0-255.
function brightness(color: string): number {
  const ctx = document.createElement('canvas').getContext('2d');
  if (!ctx) return 255;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
  return (r + g + b) / 3;
}

function bgOf(el: Element | null): string {
  for (let x = el; x; x = x.parentElement) {
    const c = getComputedStyle(x).backgroundColor;
    if (c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent') return c;
  }
  return getComputedStyle(document.body).backgroundColor;
}

// Dark bands on light pages (and the footer) keep the color of the block
// above until they fill about half the screen, then ease to their own dark
// color in one move (650ms, the slow-in/slow-out curve Basic uses) with their
// content fading in just behind. Time-based, not scroll-scrubbed, so there is
// no lingering gray. Without JS or with reduced motion they simply stay dark.
function markDarkBlocks(main: HTMLElement): IntersectionObserver | null {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  const marked: HTMLElement[] = [];
  const blocks = [
    ...Array.from(main.children),
    ...Array.from(document.querySelectorAll('body > footer')),
  ];
  blocks.forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    const prev = el.tagName === 'FOOTER' ? main.lastElementChild : el.previousElementSibling;
    if (el.classList.contains('dark-fade')) {
      // Marked by an earlier run (the footer survives client navigations):
      // refresh the color it fades from, then observe it again.
      if (prev) el.style.setProperty('--dark-from', bgOf(prev));
      marked.push(el);
      return;
    }
    if (!prev) return; // the page's first block (a dark hero) is never faded
    const to = bgOf(el);
    if (brightness(to) >= 60) return;
    const from = bgOf(prev);
    if (brightness(from) < 60) return; // dark after dark: nothing to fade from
    el.style.setProperty('--dark-from', from);
    el.style.setProperty('--dark-to', to);
    // Decide the starting state before the class lands, so nothing flashes.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.55 && r.bottom > 0) el.classList.add('is-dark');
    el.classList.add('dark-fade');
    marked.push(el);
  });
  if (!marked.length) return null;
  // Dark while the block reaches into the top 55% of the viewport.
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.target.classList.toggle('is-dark', e.isIntersecting)),
    { rootMargin: '0px 0px -45% 0px' },
  );
  marked.forEach((el) => io.observe(el));
  return io;
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const main = document.querySelector('main');
    if (!main) return;
    const darkIo = markDarkBlocks(main);
    const hero = main.querySelector('section');

    const targets: HTMLElement[] = [];
    const add = (el: Element | null, step = 0) => {
      if (!(el instanceof HTMLElement) || el.dataset.reveal !== undefined) return;
      if (el.closest(NEVER) || (hero && hero.contains(el))) return;
      if (el.parentElement?.closest('[data-reveal]')) return; // already moves with its block
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return; // already in view
      el.dataset.reveal = '';
      el.style.setProperty('--reveal-delay', `${Math.min(step, 3) * 50}ms`);
      targets.push(el);
    };

    // A heading moves with its intro block (eyebrow, h2, lede) when it has one.
    main.querySelectorAll('section h2').forEach((h2) => {
      const block = h2.parentElement;
      const isIntro = block && block.tagName !== 'SECTION' && !block.classList.contains('container-x');
      add(isIntro ? block : h2);
    });
    main.querySelectorAll(CARD_GROUPS).forEach((group) => {
      // Hairline grids (gap-px over a border-colored background) move as one
      // piece; fading their cells one by one would flash the gray behind.
      const bg = getComputedStyle(group).backgroundColor;
      if (bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') add(group);
      else Array.from(group.children).forEach((child, i) => add(child, i));
    });
    // Also pick up anything tagged by an earlier run that has not revealed yet
    // (effects run twice in dev, and client navigations re-run this effect).
    main.querySelectorAll<HTMLElement>('[data-reveal=""]').forEach((el) => {
      if (!targets.includes(el)) targets.push(el);
    });
    if (!targets.length) return () => darkIo?.disconnect();

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.reveal = 'in';
          io.unobserve(e.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    );
    targets.forEach((t) => io.observe(t));
    return () => {
      io.disconnect();
      darkIo?.disconnect();
    };
  }, [pathname]);

  return null;
}
