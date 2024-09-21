import './globals.css'
import { Spectral, Astloch, SourceSans3} from 'next/font/google'

const spectral = Spectral({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-spectral' })
const astloch = Astloch({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-astloch' })
const sourcesans3 = SourceSans3({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sourcesans3' })

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
      <body className={spectral.className}>{children}</body>
    </html>
  )
}
