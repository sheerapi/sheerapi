import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Header from "@/components/ui/header";
import getProjects from "../lib/projects";
import Muted from "@/components/ui/muted";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faInstagram, faPinterestP, faStackOverflow, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal";

export default function Page() {
    const projects = getProjects();

    return (
        <main className="flex justify-start items-start h-full flex-col gap-5">
            <div className="absolute top-[1.5rem] text-white left-[1rem] projects-breadcrumb">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbLink href="/">home</BreadcrumbLink>
                        <BreadcrumbSeparator />
                        <BreadcrumbPage>projects</BreadcrumbPage>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="flex absolute m-8 top-0 right-0 flex-row-reverse w-50 h-8 gap-5 project-social-bar">
                <a className="w-4 h-4" href="https://github.com/sheerapi" aria-label="My GitHub"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                <a className="w-5 h-5" href="https://discord.com/users/870401133741486111" aria-label="My Discord"><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon></a>
                <a className="w-4 h-4" href="https://instagram.com/sheerapi" aria-label="My Instagram"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                <a className="w-4 h-4" href="https://twitter.com/sheerapii" aria-label="My Twitter"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></a>
                <a className="w-3 h-3" href="https://pinterest.com/sheerapi" aria-label="My Pinterest"><FontAwesomeIcon icon={faPinterestP}></FontAwesomeIcon></a>
                <a className="w-3 h-3" href="https://stackoverflow.com/users/23363415/sheerapi" aria-label="My Stack Overflow"><FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon></a>
            </div>

            <div className="project-page-main">
                <Header>projects.</Header>
                <p>
                    projects i'm currently working on, or not.
                </p>
                <div className="h-6 w-6">

                </div>
                <div className="w-full pr-8 project-grid">
                    {projects.map((project, index) => {
                        return <div className="project-card">
                            <CanvasRevealEffect
                                animationSpeed={1.5}
                                colors={project.colors}
                                containerClassName="bg-black project-card-effect"
                                dotSize={2}
                            />
                            <div className="project-card-gradient [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50" />
                            <Link href={`/projects/${project.id}`} className="project-header">{project.name}</Link>
                            <Link href={`/projects/${project.id}`} className="project-desc">{project.description}</Link>
                        </div>
                    })}
                </div>
            </div>
        </main>
    );
}