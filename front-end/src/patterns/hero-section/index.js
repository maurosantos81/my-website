import styles from './hero.module.css'
import Image from 'next/image'
import WidthLimitedSection from '@/components/widthLimitedSection'

export default function HeroSection() {
  return (
    <WidthLimitedSection
      id='hero'
      className={styles.container}
      divClassName={styles.hero}
    >
      <div className={styles.left}>
        <h1>MAURO SANTOS</h1>
        <h2>Full Stack Developer</h2>

        <p>Crafting digital experiences</p>
      </div>
      <div className={styles.right} />
      {/* <Image
          className={styles.img}
          fill
          src='/images/hero-section.png'
          alt='a pc with a sunset in screen'
        /> */}
    </WidthLimitedSection>
  )
}
