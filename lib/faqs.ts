// Page-level FAQs rendered by <PageFaq> just above the footer, with
// matching FAQPage JSON-LD. Written for how buyers phrase questions to
// AI assistants and search: direct first sentence, self-contained answer.
// Blog post FAQs live in each post's frontmatter instead.

export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: 'What does an AI consultant do for a small or mid-sized business?',
    a: 'An AI consultant helps a business decide where AI will actually create value, then turns that into working systems. In my practice that means diagnosing how the team uses AI today, choosing the right tools, building shared workflows and standards, and planning bigger decisions like how the website and marketing should evolve. The goal is business progress, not more experimentation.',
  },
  {
    q: 'How much does AI consulting cost?',
    a: 'My fixed-scope engagements start at $15K, and ongoing advisory retainers start at $5K per month. Every engagement has a defined scope, timeline, and fee before work begins, so there are no open-ended consulting hours. The first step, an AI and Digital Opportunity Assessment, is free.',
  },
  {
    q: 'Where should a business start with AI?',
    a: 'Start with the work, not the tools. Look for tasks that are frequent, time-consuming, repeatable, and easy for a knowledgeable person to review, such as recurring writing, content production, research, and internal knowledge capture. A short assessment of how your team already uses AI usually reveals two or three opportunities worth acting on first.',
  },
  {
    q: 'Is AI consulting worth it for a small business?',
    a: 'It is worth it when the business has real work AI can improve and no clear plan for how to do it. Most companies are not short on AI tools; they are short on structure. A focused engagement turns scattered experimentation into shared systems your team keeps using. If there is no clear opportunity, the free assessment will tell you that.',
  },
  {
    q: 'How do I know if my team is using AI effectively?',
    a: 'Your team is using AI effectively when good results are repeatable, shared, and tied to business outcomes. Warning signs include everyone using different tools in different ways, useful prompts living in personal chat histories, inconsistent brand quality, and no one able to say what AI has changed in the numbers. Those are structure problems, and they are fixable.',
  },
  {
    q: 'Should we hire an AI consultant or build AI skills in-house?',
    a: 'Usually both, in sequence. An outside advisor helps you make the early decisions quickly: which tools, which workflows, what standards, and what to avoid. My engagements are designed to leave your team able to run the system themselves, with documentation and training, so you are not dependent on a consultant for day-to-day AI work.',
  },
  {
    q: 'Will AI replace my marketing team?',
    a: 'No. AI changes how a marketing team works rather than replacing it. The teams that benefit most use AI to produce more content, visuals, and campaigns with the same headcount, while people keep the judgment, brand standards, and approvals. The work shifts from producing every draft to directing and reviewing it.',
  },
  {
    q: 'What is an AI-native website, and does my business need one?',
    a: 'An AI-native website is built on a modern codebase that AI coding agents can update directly, with people reviewing changes before they go live. Not every business needs one. If your current CMS still serves you well, improving it may be the better choice. My AI Website Transition Strategy helps leadership decide whether to improve, migrate, or redesign.',
  },
  {
    q: 'What kinds of companies does Jim Zaslaw Consulting work with?',
    a: 'Mostly owner-led and mid-market businesses: CEOs, founders, presidents, and marketing leaders whose teams are already experimenting with AI but lack a business-level plan. Many have meaningful brand equity, website traffic, content, integrations, or search visibility to protect, and some are facing a website-platform decision in the next 6 to 18 months.',
  },
  {
    q: 'How long does it take to see results from AI consulting?',
    a: 'The assessment produces recommendations in a single working session. Most system-building engagements run six to ten weeks, and the goal is for your team to be using the new workflows by the end of the engagement, not months later. The timeline for each engagement is defined before you commit.',
  },
];

