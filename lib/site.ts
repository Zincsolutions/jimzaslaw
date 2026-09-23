export const site = {
  name: 'Jim Zaslaw Consulting',
  tagline: 'Senior AI guidance for founders and CEOs.',
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
  implementation: 'Engagements from $15K',
  retainer: 'Advisory from $5K/month',
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
  /** Page headline. */
  title: string;
  /** One-line promise for cards and menus. */
  tagline: string;
  /** Page subhead. */
  objective: string;
  /** Who it's for, in the buyer's words. */
  bestIf: string;
  /** Extra line on the service's price strip (e.g. typical timeline). */
  timeline?: string;
  deliverables: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    slug: 'ai-operating-system',
    number: '01',
    chip: 'orange',
    short: 'AI Operating System',
    title: 'Your team uses AI. Now make it a system.',
    tagline: 'Get your whole team using AI the same, smart way.',
    objective:
      'One set of tools, workflows, and standards, so good work gets repeated instead of reinvented.',
    bestIf: 'everyone uses AI, but nobody uses it the same way.',
    timeline: 'Typically 6–10 weeks',
    deliverables: [
      'The right tools, picked and set up',
      'A shared AI workspace',
      'A prompt library by team and task',
      'Workflows for marketing, sales, and ops',
      'Rules for who uses what',
      'Training your team can rewatch',
    ],
    outcome: 'Less guessing. More output. Knowledge that stays when people leave.',
  },
  {
    slug: 'ai-visibility-engine',
    number: '02',
    chip: 'sky',
    short: 'AI Visibility Engine',
    title: 'Your buyers are asking AI who to hire. Give it a reason to name you.',
    tagline: 'Show up when buyers ask AI who to call.',
    objective:
      'I find the questions your buyers ask ChatGPT, Claude, Perplexity, and Google. Then we build the content AI can find, trust, and cite.',
    bestIf: 'your leads depend on being found and trusted.',
    deliverables: [
      'A map of the questions that matter',
      'Templates and a repeatable content system',
      '20–50+ published, answer-ready pages',
      'A process your team keeps running',
    ],
    outcome: 'More buyers show up already knowing who you are.',
  },
  {
    slug: 'ai-brand-asset-system',
    number: '03',
    chip: 'blush',
    short: 'AI Brand Asset System',
    title: 'AI visuals that look like your brand. Every time.',
    tagline: 'On-brand visuals, faster, with less cleanup.',
    objective: 'Guidelines, master prompts, and workflows that cut the cleanup.',
    bestIf: 'your AI images keep coming out off-brand.',
    deliverables: [
      'AI-ready brand visual guidelines',
      'Tested master prompts',
      'An organized library of 50–200+ assets',
      'Step-by-step creation workflows',
    ],
    outcome: 'More campaign, social, and sales visuals. Less time fixing them.',
  },
  {
    slug: 'ai-website-transition-strategy',
    number: '04',
    chip: 'violet',
    short: 'AI Website Transition Strategy',
    title: 'Fix it, move it, or rebuild it? Decide before you spend.',
    tagline:
      'Know whether to fix, migrate, or rebuild your site before you spend a dollar.',
    objective:
      'AI-native websites change how sites get built and run. I help you pick the right path without putting your brand, search traffic, or integrations at risk.',
    bestIf: "you're weighing a migration, a rebuild, or an AI-native site.",
    deliverables: [
      'A clear recommendation: improve, migrate, or redesign',
      'The tradeoffs of each path, in plain English',
      'A plan to preserve your URLs, search, and integrations where possible',
      'A phased roadmap you can hand to any team',
    ],
    outcome:
      'The right website decision, made before anyone writes code.',
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
    { label: 'About', href: '/about' },
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
