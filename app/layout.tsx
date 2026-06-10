import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Suspense } from 'react';
import Script from 'next/script';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: 'Jim Zaslaw' }],
  keywords: [
    'AI consulting',
    'AI strategy',
    'AI implementation',
    'Answer Engine Optimization',
    'AEO',
    'AI Operating System',
    'AI brand assets',
    'enterprise AI',
  ],
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: ['/og'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ['/og'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/logos/jim-mark.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FDFDFD' },
    { media: '(prefers-color-scheme: dark)', color: '#231F20' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />

        {/* JSON-LD: Organization + Person — plain <script> so it's in the
            server-rendered HTML for crawlers that don't execute JS */}
        <script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': `${site.url}#website`,
                  name: site.name,
                  url: site.url,
                  publisher: { '@id': `${site.url}#org` },
                },
                {
                  '@type': 'Organization',
                  '@id': `${site.url}#org`,
                  name: site.name,
                  url: site.url,
                  logo: `${site.url}/logos/zaslaw-black.svg`,
                  sameAs: [site.socials.linkedin, site.socials.x],
                  parentOrganization: {
                    '@type': 'Organization',
                    name: site.zinc.name,
                    url: site.zinc.url,
                  },
                },
                {
                  '@type': 'Person',
                  '@id': `${site.url}#jim`,
                  name: 'Jim Zaslaw',
                  jobTitle: 'Founder, Jim Zaslaw Consulting',
                  worksFor: { '@id': `${site.url}#org` },
                  url: site.url,
                  image: `${site.url}/jz-headshot-v2.png`,
                  sameAs: [site.socials.linkedin, site.socials.x],
                },
              ],
            }),
          }}
        />

        {/* GA4 — only when ID is set */}
        {gaId ? (
          <Suspense fallback={null}>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { anonymize_ip: true });`}
            </Script>
          </Suspense>
        ) : null}
      </body>
    </html>
  );
}
