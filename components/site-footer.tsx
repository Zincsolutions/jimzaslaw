import Link from 'next/link';
import Image from 'next/image';
import { Container } from './ui/container';
import { site } from '@/lib/site';

const cols = [
  {
    heading: 'Practice',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'About Jim', href: '/about' },
      { label: 'Field Notes', href: '/blog' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'AI Operating System', href: '/services/ai-operating-system' },
      { label: 'AI Visibility Engine', href: '/services/ai-visibility-engine' },
      { label: 'AI Brand Asset System', href: '/services/ai-brand-asset-system' },
    ],
  },
  {
    heading: 'Get a Free Assessment',
    links: [
      { label: 'Request an assessment', href: '/contact' },
      { label: 'Email Jim', href: `mailto:${site.email}` },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'LinkedIn', href: site.socials.linkedin, external: true },
      { label: 'X', href: site.socials.x, external: true },
      { label: 'ZINC ↗', href: site.zinc.url, external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="on-ink">
      <Container className="py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Image
              src="/logos/zaslaw-white.svg"
              alt="Jim Zaslaw Consulting"
              width={140}
              height={22}
              className="h-[22px] w-auto"
            />
            <p className="mt-4 text-[14px] leading-relaxed max-w-[28ch]">
              Turning AI usage into business advantage. A practice of{' '}
              <a
                href={site.zinc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                ZINC
              </a>
              .
            </p>
            <Link
              href="/"
              aria-label="Jim Zaslaw — Home"
              className="footer-logo-mark mt-6 inline-block size-10 rounded-full"
            >
              <svg
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                className="block size-full"
                role="img"
                aria-hidden="true"
              >
                <circle
                  className="logo-mark-bg"
                  cx="500"
                  cy="500"
                  r="500"
                />
                <path
                  className="logo-mark-symbol"
                  d="M427.387 397.645C456.527 407.356 461.054 397.162 472.681 368.804C485.823 336.748 492.678 315.329 471.085 305.013C449.034 294.478 435.723 302.944 423.39 329.144C412.787 351.669 400.014 388.524 427.387 397.645ZM267.109 311.132C259.79 296.238 249.462 292.58 230.163 302.733C209.622 313.54 206.051 322.548 214.045 339.738C242.867 401.725 263.927 456.805 271.754 509.844C278.362 554.618 279.807 625.637 227.821 636.382C186.707 644.88 143.139 608.433 116.769 582.442C110.653 576.416 100.493 570.664 86.3448 583.146C73.5408 594.444 69.2848 602.702 80.3875 615.62C96.4155 634.265 157.295 695.252 232.918 691.326C313.434 687.146 339.217 601.334 329.906 512.044C325.218 467.081 301.617 375.424 267.109 311.132ZM949.083 564.385C939.198 578.428 891.674 642.75 824.165 642.75C746.858 642.75 731.413 561.102 731.413 561.024C731.413 561.006 717.413 593.422 711.269 605.489C703.21 621.312 696.427 639.06 672.567 639.06C649.963 639.06 642.846 624.944 636.175 603.176C632.974 592.729 625.258 562.201 625.209 562.217C625.194 562.221 611.405 594.116 606.401 604.216C600.694 615.737 590.457 637.205 570.211 637.205C550.498 637.205 541.682 623.925 538.735 598.898C536.702 581.621 534.041 546.778 534.038 546.778C534.038 546.778 510.626 571.218 495.23 584.256C479.659 597.442 454.453 613.798 424.595 609.812C390.882 605.309 368.931 582.396 368.538 536.71C368.218 499.553 375.761 463.381 383.318 444.904C389.833 428.976 398.693 426.369 422.542 433.384C444.053 439.71 443.645 451.185 437.726 468.945C432.665 484.129 418.434 538.612 428.951 552.696C443.331 571.95 479.526 535.897 510.639 503.822C524.911 489.108 537.615 477.608 555.925 477.608C573.123 477.608 577.751 496.178 579.543 512.281C580.669 522.396 582.561 547.901 582.561 547.901C582.561 547.901 601.497 511.74 604.221 506.104C609.882 494.393 619.855 478.934 635.695 478.934C655.57 478.934 660.523 496.868 662.342 503.904C665.387 515.685 675.895 560.61 675.913 560.614C676.53 560.762 691.694 526.617 697.277 515.609C705.998 498.413 715.983 477.229 740.061 477.229C781.227 477.229 768.625 593.912 829.497 593.912C868.895 593.912 894.071 560.861 909.093 542.788C919.805 529.898 926.993 526.973 941.565 535.386C956.777 544.166 956.426 553.258 949.083 564.385Z"
                />
              </svg>
            </Link>
          </div>
          {cols.map((col) => (
            <div key={col.heading} className="col-span-1">
              <h4 className="text-[12px] uppercase tracking-[0.08em] text-white/60 font-medium mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {'external' in l && l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-white/85 hover:text-accent"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-[14px] text-white/85 hover:text-accent"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row md:items-center justify-between gap-4 text-[13px] text-white/60">
          <p>
            © {new Date().getFullYear()} {site.name}. A practice of {site.zinc.name}.
          </p>
          <p>Built for clarity. Delivering growth.</p>
        </div>
      </Container>
    </footer>
  );
}
