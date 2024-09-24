import Link from 'next/link'
import dynamic from 'next/dynamic'

const MobileMenu = dynamic(() => import('./MobileMenu'), { ssr: false })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <MobileMenu />
      </div>
      <div className="fixed flex-col top-4 right-4 text-lime-100 text-sm selection:bg-slate-100 selection:text-black">
        <div>
        <span className="text-orange-700 selection:text-orange-700">UPCOMING: </span>
        <span className="text-black">26-29 Sept</span>
        </div>
        <div className="text-black">2Chairs Group Show</div>
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
        <main className="w-full lg:ml-64 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
