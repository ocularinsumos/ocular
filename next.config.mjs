import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from 'next-pwa';

// Crear la configuración para next-intl
const withNextIntl = createNextIntlPlugin();

// Crear la configuración para next-pwa
const pwaConfig = withPWA({
  dest: 'public',
});

// Crear la configuración de Next.js y combinar con next-intl y next-pwa
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

// Exportar la configuración combinada con next-intl y next-pwa
export default withNextIntl(pwaConfig(nextConfig));
