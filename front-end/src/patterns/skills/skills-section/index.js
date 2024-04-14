'use client'

import styles from './skills.module.css'
import skills from './skills.json'
import WidthLimitedSection from '@/components/widthLimitedSection'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PercentagesMeaning from '../skill-section-percentages-definition'
import SkillItem from '../skill-item'

export default function SkillsSection() {
  return (
    <WidthLimitedSection className={styles.section} id='skills'>
      <h2>Skills</h2>

      <div className={styles['skills-and-legend-container']}>
        <div className={styles.skills}>
          {skills
            .sort((a, b) => b.level - a.level)
            .map((skill) => (
              <SkillItem key={skill.name} {...skill} />
            ))}
        </div>

        <Accordion
          disableGutters
          component={'div'}
          className={styles.accordion}
          sx={{ boxShadow: 'none', position: 'static' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1-content'
            sx={{ padding: 0 }}
          >
            <p className={styles['accordion-title']}>
              What do these percentages mean?
            </p>
          </AccordionSummary>
          <AccordionDetails sx={{ marginTop: '-8px' }}>
            <PercentagesMeaning />
          </AccordionDetails>
        </Accordion>
      </div>
    </WidthLimitedSection>
  )
}
