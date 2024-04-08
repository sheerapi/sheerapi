"use client";

import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/ui/header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

export default function Blog() {

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

            <div className="mt-8">
                <Header>write.</Header>

                <Tabs defaultValue="editor" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="editor">Editor</TabsTrigger>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                    </TabsList>
                    <TabsContent value="editor">
                        <Card>
                            <CardHeader>
                                <CardTitle>Editor</CardTitle>
                                <CardDescription>
                                    Edit markdown, click "Save" to publish
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-2">
                                help, i'm still at the restaurant
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="preview">
                        <Card>
                            <CardHeader>
                                <CardTitle>Preview</CardTitle>
                                <CardDescription>
                                    Preview the post, click "Save" to publish
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-2">
                                help, i'm still at the restaurant
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
}