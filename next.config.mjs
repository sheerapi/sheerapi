/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    skipTrailingSlashRedirect: true,
    images: {
        unoptimized: true,
      },
};

export default nextConfig;
