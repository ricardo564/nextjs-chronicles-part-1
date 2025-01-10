import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/styles/globals.css";
import ogImage from "@/assets/images/android-launchericon-512-512.png";
import Script from "next/script";
import IntroWarningModal from "@/blocks/IntroWarningModal";
import { Analytics } from '@/components/Analytics'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Breath Natural - NextJS Chronicles Part 1",
  description:
    "Discover premium indoor plants at Breath Natureal. Shop exotic houseplants, succulents & cacti with expert care guides. Free shipping on orders over $50. Same-day delivery available.",
  keywords: [
    "indoor plants",
    "exotic houseplants",
    "succulents",
    "cacti",
    "expert care guides",
    "free shipping",
    "same-day delivery",
  ],
  openGraph: {
    title: "Breath Natural - NextJS Chronicles Part 1",
    description:
      "Discover premium indoor plants at Breath Natureal. Shop exotic houseplants, succulents & cacti with expert care guides. Free shipping on orders over $50. Same-day delivery available.",
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `
          }}
        />
      </head>
      <body
        className={`scroll-smooth	${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <IntroWarningModal />
        {children}
        <Analytics />
      </body>

      <Script
        src="https://cdn.counter.dev/script.js"
        data-id={process.env.COUNTER_API_KEY}
        data-utcoffset="-3"
      ></Script>
    </html>
  );
}
