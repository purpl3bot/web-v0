import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="fixed flex-col top-4 right-4 text-red-600 text-sm selection:bg-slate-50 selection:text-black">
        <div>UPCOMING: 26-29 Sept</div>
        <div>2Chairs Group Show</div>
      </div>
      <div className="flex">
        <nav className="w-64 p-8 flex flex-col justify-between h-screen fixed">
          <div>
            <Link href="/" className="block mb-8 text-3xl font-astloch font-bold hover:bg-lime-100 hover:text-black">
              mercedes farias
            </Link>
            <a
              href="/portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 hover:bg-lime-100 hover:text-black"
            >
              portfolio
            </a>
            <Link href="/about" className="block mb-4 hover:bg-lime-100 hover:text-black">
             about
            </Link>
          </div>
          <div>
            <div className="mb-4 selection:bg-lime-100 selection:text-black">
              mechi.farias at gmail.com
            </div>
            <a
              href="https://www.instagram.com/mechifariasu.u"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:bg-lime-100 hover:text-black"
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
