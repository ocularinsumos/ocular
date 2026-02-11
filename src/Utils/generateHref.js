// Función auxiliar para generar el href correcto respetando el locale en la ruta actual
import { stripLocale, withLocale } from '../i18n';

export function generateHref(currentPath, itemHref, locale) {
  // Si es un hash anchor, debe apuntar a la página de inicio con el locale correcto
  if (itemHref.startsWith('#')) {
    // Si tenemos locale, concatenamos /${locale}#anchor
    if (locale) {
      return `/${locale}${itemHref}`;
    }
    // Si no hay locale, devolver solo el hash (fallback)
    return itemHref;
  }
  
  const target = itemHref.startsWith('/') ? itemHref : `/${itemHref}`;
  
  // Si se pasa locale explícitamente, lo usamos
  if (locale) {
    return withLocale(target, locale);
  }
  
  // Si no hay locale pero hay currentPath, intentar extraer el locale de currentPath
  if (currentPath) {
    const base = stripLocale(currentPath);
    return withLocale(target, undefined);
  }
  
  // Por defecto, devolver el path sin locale (esto no debería pasar en producción)
  return target;
}
  