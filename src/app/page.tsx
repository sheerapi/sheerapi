import { BackgroundLines } from "@/components/ace/bg-lines";
import { Button } from "@/components/ui/button";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Icon } from "lucide-react";
import { IconBrandStackoverflow, IconBrandPinterest, IconBrandX, IconBrandInstagram, IconBrandDiscord, IconBrandGithub, IconBrandDiscordFilled } from "@tabler/icons-react";
import { ButtonLink } from "@/components/ui/buttonlink";
import { FlipWords } from "@/components/ace/flip";

export default function Home() {
	const titles = [
		"Hi.",
		"its me, hi",
		"you left your typewriter at my apartment",
		"hiiiii!",
		"hai :3",
		"Hola.",
		"i thought the plane was going down",
		"oh no",
		"unknown.",
		"null?",
		"undefined?",
		"\"\"::",
		"sprinkler splashes",
		"ashes",
		"bstft",
		"i took the money",
		"everything you lose is a step you take",
		"meet me at midnight",
		"all this shit is new to me",
		"1950",
		"06/05/24",
		"you werent even listening",
		"get it off my desk",
		"...",
		"coming soon...",
		"lol",
		"lmao",
		"hi?",
		"hello?",
		"nice.",
		"nice!",
		"karma is my bf",
		"mastermind",
		"what if i told you im a mastermind?",
		"it was all by design",
		"woah",
		"hello there",
		"dear reader...",
		"dear diary...",
		"what",
		"WHAT",
		"aw4567IKMNBVFDE345678/&%%&/(%$#)",
		"i did it...i saved the town",
		"[smug]",
		"[as]",
		"is it okay? is it you?",
		"have they come to take me away?",
		"weird but fucking beautiful",
		"grah",
		"antithetical dream girl",
		" ",
		"so many words!",
		"play the fucking beat!",
		"<3",
		"hit it like",
		"get it hot",
		"make a bitch",
		"its a fem",
		"only bought this dress so you could take it off",
		"stop it!",
		"300 takeout coffees later",
		"acid rock?",
		"red blood, white snow",
		"isnt it?",
		"isnt it?",
		"isnt it?",
		"isnt it?",
		"isnt it?",
		"i need a getaway car",
		"look what you made me do",
		"ts4l",
		"goodbye",
		"ciao",
		"adios",
		"bye"
	];

	return (
		<div className="h-full w-full bg-black overflow-hidden">
			<div className="flex flex-col items-center justify-center h-full w-full bg-transparent bg-grid-white/[0.2] bg-grid-black/[0.2] relative" suppressHydrationWarning>
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<FlipWords words={titles} duration={6000} className="z-50 text-center text-balance font-medium drop-shadow-[4px_4px_24px_rgba(255,255,255,0.5)] hover:font-black text-5xl md:text-8xl lg:text-9xl z-20 bg-clip-text text-white bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" />
				<div className="flex gap-x-4 z-50 relative">
					<ButtonLink href="/blog">blog</ButtonLink>
					<ButtonLink href="/about">about</ButtonLink>
					<ButtonLink href="/projects">projects</ButtonLink>
				</div>
			</div>

			<div className="w-full px-4 flex flex-row justify-between items-center h-12 bg-white/[0.05] backdrop-blur-md absolute top-0">
				<div>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbPage>
								home
							</BreadcrumbPage>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div className="flex gap-3">
					<a href="https://stackoverflow.com/users/23363415/sheerapi" className="hover:-translate-y-0.5"><IconBrandStackoverflow color="white" size={19} suppressHydrationWarning /></a>
					<a href="https://pinterest.com/sheerapi" className="hover:-translate-y-0.5"><IconBrandPinterest color="white" size={19} suppressHydrationWarning /></a>
					<a href="https://twitter.com/sheerapii" className="hover:-translate-y-0.5"><IconBrandX color="white" size={19} suppressHydrationWarning /></a>
					<a href="https://instagram.com/sheerapi" className="hover:-translate-y-0.5"><IconBrandInstagram color="white" size={19} suppressHydrationWarning /></a>
					<a href="https://discord.com/users/870401133741486111" className="hover:-translate-y-0.5"><IconBrandDiscordFilled color="white" size={19} suppressHydrationWarning /></a>
					<a href="https://github.com/sheerapi" className="hover:-translate-y-0.5"><IconBrandGithub color="white" size={19} suppressHydrationWarning /></a>
				</div>
			</div>
		</div>
	);
}
