import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "sheerapi"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="google-site-verification" content="sG8Oh9UyRJEqvc9vO80nBgZtD2UWlGDYiw3qTpIJLBk" />
			</head>
			<body className={inter.className}>
				<SpeedInsights />
				<ThemeProvider attribute="class" defaultTheme="dark">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
