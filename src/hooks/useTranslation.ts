import { useRouter } from 'next/router'
import pt from '../../src/messages/pt.json'
import en from '../../src/messages/en.json'
import hi from '../../src/messages/hi.json'

const translations: Record<string, string | Record<string, unknown>> = {
  'pt': pt,
  'en': en,
  'hi': hi,
}

export function useTranslation() {
  const router = useRouter()
  const { locale } = router
  const t = (key: string): string => {
    const keys = key.split('.')
    let translation: string | Record<string, unknown> = translations[locale as keyof typeof translations]

    for (const k of keys) {
      translation = (translation as Record<string, unknown>)[k] as string | Record<string, unknown>
    }

    return (translation as string) || key
  }

  return { t, locale }
}
