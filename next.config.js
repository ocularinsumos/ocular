const withPWA = require('next-pwa')({
  dest: "public", 
});

module.exports = withPWA({
  images: {
    domains: ['localhost', 'ocualrinsumosquirurgicos.com', 'ocular-red.vercel.app'],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*', // Ensure this matches the path of your API routes
      },
    ];
  },
});
