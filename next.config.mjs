import nextMdx from '@next/mdx';

const withMdx = nextMdx({
    // By default only the `.mdx` extension is supported.
    extension: /\.mdx?$/,
    options: { providerImportSource: 'private-next-root-dir/mdx-components' }
})

/** @type {import('next').NextConfig} */
const nextConfig = withMdx({
    experimental:
    {
        optimizeCss: true,
        mdxRs: true,
    },
    // Support MDX files as pages:
    pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
});

export default nextConfig;
