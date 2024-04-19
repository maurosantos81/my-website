import Image from 'next/image'
import styles from './portfolioItem.module.css'
import { Paper } from '@mui/material'
import TechnologyItem from '@/components/technology-item'
import Link from '@/components/link'

export default function PortfolioItem({
  name,
  description,
  date,
  img,
  url = '/',
  technologys,
}) {
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
              alt={`Site ${name}`}
              layout='responsive'
              width={1000}
              height={1000}
            />
          </div>
        </Link>

        <div>
          <Link href={url}>
            <h3 className={styles.title}>{name}</h3>
          </Link>
          <p className={styles.date}>{date}</p>
        </div>

        <p className={styles.description}>{description}</p>
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
