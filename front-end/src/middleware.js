import { NextResponse } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'
import { defaultLanguage, locales } from './constants/locales'

export default async function middleware(request) {
  const path = request.nextUrl.pathname
  const regex = /\/(pt|en)\//

  const containsLanguage = regex.test(path)
  const containsMoreThanLanguage = path.replace(regex, '').length > 0
  if (containsLanguage && containsMoreThanLanguage) {
    return NextResponse.redirect(
      new URL(`/${path.split('/')[1]}/`, request.url),
    )
  }

  const handleI18nRouting = createIntlMiddleware({
    locales: locales,
    defaultLocale: defaultLanguage,
    alternateLinks: false,
  })

  const response = handleI18nRouting(request)
  return response
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
