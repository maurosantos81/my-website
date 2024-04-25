import { getRequestConfig } from 'next-intl/server'
import { defaultLanguage, locales } from './constants/locales'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) locale = defaultLanguage

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
