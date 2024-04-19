import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

export default function AnimatedText({ text, elementType = 'p', ...props }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest))
  const MotionComponent = motion[elementType]

  useEffect(() => {
    animate(count, text.length, {
      type: 'tween',
      duration: 1.8,
      ease: 'easeInOut',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <MotionComponent {...props}>{displayText}</MotionComponent>
}
