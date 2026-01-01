/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.uriel-sites.com',
          },
        ],
        destination: 'https://uriel-sites.com/:path*',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
