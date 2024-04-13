import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { notFound } from 'next/navigation'
import Header from "@/components/ui/header";
import { getProject } from "@/app/lib/projects";
import Muted from "@/components/ui/muted";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/app/components";
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkEmbed from 'remark-oembed';
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faInstagram, faPinterestP, faStackOverflow, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal";

export default async function Page(params: { params: { slug: string } }) {
    let project = getProject(params.params.slug);

    if (project == undefined || project == null) {
        notFound();
    }

    return (
        <main className="flex justify-start items-start h-full flex-col gap-5 project">
            <div className="project-effect-container">
                <CanvasRevealEffect animationSpeed={1.35}
                    containerClassName="bg-transparent"
                    colors={project.colors}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                    dotSize={2}>
                </CanvasRevealEffect>
            </div>

            <div className="flex absolute m-8 top-0 right-0 flex-row-reverse w-50 h-8 gap-5 project-social-bar">
                <a className="w-4 h-4" href="https://github.com/sheerapi" aria-label="My GitHub"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                <a className="w-5 h-5" href="https://discord.com/users/870401133741486111" aria-label="My Discord"><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon></a>
                <a className="w-4 h-4" href="https://instagram.com/sheerapi" aria-label="My Instagram"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                <a className="w-4 h-4" href="https://twitter.com/sheerapii" aria-label="My Twitter"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></a>
                <a className="w-3 h-3" href="https://pinterest.com/sheerapi" aria-label="My Pinterest"><FontAwesomeIcon icon={faPinterestP}></FontAwesomeIcon></a>
                <a className="w-3 h-3" href="https://stackoverflow.com/users/23363415/sheerapi" aria-label="My Stack Overflow"><FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon></a>
            </div>

            <div className="absolute top-[1.5rem] left-[1rem] projects-breadcrumb">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbLink href="/">home</BreadcrumbLink>
                        <BreadcrumbSeparator />
                        <BreadcrumbLink href="/projects">projects</BreadcrumbLink>
                        <BreadcrumbSeparator />
                        <BreadcrumbPage>{project.name}</BreadcrumbPage>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="absolute z-50 inset-0 flex flex-col gap-5 items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <p className="bg-clip-text tracking-widest text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-zinc-600">
                    {project.name}
                </p>
                <p className="text-lg font-normal">
                    {project.description}
                </p>
            </div>
        </main>
    );
}