export const servicesFaqs: Faq[] = [
  {
    q: 'What AI consulting services does Jim Zaslaw offer?',
    a: 'I offer four fixed-scope services: the AI Operating System, which organizes how your team uses AI; the AI Visibility Engine, which improves how your business shows up in AI-driven search; the AI Brand Asset System, which turns brand standards into AI visual workflows; and AI Website Transition Strategy, which helps leadership decide whether to improve, migrate, or redesign the website.',
  },
  {
    q: 'Which AI service should my business start with?',
    a: 'Start with the service that addresses your most valuable problem. If everyone uses AI differently, start with the AI Operating System. If buyers cannot find or understand you in AI search, the AI Visibility Engine. If AI visuals are off-brand, the AI Brand Asset System. If a major website decision is coming, AI Website Transition Strategy. The free assessment confirms the right starting point.',
  },
  {
    q: 'Can we combine more than one AI service?',
    a: 'Yes. Many clients start with one service and add another when the first creates a clear reason to. The services are designed to work together: an AI Operating System makes content and brand workflows easier to run, and a website transition often brings visibility work with it. Each engagement is still scoped and priced on its own.',
  },
  {
    q: 'How are the AI consulting services priced?',
    a: 'Each service is a fixed-scope engagement with a defined fee, and implementation engagements start at $15K. Pricing depends on the service, team size, and technical depth. AI Website Transition Strategy is scoped after the initial assessment. Ongoing advisory retainers start at $5K per month for companies that want continued support.',
  },
  {
    q: 'What is the difference between productized AI consulting and hourly consulting?',
    a: 'Productized consulting sells a defined outcome instead of time. Each of my services has a set scope, deliverables, timeline, and fee agreed before work begins, so you know what you are getting and what it costs. Hourly consulting can be open-ended, which makes it harder to budget and harder to tell when the work is done.',
  },
  {
    q: 'What do we receive at the end of an AI consulting engagement?',
    a: 'You receive working systems and documentation, not a slide deck. Depending on the service, that can include configured AI workspaces, prompt libraries, workflow templates, a question map and published content, brand visual guidelines and an asset library, or a website recommendation, risk register, and phased roadmap. Every engagement includes the handoff your team needs to keep using it.',
  },
  {
    q: 'Do you recommend specific AI tools or vendors?',
    a: 'I recommend tools based on fit with your business, team, and existing stack. Tool selection is part of the work: which tools to use, when, why, and with what settings and permissions. The goal is a small set of tools your team actually uses well, rather than a long list of subscriptions nobody manages.',
  },
  {
    q: 'What if we already pay for ChatGPT, Claude, or Microsoft Copilot?',
    a: 'That is a good starting point. Most engagements build on the tools a company already has. The gap is usually not the subscription; it is the missing structure around it: shared workflows, prompt libraries, standards, permissions, and training. I will tell you if a tool is a poor fit, but replacing tools is rarely the first move.',
  },
  {
    q: 'Do you implement AI systems or only advise?',
    a: 'Both. The services build working systems, not just recommendations: workspaces get configured, workflows get documented, content gets published, and teams get trained. When the work expands into brand, design, website development, migration, or integrations, ZINC, the agency I lead, can execute it with me still involved.',
  },
  {
    q: 'What happens after an AI consulting engagement ends?',
    a: 'Your team keeps running the system with the documentation and training delivered during the engagement. Some companies stop there. Others add an advisory retainer, starting at $5K per month, so a senior advisor can evaluate new tools and models, update workflows, and keep the plan current as AI keeps changing.',
  },
];

export const serviceFaqs: Record<
  'ai-operating-system' | 'ai-visibility-engine' | 'ai-brand-asset-system',
  Faq[]
