// src/app/[locale]/sitemap/route.js
import fs from 'fs';
import path from 'path';
import { locales as I18N_LOCALES } from '@/i18n';

// ================== Config ==================
const DEFAULT_LOCALE = 'es';
const KNOWN_HOSTS = ['https://ocularinsumosquirurgicos.com'];

// Prefijos por idioma (puedes agregar más si hace falta)
const PREFIX = {
  home: { es: '/', en: '/' },
  contact: { es: '/contacto', en: '/contact' },
  categories: { es: '/categorias', en: '/categories' },
};

const PRIORITY_BY_PREFIX = [
  { test: /^\/$/, priority: 1.0, changefreq: 'daily' },
  { test: /^\/productos?/, priority: 0.8, changefreq: 'weekly' },
  { test: /^\/categorias|^\/categories/, priority: 0.7, changefreq: 'weekly' },
  { test: /^\/docs\//, priority: 0.6, changefreq: 'monthly' },
];

// ================== Helpers ==================
function toHttps(url) {
  try {
    const u = new URL(url);
    u.protocol = 'https:';
    return u.toString().replace(/\/$/, '');
  } catch {
    return url.replace(/\/$/, '');
  }
}

function getBaseUrl() {
  // Prioridad: SITE_URL > VERCEL_URL > primer host conocido
  if (process.env.SITE_URL) return toHttps(process.env.SITE_URL);
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`.replace(/\/$/, '');
  return KNOWN_HOSTS[0];
}

function normalizePath(p) {
  if (!p || p === '') return '/';
  const withSlash = p.startsWith('/') ? p : `/${p}`;
  return withSlash !== '/' ? withSlash.replace(/\/+$/, '') : '/';
}

function getMetaForPath(p) {
  for (const rule of PRIORITY_BY_PREFIX) {
    if (rule.test.test(p)) return { priority: rule.priority, changefreq: rule.changefreq };
  }
  return { priority: 0.5, changefreq: 'monthly' };
}

async function safeStat(absPath) {
  try {
    const st = await fs.promises.stat(absPath);
    return st.mtime;
  } catch {
    return null;
  }
}

async function getLastmodForPublicFile(publicRelPath) {
  const abs = path.join(process.cwd(), 'public', publicRelPath.replace(/^\//, ''));
  return await safeStat(abs);
}

async function readJson(parts) {
  try {
    const file = path.join(process.cwd(), ...parts);
    const raw = await fs.promises.readFile(file, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// ================== Data builders ==================
async function getStaticPages() {
  // usa prefijos en ES para base; luego localizamos con buildLocalized
  return [
    PREFIX.home.es,          // '/'
    PREFIX.contact.es,       // '/contacto'
    '/politica-de-privacidad',
    '/sobre-mi',
    '/servicios',
  ].map(normalizePath);
}

async function getProductSlugs() {
  // Lee src/components/Constantes/productos.json y toma "href" (sin locale)
  const items = await readJson(['src', 'components', 'Constantes', 'productos.json']);
  if (!Array.isArray(items)) return [];
  return items.map(i => i?.href).filter(Boolean).map(normalizePath);
}

async function getDocs() {
  try {
    const docsDir = path.join(process.cwd(), 'public', 'docs');
    const files = await fs.promises.readdir(docsDir);
    return files.map(f => normalizePath(`/docs/${encodeURI(f)}`));
  } catch {
    return [];
  }
}

async function getCategorySlugs() {
  // Importante: solo desde el locale por defecto para evitar duplicados
  const msgsDir = path.join(process.cwd(), 'public', 'messages');
  const out = new Set();
  try {
    const raw = await fs.promises.readFile(path.join(msgsDir, `${DEFAULT_LOCALE}.json`), 'utf8');
    const json = JSON.parse(raw);
    if (Array.isArray(json?.categorias)) {
      json.categorias.forEach(c => {
        if (c?.href) out.add(normalizePath(`${PREFIX.categories.es}${normalizePath(c.href)}`));
      });
    }
  } catch {}
  return Array.from(out);
}

// Genera URLs por locale + <xhtml:link hreflang="..."> y reescribe prefijos
function buildLocalized(urlPath, locales, baseUrl) {
  const alreadyLocalized = locales.some(l => urlPath === `/${l}` || urlPath.startsWith(`/${l}/`));
  const paths = new Map(); // locale -> fullUrl

  const bake = (p, l) => {
    // Reescritura de prefijos por idioma
    if (p === PREFIX.contact.es || p === PREFIX.contact.en) {
      p = PREFIX.contact[l] || p;
    }
    if (p.startsWith(PREFIX.categories.es)) {
      p = p.replace(/^\/categorias/, PREFIX.categories[l] || '/categorias');
    } else if (p.startsWith(PREFIX.categories.en)) {
      p = p.replace(/^\/categories/, PREFIX.categories[l] || '/categories');
    }
    const finalPath = p === '/' ? `/${l}` : `/${l}${p}`;
    return `${baseUrl}${finalPath}`;
  };

  if (alreadyLocalized) {
    // Si la ruta ya viene localizada, genera alternates a partir de la versión “deslocalizada”
    const matched = locales.find(l => urlPath === `/${l}` || urlPath.startsWith(`/${l}/`));
    const bare = urlPath === `/${matched}` ? '/' : urlPath.replace(`/${matched}`, '');
    for (const l of locales) {
      paths.set(l, bake(bare, l));
    }
  } else {
    for (const l of locales) {
      paths.set(l, bake(urlPath, l));
    }
  }

  // x-default apunta a la ruta base sin locale
  paths.set('x-default', `${baseUrl}${urlPath}`);
  return paths;
}

// ================== Route handler ==================
export async function GET(_req, { params }) {
  // No necesitamos leer params aquí; el sitemap cubre todos los locales.
  const base = getBaseUrl();
  const locales = Array.isArray(I18N_LOCALES) && I18N_LOCALES.length ? I18N_LOCALES : [DEFAULT_LOCALE];

  // 1) Rutas base (sin locale)
  const [staticPages, products, docs, categories] = await Promise.all([
    getStaticPages(),
    getProductSlugs(),
    getDocs(),
    getCategorySlugs(),
  ]);

  const basePaths = new Set([...staticPages, ...products, ...docs, ...categories]);

  // 2) Construir <url> por cada locale con alternates
  const entries = [];

  for (const p of Array.from(basePaths).sort()) {
    const { priority, changefreq } = getMetaForPath(p);

    // lastmod: si es archivo público (docs), usa mtime; si no, hoy
    let lastmodDate = null;
    if (p.startsWith('/docs/')) lastmodDate = await getLastmodForPublicFile(p);
    const lastmod = (lastmodDate || new Date()).toISOString();

    const alternates = buildLocalized(p, locales, base);

    for (const [hlang, href] of alternates.entries()) {
      if (hlang === 'x-default') continue; // no emitir <url> separado para x-default

      const altLinksXml = Array.from(alternates.entries())
        .map(([altLang, altHref]) => {
          const lang = altLang === 'x-default' ? 'x-default' : altLang;
          return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${altHref}"/>`;
        })
        .join('\n');

      entries.push(
        [
          '  <url>',
          `    <loc>${href}</loc>`,
          `    <lastmod>${lastmod}</lastmod>`,
          `    <changefreq>${changefreq}</changefreq>`,
          `    <priority>${priority.toFixed(1)}</priority>`,
          altLinksXml,
          '  </url>',
        ].join('\n')
      );
    }
  }

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    entries.join('\n') +
    `\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate=3600',
    },
  });
}
