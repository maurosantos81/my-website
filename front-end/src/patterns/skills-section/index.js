import SkillItem from '../skill-item'
import styles from './skills.module.css'
import skills from './skills.json'
import WidthLimitedSection from '@/components/widthLimitedSection'

export default function SkillsSection() {
  return (
    <WidthLimitedSection className={styles.section} id='skills'>
      <h2>Skills</h2>

      <div className={styles.skills}>
        {skills
          .sort((a, b) => b.level - a.level)
          .map((skill) => (
            <SkillItem key={skill.name} {...skill} />
          ))}
      </div>
    </WidthLimitedSection>
  )
}