> = {
  'ai-operating-system': [
    {
      q: 'What does an AI Operating System engagement include?',
      a: 'An AI Operating System engagement audits how your team uses AI today, selects and configures the right tools, sets up a centralized workspace, builds prompt libraries and workflow templates by function, defines standards and permissions, and trains the team. You finish with a documented system your team runs, plus a recorded training session for future hires.',
    },
    {
      q: 'How do I get my team to use AI consistently?',
      a: 'Give them a shared system instead of a mandate. That means agreeing on the tools to use, documenting workflows for the real work each function does, building a prompt library people can reuse, setting clear standards, and training the team on those workflows inside their actual jobs. Consistency comes from making the right way the easy way.',
    },
    {
      q: 'Should my company use ChatGPT, Claude, Gemini, or Microsoft Copilot?',
      a: 'The right choice depends on your existing stack, the work you need to improve, and your data requirements. Many companies end up with one primary assistant plus a few specialized tools. Tool selection in an AI Operating System engagement compares the options against your actual workflows, so the decision is based on fit rather than hype.',
    },
    {
      q: 'How do we stop good AI prompts from getting lost in personal chat histories?',
      a: 'Move them into a shared prompt library: an organized collection of tested prompts and templates, sorted by function and use case, that anyone on the team can reuse. Pair it with documented workflows so people know when to use each prompt. That shortens the learning curve for new hires and makes output quality more consistent across the team.',
    },
    {
      q: 'Do we need an AI usage policy for employees?',
      a: 'Yes. Even a short policy prevents most problems. It should cover which tools are approved, what data can and cannot be shared, when outputs need human review, and who decides on new tools. In an AI Operating System engagement, standards and permissions are built alongside the workflows, so the policy matches how people actually work.',
    },
    {
      q: 'How do we keep company data safe when employees use AI tools?',
      a: 'Start with approved tools that are configured correctly. Review each tool’s data, training, and retention settings, choose business plans where appropriate, set permissions, and give employees clear rules about what information can be shared. A defined set of approved tools is far easier to govern than a dozen personal accounts nobody tracks.',
    },
    {
      q: 'How long does it take to set up an AI operating system?',
      a: 'Most AI Operating System engagements run six to ten weeks, depending on team size and existing systems. That covers the usage audit, tool selection and setup, the shared workspace, prompt libraries and workflow templates, standards, and team training. The timeline is defined before you commit.',
    },
    {
      q: 'Can an AI operating system work with Microsoft 365 or Google Workspace?',
      a: 'Yes. The centralized AI workspace is set up to fit your existing stack rather than replace it. If your team works in Microsoft 365 or Google Workspace, the tools, workflows, and permissions are chosen and configured to work within that environment.',
    },
    {
      q: 'How do you measure the ROI of AI adoption?',
      a: 'Measure the work, not the usage. Pick the workflows AI is meant to improve, then compare time spent, output volume, turnaround time, and rework before and after. Usage counts alone say little. An AI operating system makes this easier because the workflows are defined, so there is something specific to measure.',
    },
    {
      q: 'How do we train employees to use AI at work?',
      a: 'Train people on their real work, not on AI in general. The most effective training walks each team through the documented workflows and prompts they will actually use, then gives them standards for reviewing output. Every AI Operating System engagement includes a recorded training session so new hires can onboard into the same workflows later.',
    },
  ],
  'ai-visibility-engine': [
    {
      q: 'How do I get my business mentioned in ChatGPT and other AI answers?',
      a: 'Make your business easy for AI systems to understand and cite. That means publishing clear, well-structured content that directly answers the questions buyers ask in your category, backed by real expertise and consistent information across your site. No one can guarantee a mention, but clear, useful, structured content improves your chances.',
    },
    {
      q: 'What does an AEO (answer engine optimization) service include?',
      a: 'An AEO service should map the questions buyers ask AI tools, then build content that answers them clearly. The AI Visibility Engine identifies the 30 to 100 highest-value questions in your category, builds a structured content strategy around them, sets up AI-assisted content workflows, publishes an initial set of 20 to 50 or more assets with structured data, and leaves an ongoing production system.',
    },
    {
      q: 'Do I need AEO if my SEO is already strong?',
      a: 'Probably, but you are not starting from zero. Strong SEO fundamentals, like clear site structure, structured data, fast pages, and real authority, are the same foundation AI engines rely on. AEO adds question-based content, direct answers, and FAQ-style structure so AI systems can quote you. The work builds on what you already have rather than replacing it.',
    },
    {
      q: 'Which AI search tools should my business pay attention to?',
      a: 'Start with the ones your buyers use. ChatGPT, Claude, Perplexity, and Google AI Overviews are common places people now ask category questions. The fundamentals that help in one generally help in the others, so the practical move is to build clear, structured, answer-ready content once and track how each tool describes your business over time.',
    },
    {
      q: 'How do I find out whether AI tools recommend my company?',
      a: 'Ask them. Build a list of the questions buyers actually ask in your category, run them through ChatGPT, Claude, Perplexity, and Google, and note whether your company appears, how it is described, and which sources are cited. The AI Visibility Engine starts with this kind of question map, covering the 30 to 100 highest-value questions.',
    },
    {
      q: 'How long does it take to show up in AI search results?',
      a: 'There is no fixed timeline, and anyone who promises one is guessing. AI systems draw on sources that are crawled and updated on their own schedules. What you can control is publishing clear, useful, well-structured content consistently and tracking visibility over time. That is why the AI Visibility Engine includes an ongoing production system, not just a one-time content push.',
    },
    {
      q: 'What kind of content gets cited by AI assistants?',
      a: 'Content that answers a specific question clearly and early, is organized under descriptive headings, is backed by real expertise, and is consistent with what other sources say about you. FAQ sections, comparison pages, how-to guides, and clear service pages with structured data tend to be easier for AI systems to use than vague marketing copy.',
    },
    {
      q: 'Does schema markup help with AI search visibility?',
      a: 'Structured data helps search engines and AI systems understand what a page is about, who published it, and how it relates to your business. It is not a shortcut on its own, but it is part of the foundation. The AI Visibility Engine includes structured data as part of the initial published content set.',
    },
    {
      q: 'Can anyone guarantee my business will be recommended by AI?',
      a: 'No. AI systems decide what to cite on their own, so honest providers do not promise placement. What the AI Visibility Engine does is make your business clearer, more useful, and easier to surface: a question map, answer-ready content, structured data, and a publishing workflow your team can keep running. That improves your odds without pretending to control the outcome.',
    },
    {
      q: 'How much content do I need to improve AI visibility?',
      a: 'Enough to answer the questions that matter most in your category, and then more over time. A typical AI Visibility Engine engagement maps 30 to 100 high-value questions and publishes an initial set of 20 to 50 or more content assets, including blog posts, landing pages, FAQs, and structured data, along with a system to keep producing more.',
    },
  ],
  'ai-brand-asset-system': [
    {
      q: 'Can AI create on-brand marketing images?',
      a: 'Yes, once the brand is translated into rules AI tools can follow. Without that, AI visuals drift in style, color, and quality. An AI Brand Asset System converts your brand identity into AI-compatible visual guidelines and master prompts, so your team can produce images that look like your brand and need far less cleanup.',
    },
    {
      q: 'How do I choose which AI image tool to use for each job?',
      a: 'Match the tool to the job. Photographic scenes, illustration, product mockups, design layouts, and video each favor different tools, and many teams use more than one. Part of an AI Brand Asset System engagement is defining which tools to use for which jobs and documenting it, so the team is not guessing each time.',
    },
    {
      q: 'Why do AI-generated images look off-brand, and how do you fix it?',
      a: 'They look off-brand because each person starts from a blank prompt, so style, color, and quality drift. The fix is shared structure: documented AI visual guidelines, tested master prompts that encode your style, color, composition, and subject rules, approved references, and a review step before assets go out. A shared asset library also shows the team what good looks like.',
    },
    {
      q: 'What is a master prompt for AI image generation?',
      a: 'A master prompt is a tested, reusable prompt structure that encodes your brand’s visual rules, such as style, lighting, color, composition, and mood, so different people get consistent results. Team members change the subject or scene while the brand elements stay fixed. It works like a brand template for AI imagery.',
    },
    {
      q: 'What should we check before publishing AI-generated images in ads or packaging?',
      a: 'Check the commercial-use terms of the tool and plan you used, since they vary and change, and get legal review for high-stakes uses such as advertising, packaging, or trademarks. Also check the image against your brand guidelines before it goes out. Choosing tools and settings with those terms in mind is part of setting up a brand asset workflow.',
    },
    {
      q: 'How does AI change the role of our in-house designers?',
      a: 'It shifts their time from routine production to concepts, campaigns, and quality control. An AI Brand Asset System is meant to reduce reliance on outside design support for routine assets, while designers and marketers keep ownership of the brand and the final call on what goes out.',
    },
    {
      q: 'How many assets does an AI Brand Asset System produce?',
      a: 'An engagement typically creates an organized initial library of 50 to 200 or more assets, depending on your needs. More importantly, it leaves your in-house team with the guidelines, master prompts, and documented workflows to keep creating on-brand visuals after the engagement ends.',
    },
    {
      q: 'What is included in AI brand visual guidelines?',
      a: 'AI brand visual guidelines translate your existing brand identity into instructions AI tools can follow: approved styles, color and lighting rules, composition, subject matter, what to avoid, and which tools to use for which jobs. They sit alongside your traditional brand guidelines and make them usable in an AI workflow.',
    },
    {
      q: 'Can AI help with social media, website, and sales visuals?',
      a: 'Yes, and those are some of the most common uses. Teams use AI brand workflows to produce campaign images, social content, website imagery, and visuals for sales materials. The value comes from producing more of them consistently, with less cleanup, without waiting on outside design support for every routine request.',
    },
    {
      q: 'How do we train our team to create brand assets with AI?',
      a: 'Train them on documented workflows rather than general tool tutorials. Each workflow shows which tool to use, which master prompt to start from, how to adjust it for the task, and how to review the result against the brand guidelines. The AI Brand Asset System includes these workflows so the in-house team can create on its own.',
    },
  ],
};

