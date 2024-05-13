'use client'

import { useLocale } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import styles from './languageSwitcher.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { locales } from '@/constants/locales'
import Image from 'next/image'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

const hoverColor = '#e3e3e3'

export default function LanguageSwitcher({ className = '' }) {
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={ref} className={className} style={{ position: 'relative' }}>
      <div
        className={styles.languageSwitcher}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          width={40}
          height={20}
          src={`/images/${locale}-flag.svg`}
          alt={locale === 'en' ? 'English' : 'Portuguese'}
        />
        <KeyboardArrowDownIcon style={{ color: '#fff' }} fontSize='12px' />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={styles.ul}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            exit={{ opacity: 0 }}
          >
            {locales
              .filter((localeItem) => localeItem !== locale)
              .map((localeItem) => (
                <Link key={localeItem} href={`/${localeItem}/`}>
                  <motion.li
                    className={styles.item}
                    variants={itemVariants}
                    initial='closed'
                    animate={isOpen ? 'open' : 'closed'}
                    whileHover={{
                      backgroundColor: hoverColor,
                      borderColor: hoverColor,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Image
                      width={30}
                      height={20}
                      src={`/images/${localeItem}-flag.svg`}
                      alt={localeItem === 'en' ? 'English' : 'Portuguese'}
                    />
                  </motion.li>
                </Link>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
