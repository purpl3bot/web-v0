import './globals.css'
import { Source_Sans_3, Astloch } from 'next/font/google'

const sourceSans3 = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans-3' })
const astloch = Astloch({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-astloch' })

export const metadata = {
  title: 'Mercedes Farias',
  description: 'Portfolio of Mercedes Farias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sourceSans3.variable} ${astloch.variable}`}>
      <body className={`${sourceSans3.variable} ${astloch.variable}`}>{children}</body>
    </html>
  )
}
