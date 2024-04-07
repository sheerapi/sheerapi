import React from "react";

export default function Header(props: React.PropsWithChildren) {
    return (
        <span className="header">{props.children}</span>
    );
}