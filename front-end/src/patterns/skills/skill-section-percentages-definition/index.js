import { useLocale } from 'next-intl'
import styles from './percentagesDefinition.module.css'

export default function PercentagesDefinition() {
  const locale = useLocale()
  const capitalizedLocale = locale.charAt(0).toUpperCase() + locale.slice(1)

  const levelDefinitions = require(
    `@/json/skillsLevelDefinitions${capitalizedLocale}.json`,
  )

  return (
    <div className={styles['captations-container']}>
      {levelDefinitions?.map((skillCap) => (
        <div key={skillCap.level}>
          <p className={styles['legend-title']}>{skillCap.level}</p>
          <ul>
            {skillCap.descriptions.map((description, index) => (
              <li key={index} className={styles['legend-text']}>
                {description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
