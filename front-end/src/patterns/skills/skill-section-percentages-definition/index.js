import styles from './percentagesDefinition.module.css'
import levelDefinitions from '@/json/skillsLevelDefinitionsPt.json'

export default function PercentagesDefinition() {
  return (
    <div className={styles['captations-container']}>
      {levelDefinitions.map((skillCap) => (
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
