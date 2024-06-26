'use client'

import Image from 'next/image'
import styles from './skillItem.module.css'
import { useEffect, useRef, useState } from 'react'
import useSkillLevelDescription from '@/hooks/useSkillLevelDescription'
import { animate } from 'framer-motion'
import Tooltip from '@/components/tooltip'

const TRANSITION_DELAY = 1.55
const IMAGE_SIZE = 33

export default function SkillItem({ skill, level, icon, saw }) {
  const percentageTextRef = useRef()

  const [filledLevel, setFilledLevel] = useState(0)
  const { getDescriptions } = useSkillLevelDescription()

  useEffect(() => {
    if (!saw) return

    setFilledLevel(level)

    const node = percentageTextRef.current

    const controls = animate(0, level, {
      duration: TRANSITION_DELAY,
      onUpdate(value) {
        node.textContent = `${value.toFixed(0)}%`
      },
    })

    return () => controls.stop()
  }, [saw])

  return (
    <article className={styles.container}>
      <div className={styles['image-container']}>
        <Image
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          src={icon}
          alt={`${skill} image`}
        />
      </div>
      <div className={styles['box-container']}>
        <p className={styles['skill-txt']}>{skill}</p>
        <div className={styles['skill-box']}>
          <Tooltip
            title={getDescriptions(level)?.map((desc, index) => (
              <p className={styles['tooltip-txt']} key={index}>{`${desc}.`}</p>
            ))}
          >
            <div
              style={{
                maxWidth: `${filledLevel}%`,
                transition: `max-width ${TRANSITION_DELAY}s ease-in-out`,
              }}
              className={styles['skill-fill']}
            >
              <p ref={percentageTextRef}>0%</p>
            </div>
          </Tooltip>
        </div>
      </div>
    </article>
  )
}
