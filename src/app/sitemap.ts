import { MetadataRoute } from 'next'
import getPosts from './lib/posts';
import getProjects from './lib/projects';

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
        },
        {
            url: 'https://sheerapi.vercel.app/projects',
            changeFrequency: "weekly",
            priority: 1
        }
    ];

    getPosts().forEach(post => {
        sitemap.push({ url: 'https://sheerapi.vercel.app/blog/' + post.slug, lastModified: new Date(parseInt(post.date)), changeFrequency: "never", priority: 1 });
    });

    getProjects().forEach(project => {
        sitemap.push({ url: 'https://sheerapi.vercel.app/projects/' + project.id, changeFrequency: "never", priority: 1 });
    });

    return sitemap;
}