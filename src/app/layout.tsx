import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "@/assets/css/embla.css";
import ogImage from "@/assets/images/android-launchericon-512-512.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🪴 Breath Natural - NextJS Chronicles Part 1",
  description: "Discover premium indoor plants at Breath Natureal. Shop exotic houseplants, succulents & cacti with expert care guides. Free shipping on orders over $50. Same-day delivery available.",
  keywords: ["indoor plants", "exotic houseplants", "succulents", "cacti", "expert care guides", "free shipping", "same-day delivery"],
  openGraph: {
    title: "🪴 Breath Natural - NextJS Chronicles Part 1",
    description: "Discover premium indoor plants at Breath Natureal. Shop exotic houseplants, succulents & cacti with expert care guides. Free shipping on orders over $50. Same-day delivery available.",
    url: "https://breath-natural-nextjs-chronicles.netlify.app/",
    siteName: "Breath Natural",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
