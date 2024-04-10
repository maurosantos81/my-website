import SkillItem from '../skill-item'
import styles from './skills.module.css'

const SKILLS = [{
  icon: "/images/java-icon.png",
  skill: "Java",
  level: 80
}, {
  icon: "/images/react-icon.svg.png",
  skill: "React JS / Next JS",
  level: 90
},
{
  icon: "/images/html-icon.png",
  skill: "HTML",
  level: 70
},
{
  icon: "/images/css-icon.png",
  skill: "CSS",
  level: 70
},
{
  icon: "/images/python-logo-only.png",
  skill: "Python",
  level: 40
},
{
  icon: "/images/mysql-icon.png",
  skill: "MySQL",
  level: 40
}]

export default function SkillsSection() {
  return (
    <section className={styles.section} id='skills'>
      <h2>Skills</h2>

      <div className={styles.skills}>
        {SKILLS.sort((a,b) => b.level - a.level).map(skill => (
          <SkillItem key={skill.name}  {...skill} />
        ))}
      </div>
    </section>
  )
}
