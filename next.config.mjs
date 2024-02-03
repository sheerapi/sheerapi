/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    skipTrailingSlashRedirect: true,
    basePath: "./",
    images: {
        unoptimized: true,
      },
};

export default nextConfig;
