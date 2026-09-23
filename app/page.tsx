import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { LogoStrip } from '@/components/sections/logo-strip';
import { ProblemGrid } from '@/components/sections/problem-grid';
import { ServicesOverview } from '@/components/sections/services-overview';
import { WebsiteDecision } from '@/components/sections/website-decision';
import { WhyJim } from '@/components/sections/why-jim';
import { FeaturedPosts } from '@/components/sections/featured-posts';
import { CTABand } from '@/components/sections/cta-band';
import { PageFaq } from '@/components/sections/page-faq';
import { homeFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ProblemGrid />
      <WhyJim />
      <ServicesOverview />
      <WebsiteDecision />
      <FeaturedPosts />
      <CTABand />
      <PageFaq
        id="home"
        faqs={homeFaqs}
        title="Common questions about AI consulting."
        intro="Straight answers to what owners and leadership teams ask before bringing in outside AI help."
      />
    </>
  );
}
