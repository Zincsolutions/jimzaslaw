import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { BlogCard } from '@/components/blog-card';
import { BlogTopicFilter } from '@/components/blog-topic-filter';
import { CTABand } from '@/components/sections/cta-band';
import { getAllPosts, getAllTopics } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Field notes on AI systems',
  description:
    'Practical writing on AI strategy, AEO, AI operating systems, and AI-driven brand production. From an operator who has been building digital systems for twenty years.',
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const allPosts = getAllPosts();
  const topics = getAllTopics();
  const posts = topic
    ? allPosts.filter((p) => p.topics.map((t) => t.toLowerCase()).includes(topic.toLowerCase()))
    : allPosts;
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Field notes</Eyebrow>
            <h1 className="mt-4 text-[clamp(40px,6vw,64px)] tracking-[-0.03em] leading-[1.05] font-semibold">
              Field notes on building AI systems.
            </h1>
            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.6] text-ink-2">
              Practical writing on AI strategy, AEO, operating systems, and
              brand production. Optimized to be read by humans and cited by AI.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border sticky top-[72px] bg-bg/85 backdrop-blur-md z-30">
        <Container>
          <BlogTopicFilter topics={topics} active={topic} />
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          {featured ? (
            <a
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 md:mb-20 border-b border-border pb-12 md:pb-16"
            >
              <div className="lg:col-span-7 aspect-[16/10] rounded-xl border border-border relative overflow-hidden bg-bg-soft">
                {featured.coverImage ? (
                  <Image
                    src={featured.coverImage}
                    alt={featured.coverImageAlt || featured.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(120% 100% at 0% 0%, var(--chip-sky) 0%, transparent 60%), radial-gradient(120% 100% at 100% 100%, var(--chip-orange) 0%, transparent 55%)',
                    }}
                  />
                )}
              </div>
              <div className="lg:col-span-5 flex flex-col gap-5 self-center">
                <div className="flex items-center gap-3">
                  <span className="chip chip-stone">Featured</span>
                  <span className="text-[12px] font-mono uppercase tracking-[0.06em] text-ink-3">
                    {featured.readingTime}
                  </span>
                </div>
                <h2 className="text-[clamp(28px,4vw,40px)] tracking-[-0.025em] leading-[1.1] font-semibold transition-colors group-hover:text-accent">
                  {featured.title}
                </h2>
                <p className="text-[17px] leading-relaxed text-ink-2">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {featured.topics.map((t) => (
                    <span key={t} className="chip chip-stone">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>

          {posts.length === 0 ? (
            <p className="text-[16px] text-ink-2">
              No posts under that topic yet — check back soon.
            </p>
          ) : null}
        </Container>
      </section>

      <CTABand />
    </>
  );
}
