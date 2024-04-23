'use client'

import Image from 'next/image'
import styles from './navbar.module.css'
import useScrollTo from '@/hooks/useScrollTo'
import { useTranslations } from 'next-intl'

export default function Navbar() {
  const { scrollTo } = useScrollTo()
  const t = useTranslations('Navbar')

  return (
    <nav className={`${styles.container}`}>
      <Image height={50} width={50} src='/images/logo.png' alt='icon' />

      <div className={styles.right}>
        <p onClick={() => scrollTo('about')}>{t('about')}</p>
        <p onClick={() => scrollTo('skills')}>{t('skills')}</p>
        <p onClick={() => scrollTo('portfolio')}>{t('portfolio')}</p>
        <p onClick={() => scrollTo('hire-me')} className={styles['hire-me']}>
          {t('hire-me')}
        </p>
      </div>
    </nav>
  )
}
