import '../globals.css'
import Navbar from '@/patterns/navbar'
import Footer from '@/patterns/footer'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { locales } from '@/constants/locales'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { poppins } from '@/utils/fontUtils'
import { getMetadata } from '@/utils/metadataUtils'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return getMetadata(t, locale)
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

function RootLayout({ children, params: { locale } }) {
  const messages = useMessages()
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale} className={poppins.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
