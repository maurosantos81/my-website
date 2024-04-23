'use client'

import WidthLimitedSection from '@/components/widthLimitedSection'
import styles from './hire.module.css'
import HireMeForm from '../hire-me-form'
import { useTranslations } from 'next-intl'

export default function HireMeSection() {
  const t = useTranslations('Hire-me')

  return (
    <WidthLimitedSection id='hire-me' className={styles.section}>
      <h2>{t('title')}</h2>

      <HireMeForm />
    </WidthLimitedSection>
  )
}
