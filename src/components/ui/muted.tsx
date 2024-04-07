import React from "react";

export default function Muted(props: React.PropsWithChildren) {
    return (
        <span className="muted">{props.children}</span>
    );
}