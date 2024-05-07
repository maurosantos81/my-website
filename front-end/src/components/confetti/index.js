import ConfettiItem from '../confettiItem'

const numConfettis = 110

const confettiColors = [
  '#FF0000', // Red
  '#00FF00', // Green
  '#0000FF', // Blue
  '#FFFF00', // Yellow
  '#FF00FF', // Magenta
  '#00FFFF', // Cyan
  '#FFA500', // Orange
  '#800080', // Purple
  '#008000', // Dark Green
  '#000080', // Navy
  '#FFC0CB', // Pink
  '#A52A2A', // Brown
  '#808080', // Gray
  '#008080', // Teal
  '#800000', // Maroon
  '#F0E68C', // Khaki
  '#B8860B', // Dark Goldenrod
  '#2F4F4F', // Dark Slate Gray
]

const throwingAngleRanges = [
  { min: Math.PI / 3, max: Math.PI / 6 },
  { min: (5 * Math.PI) / 6, max: (2 * Math.PI) / 3 },
]

const generateConfettiProps = () => {
  // Random angle within the selected range
  const rangeIndex = Math.random() < 0.5 ? 0 : 1
  const minAngle = throwingAngleRanges[rangeIndex].min
  const maxAngle = throwingAngleRanges[rangeIndex].max
  const angle = minAngle + Math.random() * (maxAngle - minAngle)

  const velocityX = window.innerWidth / 8 + Math.random() * 330
  const velocityY = 1000 + Math.random() * 200

  const shape = Math.random() < 0.5 ? 'circle' : 'rectangle' // Randomly choose shape

  return {
    shape: shape,
    rotate: 360 * ((Math.random() * 10) % 5),
    rotateY: 360 * ((Math.random() * 10) % 3),
    backgroundColor:
      confettiColors[Math.floor(Math.random() * confettiColors.length)],
    initialXVelocity: Math.cos(angle) * velocityX,
    initialYVelocity: -Math.abs(Math.sin(angle) * velocityY),
  }
}

const Confetti = ({ setIsConfettiActive }) => {
  // Array to store confetti animation properties
  const confettis = Array.from({ length: numConfettis }, (_, i) => i).map(
    () => ({
      ...generateConfettiProps(),
    }),
  )

  return (
    <>
      {confettis.map((confetti, index) => (
        <ConfettiItem
          key={index}
          setIsConfettiActive={setIsConfettiActive}
          confetti={confetti}
        />
      ))}
    </>
  )
}

export default Confetti
