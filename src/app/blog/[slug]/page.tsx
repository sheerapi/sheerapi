import { notFound } from 'next/navigation'
import Header from "@/components/ui/header";
import { getPost } from "@/app/lib/posts";
import BlogBreadcrumb from "@/components/ui/breadcrumb-blog";
import Muted from "@/components/ui/muted";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/app/components";
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import remarkFlexibleContainers from 'remark-flexible-containers';
import remarkMath from 'remark-math';
import remarkEmbed from 'remark-oembed';

function convertTZ(date: any, tzString: string) {
    return (new Date((typeof date === "string" ? new Date(date) : date)).toLocaleString("en-US", { timeZone: tzString }));
}

export default async function Page(params: { params: { slug: string } }) {
    let post = getPost(params.params.slug);

    if (post == undefined || post == null) {
        notFound();
    }

    const date = convertTZ(parseInt(post.date), "America/Santiago");
    const dateString = `${date}`;

    return (
        <main className="flex justify-start items-start h-full flex-col gap-5">
            <BlogBreadcrumb>{post.title}</BlogBreadcrumb>

            <div className="mt-8 flex gap-5 flex-col w-full blog-container">
                <div className="w-full">
                    <Header>{post.title}</Header>
                    <div className="w-full flex justify-between">
                        <div className="w-64 flex justify-between">
                            <Muted>by sheerapi</Muted>
                            <Muted>{dateString}</Muted>
                        </div>

                        <div className="w-6/12 flex gap-4 justify-end">
                            {post.tags.map((tag: string, index: number) => {
                                return <span key={index} className="tag-chip">
                                    {tag}
                                </span>
                            })}
                        </div>
                    </div>
                </div>

                <MDXRemote components={useMDXComponents()} options={{
                    mdxOptions:
                    {
                        remarkPlugins:
                            [
                                remarkGfm,
                                remarkMath
                            ]
                    }
                }} source={post.body}></MDXRemote>
            </div>
        </main>
    );
}