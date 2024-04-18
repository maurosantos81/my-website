import styles from './home.module.css'
import AboutSection from '@/patterns/about-section'
import PortfolioSection from '@/patterns/portfolio-section'
import HireMeSection from '@/patterns/hire-me/hire-me-section'
import HeroSection from '@/patterns/hero-section'
import SkillsSection from '@/patterns/skills/skills-section'

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
