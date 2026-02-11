import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Lista de todos los locales soportados
  locales: ['en', 'es'],
 
  // Usado cuando no hay un locale que coincida
  defaultLocale: 'es',
  
  // Siempre usar la detección de locale basada en la URL
  localePrefix: 'always'
});

export const config = {
  // Coincidir con todas las rutas excepto archivos estáticos y API
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
