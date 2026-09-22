export const site = {
  name: 'Jim Zaslaw Consulting',
  tagline: 'Senior advice for the decisions where AI meets your real business.',
  description:
    'AI and digital strategy for growing businesses. Jim Zaslaw helps leadership teams decide where AI belongs across workflows, content, brand, and the website.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jimzaslaw.com',
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

export const pricing = {
  implementationFrom: '$15K',
  retainerFrom: '$5K/month',
  implementation: 'Implementation engagements start at $15K',
  retainer: 'Advisory retainers from $5K/month',
} as const;

export type Service = {
  slug:
    | 'ai-operating-system'
    | 'ai-visibility-engine'
    | 'ai-brand-asset-system'
    | 'ai-website-transition-strategy';
  number: '01' | '02' | '03' | '04';
  chip: 'orange' | 'sky' | 'blush' | 'violet';
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
      'Organize the tools, prompts, workflows, standards, and shared knowledge your team needs to use AI consistently.',
    scope: [
      'Audit of current AI usage across team members and functions',
      'Tool selection: which AI tools to use, when, and why',
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
    title: 'Improve how your business shows up in AI-driven search.',
    tagline: 'Show up when prospects ask AI tools questions in your category.',
    objective:
      'Map the questions your buyers ask AI tools, then build content designed to make your business easier to understand, cite, and recommend.',
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
      'The business becomes clearer, more useful, and easier to surface in AI-driven search, with a content system the team can keep running. More inbound conversations start with prospects who already understand what you do.',
  },
  {
    slug: 'ai-brand-asset-system',
    number: '03',
    chip: 'blush',
    short: 'AI Brand Asset System',
    title: 'Create on-brand visuals faster.',
    tagline: 'Produce consistent visuals using AI tools, without cleanup.',
    objective:
      'Build AI-ready brand guidelines, visual prompt systems, and asset workflows so your team can produce better marketing visuals with less cleanup.',
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
  {
    slug: 'ai-website-transition-strategy',
    number: '04',
    chip: 'violet',
    short: 'AI Website Transition Strategy',
    title: 'Decide what your website should become before you start rebuilding it.',
    tagline:
      'Improve what you have. Migrate what works. Redesign what no longer does.',
    objective:
      'Decide whether to improve your current website, migrate it to an AI-native website, or redesign and migrate at the same time.',
    scope: [
      'Current CMS, architecture, workflow, and ownership',
      'Business and brand requirements',
      'Content, URLs, search foundations, and redirects',
      'Forms, analytics, CRM, commerce, and other integrations',
      'AI-agent use cases and approval boundaries',
      'Governance, monitoring, recovery, and handoff',
    ],
    deliverables: [
      'Improve-in-place vs migration vs redesign recommendation',
      'Target architecture and operating model',
      'Risk register and migration safeguards',
      'Phased implementation roadmap',
      'Scope, responsibilities, budget range, and next decision',
    ],
    outcome:
      'Leadership can choose the right path before committing to a rebuild or migration, with a plan that protects what works and creates a controlled path to AI-powered website operations.',
  },
];

export const dispatch = {
  name: 'Dispatch',
  url: 'https://dispatchvault.com',
} as const;

export const zincWebsiteMigrationUrl =
  'https://www.wearezinc.com/solutions/ai-website-migration';
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
