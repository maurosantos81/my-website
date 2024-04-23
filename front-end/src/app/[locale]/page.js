import styles from './home.module.css'
import AboutSection from '@/patterns/about/about-section'
import PortfolioSection from '@/patterns/portfolio/portfolio-section'
import HireMeSection from '@/patterns/hire-me/hire-me-section'
import HeroSection from '@/patterns/hero-section'
import SkillsSection from '@/patterns/skills/skills-section'

export default async function Home({ params: { lang } }) {
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
