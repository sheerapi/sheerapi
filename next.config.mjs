/** @type {import('next').NextConfig} */
const nextConfig =
{
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.microlink.io',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
                port: '',
                pathname: '/**',
            },
        ],
    },
    crossOrigin: "anonymous"
};

export default nextConfig;
