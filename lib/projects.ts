// Jim's own AI-powered products, shown on /projects and teased on /about.
// Copy stays within each product's public positioning.

export type Project = {
  slug: 'discoverart' | 'predictant' | 'garagewire';
  name: string;
  url: string;
  domain: string;
  category: string;
  tagline: string;
  summary: string;
  aiAtWork: string;
  forClients: string;
  brand: { bg: string; accent: string };
};

export const projects: Project[] = [
  {
    slug: 'discoverart',
    name: 'DiscoverArt',
    url: 'https://discoverart.com',
    domain: 'discoverart.com',
    category: 'Art discovery',
    tagline: 'Discover art you’ll love, even if you’ve never heard of the artist.',
    summary:
      'DiscoverArt is a taste-graph discovery engine for art. React to a handful of works, and a visual taste engine learns what moves you, then opens a personalized gallery drawn from the world’s great museum collections. The AI learns your eye; the art is all real, shared through museums’ open-access programs, and nothing on the site is AI-generated.',
    aiAtWork: 'Visual AI that learns taste from the images themselves, not from keywords or forms.',
    forClients:
      'Personalization that adapts to behavior in real time, and discovery that works even when a visitor doesn’t know what to search for.',
    brand: { bg: '#000000', accent: '#c9a84c' },
  },
  {
    slug: 'predictant',
    name: 'Predictant',
    url: 'https://www.predictant.com',
    domain: 'predictant.com',
    category: 'E-commerce intelligence',
    tagline: 'AI-powered prediction solutions for e-commerce.',
    summary:
      'Predictant gives merchants AI-driven predictions for the decisions that move margin: price optimization, promotion forecasting, competitor monitoring, and margin planning, with Shopify Sync connecting it all to a live store. It is focused on helping merchants get ready for agentic e-commerce, as AI agents increasingly research, compare, and buy on shoppers’ behalf.',
    aiAtWork: 'AI forecasting for pricing, promotions, and competitive moves, synced with Shopify.',
    forClients:
      'A working view of how agentic e-commerce changes pricing, product data, and the Shopify storefront.',
    brand: { bg: '#121722', accent: '#f2bc3f' },
  },
  {
    slug: 'garagewire',
    name: 'GarageWire',
    url: 'https://garagewire.com',
    domain: 'garagewire.com',
    category: 'Automotive fitment',
    tagline: 'Know it fits before you buy.',
    summary:
      'GarageWire is fitment intelligence for modified vehicles. Owners park their ride in the garage and get straight answers about what fits, what rubs, and what needs work, backed by real builds running the parts they want instead of guesswork.',
    aiAtWork: 'Structured, evidence-backed answers built from real-world build data.',
    forClients:
      'Turning scattered community knowledge into structured, trustworthy answers, the same foundation AI search rewards.',
    brand: { bg: '#15181c', accent: '#e8541d' },
  },
];
