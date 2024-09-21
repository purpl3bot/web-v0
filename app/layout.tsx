import './globals.css'
import { Spectral } from 'next/font/google'
import { Astloch } from 'next/font/google'

const spectral = Spectral({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-spectral' })
const astloch = Astloch ({ subsets: ['latin'], variable: '--font-astlock' })

export const metadata = {
  title: 'Mercedes Farias',
  description: 'Portfolio ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spectral.variable} ${astloch.variable}`}>
      <body>{children}</body>
    </html>
  )
}
