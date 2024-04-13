import matter from 'gray-matter'
import path from 'path'
import type { Post } from './types'
import fs from 'fs'
import { cache } from 'react'

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = cache(() => {
    let posts: Post[] = [];

    const result = fs.readdirSync(process.cwd() + '/posts/');
    result
        .filter((file) => path.extname(file) === '.mdx')
        .forEach((file) => {
            const filePath = `${process.cwd()}/posts/${file}`
            const postContent = fs.readFileSync(filePath);
            const { data, content } = matter(postContent);

            posts.push({ ...data, body: content } as Post);
        });

    return posts;
})

export function getPost(slug: string) {
    const posts = getPosts();

    return posts.find((post) => post.slug === slug);;
}

export default getPosts