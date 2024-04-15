import NextLink from 'next/link'
import styles from './link.module.css'

export default function Link({ children, text, ...props }) {
  return (
    <NextLink
      className={text ? styles['text-link'] : ''}
      target='_blank'
      {...props}
    >
      {children}
    </NextLink>
  )
}
