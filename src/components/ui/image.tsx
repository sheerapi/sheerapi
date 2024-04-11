import { ImageProps } from "next/image";
import Muted from "./muted";
import { useState } from "react";

export default function Image(props: ImageProps) {
    const src = props.src;

    return (
        <div className="blog_image_container">
            <div className="blog_image" role="img" alt={props.alt} style={{ backgroundImage: `url('${src}')` }} title={props.title}>
                {props.children}
                <img src={src} style={{ visibility: "hidden" }} />
            </div>
            <Muted>{props.alt}</Muted>
        </div>
    );
}