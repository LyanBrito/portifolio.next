import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LyanBrito's | Portfolio",
  description: "Portfolio de Lyan Brito",
  keywords: [
    "Lyan Brito",
    "Portfolio",
    "Porfifolio",
    "HTML",
    "GitHub",
    "Git",
    "JavaScript",
    "Next.js",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Lyan Brito | Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
