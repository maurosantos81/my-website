import { useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import styles from './confettiItem.module.css'

const animationTime = 5.25
const animationFrames = animationTime * 5
const animationSpeed = 0.5
const velocityDecreasing = 0.75

const heightLimit = 215

export default function ConfettiItem({ confetti, setIsConfettiActive }) {
  const [scope, animate] = useAnimate()
  const gravity = 45 + 10 * Math.random()

  const generateCoordinate = (frame) => {
    const time = (animationTime / animationFrames) * frame

    return {
      x: confetti.initialXVelocity * time * Math.pow(velocityDecreasing, time),
      y:
        confetti.initialYVelocity *
          time *
          Math.pow(velocityDecreasing, time * 1.5) +
        gravity * Math.pow(time, 2),
    }
  }

  const generateCoordinates = () => {
    return Array.from({ length: animationFrames }).map((_, index) =>
      generateCoordinate(index),
    )
  }

  useEffect(() => {
    const animateConfetti = async () => {
      // animate rotation
      animate(
        scope.current,
        {
          rotate: confetti.rotate * 1.5,
          rotateY: confetti.rotateY * 1.5,
        },
        {
          duration: animationTime * animationSpeed,
          ease: 'linear',
        },
      )

      const coordinates = generateCoordinates()
      let isOutOfHeight = false
      for (const [index, coords] of coordinates.entries()) {
        if (!scope?.current) return

        isOutOfHeight = coords.y > heightLimit
        if (isOutOfHeight) scope.current.style.display = 'none'

        await animate(
          scope?.current,
          {
            ...coords,
            opacity: isOutOfHeight || index === coordinates.length - 1 ? 0 : 1,
          },
          {
            duration: (animationTime / animationFrames) * animationSpeed,
            ease: 'linear',
          },
        )
      }

      setIsConfettiActive(false)
    }

    animateConfetti()
  }, [])

  return (
    <div
      ref={scope}
      className={styles.container}
      style={{
        borderRadius: confetti.shape === 'circle' ? '50%' : '0',
        backgroundColor: confetti.backgroundColor,
      }}
    />
  )
}
