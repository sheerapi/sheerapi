"use client";

import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Header from "@/components/ui/header";
import { app, initFirebase } from "@/lib/utils";
import { getStorage, ref, listAll, list, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import { Skeleton } from "@/components/ui/skeleton";

export default function Blog() {
    initFirebase();

    const storage = getStorage(app);
    const listRef = ref(storage, '');

    let postList = [];
    let [loading, setLoading] = useState(true);

    const sync = async () => {
        listAll(listRef).then(itemList => {
            const list = itemList.items;

            list.forEach((post) => {
                getDownloadURL(ref(storage, post.fullPath)).then(url => {
                    fetch(url).then(raw => {
                        raw.text().then(text => {
                            const content = matter(text);
                            postList.push({ name: content.data.title, date: new Date(parseInt(content.data.date)), type: content.data.type });
                        });
                    })
                });
            });
        });
    };

    useEffect(() => {
        sync().then(() => {
            setLoading(false);
        })
    }, []);

    return (
        <main>
            <div className="absolute top-[2rem] left-[2rem]">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbLink href="/">home</BreadcrumbLink>
                        <BreadcrumbSeparator />
                        <BreadcrumbPage>blog</BreadcrumbPage>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="mt-8">
                <Header>blog.</Header>
                <p>here i'll post updates related to projects, myself, important events and stuff like that, i guess.</p>

                <ul>
                    {loading ? <Skeleton className="w-24 h-12"></Skeleton> :
                        postList.map((post, index) => {
                            console.log(loading);

                            return <li key={index}>
                                <span>{post.name}</span>
                                <span>{post.date.toString()}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        </main>
    );
}