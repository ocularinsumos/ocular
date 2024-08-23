import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Lista de todos los locales soportados
  locales: ['en', 'es'],
 
  // Usado cuando no hay un locale que coincida
  defaultLocale: 'en'
});

export const config = {
  // Coincidir solo con rutas internacionalizadas
  matcher: ['/', '/(es|en)/:path*']
};
