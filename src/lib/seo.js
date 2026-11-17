import es from '../../public/messages/es.json';
import en from '../../public/messages/en.json';

export { categorySlug } from './slug';

export const SITE_URL = 'https://ocularinsumosquirurgicos.com';
export const LOCALES = ['es', 'en'];

// Los JSON se importan (quedan en el bundle). Leerlos con fs desde public/ en runtime
// falla en Vercel (500): public/ no está disponible para las funciones serverless.
const MESSAGES = { es, en };

export function readMessages(locale) {
  return MESSAGES[locale] || MESSAGES.es;
}

// Recorta texto a un largo apto para meta description
export function toDescription(text, max = 155) {
  const clean = String(text || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

// Slug de una patología (producto[]) para URL: minúsculas
export const pathologySlug = (item) => String(item.id).toLowerCase();

// Devuelve metadata completa (canonical + hreflang + OG) para una URL por locale
export function buildPageMetadata({ locale, title, description, urls }) {
  const url = `${SITE_URL}${urls[locale]}`;
  const languages = {};
  for (const l of LOCALES) if (urls[l]) languages[l] = `${SITE_URL}${urls[l]}`;
  languages['x-default'] = `${SITE_URL}${urls.es}`;
  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      url,
      siteName: 'Ocular Insumos Quirúrgicos',
      title,
      description,
      images: [{ url: `${SITE_URL}/images/logos/logo.webp`, alt: 'Ocular Insumos Quirúrgicos' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${SITE_URL}/images/logos/logo.webp`] },
  };
}
