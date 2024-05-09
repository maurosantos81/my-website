import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import styles from './percentagesMeaningAccordion.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PercentagesMeaning from '../skill-section-percentages-definition'
import { useTranslations } from 'next-intl'

export default function PercentagesMeaningAccordion() {
  const t = useTranslations('Skills')

  return (
    <Accordion
      disableGutters
      component={'div'}
      sx={{ boxShadow: 'none', position: 'static', width: '100%' }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1-content'
        sx={{ padding: 0 }}
      >
        <p className={styles['accordion-title']}>
          {t('percentages-meaning.title')}
        </p>
      </AccordionSummary>
      <AccordionDetails sx={{ marginTop: '-8px' }}>
        <PercentagesMeaning />
      </AccordionDetails>
    </Accordion>
  )
}
