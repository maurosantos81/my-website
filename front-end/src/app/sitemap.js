import { defaultLanguage, locales } from '@/constants/locales'

const host = 'https://www.maurosantos.xyz'

export default function sitemap() {
  function getUrl(locale) {
    return `${host}/${locale}/`
  }

  return [
    {
      url: getUrl(defaultLanguage),
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [locale, getUrl(locale)]),
        ),
      },
    },
  ]
}
