import { notFound } from 'next/navigation';
import { readMessages, toDescription, buildPageMetadata, categorySlug } from '@/lib/seo';

function resolve(locale, slug) {
  const list = readMessages(locale).categorias;
  const key = categorySlug(slug);
  const index = list.findIndex((c) => categorySlug(c.id) === key);
  return { index, item: index >= 0 ? list[index] : null };
}

export async function generateMetadata({ params: { locale, categorias } }) {
  const { index, item } = resolve(locale, categorias);
  if (!item) return { robots: { index: false, follow: false } };

  const urls = {};
  for (const l of ['es', 'en']) {
    const counterpart = readMessages(l).categorias[index];
    if (counterpart) urls[l] = `/${l}/categorias/${categorySlug(counterpart.id)}`;
  }

  const isEs = locale === 'es';
  const name = item.title.trim();
  const sample = (item.productos || []).slice(0, 3).map((p) => p.nombre).filter(Boolean).join(', ');
  const title = isEs
    ? `${name} para cirugía oftalmológica | Ocular Insumos Quirúrgicos`
    : `${name} for ophthalmic surgery | Ocular Surgical Supplies`;
  const description = toDescription(
    isEs
      ? `${name} para cirugía oftalmológica en Argentina: ${sample}. Marcas certificadas ANMAT. Asesoramiento y envío a todo el país.`
      : `${name} for ophthalmic surgery in Argentina: ${sample}. Quality-certified brands. Advice and nationwide shipping.`
  );

  return buildPageMetadata({ locale, title, description, urls });
}

export default function CategoryLayout({ children, params: { locale, categorias } }) {
  if (!resolve(locale, categorias).item) notFound();
  return children;
}
