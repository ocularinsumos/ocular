import type { MetadataRoute } from 'next';

const SITE = 'https://ocularinsumosquirurgicos.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/Admin/', '/api/', '/_next/', '/private/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/Admin/', '/api/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/Admin/', '/api/'],
      },
    ],
    sitemap: [
      `${SITE}/sitemap.xml`,
      `${SITE}/es/sitemap.xml`,
      `${SITE}/en/sitemap.xml`,
    ],
    host: SITE,
  };
}
