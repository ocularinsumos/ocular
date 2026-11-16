import type { MetadataRoute } from 'next';

const SITE = 'https://ocularinsumosquirurgicos.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
