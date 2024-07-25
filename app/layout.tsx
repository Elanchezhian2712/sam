import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sam's Portfolio - UI/UX Designer",
  description:
    "Discover Sam's award-winning UI/UX designs and learn how they can transform your digital experiences. Ranked top in Google search.",
  keywords: [
    "Sam's Portfolio",
    "UI/UX Designer",
    "UI Design",
    "UX Design",
    "Top UI/UX Designer",
    "Digital Experiences",
  ],
  openGraph: {
    title: "Sam's Portfolio - UI/UX Designer",
    description:
      "Discover Sam's award-winning UI/UX designs and learn how they can transform your digital experiences. Ranked top in Google search.",
    siteName: "Sam's Portfolio",
    images: [
      {
        url: "/sam-profile.png",
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
  icons: {
    icon: "/sam-profile.ico",
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
        <link rel="icon" href="/sam-profile.ico" sizes="any" />
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
