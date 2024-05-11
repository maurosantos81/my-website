export async function getMetadata(t, locale) {
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
      images: ['/images/logo.webp'],
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
        url: '/images/logo.webp',
        alt: 'Mauro Santos Logo',
      },
    },
    metadataBase: new URL('https://www.maurosantos.xyz'),
    alternates: {
      canonical: '/en/',
      languages: {
        'x-default': '/en/',
        en: '/en/',
        pt: '/pt/',
      },
    },
    other: {
      viewport:
        'height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0',
    },
  }
}
