"use client";

import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/ui/header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { z } from "zod"
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getStorage, ref, uploadString } from "firebase/storage";
import { initFirebase } from "@/lib/utils";
import { app } from "../../../lib/utils";
import { toast, useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";

const formSchema = z.object({
    title: z.string(),
    type: z.string(),
})


export default function Write() {
    const textarea = useRef(null);
    let [mdxSource, setMdxSource] = useState(null);
    let [content, setContent] = useState("");

    const parse = async () => {
        setMdxSource((await serialize(textarea.current.value, {
            mdxOptions: {
                development: process.env.NODE_ENV !== 'production'
            }
        })));
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            type: "normal"
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const mdxContent = `---
title: '${values.title}'
date: '${Date.now()}'
type: '${values.type}'
---

${textarea.current.value}`;

        initFirebase();

        const storage = getStorage(app);
        const upload = await uploadString(ref(storage, '/' + Date.now().toString() + '.mdx'), mdxContent, "raw");
        const id = upload.metadata.name.replace('.mdx', '');

        toast(
            {
                title: 'Uploaded blog post',
                description: `Successfully uploaded blog post, with id "${id}"`,
                action: <ToastAction altText="visit"><Link href={"/blog/posts/" + id}>Visit</Link></ToastAction>
            });
    }

    return (
        <main>
            <div className="absolute top-[2rem] left-[2rem]">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbLink href="/">home</BreadcrumbLink>
                        <BreadcrumbSeparator />
                        <BreadcrumbLink href="/blog">blog</BreadcrumbLink>
                        <BreadcrumbSeparator />
                        <BreadcrumbPage>write</BreadcrumbPage>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="mt-8 gap-5 flex flex-col">
                <Header>write.</Header>

                <Tabs defaultValue="editor" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="editor">Editor</TabsTrigger>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                    </TabsList>
                    <TabsContent value="editor">
                        <Card className="min-h-96">
                            <CardHeader>
                                <CardTitle>Editor</CardTitle>
                                <CardDescription>
                                    Edit markdown, click "Save" to publish
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-2">
                                <Button onClick={() => { textarea.current.value = content; }}>Reset</Button>
                                <Textarea className="min-h-72" onKeyDown={(e) => { setContent(textarea.current.value); }} onLoad={() => { textarea.current.value = content; }} ref={textarea} onBlur={(e) => { parse(); }} />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="preview">
                        <Card className="min-h-96">
                            <CardHeader>
                                <CardTitle>Preview</CardTitle>
                                <CardDescription>
                                    Preview the post, click "Save" to publish
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-2">
                                <MDXRemote {...mdxSource}></MDXRemote>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="New post" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Name of the blog.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type</FormLabel>
                                    <FormControl>
                                        <Input placeholder="normal" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Badge to assign the post.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>

                <div className="w-full h-4">

                </div>
            </div>
        </main>
    );
}