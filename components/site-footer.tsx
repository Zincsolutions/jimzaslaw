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
            <Image
              src="/logos/jim-mark-white.svg"
              alt=""
              width={48}
              height={48}
              className="mt-6 size-10"
            />
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
                        className="text-[14px] text-white/85 hover:text-white"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-[14px] text-white/85 hover:text-white"
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
