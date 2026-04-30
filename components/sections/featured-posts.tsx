import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { getFeaturedPosts } from '@/lib/blog';
import { BlogCard } from '@/components/blog-card';

export function FeaturedPosts() {
  const posts = getFeaturedPosts(3);
  if (!posts.length) return null;
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <Container>
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <Eyebrow>From the blog</Eyebrow>
            <h2 className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.02em] leading-[1.1] font-semibold max-w-2xl">
              Field notes on building AI systems.
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-1.5 text-[15px] font-medium text-ink hover:gap-2 transition-all shrink-0"
          >
            View all posts
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
        <div className="mt-10 md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-ink"
          >
            View all posts
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
