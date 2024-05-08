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
          srcSet='/images/hero/hero-section_j3upiy_c_scale,w_1770.webp 590w,
          /images/hero/hero-section_j3upiy_c_scale,w_3194.webp 800w,
          /images/hero/hero-section.webp 1365w'
          sizes='(min-width: 800px) 1365px, 100vw'
          src='/images/hero/hero-section.webp'
          alt='computer with a sunset on screen'
          fill
          styles={{
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      </div>
    </WidthLimitedSection>
  )
}
