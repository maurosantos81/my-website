'use client'

import Image from 'next/image'
import styles from './skillItem.module.css'
import { useEffect, useRef, useState } from 'react'
import { Paper, Tooltip, tooltipClasses } from '@mui/material'
import styled from '@emotion/styled'
import useSkillLevelDescription from '@/hooks/useSkillLevelDescription'
import { animate } from 'framer-motion'

const TRANSITION_DELAY = 1.55
const IMAGE_SIZE = 33

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip
    components={Paper}
    elevation={2}
    placement='bottom-end'
    slotProps={{
      popper: {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -8],
            },
          },
        ],
      },
    }}
    {...props}
    arrow
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: 'black',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'black',
    fontSize: '0.8rem',
    padding: '0.7rem',
  },
}))

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
          <BootstrapTooltip
            title={getDescriptions(level)?.map((desc, index) => (
              <p key={index}>{`${desc}.`}</p>
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
          </BootstrapTooltip>
        </div>
      </div>
    </article>
  )
}
