import './globals.css'
import Navbar from '@/patterns/navbar'
import Footer from '@/patterns/footer'

const DESCRIPTION =
  "Elevate your projects with a Java + Next.js Junior Full-stack Developer! With a passion for coding, I'm here to bring fresh perspectives and innovation to every task. From robust backend solutions to stylish frontend interfaces, I'll turn your ideas into reality!"

export const metadata = {
  title: 'Mauro Santos - Full Stack Developer',
  authors: [{ name: 'Mauro Santos' }],
  creator: 'Mauro Santos',
  publisher: 'Mauro Santos',
  description: DESCRIPTION,
  openGraph: {
    title: 'Mauro Santos',
    description: DESCRIPTION,
    images: ['/images/logo.png'],
    authors: ['Mauro Santos'],
  },
  applicationName: 'Mauro Santos',
  keywords: [
    'Mauro Santos',
    'React',
    'Next.js',
    'Java',
    'Developer',
    'Full-Stack',
    'Full stack',
    'Website development',
    'Web development',
    'Backend developer',
    'Frontend developer',
    'HTML',
    'CSS',
    'Portfolio',
    'Projects',
    'Junior',
    'Programmer',
  ],
  category: 'technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
