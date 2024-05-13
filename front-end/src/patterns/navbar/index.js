'use client'

import Image from 'next/image'
import styles from './navbar.module.css'
import useScrollTo from '@/hooks/useScrollTo'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from '../languageSwitcher'

export default function Navbar() {
  const { scrollTo } = useScrollTo()
  const t = useTranslations('Navbar')

  return (
    <nav className={`${styles.container}`}>
      <div className={styles['icon-container']}>
        <Image height={50} width={50} src='/images/logo.svg' alt='icon' />
        <LanguageSwitcher className={styles['icon-lang-switcher']} />
      </div>

      <div className={styles.right}>
        <p onClick={() => scrollTo('about')}>{t('about')}</p>
        <p onClick={() => scrollTo('skills')}>{t('skills')}</p>
        <p onClick={() => scrollTo('portfolio')}>{t('portfolio')}</p>
        <LanguageSwitcher className={styles['lang-switcher']} />
        <p onClick={() => scrollTo('hire-me')} className={styles['hire-me']}>
          {t('hire-me')}
        </p>
      </div>
    </nav>
  )
}
