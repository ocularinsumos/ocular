import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { categorySlug } from './src/lib/slug';

const intlMiddleware = createMiddleware({
  // Lista de todos los locales soportados
  locales: ['en', 'es'],

  // Usado cuando no hay un locale que coincida
  defaultLocale: 'es',

  // Siempre usar la detección de locale basada en la URL
  localePrefix: 'always'
});

export default function middleware(req: NextRequest) {
  // URLs de categoría canónicas en minúsculas con guiones:
  // /es/categorias/Lente_Intraocular -> /es/categorias/lente-intraocular (308)
  // (next.config redirects no sirve acá: es case-insensitive y generaría un bucle)
  const m = req.nextUrl.pathname.match(/^\/(es|en)\/categorias\/([^/]+)\/?$/);
  if (m) {
    const current = decodeURIComponent(m[2]);
    const canonical = categorySlug(current);
    if (canonical !== current) {
      const url = req.nextUrl.clone();
      url.pathname = `/${m[1]}/categorias/${canonical}`;
      return NextResponse.redirect(url, 308);
    }
  }
  return intlMiddleware(req);
}

export const config = {
  // Coincidir con todas las rutas excepto archivos estáticos y API
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
