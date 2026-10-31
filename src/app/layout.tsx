import type { Metadata, Viewport } from "next";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "./globals.css";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.brand.latinName}`,
  },
  description: siteConfig.seo.description,
  applicationName: siteConfig.brand.latinName,
  keywords: siteConfig.seo.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "/",
    siteName: siteConfig.brand.latinName,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [{ url: "/brand/scalp-yasamin.png", width: 719, height: 579, alt: "Scalp Yasamin — اسکالپ یاسمین" }],
  },
  twitter: {
    card: "summary",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["/brand/scalp-yasamin.png"],
  },
  icons: { icon: "/favicon.svg", apple: "/brand/scalp-yasamin.png" },
  robots: { index: siteConfig.indexing, follow: siteConfig.indexing },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eceee5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
