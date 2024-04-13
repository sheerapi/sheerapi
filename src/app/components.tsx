import Header from '@/components/ui/header'
import type { MDXComponents } from 'mdx/types'
import Image from '@/components/ui/image';
import { ImageProps } from 'next/image';
import { Code } from "bright";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(): MDXComponents {
    Code.lineNumbers = true;
    Code.theme = "dark-plus";

    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => <Header>{children}</Header>,
        h2: ({ children }) => <span className="header_2">{children}</span>,
        h3: ({ children }) => <span className="header_3">{children}</span>,
        h4: ({ children }) => <span className="header_4">{children}</span>,
        h5: ({ children }) => <span className="header_5">{children}</span>,
        h6: ({ children }) => <span className="header_6">{children}</span>,
        a: (props) => <a className="link" {...props}>{props.children}</a>,
        img: (props) => (
            <Image {...(props as ImageProps)} />
        ),
        code: ({ children }) => <code className="inline-code">{children}</code>,
        pre: Code,
        p: ({ children }) => <div>{children}</div>,
        blockquote: ({ children }) => <div className="blockquoute">{children}</div>,
    }
}