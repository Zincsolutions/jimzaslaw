import { getAllPosts } from '@/lib/blog';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

function escape(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = getAllPosts();
  const items = posts
    .map((p) => {
      const url = `${site.url}/blog/${p.slug}`;
      return `<item>
        <title>${escape(p.title)}</title>
        <link>${url}</link>
        <guid>${url}</guid>
        <pubDate>${new Date(p.datePublished).toUTCString()}</pubDate>
        <description>${escape(p.description)}</description>
      </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(site.name)}</title>
    <link>${site.url}/blog</link>
    <description>${escape(site.description)}</description>
    <language>en-us</language>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
