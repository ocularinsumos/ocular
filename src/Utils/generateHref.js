// Función auxiliar para generar el href correcto respetando el locale en la ruta actual
import { stripLocale, withLocale } from '../i18n';

export function generateHref(currentPath, itemHref, locale) {
  const base = stripLocale(currentPath);
  const target = itemHref.startsWith('/') ? itemHref : `/${itemHref}`;
  // Si se pasa locale, lo prefijamos
  if (locale) return withLocale(target, locale);
  // Si currentPath ya contiene locale, mantenemos ese prefijo
  return withLocale(target, undefined);
}
  