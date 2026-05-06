export const site = {
  name: 'Jim Zaslaw Consulting',
  tagline: 'Turning AI usage into business advantage.',
  description:
    'AI strategy and implementation for executives and founders. Twenty years of building digital systems for actual businesses, applied to AI specifically.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jimzaslaw.com',
  calendly:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    'https://calendly.com/jimzaslaw',
  email: 'jim@jimzaslaw.com',
  socials: {
    linkedin: 'https://www.linkedin.com/in/jimzaslaw/',
    x: 'https://x.com/jimzaslaw',
  },
  zinc: {
    name: 'ZINC',
    url: 'https://www.wearezinc.com',
    description: 'Strategy → execution agency. The team behind the build.',
  },
} as const;

export type Service = {
  slug: 'ai-operating-system' | 'ai-visibility-engine' | 'ai-brand-asset-system';
  number: '01' | '02' | '03';
  chip: 'orange' | 'sky' | 'blush';
  short: string;
  title: string;
  tagline: string;
  objective: string;
  scope: string[];
  deliverables: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    slug: 'ai-operating-system',
    number: '01',
    chip: 'orange',
    short: 'AI Operating System',
    title: 'An operating system for how your team uses AI.',
    tagline: 'Organize and structure how the team uses AI internally.',
    objective:
      'Most businesses do not need more random AI experimentation. They need to understand which tools to use, when to use them, why they matter, and how to set them up for repeatable team use.\n\nThe AI Operating System helps organize your AI tools, prompts, workflows, permissions, standards, and shared knowledge into a structure your team can actually use.',
    scope: [
      'Audit of current AI usage across team members and functions',
      'Tool selection — which AI tools to use, when, and why',
      'Tool setup, configuration, and permissions',
      'Centralized AI workspace appropriate to your existing stack',
      'Prompt libraries and workflow templates by function',
      'Standards for collaboration and repeatable team use',
      'Team training and onboarding',
    ],
    deliverables: [
      'Tool selection & usage guidelines',
      'Centralized AI workspace, set up and configured',
      'Structured prompt library, organized by function and use case',
      'Defined workflows for marketing, sales, and operations',
      'Standards and permissions for team use',
      'Recorded training session for current team and future hires',
    ],
    outcome:
      'The team moves from individual experimentation to a shared, scalable system. New hires onboard into AI workflows in days, not months. Institutional knowledge compounds instead of evaporating.',
  },
  {
    slug: 'ai-visibility-engine',
    number: '02',
    chip: 'sky',
    short: 'AI Visibility Engine',
    title: 'Get the business found in AI-driven search.',
    tagline: 'Show up when prospects ask AI tools questions in your category.',
    objective:
      'Ensure the business shows up when prospective customers ask AI tools (ChatGPT, Claude, Perplexity, Google AI Overviews) questions in its category.',
    scope: [
      'Identification of the 30–100 highest-value questions customers are asking AI tools in your category',
      'Development of a structured content strategy aligned to those questions',
      'Creation of AI-assisted content workflows the team can run on their own',
      'Production of an initial published content set (blogs, landing pages, FAQs, structured data)',
      'Organization of content for clarity and AI discoverability',
    ],
    deliverables: [
      'Question map of high-value queries',
      'Content templates and prompt frameworks',
      '20–50+ published content assets',
      'Ongoing content production system',
    ],
    outcome:
      'The business becomes visible and citable in AI-driven search. Inbound conversations start with prospects who already trust the brand because an AI tool surfaced it.',
  },
  {
    slug: 'ai-brand-asset-system',
    number: '03',
    chip: 'blush',
    short: 'AI Brand Asset System',
    title: 'On-brand visual content, generated at scale.',
    tagline: 'Produce consistent visuals using AI tools — without cleanup.',
    objective:
      'Establish a repeatable system for generating high-quality, on-brand visuals using AI tools — without the constant cleanup, off-brand outputs, or manual recreation that kills most companies\' first attempts.',
    scope: [
      'Translation of brand identity into AI-compatible visual guidelines',
      'Definition of which tools to use for which jobs (image, design, video)',
      'Development of master prompts that produce consistent outputs across tools',
      'Creation of an initial asset library',
      'Workflows for ongoing creation by the in-house team',
    ],
    deliverables: [
      'AI-ready brand visual guidelines',
      'Master prompt library for image and asset generation',
      'Organized asset library (50–200+ assets)',
      'Documented creation workflows',
    ],
    outcome:
      'Marketing and content teams ship campaigns faster, reduce reliance on outside design support for routine work, and maintain a consistent visual identity across every channel.',
  },
];

export const navLinks = {
  primary: [
    { label: 'Services', href: '/services', hasMenu: true },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'About Jim', href: '/about' },
    { label: 'Field Notes', href: '/blog' },
  ],
};

export const clientLogos = [
  { name: 'Sequel', src: '/clients/sequel.webp' },
  { name: 'Navigator', src: '/clients/navigator.webp' },
  { name: 'TB', src: '/clients/tb.webp' },
  { name: 'G99', src: '/clients/g99.webp' },
  { name: 'BFF', src: '/clients/bff.webp' },
  { name: 'Kroil Oil', src: '/clients/kroil-oil.webp' },
  { name: 'Airlift', src: '/clients/airlift.webp' },
  { name: 'Mac Tools', src: '/clients/mac-tools.webp' },
  { name: 'Batory Foods', src: '/clients/batory-foods.webp' },
] as const;
