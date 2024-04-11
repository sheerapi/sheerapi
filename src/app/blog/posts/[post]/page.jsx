"use client";

import BlogBreadcrumb from "@/components/ui/breadcrumb-blog";
import Header from "@/components/ui/header";
import { app, initFirebase } from "@/lib/utils";
import { getStorage, ref, listAll, list, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import { Skeleton } from "@/components/ui/skeleton";
import Muted from "@/components/ui/muted";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from "next-mdx-remote";
import { useMDXComponents } from "@/app/components";

export default function Post(params) {
    initFirebase();

    const storage = getStorage(app);

    let [content, setContent] = useState(null);
    let [dateString, setDateString] = useState("");
    let [mdxSource, setMdxSource] = useState(null);

    useEffect(() => {
        const sync = async () => {
            const post = await getDownloadURL(ref(storage, params.params.post + '.mdx'));
            content = matter(await (await fetch(post)).text());

            setContent(content);
            const date = new Date(parseInt(content.data.date));
            setMdxSource(await serialize(content.content, {
                mdxOptions: {
                    development: process.env.NODE_ENV !== 'production',
                }
            }));

            const day = new Intl.DateTimeFormat(navigator.language, {
                weekday: "long",
            }).format(date);

            const month = new Intl.DateTimeFormat(navigator.language, {
                month: "long",
            }).format(date);

            setDateString(`${day}, ${month} ${date.getDate()}, ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`);
        };

        sync();
    }, []);

    return (
        <main>
            <BlogBreadcrumb>{content == null ? <Skeleton className="w-48 h-4"></Skeleton> : <span>{content.data.title}</span>}</BlogBreadcrumb>
            <div className="mt-8 min-h-12 gap-4 flex flex-col mb-4">
                <div className="flex flex-col blog-container">
                    <div className="blog-post-info">
                        {content == null ? <Skeleton className="w-96 h-12"></Skeleton> : <Header>{content.data.title}</Header>}
                        <div className="blog-post-info-container">
                            {content == null ? <Skeleton className="w-48 h-4"></Skeleton> : <Muted>by sheerapi</Muted>}
                            {content == null ? <Skeleton className="w-48 h-4"></Skeleton> : <Muted>{dateString}</Muted>}
                        </div>
                    </div>

                    {mdxSource == null ? <Skeleton className="w-full h-128"></Skeleton> : <MDXRemote components={useMDXComponents()} {...mdxSource}></MDXRemote>}
                </div>
            </div>
        </main>
    );
}