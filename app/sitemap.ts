export interface SitemapEntry {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export default function sitemap(): SitemapEntry[] {
  return [
    {
      url: 'https://pandaabhishek.vercel.app',
      lastModified: new Date('2026-07-10'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://pandaabhishek.vercel.app/about',
      lastModified: new Date('2026-07-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
