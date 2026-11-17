import type { MetadataRoute } from 'next';
import { readMessages, pathologySlug, categorySlug, SITE_URL } from '../lib/seo';

// Sitemap único. Solo URLs que responden 200 y son indexables (sin redirects ni 404).
// Sin lastModified/changeFrequency inventados: Google los ignora si no son confiables.
const STATIC_PAGES = [
  { path: '', priority: 1 },
  { path: '/lentes-intraoculares', priority: 0.9 },
  { path: '/marcas', priority: 0.8 },
  { path: '/productos/aurolab-auroflex', priority: 0.8 },
  { path: '/productos/aurolab-auroflex-ev-gold', priority: 0.8 },
  { path: '/productos/aurolab-aurovisc', priority: 0.8 },
  { path: '/productos/aurolab-auroblue', priority: 0.8 },
  { path: '/productos/ophtec-artiflex', priority: 0.8 },
  { path: '/productos/ophtec-artisan', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const es = readMessages('es');
  const en = readMessages('en');
  const entries: MetadataRoute.Sitemap = [];

  const add = (urlEs: string, urlEn: string, priority: number) => {
    const languages = { es: `${SITE_URL}${urlEs}`, en: `${SITE_URL}${urlEn}` };
    entries.push({ url: languages.es, alternates: { languages }, priority });
    entries.push({ url: languages.en, alternates: { languages }, priority });
  };

  for (const p of STATIC_PAGES) add(`/es${p.path}`, `/en${p.path}`, p.priority);

  // Patologías: es/en comparten orden pero tienen slugs distintos (cataratas / cataracts)
  es.producto.forEach((item: any, i: number) => {
    add(`/es/${pathologySlug(item)}`, `/en/${pathologySlug(en.producto[i])}`, 0.9);
  });

  // Categorías: mismo prefijo /categorias en ambos idiomas
  es.categorias.forEach((item: any, i: number) => {
    add(`/es/categorias/${categorySlug(item.id)}`, `/en/categorias/${categorySlug(en.categorias[i].id)}`, 0.7);
  });

  return entries;
}
