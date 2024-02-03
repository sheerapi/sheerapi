/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    skipTrailingSlashRedirect: true,
    basePath: "/sheerapi.github.io",
    images: {
        unoptimized: true,
      },
};

export default nextConfig;
