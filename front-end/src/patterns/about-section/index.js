import Image from '@/components/image'
import styles from './about.module.css'
import WidthLimitedSection from '@/components/widthLimitedSection'

export default function AboutSection() {
  return (
    <WidthLimitedSection id='about'>
      <h2>About Me</h2>
      <div className={styles['container']}>
        <ul className={styles.left}>
          <li>Programador Java e NextJS.</li>
          <li>
            Atualmente a trabalhar como desenvolvedor de aplicações na Eviden
            Portugal.
          </li>
          <li>
            Licenciado em Engenharia Informatica na Universidade do Algarve em
            2022
          </li>
        </ul>

        <div className={styles.right}>
          <Image
            className={styles.image}
            src={'/images/me.jpg'}
            alt='Mauro photo'
          />
        </div>
      </div>
    </WidthLimitedSection>
  )
}
