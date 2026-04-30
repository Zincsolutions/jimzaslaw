import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-5 border border-border rounded-xl bg-bg p-6 hover:border-border-strong transition-colors h-full"
    >
      <div className="aspect-[16/10] rounded-md bg-bg-soft border border-border relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              'radial-gradient(120% 100% at 0% 0%, var(--chip-sky) 0%, transparent 60%), radial-gradient(120% 100% at 100% 100%, var(--chip-orange) 0%, transparent 55%)',
          }}
          aria-hidden
        />
        <span className="absolute bottom-3 left-3 chip chip-stone bg-white/90 text-ink">
          {post.topics[0] || 'Article'}
        </span>
      </div>
      <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.06em] text-ink-3">
        <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="text-[20px] tracking-[-0.015em] leading-[1.2] font-semibold text-ink">
        {post.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-ink-2 line-clamp-3">
        {post.description}
      </p>
      <div className="mt-auto pt-2 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink">
        Read post
        <ArrowUpRight
          className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          aria-hidden
        />
      </div>
    </Link>
  );
}
