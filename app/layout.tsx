import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteData } from "@/content/siteData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030712",
};

export const metadata: Metadata = {
  title: `${siteData.brand.name} | ${siteData.brand.tagline}`,
  description: siteData.brand.description,
  keywords: [
    "Enterprise Web Development",
    "Next.js Architecture",
    "High-Performance Digital Platforms",
    "Bespoke Business Design",
  ],
  authors: [{ name: "Aura Enterprise" }],
  openGraph: {
    title: `${siteData.brand.name} | ${siteData.brand.tagline}`,
    description: siteData.brand.description,
    type: "website",
    locale: "en_AU",
    url: `https://${siteData.brand.domain}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
