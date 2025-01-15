import type { Metadata } from "next";
import { ContactForm } from '@/blocks/ContactForm'
import ogImage from '@/assets/images/android-launchericon-512-512.png'
import { useTranslations } from "next-intl";

interface ContactProps {
  className?: string
}


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

export default function Contact({ className }: ContactProps) {
  const t = useTranslations('contact')

  return (
      <ContactForm
        className={className}
        title={t('title')}
        titleHighlight={t('titleHighlight')}
        subtitle={t('subtitle')}
        formTitle={t('formTitle')}
        formSubtitle={t('formSubtitle')}
        firstName={t('firstName')}
        lastName={t('lastName')}
        email={t('email')}
        phoneNumber={t('phoneNumber')}
        message={t('message')}
        sending={t('sending')}
        send={t('send')}
      />
  )
}

