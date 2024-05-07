import '../globals.css'
import Navbar from '@/patterns/navbar'
import Footer from '@/patterns/footer'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { locales } from '@/constants/locales'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('title'),
    authors: [{ name: 'Mauro Santos' }],
    creator: 'Mauro Santos',
    publisher: 'Mauro Santos',
    description: t('description'),
    openGraph: {
      title: t('title'),
      siteName: t('title'),
      description: t('description'),
      locale: { locale },
      images: ['/images/logo.png'],
      authors: ['Mauro Santos'],
      type: 'website',
    },
    applicationName: 'Mauro Santos',
    keywords: [
      'Mauro Santos',
      'React',
      'Next.js',
      'Java',
      'Developer',
      'Full stack',
      'Website',
      t('Keywords.website-development'),
      'Web development',
      'Front end',
      'Back end',
      'HTML',
      'CSS',
      'Portfolio',
      t('Keywords.projects'),
      'Junior',
      t('Keywords.programmer'),
    ],
    category: t('category'),
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: {
        url: '/images/logo.png',
        alt: 'Mauro Santos Logo',
      },
    },
    other: {
      viewport:
        'height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi',
    },
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

function RootLayout({ children, params: { locale } }) {
  const messages = useMessages()
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
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
