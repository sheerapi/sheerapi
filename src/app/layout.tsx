import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SocialBar from "@/components/ui/social-bar";
import { initFirebase } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "sheerapi"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	initFirebase();

	return (
		<html lang="en">
			<head>
				<meta name="google-site-verification" content="sG8Oh9UyRJEqvc9vO80nBgZtD2UWlGDYiw3qTpIJLBk" />
			</head>
			<body className={inter.className}>
				<SpeedInsights />
				<Analytics />
				<SocialBar></SocialBar>
				<ThemeProvider attribute="class" defaultTheme="dark">
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
