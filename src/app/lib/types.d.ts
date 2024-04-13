export type Post = {
    title: string
    slug: string | undefined
    date: string
    tags: string[]
    body: string
}

export type Project = {
    name: string,
    tags: string[],
    description: string,
    repo: string,
    post: string,
    id: string,
    colors: number[][],
    status: string
}