import Button from '@/components/button'
import styles from './hero.module.css'

export default function HeroSection() {
    return <section id='hero' className={styles.hero}>
    <div className={styles.left}>
      <h1>MAURO SANTOS</h1>
      <p>A full stack developer</p>

      <div className={styles.buttons}>
        <Button>View projects</Button>
        <Button>Contact me</Button>
      </div>

      <p>Crafting digital experiences</p>
    </div>
    <div className={styles.right}></div>
  </section>
}