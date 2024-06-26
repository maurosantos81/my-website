'use client'

import styles from './about.module.css'
import WidthLimitedSection from '@/components/widthLimitedSection'
import Link from '@/components/link'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import DownloadCVButton from '../downloadCVButton'

export default function AboutSection() {
  const t = useTranslations('About')

  return (
    <WidthLimitedSection divClassName={styles.container} id='about'>
      <div className={styles['text-container']}>
        <h2>{t('title')}</h2>
        <p>
          {t.rich('p1', {
            link: (txt) => (
              <Link text href='https://www.youtube.com/@M4UR0Dev'>
                {txt}
              </Link>
            ),
          })}
        </p>

        <p>
          {t.rich('p2', {
            universityLink: (txt) => (
              <Link text href='https://www.ualg.pt/curso/1478'>
                {txt}
              </Link>
            ),
            evidenLink: (txt) => (
              <Link text href='https://eviden.com/'>
                {txt}
              </Link>
            ),
            reactLink: (txt) => (
              <Link text href='https://react.dev/'>
                {txt}
              </Link>
            ),
          })}
        </p>
        <p>
          {t.rich('p3', {
            linkPomodoro: (txt) => (
              <Link
                text
                href='https://en.wikipedia.org/wiki/Pomodoro_Technique'
              >
                {txt}
              </Link>
            ),
          })}
        </p>
        <p className={`${styles.bold} ${styles.oblique}`}>{t('p4')}</p>
      </div>

      <DownloadCVButton />

      <div className={styles['image-container']}>
        <Image
          className={styles.image}
          src='/images/me.jpg'
          alt='Mauro photo'
          fill
          sizes='(max-width: 620px) 90vw, 700px'
        />
      </div>
    </WidthLimitedSection>
  )
}
