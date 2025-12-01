import type { MetadataRoute } from 'next';

const SITE = 'https://ocularinsumosquirurgicos.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/Admin/', '/api/', '/_next/', '/private/'],
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
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
