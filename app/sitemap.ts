import type { MetadataRoute } from 'next';
import { site, services } from '@/lib/site';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, priority: 1 },
    { url: `${site.url}/about`, lastModified: now, priority: 0.7 },
    { url: `${site.url}/services`, lastModified: now, priority: 0.8 },
    { url: `${site.url}/how-it-works`, lastModified: now, priority: 0.8 },
    { url: `${site.url}/blog`, lastModified: now, priority: 0.7 },
    { url: `${site.url}/contact`, lastModified: now, priority: 0.9 },
    { url: `${site.url}/privacy`, lastModified: now, priority: 0.3 },
  ];
  const servicePaths: MetadataRoute.Sitemap = services.map((p) => ({
    url: `${site.url}/services/${p.slug}`,
    lastModified: now,
    priority: 0.7,
  }));
  const blogPaths: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified || p.datePublished),
    priority: 0.6,
  }));
  return [...staticPaths, ...servicePaths, ...blogPaths];
}
