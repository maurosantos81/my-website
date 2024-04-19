'use client'

import styles from './hero.module.css'
import WidthLimitedSection from '@/components/widthLimitedSection'
import Button from '@/components/button'
import useScrollTo from '@/hooks/useScrollTo'
import AnimatedText from '@/components/animatedText/index.js'

export default function HeroSection() {
  const { scrollTo } = useScrollTo()

  return (
    <WidthLimitedSection
      id='hero'
      className={styles.container}
      divClassName={styles.hero}
    >
      <div className={styles.left}>
        <AnimatedText elementType='h1' text={'Mauro Santos'} />
        <h2>Full-Stack Developer</h2>

        <p>
          Elevate your projects with a Java + Next.js Junior Full-stack
          Developer! With a passion for coding, I&apos;m here to bring fresh
          perspectives and innovation to every task. From robust backend
          solutions to stylish frontend interfaces, I&apos;ll turn your ideas
          into reality!{' '}
        </p>

        <Button onClick={() => scrollTo('hire-me')} variant='contained'>
          Contact me
        </Button>
      </div>
      <div className={styles.right} />
    </WidthLimitedSection>
  )
}
