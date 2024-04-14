import Button from '@/components/button'
import styles from './hero.module.css'
import Image from 'next/image'
import WidthLimitedSection from '@/components/widthLimitedSection'

export default function HeroSection() {
  return (
    <WidthLimitedSection
      id='hero'
      divClassName={styles.hero}
      className={styles.container}
    >
      <div className={styles.left}>
        <h1>MAURO SANTOS</h1>
        <p>A full stack developer</p>

        <p>Crafting digital experiences</p>
      </div>
      <div className={styles.right}>
        <Image
          className={styles.img}
          fill
          src='/images/hero.jpeg'
          alt='a developer programming'
        />
      </div>
    </WidthLimitedSection>
  )
}
