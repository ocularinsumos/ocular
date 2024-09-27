import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from 'next-pwa';

// Crear la configuración de Next.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'ocualrinsumosquirurgicos.com', 'ocular-red.vercel.app'],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/Cannulas',
        destination: '/en/categorias/Cannulas',
        permanent: true,
      },
      {
        source: '/Intraocular_Lens',
        destination: '/en/categorias/Intraocular_Lens',
        permanent: true,
      },
      {
        source: '/Implantes',
        destination: '/en/categorias/Implantes',
        permanent: true,
      },
      {
        source: '/Sutures',
        destination: '/en/categorias/Sutures',
        permanent: true,
      },
      {
        source: '/Gases',
        destination: '/en/categorias/Gases',
        permanent: true,
      },
      {
        source: '/Scalpels',
        destination: '/en/categorias/Scalpels',
        permanent: true,
      },
      {
        source: '/Substances',
        destination: '/en/categorias/Substances',
        permanent: true,
      },
      {
        source: '/Lente_Intraocular',
        destination: '/es/categorias/Lente_Intraocular',
        permanent: true,
      },
      {
        source: '/Implantes',
        destination: '/es/categorias/Implantes',
        permanent: true,
      },
      {
        source: '/Canulas',
        destination: '/es/categorias/Canulas',
        permanent: true,
      },
      {
        source: '/Suturas',
        destination: '/es/categorias/Suturas',
        permanent: true,
      },
      {
        source: '/Gases',
        destination: '/es/categorias/Gases',
        permanent: true,
      },
      {
        source: '/Bisturis',
        destination: '/es/categorias/Bisturis',
        permanent: true,
      },
      {
        source: '/Sustancias',
        destination: '/es/categorias/Sustancias',
        permanent: true,
      },
      {
        source: '/es/categorias/Substances',
        destination: '/es/categorias/Sustancias',
        permanent: true,
      },
      {
        source: '/en/pterigion',
        destination: '/en/pterygium',
        permanent: true,
      },
      {
        source: '/docs/Tipos de Lentes Intraoculares y Sus Usos - OCULAR.pdf',
        destination: '/docs/Tipos_Lentes_Intraoculares_y_Sus_Usos-OCULAR.pdf',
        permanent: true,
      },
      {
        source: '/en/categorias/Canulas',
        destination: '/es/categorias/Canulas',
        permanent: true,
      },
      {
        source: '/politica-de-privacidad',
        destination: '/',
        permanent: true,
      },
      {
        source: '/configuracion-de-cookies/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/Retina',
        destination: '/en/retina',
        permanent: true,
      }
    ]
  },
};

// Crear la configuración para next-pwa
const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/middleware-manifest\.json$/]
});

// Crear la configuración para next-intl
const withNextIntl = createNextIntlPlugin();

// Exportar la configuración combinada con next-intl y next-pwa
export default withNextIntl(pwaConfig(nextConfig));
