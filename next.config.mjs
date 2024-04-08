import nextMdx from '@next/mdx';

const withMdx = nextMdx({
    // By default only the `.mdx` extension is supported.
    extension: /\.mdx?$/,
    options: {/* otherOptions… */ }
})

/** @type {import('next').NextConfig} */
const nextConfig = withMdx({
    // Support MDX files as pages:
    pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
});

export default nextConfig;
