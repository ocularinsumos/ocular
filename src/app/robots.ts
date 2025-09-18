import type { MetadataRoute } from 'next';

const SITE = 'https://ocularinsumosquirurgicos.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['/Admin/', '/api/'],
      },
    ],
    sitemap: [
      `${SITE}/es/sitemap.xml`,
      `${SITE}/en/sitemap.xml`,
    ],
  };
}
