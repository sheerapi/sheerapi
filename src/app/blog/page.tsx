import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Header from "@/components/ui/header";
import getPosts from "../lib/posts";
import Muted from "@/components/ui/muted";
import Link from "next/link";

export default function Blog() {
    const posts = getPosts().sort((b, a) => {
        return parseInt(a.date) - parseInt(b.date);
    });

    return (
        <main className="flex justify-start items-start h-full flex-col gap-5">
            <div className="absolute top-[2rem] left-[2rem]">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbLink href="/">home</BreadcrumbLink>
                        <BreadcrumbSeparator />
                        <BreadcrumbPage>blog</BreadcrumbPage>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="mt-8 w-full">
                <Header>blog.</Header>
                <p>
                    here i'll post weekly updates about me, my life, projects, dunno lol.
                </p>
                <div className="h-96 flex flex-col gap-4 mt-8 ml-8 w-full pr-8">
                    {posts.map((post, index) => {
                        const date = new Date(parseInt(post.date));
                        const dateString = `${date.getDay().toString().padStart(2, '0')}-${date.getMonth().toString().padStart(2, '0')}-${date.getFullYear().toString().padStart(4, '0')}, ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

                        return <div key={index} className="w-full flex blog-post-info-list justify-between">
                            <div className="w-full flex gap-4 items-center">
                                <Link className="post-title" href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                                <Muted>
                                    {dateString}
                                </Muted>
                            </div>

                            <div className="w-full flex gap-4 justify-end">
                                {post.tags.map((tag: string, index: number) => {
                                    return <span key={index} className="tag-chip">
                                        {tag}
                                    </span>
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </main>
    );
}