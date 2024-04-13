import { MetadataRoute } from 'next'
import getPosts from './lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemap: MetadataRoute.Sitemap = [
        {
            url: 'https://sheerapi.vercel.app',
            changeFrequency: "never",
            priority: 0.2
        },
        {
            url: 'https://sheerapi.vercel.app/about',
            changeFrequency: "always",
            priority: 0.5
        },
        {
            url: 'https://sheerapi.vercel.app/blog',
            changeFrequency: "weekly",
            priority: 1
        }
    ];

    getPosts().forEach(post => {
        sitemap.push({ url: 'https://sheerapi.vercel.app/blog/post/' + post.slug, lastModified: new Date(parseInt(post.date)), changeFrequency: "never", priority: 1 });
    })

    return sitemap;
}