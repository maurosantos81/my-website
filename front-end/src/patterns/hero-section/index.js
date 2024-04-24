'use client'

import styles from './hero.module.css'
import WidthLimitedSection from '@/components/widthLimitedSection'
import Button from '@/components/button'
import useScrollTo from '@/hooks/useScrollTo'
import AnimatedText from '@/components/animatedText/index.js'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function HeroSection() {
  const { scrollTo } = useScrollTo()
  const t = useTranslations('Hero')

  return (
    <WidthLimitedSection
      id='hero'
      className={styles.container}
      divClassName={styles.hero}
    >
      <div className={styles.left}>
        <AnimatedText elementType='h1' text={'Mauro Santos'} />
        <h2>{t('subtitle')}</h2>

        <p>{t('description')}</p>

        <Button onClick={() => scrollTo('hire-me')} variant='contained'>
          {t('contact-me')}
        </Button>
      </div>
      <div className={styles.right}>
        <Image
          src='/images/hero-section.webp'
          alt='computer with a sunset on screen'
          fill
          objectFit='contain'
          objectPosition='center'
        />
      </div>
    </WidthLimitedSection>
  )
}
