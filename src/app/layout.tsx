import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './[locale]/globals.css';

export const metadata: Metadata = {
  title: 'Ocular Insumos Quirúrgicos',
  description: 'Empresa líder en insumos quirúrgicos oftalmológicos en Argentina.',
};

// Único <html>/<body> de la app. El idioma lo fija el middleware de next-intl
// (header x-next-intl-locale); antes /en salía con lang="es".
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = headers().get('x-next-intl-locale');
  return (
    <html lang={locale === 'en' ? 'en' : 'es'}>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
