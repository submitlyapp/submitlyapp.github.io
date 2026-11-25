import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://submitlyapp.github.io'; // Replace with your URL
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      priority: 2,
    },
    {
      url: `${baseUrl}/ar`,
      lastModified: new Date(),
      priority: 2,
    },
    // Add your other static routes here (e.g., `${baseUrl}/about`)
  ];
}
