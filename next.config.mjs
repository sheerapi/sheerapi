/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    skipTrailingSlashRedirect: true,
    images: {
        unoptimized: true,
      },
    distDir: 'out'
};

export default nextConfig;
