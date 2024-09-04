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
