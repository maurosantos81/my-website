import { defaultLanguage, locales } from '@/constants/locales'

const host = 'https://maurosantos.xyz'

export default function sitemap() {
  function getUrl(locale) {
    return `${host}/${locale}/`
  }

  return [
    {
      url: host,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [locale, getUrl(locale)]),
        ),
      },
    },
  ]
}
