import { Divider } from '@mui/material'
import styles from './footer.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from '@/components/link'

const SOCIAL_MEDIAS = [
  {
    icon: <LinkedInIcon />,
    href: 'https://linkedin.com/in/maurosantos81/',
  },
  {
    icon: <GitHubIcon />,
    href: 'https://github.com/maurosantos81/',
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='limit-width'>
        <Divider />
        <div className={styles['container']}>
          <p>© Mauro Santos, 2024</p>
          <div className={styles['social-medias']}>
            {SOCIAL_MEDIAS.map((socialMedia) => (
              <Link key={socialMedia.href} href={socialMedia.href}>
                {socialMedia.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
