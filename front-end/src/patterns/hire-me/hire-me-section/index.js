'use client'

import WidthLimitedSection from '@/components/widthLimitedSection'
import styles from './hire.module.css'
import HireMeForm from '../hire-me-form'

export default function HireMeSection() {
  return (
    <WidthLimitedSection id='hire-me' className={styles.section}>
      <h2>Hire Me!</h2>

      <HireMeForm />
    </WidthLimitedSection>
  )
}
