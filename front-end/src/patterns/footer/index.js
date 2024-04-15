import { Divider } from '@mui/material'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Divider sx={{ borderBottomWidth: 'medium' }} />
      <div className={styles['container']}>
        <p>© Mauro Santos</p>
        <div className={styles['social-medias']}></div>
      </div>
    </footer>
  )
}
