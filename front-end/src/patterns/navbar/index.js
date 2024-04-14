'use client'

import Image from 'next/image'
import styles from './navbar.module.css'

export default function Navbar() {
  const scrollTo = (sectionId) => {
    document?.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.container}`}>
      <Image height={50} width={50} src='/images/logo.png' alt='icon' />

      <div className={styles.right}>
        <p onClick={() => scrollTo('about')}>About</p>
        <p onClick={() => scrollTo('skills')}>Skills</p>
        <p onClick={() => scrollTo('portfolio')}>Portfolio</p>
        <p onClick={() => scrollTo('hire-me')} className={styles['hire-me']}>
          Hire me
        </p>
      </div>
    </nav>
  )
}
