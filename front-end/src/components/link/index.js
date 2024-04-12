import NextLink from 'next/link'

export default function Link({ children, ...props }) {
  return (
    <NextLink target='_blank' {...props}>
      {children}
    </NextLink>
  )
}
