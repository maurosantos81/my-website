'use client'

import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import styles from './portfolio.module.css'
import { useState } from 'react'
import PortfolioItem from '../portfolio-item'
import { ThemeProvider } from '@emotion/react'
import WidthLimitedSection from '@/components/widthLimitedSection'
import { createTheme } from '@mui/material/styles'

function compareDates(dateString1, dateString2) {
  // Convert string dates to Date objects
  const [day1, month1, year1] = dateString1.split('/').map(Number)
  const [day2, month2, year2] = dateString2.split('/').map(Number)

  // Create Date objects
  const date1 = new Date(year1, month1 - 1, day1)
  const date2 = new Date(year2, month2 - 1, day2)

  // Compare the dates
  if (date1 > date2) {
    return -1
  } else if (date1 < date2) {
    return 1
  } else {
    return 0
  }
}

const PROJECTS = [
  {
    name: 'Entre Agulhas e Pinturas',
    description:
      'Criação de uma especie de e-commerce para uma marca de artesanato.',
    date: '11/04/2024',
    img: '/images/entre-agulhas-e-pinturas.png',
    url: 'https://entre-agulhas-e-pinturas.vercel.app/',
    technologys: ['Java', 'MySQL', 'Next JS'],
  },
  {
    name: 'This Website',
    description:
      'Criação de uma especie de e-commerce para uma marca de artesanato.',
    date: '16/04/2024',
    img: '/images/',
    url: '',
    technologys: ['Next JS'],
  },
]

export default function PortfolioSection() {
  const [projects, setProjects] = useState(PROJECTS)

  return (
    <WidthLimitedSection id='portfolio'>
      <h2 className={styles.title}>Portfolio</h2>

      <div className={styles.grids}>
        <ThemeProvider
          theme={createTheme({
            breakpoints: {
              values: {
                lg: 1280,
                md: 1024,
                sm: 600,
                xs: 0,
              },
            },
          })}
        >
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {projects
              ?.sort((p1, p2) => compareDates(p1.date, p2.date))
              .map((project) => (
                <Grid key={project.name} item xs={12} sm={6} md={4}>
                  <PortfolioItem {...project} />
                </Grid>
              ))}

            {!projects &&
              Array.from(Array(6)).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <PortfolioItem />
                </Grid>
              ))}
          </Grid>
        </ThemeProvider>
      </div>
    </WidthLimitedSection>
  )
}
