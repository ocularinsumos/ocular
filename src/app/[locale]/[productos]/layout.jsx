import { notFound } from 'next/navigation';
import { readMessages, pathologySlug, toDescription, buildPageMetadata } from '@/lib/seo';

function resolve(locale, slug) {
  const list = readMessages(locale).producto;
  const index = list.findIndex((p) => pathologySlug(p) === String(slug).toLowerCase());
  return { list, index, item: index >= 0 ? list[index] : null };
}

export async function generateMetadata({ params: { locale, productos } }) {
  const { index, item } = resolve(locale, productos);
  if (!item) return { robots: { index: false, follow: false } };

  // es/en comparten el mismo orden en producto[]; se usa para hreflang
  const urls = {};
  for (const l of ['es', 'en']) {
    const counterpart = readMessages(l).producto[index];
    if (counterpart) urls[l] = `/${l}/${pathologySlug(counterpart)}`;
  }

  const name = item.title.replace(/\s+/g, ' ').trim();
  const isEs = locale === 'es';
  const title = isEs
    ? `${name} | Insumos quirúrgicos oftalmológicos | Ocular`
    : `${name} | Ophthalmic surgical supplies | Ocular`;
  const description = toDescription(`${name}. ${item.texto || ''} ${item.texto2 || ''}`);

  return buildPageMetadata({ locale, title, description, urls });
}

export default function PathologyLayout({ children, params: { locale, productos } }) {
  // 404 real (antes devolvía 200 con "Producto no encontrado")
  if (!resolve(locale, productos).item) notFound();
  return children;
}
