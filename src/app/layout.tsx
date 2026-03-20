import type { Metadata } from 'next';
import './[locale]/globals.css';

export const metadata: Metadata = {
  title: 'Ocular Insumos Quirúrgicos',
  description: 'Empresa líder en insumos quirúrgicos oftalmológicos en Argentina.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
