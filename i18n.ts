import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Lista de locales soportados
const locales = ['en', 'es'];

export default getRequestConfig(async ({ locale }) => {
  // Verifica que el locale entrante sea válido
  if (!locales.includes(locale as any)) notFound();
 
  // Importa el archivo de mensajes correspondiente al locale actual
  return {
    messages: (await import(`./public/messages/${locale}.json`)).default
  };
});
