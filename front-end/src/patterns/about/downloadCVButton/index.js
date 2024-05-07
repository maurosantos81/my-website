import styles from './downloadCVButton.module.css'
import { Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
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
  )
}
