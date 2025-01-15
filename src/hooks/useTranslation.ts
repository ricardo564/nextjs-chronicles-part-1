import { useRouter } from 'next/router'
import pt from '../../public/locales/pt/common.json'
import en from '../../public/locales/en/common.json'

type TranslationKeys = 'intro.title' | 'intro.description' | 'intro.trendyPlantsTitle'

type TranslationType = {
  intro: {
    title: string;
    description: string;
    trendyPlantsTitle: string;
  }
}

const translations: Record<string, TranslationType> = {
  'pt': pt,
  'en-US': en,
}

export function useTranslation() {
  const router = useRouter()
  const { locale } = router
  const t = (key: TranslationKeys): string => {
    const keys = key.split('.')
    let translation: string | Record<string, unknown> = translations[locale as keyof typeof translations]

    for (const k of keys) {
      translation = (translation as Record<string, unknown>)[k] as string | Record<string, unknown>
    }

    return (translation as string) || key
  }

  return { t, locale }
}
