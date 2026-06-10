# Jim Zaslaw Consulting — jimzaslaw.com

Marketing site for Jim Zaslaw Consulting, a sister practice to ZINC.

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS v4 + `@tailwindcss/typography`
- Geist Sans + Geist Mono (self-hosted via the `geist` package)
- Markdown blog (file-based, `content/blog/*.md`, rendered via unified/remark)
- Resend (contact form)
- Deploy: Netlify (`@netlify/plugin-nextjs`)

## Getting started

```bash
npm install
cp .env.example .env.local
# fill in NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_GA_ID,
# RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
npm run dev
```

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Conversion-focused home page (13 sections) |
| `/about` | Long-form bio + ZINC tie-in |
| `/services` | Overview of the three service engagements |
| `/services/[slug]` | Individual service page (3 of these) |
| `/how-it-works` | How engagements work — Assessment / Implementation / Retainer + FAQ |
| `/blog` | Blog index (rendered as "Field Notes"), topic filter, featured slot |
| `/blog/[slug]` | Markdown post template with JSON-LD Article + FAQPage + BreadcrumbList |
| `/contact` | Assessment request form (Resend handler) |
| `/api/contact` | POST endpoint, Resend integration with Zod validation, honeypot + rate limit |
| `/sitemap.xml` | Auto-generated from MDX + static routes |
| `/feed.xml` | RSS feed |
| `/robots.txt` | Robots policy (AI crawlers explicitly allowed) |
| `/llms.txt` | Site summary for LLM/AI-agent discoverability |
| `/og` | Dynamic OG image (accepts `?title=&eyebrow=`) |

## Adding a blog post

Drop a new `.md` file in `content/blog/`:

```md
---
title: 'How does X work in 2026?'
description: 'A 1–2 sentence answer suitable as the AEO direct answer.'
datePublished: '2026-04-29'
dateModified: '2026-04-29'
author: 'Jim Zaslaw'
topics: ['AEO', 'Strategy']
featured: true
faq:
  - question: 'Q here'
    answer: 'A here'
---

**TL;DR.** Lead with the answer.

## Heading framed as a question

…
```

The site picks it up automatically — sitemap, RSS, and JSON-LD schema all populate from the frontmatter.

## Design system

See `app/globals.css` for tokens (colors, spacing, motion, radius, shadows). Primitives live in `components/ui/`. Sections live in `components/sections/`. The pillar mockups (SVG-based illustrations) are in `components/mockups/`.

Brand: ink `#231F20`, off-white `#FDFDFD`, accent chips for the three pillars (mint / sky / blush). Geist as the type system. Pill CTA buttons. Hairline borders. Minimal shadows.

## Deploying to Netlify

The repo includes `netlify.toml` and uses `@netlify/plugin-nextjs` to handle the Next.js runtime.

1. Connect the repo on Netlify.
2. Set the env vars from `.env.example`.
3. Point `jimzaslaw.com` at the Netlify site.
4. Push `main`. Netlify builds and deploys automatically.
