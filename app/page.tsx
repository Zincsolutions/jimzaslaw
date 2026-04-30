import { Hero } from '@/components/sections/hero';
import { LogoStrip } from '@/components/sections/logo-strip';
import { ProblemGrid } from '@/components/sections/problem-grid';
import { Opportunity } from '@/components/sections/opportunity';
import { Approach } from '@/components/sections/approach';
import { ServicesRows } from '@/components/sections/services-rows';
import { EngagementStages } from '@/components/sections/engagement-stages';
import { AboutBlock } from '@/components/sections/about-block';
import { ZincBand } from '@/components/sections/zinc-band';
import { TestimonialSlider } from '@/components/sections/testimonial-slider';
import { FeaturedPosts } from '@/components/sections/featured-posts';
import { CTABand } from '@/components/sections/cta-band';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ProblemGrid />
      <Opportunity />
      <Approach />
      <ServicesRows />
      <EngagementStages />
      <AboutBlock />
      <ZincBand />
      <TestimonialSlider />
      <FeaturedPosts />
      <CTABand />
    </>
  );
}
