'use client'

import Image from 'next/image';
import styles from './skillItem.module.css'
import { useEffect, useState } from 'react'

const TRANSITION_DELAY = 1.55
const IMAGE_SIZE = 33;

export default function SkillItem({ skill, level, icon }) {
  const [filledLevel, setFilledLevel] = useState(0)
  const [filledLevelStr, setFilledLevelStr] = useState(0)

  useEffect(() => {
    setFilledLevel(level)

    const delay = TRANSITION_DELAY / level
    const delayInMili = delay * 1000

    let timeout
    timeout = setInterval(() => {
      setFilledLevelStr((filled) => {
        if (level > filled) {
          return filled + 1
        }
        clearInterval(timeout)
        return filled
      })
    }, delayInMili)

    return () => {
      clearInterval(timeout)
    }
  }, [])

  return (
    <article className={styles.container}>
      <div className={styles['image-container']}>
      <Image width={IMAGE_SIZE} height={IMAGE_SIZE} src={icon} alt={`${skill} image`} />
      </div>
      <div  className={styles['box-container']}>
        <p className={styles['skill-txt']}>{skill}</p>
        <div className={styles['skill-box']}>
          <div
            style={{
              maxWidth: `${filledLevel}%`,
              transition: `max-width ${TRANSITION_DELAY}s ease-in-out`,
            }}
            className={styles['skill-fill']}
          >
            <p>{filledLevelStr}%</p>
          </div>
        </div>
      </div>
    </article>
  )
}