export const websiteTransitionFaqs: Faq[] = [
  {
    q: 'What is an AI-native website?',
    a: 'An AI-native website is built on a modern codebase that AI coding agents can work on directly. Team members request changes in plain language, the agent prepares them, and people review higher-risk work before it goes live. The design, content, and URLs can stay the same. The operating model is what changes.',
  },
  {
    q: 'What does an AI website migration involve?',
    a: 'Moving an existing site from its current CMS to an AI-native foundation. The work includes a full inventory of pages, URLs, redirects, forms, integrations, analytics, and structured data; a staging build that is tested while the current site stays live; a coordinated launch; and monitoring afterward. Whether it is worth doing is the question the strategy engagement answers first.',
  },
  {
    q: 'Do we have to migrate our website?',
    a: 'No. The purpose of the engagement is to choose the right path. If your current platform still fits the business, I will recommend improving it rather than moving for the sake of moving.',
  },
  {
    q: 'Should we move our website off WordPress?',
    a: 'Only if the business case is there. Many sites should stay on WordPress. Companies usually consider moving because of plugin maintenance, security exposure, publishing friction, or technical debt. An AI Website Transition Strategy weighs those costs against the cost and risk of migrating before recommending whether to improve in place, migrate, or redesign.',
  },
  {
    q: 'Is Webflow still a good choice for a business website?',
    a: 'Yes, for many businesses. Webflow remains the right platform for a lot of companies. The decision should be driven by requirements: content model, publishing workflow, integrations, design needs, team capability, ownership, hosting, performance, and governance. I assess WordPress, Webflow, and other platforms against the same criteria.',
  },
  {
    q: 'Will a website migration hurt our search rankings?',
    a: 'No responsible advisor should promise unchanged rankings. The plan addresses URL continuity, redirects, metadata, internal links, structured data, crawlability, performance, and post-launch monitoring to reduce avoidable risk.',
  },
  {
    q: 'Do we need to redesign our website to migrate it?',
    a: 'Not necessarily. A transition can preserve the agreed design and content, include targeted improvements, or support a full redesign. The recommendation depends on what is working and what the business needs next.',
  },
  {
    q: 'How much does an AI website migration cost?',
    a: 'It depends on site size, integrations, content, and whether design changes are included. The AI Website Transition Strategy is a fixed-scope engagement with scope and fee defined after the initial assessment, and it produces a budget range for execution. Your own team, another partner, or ZINC can execute the roadmap; any ZINC work is scoped separately.',
  },
  {
    q: 'Do I need to know how to code to manage an AI-native website?',
    a: 'Not for every supported task. An agent-ready operating model can let team members begin work with plain-language requests, but the organization still needs clear review, approval, and escalation rules.',
  },
  {
    q: 'What is Dispatch?',
    a: 'Dispatch is a management layer for AI-powered websites. It helps teams govern work produced by coding agents through review, approvals, risk controls, attribution, monitoring, and restore capability.',
  },
];

