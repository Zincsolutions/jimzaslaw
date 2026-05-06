import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { CTABand } from '@/components/sections/cta-band';
import { BlogCard } from '@/components/blog-card';
import { getAllPosts, getPostBySlug, renderPostToHtml } from '@/lib/blog';
import { site } from '@/lib/site';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const metaTitle = post.metaTitle || post.title;
  return {
    title: metaTitle,
    description: post.description,
    openGraph: {
      title: metaTitle,
      description: post.description,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified || post.datePublished,
      authors: [post.author || 'Jim Zaslaw'],
      tags: post.topics,
    },
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await renderPostToHtml(post);

  const all = getAllPosts();
  const related = all.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: { '@type': 'Person', name: post.author || 'Jim Zaslaw' },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: { '@type': 'ImageObject', url: `${site.url}/logos/zaslaw-black.svg` },
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    keywords: post.topics.join(', '),
  };
  const faqLd = post.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((q) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: { '@type': 'Answer', text: q.answer },
        })),
      }
    : null;
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${site.url}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <article className="pt-32 md:pt-40 pb-20">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[14px] text-ink-3 hover:text-ink"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All posts
          </Link>
          <header className="mt-8 max-w-[68ch]">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {post.topics.map((t) => (
                <span key={t} className="chip chip-stone">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] tracking-[-0.03em] leading-[1.05] font-semibold">
              {post.title}
            </h1>
            <p className="mt-5 text-[19px] md:text-[20px] leading-[1.55] text-ink-2">
              {post.description}
            </p>
            <div className="mt-6 flex items-center gap-3 text-[13px] font-mono uppercase tracking-[0.06em] text-ink-3">
              <span>{post.author || 'Jim Zaslaw'}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.datePublished}>
                {formatDate(post.datePublished)}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>
          </header>

          <div
            className="mt-12 prose-jz"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Container>
      </article>

      {related.length ? (
        <section className="py-20 md:py-28 border-t border-border">
          <Container>
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <Eyebrow>Keep reading</Eyebrow>
                <h2 className="mt-3 text-[clamp(24px,3vw,32px)] tracking-[-0.02em] leading-[1.15] font-semibold">
                  Related field notes.
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-1.5 text-[14px] font-medium text-ink hover:gap-2 transition-all"
              >
                All posts
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTABand
        title="Ready to find your first AI opportunity?"
        body="Jim Zaslaw helps small and mid-sized businesses turn scattered AI usage into practical systems for marketing, content, operations, and brand execution."
        primaryLabel="Schedule a Free AI Opportunity Assessment"
        secondaryLabel="Email Jim"
      />

      <Script
        id={`ld-article-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id={`ld-breadcrumb-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd ? (
        <Script
          id={`ld-faq-${post.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      ) : null}
    </>
  );
}
