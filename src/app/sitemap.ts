import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://ocularinsumosquirurgicos.com';
const DEFAULT_LOCALE = 'es';
const LOCALES = ['es', 'en'];

async function getProductSlugs() {
  try {
    const file = path.join(process.cwd(), 'src', 'components', 'Constantes', 'productos.json');
    const raw = await fs.promises.readFile(file, 'utf8');
    const items = JSON.parse(raw);
    return Array.isArray(items) ? items.map(i => i?.href).filter(Boolean) : [];
  } catch {
    return [];
  }
}

async function getCategorySlugs() {
  try {
    const file = path.join(process.cwd(), 'public', 'messages', `${DEFAULT_LOCALE}.json`);
    const raw = await fs.promises.readFile(file, 'utf8');
    const json = JSON.parse(raw);
    if (Array.isArray(json?.categorias)) {
      return json.categorias.map((c: any) => c?.href).filter(Boolean);
    }
  } catch {}
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, categories] = await Promise.all([
    getProductSlugs(),
    getCategorySlugs(),
  ]);

  const basePages = [
    '',
    '/contacto',
    '/politica-de-privacidad',
    '/sobre-mi',
  ];

  // High priority pages for SEO
  const highPriorityPages = [
    '/lentes-intraoculares',
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Add base pages with locales
  for (const page of basePages) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'monthly',
        priority: page === '' ? 1.0 : 0.6,
        alternates: {
          languages: {
            es: `${SITE_URL}/es${page}`,
            en: `${SITE_URL}/en${page}`,
          },
        },
      });
    }
  }

  // Add high priority pages for SEO - Lentes Intraoculares
  for (const page of highPriorityPages) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.95,
        alternates: {
          languages: {
            es: `${SITE_URL}/es${page}`,
            en: `${SITE_URL}/en${page}`,
          },
        },
      });
    }
  }

  // Add product pages
  for (const productSlug of products) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${locale}${productSlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: {
            es: `${SITE_URL}/es${productSlug}`,
            en: `${SITE_URL}/en${productSlug}`,
          },
        },
      });
    }
  }

  // Add category pages
  for (const categorySlug of categories) {
    for (const locale of LOCALES) {
      const catPath = locale === 'es' ? '/categorias' : '/categories';
      entries.push({
        url: `${SITE_URL}/${locale}${catPath}${categorySlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
          languages: {
            es: `${SITE_URL}/es/categorias${categorySlug}`,
            en: `${SITE_URL}/en/categories${categorySlug}`,
          },
        },
      });
    }
  }

  return entries;
}
