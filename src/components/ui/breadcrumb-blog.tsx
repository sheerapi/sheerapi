import React from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "./breadcrumb";

export default function BlogBreadcrumb(props: React.PropsWithChildren) {
    return (<div className="absolute top-[2rem] left-[2rem]">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbLink href="/">home</BreadcrumbLink>
                <BreadcrumbSeparator />
                <BreadcrumbLink href="/blog">blog</BreadcrumbLink>
                <BreadcrumbSeparator />
                <BreadcrumbPage>{props.children}</BreadcrumbPage>
            </BreadcrumbList>
        </Breadcrumb>
    </div>);
}