import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

export type BlogFrontmatter = {
  title: string;
  metaTitle?: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  topics: string[];
  featured?: boolean;
  author?: string;
  faq?: { question: string; answer: string }[];
  coverImage?: string;
  coverImageAlt?: string;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
};

export type BlogPostWithHtml = BlogPost & { html: string };

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function listFiles() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
}

export function getAllPosts(): BlogPost[] {
  const files = listFiles();
  const posts = files.map((file) => {
    const slug = file.replace(/\.(md|mdx)$/, '');
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    return {
      ...(data as BlogFrontmatter),
      slug,
      content,
      readingTime: readingTime(content).text,
    };
  });
  posts.sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  for (const ext of ['md', 'mdx']) {
    const file = path.join(BLOG_DIR, `${slug}.${ext}`);
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, 'utf8');
      const { data, content } = matter(raw);
      return {
        ...(data as BlogFrontmatter),
        slug,
        content,
        readingTime: readingTime(content).text,
      };
    }
  }
  return null;
}

export async function renderPostToHtml(post: BlogPost): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(post.content);
  return String(file);
}

export function getAllTopics() {
  const set = new Set<string>();
  getAllPosts().forEach((p) => p.topics.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export function getFeaturedPosts(limit = 3) {
  const all = getAllPosts();
  const featured = all.filter((p) => p.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return all.slice(0, limit);
}
