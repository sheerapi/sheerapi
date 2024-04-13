import { buttonVariants } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex justify-center items-center h-full flex-col gap-5">
			<Header>it's me, hi.</Header>
			<div className="flex gap-4">
				<Link className={buttonVariants({ variant: "default" })} href="/blog">blog</Link>
				<Link className={buttonVariants({ variant: "default" })} href="/about">about</Link>
				<Link className={buttonVariants({ variant: "default" })} href="/projects">projects</Link>
			</div>
		</main>
	);
}