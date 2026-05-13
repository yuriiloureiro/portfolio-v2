import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { LanguageProvider } from "@/src/context/LanguageContext";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.loureiroyuri.com"),
  title: {
    default: "Yuri Loureiro — Front-end Developer",
    template: "%s | Yuri Loureiro",
  },
  description:
    "Front-end developer with a UX/UI background, building modern, accessible and user-centered web products with React, Next.js and TypeScript.",
  keywords: [
    "Front-end Developer",
    "React Developer",
    "Next.js Developer",
    "UX/UI",
    "Brazil",
    "Yuri Loureiro",
  ],
  authors: [{ name: "Yuri Loureiro" }],
  creator: "Yuri Loureiro",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: "https://www.loureiroyuri.com",
    siteName: "Yuri Loureiro",
    title: "Yuri Loureiro — Front-end Developer",
    description:
      "Front-end developer with a UX/UI background, building modern web products with React, Next.js and TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yuri Loureiro — Front-end Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Loureiro — Front-end Developer",
    description: "Front-end developer with a UX/UI background.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jetbrainsMono.variable} ${inter.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
