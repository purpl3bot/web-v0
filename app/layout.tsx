import './globals.css'
import { Spectral, Astloch } from 'next/font/google'

const spectral = Spectral({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-spectral' })
const astloch = Astloch({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-astloch' })

export const metadata = {
  title: 'Mercedes Farias - Dark Art',
  description: 'Portfolio of Mercedes Farias, dark artist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spectral.variable} ${astloch.variable}`}>
      <body className={spectral.className astloch.className}>{children}</body>
    </html>
  )
}
