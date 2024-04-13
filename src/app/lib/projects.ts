import type { Project } from './types'
import fs from 'fs'
import { cache } from 'react'

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getProjects = cache(() => {
    const result = JSON.parse(fs.readFileSync(process.cwd() + '/projects/index.json').toString());

    return result.projects as Project[];
})

export function getProject(slug: string) {
    const projects = getProjects();

    return projects.find((project: Project) => project.id === slug) as Project;
}

export default getProjects