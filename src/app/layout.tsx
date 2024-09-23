import "./globals.css";
import { Inter, Noto_Sans_KR, Noto_Sans_JP, Noto_Sans_SC } from "next/font/google";

const font = Inter({
	weight: "variable",
	style: ["normal", "italic"],
	preload: true,
	variable: "--true",
	subsets: ["latin", "latin-ext", "cyrillic"],
	display: "block"
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en" className="h-full w-full select-none">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body className={"h-full w-full m-0 dark " + font.className}>
				{children}
			</body>
		</html>
	);
}
