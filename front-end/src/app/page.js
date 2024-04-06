import Button from '@/components/button'
import styles from './home.module.css'
import AboutSection from '@/patterns/about-section'
import SkillsSection from '@/patterns/skills-section'
import PortfolioSection from '@/patterns/portfolio-section'
import HireMeSection from '@/patterns/hire-me-section'
import HeroSection from '@/patterns/hero-section'

export default function Home() {
  return (
    <main className={styles.home}>
      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <PortfolioSection />

      <HireMeSection />
    </main>
  )
}
