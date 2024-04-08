"use client";

import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Header from "@/components/ui/header";
import { app, initFirebase } from "@/lib/utils";
import { getStorage, ref, listAll, list, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import matter from "gray-matter";

export default function Blog() {
    initFirebase();

    const storage = getStorage(app);
    const listRef = ref(storage, '');

    let [postList, setPostList] = useState([]);

    const sync = async () => {
        const list = (await listAll(listRef)).items;

        setPostList(list.map(async (post) => {
            const url = await getDownloadURL(ref(storage, post.fullPath));
            const content = matter(await (await fetch(url)).text());

            return { name: content.data.title };
        }));
    };

    useEffect(() => {
        sync();
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

                {postList.map((post) => {
                    console.log(post.name);
                })}
            </div>
        </main>
    );
}