export const howItWorksFaqs: Faq[] = [
  {
    q: 'What happens during the free AI and Digital Opportunity Assessment?',
    a: 'I meet with the founder and one or two key leaders for a 60–90 minute working session. We look at how AI is used today, where the friction is, and which decision or service would create the most value first, whether that is team workflows, marketing, content, brand assets, AI visibility, or the website. You receive a short written summary and two or three recommendations.',
  },
  {
    q: 'Do I have to engage all four services?',
    a: 'No. The assessment identifies the decision or service that matters most. Many clients start with one and add another only when the work creates a clear reason to do so.',
  },
  {
    q: 'How long does an engagement take?',
    a: 'Most system-building engagements run six to ten weeks. An AI Website Transition Strategy may be shorter or longer depending on site size, integrations, stakeholders, and the depth of technical assessment required. The timeline is defined before you commit.',
  },
  {
    q: 'Who does the work?',
    a: 'I lead every engagement directly. When the scope moves from advisory into brand, design, development, website migration, integrations, or e-commerce, that execution can run through ZINC with me still involved.',
  },
  {
    q: 'What do you need from our team during an engagement?',
    a: 'A leadership sponsor who can approve direction, time with the people in each function the work touches, and access to the relevant tools and accounts. The time commitment is agreed up front with the scope, so the team knows what to expect before the engagement starts.',
  },
  {
    q: 'Do I have to use ZINC for implementation?',
    a: 'No. The strategy and roadmap should be usable by your existing team or another qualified partner. ZINC is available when you want continuity from decision through delivery.',
  },
  {
    q: 'How is this different from hiring an AI consultant?',
    a: 'My work is grounded in more than 25 years of building brands, websites, commerce platforms, marketing systems, and integrations. AI is changing that stack, not replacing the need to understand it.',
  },
  {
    q: 'Do you sign NDAs and work with sensitive data?',
    a: 'Yes. Standard practice. Engagements regularly involve confidential strategy, customer data, and internal workflows.',
  },
  {
    q: 'What do engagements cost?',
    a: 'Most fixed-scope engagements start at $15K. Final pricing depends on the service, business requirements, stakeholders, and technical depth. Any ZINC execution is scoped separately so the advisory decision and implementation commitment remain clear.',
  },
  {
    q: 'What does the advisory retainer cost?',
    a: 'Advisory retainers start at $5K per month. Final pricing depends on scope and team size, and is defined once the Stage 2 work is scoped.',
  },
];

