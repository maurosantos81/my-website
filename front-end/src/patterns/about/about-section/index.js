'use client'

import styles from './about.module.css'
import WidthLimitedSection from '@/components/widthLimitedSection'
import { Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import Link from '@/components/link'
import useFileDownloader from '@/hooks/useFileDownloader'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'

export default function AboutSection() {
  const download = useFileDownloader()
  const locale = useLocale()
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
              <Link text href='https://www.ualg.pt/'>
                {txt}
              </Link>
            ),
            evidenLink: (txt) => (
              <Link text href='https://eviden.com/'>
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
        <p className={styles.bold}>{t('p4')}</p>
      </div>

      <Button
        className={styles['curriculum-button']}
        variant='outlined'
        endIcon={<DownloadIcon sx={{ fontSize: '15px' }} />}
        onClick={() => download(`/cv_${locale}.pdf`, 'Mauro_CV.pdf')}
        sx={{
          color: 'white',
          borderColor: '#fff',
          borderRadius: '12px',
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: '#ffffff82',
          },
        }}
      >
        {t('CV')}
      </Button>

      <div className={styles['image-container']}>
        <Image
          className={styles.image}
          src={'/images/me.jpg'}
          alt='Mauro photo'
          fill
          objectFit='cover'
        />
      </div>
    </WidthLimitedSection>
  )
}
