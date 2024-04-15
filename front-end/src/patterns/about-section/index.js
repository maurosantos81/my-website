'use client'

import Image from '@/components/image'
import styles from './about.module.css'
import WidthLimitedSection from '@/components/widthLimitedSection'
import { Button } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import Link from '@/components/link'
import useFileDownloader from '@/hooks/useFileDownloader'

export default function AboutSection() {
  const download = useFileDownloader()

  return (
    <WidthLimitedSection divClassName={styles.container} id='about'>
      <div className={styles['text-container']}>
        <h2>Hi, I&apos;m Mauro. Nice to meet you!</h2>
        <p>
          My programming journey began almost a decade ago, due to an insatiable
          curiosity and a desire to create my own minecraft plugins (as you can
          see on my old{' '}
          <Link text href='https://www.youtube.com/@M4UR0Dev'>
            Youtube channel
          </Link>
          ).
        </p>
        <p>
          After my carrer as a minecraft plugin developer ended prematurely, I
          started to programming desktop applications using Java. This journey
          continued until I completed my degree in Computer Engineering at the{' '}
          <Link text href='https://www.ualg.pt/'>
            University of Algarve
          </Link>{' '}
          in 2022 and started to work at{' '}
          <Link text href='https://eviden.com/'>
            Eviden
          </Link>
          , where I&apos;ve been employed for nearly two years. It was at Eviden
          where I met React and the world of web development.
        </p>
        <p>
          In addition to my academic and professional journey, I am dedicated to
          continual growth and learning, both personally and professionally. I
          strive to stay aware of industry advancements, constantly seeking
          opportunities to expand my skill set and deepen my knowledge. My
          approach to work is centered around maximizing my productivity through
          the strategic application of artificial intelligence tools and other
          proven techniques, all while ensuring the delivery of high-quality
          code.
        </p>
        <p className={styles.bold}>
          Let&apos;s connect and embark on a journey of innovation and success
          together!
        </p>
      </div>

      <Button
        className={styles['curriculum-button']}
        variant='outlined'
        endIcon={<ArrowOutwardIcon sx={{ fontSize: '15px' }} />}
        onClick={() => download('/cv.pdf', 'Mauro_CV.pdf')}
        sx={{
          color: 'white',
          borderColor: '#ffffff82',
          borderRadius: '12px',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: 'white',
            color: 'white',
          },
        }}
      >
        Curriculum
      </Button>

      <div className={styles['image-container']}>
        <Image
          className={styles.image}
          src={'/images/me.jpg'}
          alt='Mauro photo'
        />
      </div>
    </WidthLimitedSection>
  )
}
