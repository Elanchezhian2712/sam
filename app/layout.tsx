import type { Metadata } from "next/types";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import "dotenv/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sam's Portfolio - UI/UX Designer",
  description:
    "Explore Sam's creative portfolio showcasing award-winning UI/UX designs. Discover how Sam, a top UI/UX designer, can enhance your digital experiences.",
  keywords: [
    "Sam",
    "Sam's Portfolio",
    "UI/UX Designer",
    "Portfolio of a Designer",
    "Creative UI Design",
    "Innovative UX Design",
    "Top UI/UX Designer",
    "Digital Experiences",
  ],
  openGraph: {
    title: "Sam's Creative Portfolio - UI/UX Designer",
    description:
      "Explore Sam's creative portfolio showcasing award-winning UI/UX designs. Discover how Sam, a top UI/UX designer, can enhance your digital experiences.",
    siteName: "Sam's Portfolio",
    images: [
      {
        url: "/sam.png",
        width: 1200,
        height: 630,
        alt: "Sam's Portfolio - UI/UX Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/sam.png" type="image/x-icon" sizes="any" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
