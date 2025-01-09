import { useRouter } from 'next/router'

export function LanguageSwitcher() {
  const router = useRouter()
  const { pathname, asPath, query } = router

  const changeLanguage = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale })
  }

  return (
    <div>
      <button onClick={() => changeLanguage('pt-BR')}>PT</button>
      <button onClick={() => changeLanguage('en-US')}>EN</button>
    </div>
  )
}
