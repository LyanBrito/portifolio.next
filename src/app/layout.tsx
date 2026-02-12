import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "@/styles/main.scss"
import React from "react"

const PoppinsFont = Poppins({
	adjustFontFallback: false,
	display: "swap",
	fallback: [],
	preload: true,
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["400", "500"],
})

export const metadata: Metadata = {
	title: {
		default: "Lyan's Portfolio",
		template: "Lyan's Portfolio",
	},
	description: 'console.log("Hello World! :)")',
	keywords: ["lyanbrito", "portfolio", "_lyanbrito_", "resume"],
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: "Lyan's Portfolio",
		description: 'console.log("Hello World! :)")',
		siteName: "Lyan's Portfolio",
		locale: "en",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Lyan's Portfolio",
		description: "Web Developer & Designer student",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${PoppinsFont.className}`}>{children}</body>
		</html>
	)
}
