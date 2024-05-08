import Image from 'next/image'
import styles from './portfolioItem.module.css'
import { Paper } from '@mui/material'
import TechnologyItem from '@/components/technology-item'
import Link from '@/components/link'
import { useLocale } from 'next-intl'

export default function PortfolioItem({
  en,
  pt,
  date,
  img,
  url = '/',
  technologys,
}) {
  const locale = useLocale()
  const language = locale === 'pt' ? pt : en

  return (
    <Paper
      sx={{ borderRadius: '10px' }}
      elevation={4}
      component={'article'}
      className={styles.item}
    >
      <div>
        <Link href={url}>
          <div className={styles['img-container']}>
            <Image
              className={styles['image']}
              src={img}
              sizes='100vw'
              alt={`Site ${language.name}`}
              width={430}
              height={310}
            />
          </div>
        </Link>

        <div>
          <Link href={url}>
            <h3 className={styles.title}>{language.name}</h3>
          </Link>
          <p className={styles.date}>{date}</p>
        </div>

        <p className={styles.description}>{language.description}</p>
      </div>

      {technologys?.length > 0 && (
        <div className={styles.technologys}>
          {technologys.map((technology) => (
            <TechnologyItem key={technology} name={technology} />
          ))}
        </div>
      )}
    </Paper>
  )
}
