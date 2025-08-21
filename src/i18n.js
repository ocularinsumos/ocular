export const locales = ['es', 'en'];
export const defaultLocale = 'es';

// Remueve el prefijo de locale de una pathname, devolviendo '/' para la raíz
export function stripLocale(pathname) {
  if (!pathname) return '/';
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const parts = p.split('/');
  if (locales.includes(parts[1])) {
    const rest = '/' + parts.slice(2).join('/');
    return rest === '/' || rest === '' ? '/' : rest.replace(/\/$/, '');
  }
  return p.replace(/\/$/, '') || '/';
}

// Devuelve la ruta completa con el locale prefijado
export function withLocale(pathname, locale) {
  const p = stripLocale(pathname);
  if (!locale) return p;
  if (p === '/' || p === '') return `/${locale}`;
  return `/${locale}${p.startsWith('/') ? p : '/' + p}`;
}
