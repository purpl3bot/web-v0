import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-source-sans-3">
      <div className="fixed top-4 right-4 text-red-800 text-sm">
        UPCOMING: 26-29 Sept 
        2Chairs Group Show
      </div>
      <div className="flex">
        <nav className="w-64 p-8 flex flex-col justify-between h-screen fixed">
          <div>
            <Link href="/" className="block mb-8 text-2xl font-astloch">
              mercedes farias
            </Link>
            <a
              href="/portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4"
            >
              portfolio
            </a>
            <Link href="/about" className="block mb-4">
              about
            </Link>
          </div>
          <div>
            <a href="mailto:mechi.farias@gmail.com" className="block mb-2">
              mechi.farias@gmail.com
            </a>
            <a
              href="https://www.instagram.com/mechifariasu.u"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              instagram
            </a>
          </div>
        </nav>
        <main className="ml-64 p-8 flex-1">{children}</main>
      </div>
    </div>
  )
}
