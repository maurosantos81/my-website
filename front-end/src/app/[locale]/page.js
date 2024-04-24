import styles from './home.module.css'
import AboutSection from '@/patterns/about/about-section'
import PortfolioSection from '@/patterns/portfolio/portfolio-section'
import HireMeSection from '@/patterns/hire-me/hire-me-section'
import HeroSection from '@/patterns/hero-section'
import SkillsSection from '@/patterns/skills/skills-section'
import { unstable_setRequestLocale } from 'next-intl/server'

export default async function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale)

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
