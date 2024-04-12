import Button from '@/components/button'
import styles from './hero.module.css'
import Image from 'next/image';

export default function HeroSection() {
    return <section id='hero' className={styles.hero}>
    <div className={styles.left}>
      <h1>MAURO SANTOS</h1>
      <p>A full stack developer</p>

      <p>Crafting digital experiences</p>
    </div>
    <div className={styles.right}>
      <Image className={styles.img} fill src='/images/hero.jpeg' alt="a developer programming" />
    </div>
  </section>
}