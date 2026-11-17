import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from 'next-pwa';

// Crear la configuración de Next.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cloudinary hace la optimización (f_auto,q_auto,w_*); ver src/lib/imageLoader.js
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.js',
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
        destination: '/en/categorias/cannulas',
        permanent: true,
      },
      {
        source: '/Intraocular_Lens',
        destination: '/en/categorias/intraocular-lens',
        permanent: true,
      },
      {
        source: '/Implantes',
        destination: '/en/categorias/implantes',
        permanent: true,
      },
      {
        source: '/Sutures',
        destination: '/en/categorias/sutures',
        permanent: true,
      },
      {
        source: '/Gases',
        destination: '/en/categorias/gases',
        permanent: true,
      },
      {
        source: '/Scalpels',
        destination: '/en/categorias/scalpels',
        permanent: true,
      },
      {
        source: '/Substances',
        destination: '/en/categorias/substances',
        permanent: true,
      },
      {
        source: '/Lente_Intraocular',
        destination: '/es/categorias/lente-intraocular',
        permanent: true,
      },
      {
        source: '/Implantes',
        destination: '/es/categorias/implantes',
        permanent: true,
      },
      {
        source: '/Canulas',
        destination: '/es/categorias/canulas',
        permanent: true,
      },
      {
        source: '/Suturas',
        destination: '/es/categorias/suturas',
        permanent: true,
      },
      {
        source: '/Gases',
        destination: '/es/categorias/gases',
        permanent: true,
      },
      {
        source: '/Bisturis',
        destination: '/es/categorias/bisturis',
        permanent: true,
      },
      {
        source: '/Sustancias',
        destination: '/es/categorias/sustancias',
        permanent: true,
      },
      {
        source: '/es/categorias/Substances',
        destination: '/es/categorias/sustancias',
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
        destination: '/es/categorias/canulas',
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
        source: '/en/retina',
        destination: '/en/retinasurgery',
        permanent: true,
      },
      {
        source: '/en/cataratas',
        destination: '/en/cataracts',
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
