import type { Metadata } from "next";
import { ContactForm } from '@/blocks/ContactForm'
import ogImage from '@/assets/images/android-launchericon-512-512.png'
import DefaultLayout from "@/layouts/DefaultLayout";
import bgBonsai from '@/assets/images/bonsai.webp'
import bgCactus from '@/assets/images/cactus.webp'
import bgJibola from '@/assets/images/jibola.webp'
import Image from 'next/image'
import { useTranslations } from "next-intl";

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
  const t = useTranslations('contact')

  const backgrounds = [
    {
      id: 1,
      image: bgBonsai,
      title: "BONSAI",
    },
    {
      id: 2,
      image: bgCactus,
      title: "CACTUS",
    },
    {
      id: 3,
      image: bgJibola,
      title: "JIBOIA",
    },
  ]

  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)]

  const validationMessages = {
    'firstName.min': t('validation.firstName.min'),
    'firstName.max': t('validation.firstName.max'),
    'lastName.min': t('validation.lastName.min'),
    'lastName.max': t('validation.lastName.max'),
    'email.invalid': t('validation.email.invalid'),
    'phoneNumber.invalid': t('validation.phoneNumber.invalid'),
    'message.min': t('validation.message.min'),
    'message.max': t('validation.message.max')
  }

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#225348] to-[#8DB575] absolute inset-0 min-h-full blur-sm">

        <p
          className="text-white text-7xl font-bold absolute top-[7rem] left-6"
        >
          {randomBackground.title}
        </p>

        <Image
          src={randomBackground.image}
          alt="Background"
          className="absolute right-0 ml-auto bottom-0 min-h-full w-full object-cover max-w-[20rem] max-h-screen overflow-visible"
          fill
        />
      </div>

      <ContactForm
        className="mt-8"
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
        sending={false}
        send={t('send')}
        validationMessages={validationMessages}
      />
    </DefaultLayout>
  )
}