export const aboutFaqs: Faq[] = [
  {
    q: 'Who is Jim Zaslaw?',
    a: 'Jim Zaslaw is an AI and digital strategy advisor and the CEO of ZINC, a strategy, creative, and technology agency he has led for more than 25 years. He helps owners and leadership teams make practical decisions about AI, websites, brand, content, and operations. Jim Zaslaw Consulting is his advisory practice.',
  },
  {
    q: 'What is ZINC?',
    a: 'ZINC is the strategy, creative, and technology agency I have led for more than 25 years. ZINC has helped companies build brands, websites, e-commerce platforms, marketing systems, and technology integrations, with more than 300 projects launched. When a consulting engagement needs execution, ZINC is the team that carries it out.',
  },
  {
    q: 'What is the difference between Jim Zaslaw Consulting and ZINC?',
    a: 'Jim Zaslaw Consulting is my advisory practice, and ZINC is the agency I lead. The consulting side delivers diagnosis, decisions, risk analysis, roadmaps, and ongoing counsel. ZINC delivers execution: brand, design, development, migration, integrations, and support. Many clients only need the advice. When they need execution, ZINC takes it forward without a handoff to a team that was not part of the strategy.',
  },
  {
    q: 'What is Dispatch, and how does it relate to Jim Zaslaw?',
    a: 'Dispatch is ZINC’s management and governance layer for AI-powered websites. It gives teams one place to review agent-made changes, apply approval and risk rules, see who changed what, monitor the site, and restore a prior version when needed. I recommend it when a company adopts an AI-powered website and it fits. This website is governed by Dispatch.',
  },
  {
    q: 'What experience does Jim Zaslaw have with AI?',
    a: 'My AI work is built on more than 25 years of building the systems AI is now changing: brands, websites, e-commerce platforms, marketing systems, and technology integrations. Today I help companies put AI into those systems through team operating systems, AI search visibility, brand asset workflows, and website transitions. This site itself is maintained with AI agents under Dispatch governance.',
  },
  {
    q: 'What companies has Jim Zaslaw worked with?',
    a: 'Through ZINC, I have worked with companies such as Mac Tools, Kroil Oil, Batory Foods, Airlift, Navigator, and Sequel, across more than 300 launched projects. My consulting clients are typically owner-led and mid-market businesses whose leaders want practical AI decisions grounded in how brands, websites, and marketing systems actually get built.',
  },
  {
    q: 'What makes Jim Zaslaw different from other AI consultants?',
    a: 'Many AI consultants focus on tools and prompts. My advice comes from more than 25 years of making and implementing the decisions AI now changes: how a company presents itself, how a website is built, how marketing operates, how commerce connects, and how teams use technology. When execution is needed, ZINC can deliver it.',
  },
  {
    q: 'Does Jim Zaslaw lead engagements personally?',
    a: 'Yes. I lead every engagement directly, from the first assessment through the final recommendations. When the scope moves into brand, design, development, website migration, integrations, or e-commerce, ZINC’s team does that execution with me still involved, so the decisions made in the strategy carry through to delivery.',
  },
  {
    q: 'What is Jim Zaslaw’s view on AI for business?',
    a: 'AI is not a separate department; it is a new operating layer across the business. The companies that get lasting value will not be the ones that adopt the most tools. They will be the ones that make better decisions about where AI belongs, what context it needs, what people must approve, and how the work connects to business outcomes.',
  },
  {
    q: 'How do I contact Jim Zaslaw?',
    a: 'The best way is to request an AI and Digital Opportunity Assessment through the contact form at jimzaslaw.com/contact. You can also email jim@jimzaslaw.com or connect on LinkedIn. I review every request and reply within one business day.',
  },
];

