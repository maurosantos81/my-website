'use client'

import Image from 'next/image'
import styles from './skillItem.module.css'
import { useEffect, useRef, useState } from 'react'
import { Paper, Tooltip, tooltipClasses } from '@mui/material'
import useSkillLevelDescription from './useSkillLevelDescription'
import styled from '@emotion/styled'

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

export default function SkillItem({ skill, level, icon }) {
  const boundingElement = useRef()
  const [filledLevel, setFilledLevel] = useState(0)
  const [filledLevelStr, setFilledLevelStr] = useState(0)
  const { getDescriptions } = useSkillLevelDescription(level)

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
        <Image
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          src={icon}
          alt={`${skill} image`}
        />
      </div>
      <div className={styles['box-container']}>
        <p className={styles['skill-txt']}>{skill}</p>
        <div ref={boundingElement} className={styles['skill-box']}>
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
              <p>{filledLevelStr}%</p>
            </div>
          </BootstrapTooltip>
        </div>
      </div>
    </article>
  )
}
