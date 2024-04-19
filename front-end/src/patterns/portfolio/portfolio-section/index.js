'use client'

import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import styles from './portfolio.module.css'
import { ThemeProvider } from '@emotion/react'
import WidthLimitedSection from '@/components/widthLimitedSection'
import { createTheme } from '@mui/material/styles'
import PortfolioItem from '../portfolio-item'
import projects from '@/json/portfolioItems.json'

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

export default function PortfolioSection() {
  return (
    <WidthLimitedSection divClassName={styles.section} id='portfolio'>
      <h2 className={styles.title}>Portfolio</h2>

      <div className={styles.grids}>
        <ThemeProvider
          theme={createTheme({
            breakpoints: {
              values: {
                lg: 1430,
                md: 1024,
                sm: 620,
                xs: 0,
              },
            },
          })}
        >
          <Grid
            container
            justifyContent={'center'}
            spacing={{ xs: 2, md: 3, lg: 4 }}
          >
            {projects
              ?.sort((p1, p2) => compareDates(p1.date, p2.date))
              .map((project) => (
                <Grid key={project.name} xs={12} sm={6} md={4} lg={3}>
                  <PortfolioItem {...project} />
                </Grid>
              ))}

            {!projects &&
              Array.from(Array(6)).map((_, index) => (
                <Grid xs={12} sm={6} md={4} key={index}>
                  <PortfolioItem />
                </Grid>
              ))}
          </Grid>
        </ThemeProvider>
      </div>
    </WidthLimitedSection>
  )
}
