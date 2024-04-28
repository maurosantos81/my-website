import styles from './downloadCVButton.module.css'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import useFileDownloader from '@/hooks/useFileDownloader'

export default function DownloadCVButton() {
  const t = useTranslations('About')
  const download = useFileDownloader()
  const locale = useLocale()

  const handleDownload = () => {
    download(`/cv_${locale}.pdf`, 'Mauro_CV.pdf')
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Scale up on hover
      whileTap={{ scale: 0.95 }} // Scale down on tap
    >
      <Button
        className={styles['curriculum-button']}
        variant='outlined'
        endIcon={<DownloadIcon sx={{ fontSize: '15px' }} />}
        onClick={handleDownload}
        sx={{
          color: 'white',
          borderColor: '#fff',
          borderRadius: '12px',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: '#ffffff82',
          },
        }}
      >
        {t('CV')}
      </Button>
    </motion.div>
  )
}
