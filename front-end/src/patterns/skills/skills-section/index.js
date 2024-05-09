'use client'

import styles from './skills.module.css'
import skills from '@/json/skills.json'
import WidthLimitedSection from '@/components/widthLimitedSection'
import SkillItem from '../skill-item'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import PercentagesMeaningAccordion from '../percentages-meaning-accordion'

export default function SkillsSection() {
  const [saw, setSaw] = useState()
  const t = useTranslations('Skills')

  return (
    <WidthLimitedSection className={styles.section} id='skills'>
      <h2>{t('title')}</h2>

      <div className={styles['skills-and-legend-container']}>
        <motion.div
          viewport={{ once: true }}
          onViewportEnter={() => setSaw(true)}
          className={styles.skills}
        >
          {skills
            .sort((a, b) => b.level - a.level)
            .map((skill) => (
              <SkillItem key={skill.skill} {...skill} saw={saw} />
            ))}
        </motion.div>

        <PercentagesMeaningAccordion />
      </div>
    </WidthLimitedSection>
  )
}