export const contactFaqs: Faq[] = [
  {
    q: 'What happens after I submit an assessment request?',
    a: 'I review your information and reply within one business day to schedule a focused working session. If your need is primarily execution, such as an approved redesign or migration, I may recommend a ZINC working session instead. If a decision needs to come first, we begin with the assessment.',
  },
  {
    q: 'Is the AI and Digital Opportunity Assessment really free?',
    a: 'Yes. The assessment is free and carries no commitment beyond the session. It is a 60–90 minute working session followed by a short written summary, two or three high-impact recommendations, and a suggested first engagement or decision path.',
  },
  {
    q: 'How should I prepare for an AI opportunity assessment?',
    a: 'Come with the problem, not a polished brief. It helps to know which tools your team uses today, where work feels slow or inconsistent, what you hope AI can help with, and any upcoming decisions, such as a website change. If the website is part of the conversation, have the URL, current platform, and key integrations handy.',
  },
  {
    q: 'Who from our company should attend the assessment?',
    a: 'The founder or CEO plus one or two key leaders, usually whoever owns marketing, operations, or the website. The session works best with people who understand where the friction is and can make decisions about what to do next. A larger group can join later if an engagement moves forward.',
  },
  {
    q: 'What if I am not sure what kind of help I need?',
    a: 'That is common, and it is what the assessment is for. Select “Not sure yet” on the form and describe the situation in your own words. The session sorts out whether the priority is team workflows, AI visibility, brand assets, the website, or something else, and which decision should come first.',
  },
  {
    q: 'Can I request help with just my website?',
    a: 'Yes. Select a website option on the form, such as website strategy, WordPress assessment, AI-native website, or redesign and migration, and a few extra questions appear about your platform, timing, and integrations. That lets me come prepared to discuss whether to improve, migrate, or redesign.',
  },
  {
    q: 'Will the information I share be kept confidential?',
    a: 'Yes. What you share on the form is used to prepare for our conversation. I regularly sign NDAs, and engagements routinely involve confidential strategy, customer data, and internal workflows.',
  },
  {
    q: 'Is my company a good fit for Jim Zaslaw Consulting?',
    a: 'Usually, if you are a small or mid-sized business where AI or a website decision affects real revenue, brand, or operations, and leadership wants a practical plan rather than a generic AI demonstration. Founder-led companies and mid-market firms with established brands are the most common fit. If it is not a fit, I will tell you plainly.',
  },
  {
    q: 'How much does it cost to work with Jim Zaslaw after the assessment?',
    a: 'If you move forward, fixed-scope engagements start at $15K and ongoing advisory retainers start at $5K per month. Scope, timeline, deliverables, and fee are defined before you commit, and any execution by ZINC is scoped separately.',
  },
  {
    q: 'Can I email Jim Zaslaw directly instead of using the form?',
    a: 'Yes, at jim@jimzaslaw.com. The form is usually faster, because it captures the context I need to prepare, including your AI usage, goals, and any website details, so the first conversation can go straight to the useful part.',
  },
];

