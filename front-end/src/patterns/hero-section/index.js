'use client'

import styles from './hero.module.css'
import WidthLimitedSection from '@/components/widthLimitedSection'
import Button from '@/components/button'
import useScrollTo from '@/hooks/useScrollTo'
import useTypewriter from '@/hooks/useTypewriter'
import Link from '@/components/link'

export default function HeroSection() {
  const { scrollTo } = useScrollTo()
  const title = useTypewriter('Mauro Santos', 45)

  return (
    <WidthLimitedSection
      id='hero'
      className={styles.container}
      divClassName={styles.hero}
    >
      <div className={styles.left}>
        <h1>{title}</h1>
        <h2>Full-Stack Developer</h2>

        <p>
          Elevate your projects with a Java + Next.js Junior Full-stack
          Developer! With a passion for coding, I&apos;m here to bring fresh
          perspectives and innovation to every task. From robust backend
          solutions to stylish frontend interfaces, I&apos;ll turn your ideas
          into reality! <Link href='contact'>Get in touch</Link>
        </p>

        <Button onClick={() => scrollTo('hire-me')} variant='filled'>
          Contact me
        </Button>
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
