import type { Metadata } from "next";
import { ContactForm } from '@/blocks/ContactForm'
import ogImage from '@/assets/images/android-launchericon-512-512.png'
import DefaultLayout from "@/layouts/DefaultLayout";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ''),
  title: "Breath Natural - Contact Us",
  description: "Get in touch with Breath Natural for any inquiries or questions about our indoor plants, care guides, and services.",
  keywords: [
    "contact us",
    "breath natural",
    "indoor plants",
    "customer service",
    "inquiries",
    "questions",
  ],
  openGraph: {
    title: "Breath Natural - Contact Us",
    description: "Get in touch with Breath Natural for any inquiries or questions about our indoor plants, care guides, and services.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
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

export default function ContactPage() {
  return (
    <DefaultLayout>
      <ContactForm
        className="mt-8"
      />
    </DefaultLayout>
  )
}