export const blogFaqs: Faq[] = [
  {
    q: 'What is Field Notes by Jim Zaslaw?',
    a: 'Field Notes is Jim Zaslaw’s collection of practical articles on AI for business, covering AI strategy, AI search and AEO, AI operating systems, AI-driven brand production, and how AI is changing websites and e-commerce. The articles are written for owners, CEOs, and marketing leaders who want to put AI to work, not just read about it.',
  },
  {
    q: 'Who writes the Field Notes articles?',
    a: 'I do. Field Notes articles are written by Jim Zaslaw, CEO of ZINC, drawing on more than 25 years of building brands, websites, e-commerce platforms, and marketing systems, and on current work helping leadership teams make AI decisions.',
  },
  {
    q: 'How can a small business start using AI?',
    a: 'Start with work that is frequent, time-consuming, pattern-based, and easy to review, such as recurring writing, marketing content, research, and internal knowledge capture. The Field Notes guide “How Can a Small Business Use AI?” explains how to find and prioritize a first AI opportunity.',
  },
  {
    q: 'What should a business do before buying more AI tools?',
    a: 'Define the work first. List the tasks you want AI to improve, then evaluate tools against those tasks and check how each fits your existing stack and data rules. Buying tools before defining the work is how companies end up with scattered subscriptions and no shared system. The Field Notes guide “How Do You Choose the Right AI Tools for Your Business?” covers the evaluation in depth.',
  },
  {
    q: 'Why do AI experiments stall inside companies?',
    a: 'Because the results stay individual. Prompts live in personal chat histories, workflows are never documented, and each person uses different tools in different ways, so nothing compounds. Companies get past this by organizing tools, prompts, workflows, and standards into a shared system, which Field Notes covers in “What Is an AI Operating System for Business?”',
  },
  {
    q: 'How does SEO work now that people use AI to search?',
    a: 'SEO still matters, but it is being absorbed into a larger discipline that includes AEO, GEO, and AIO. The same fundamentals that help pages rank also help AI engines understand and cite them. The Field Notes article “How does SEO work now that everyone uses AI to search?” explains how they fit together.',
  },
  {
    q: 'Can a business use AI without weakening its brand?',
    a: 'Yes, if the brand is defined clearly enough for AI to follow and people review what goes out. The risk comes from generic, unreviewed output that drifts from how the brand looks and sounds. The Field Notes article “How Is AI Affecting Branding?” covers how businesses can protect consistency while using AI to move faster.',
  },
  {
    q: 'How should a leadership team keep up with AI without chasing every release?',
    a: 'Pick a few trusted sources, revisit your AI plan on a regular schedule, and judge new tools against the work you have already defined rather than the hype around them. Field Notes is written for that: practical takes on what is changing and what to do about it. Companies that want a standing senior partner for this use an advisory retainer.',
  },
  {
    q: 'Will AI assistants change how people buy online?',
    a: 'They are starting to. With AI checkout, buyers can complete purchases inside an AI conversation, which makes acquisition easier and exposes weak retention faster. The Field Notes article “AI checkout is here” explains what that means for e-commerce businesses in 2026.',
  },
  {
    q: 'How can I get new Field Notes articles?',
    a: 'Subscribe to the RSS feed at jimzaslaw.com/feed.xml, or visit the Field Notes page at jimzaslaw.com/blog, where articles can be filtered by topic. You can also follow Jim Zaslaw on LinkedIn.',
  },
];
