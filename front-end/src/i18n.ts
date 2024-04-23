import { getRequestConfig } from 'next-intl/server'
import { defaultLanguage, locales } from './constants/locales'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) locale = defaultLanguage

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
