import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { LogoStrip } from '@/components/sections/logo-strip';
import { ProblemGrid } from '@/components/sections/problem-grid';
import { Opportunity } from '@/components/sections/opportunity';
import { ServicesOverview } from '@/components/sections/services-overview';
import { WhyJim } from '@/components/sections/why-jim';
import { FreeAssessment } from '@/components/sections/free-assessment';
import { WhatWeMightFind } from '@/components/sections/what-we-might-find';
import { WhoThisIsFor } from '@/components/sections/who-this-is-for';
import { Proof } from '@/components/sections/proof';
import { ZincBand } from '@/components/sections/zinc-band';
import { FeaturedPosts } from '@/components/sections/featured-posts';
import { CTABand } from '@/components/sections/cta-band';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ProblemGrid />
      <Opportunity />
      <ServicesOverview />
      <WhyJim />
      <FreeAssessment />
      <WhatWeMightFind />
      <WhoThisIsFor />
      <Proof />
      <ZincBand />
      <FeaturedPosts />
      <CTABand />
    </>
  );
}
