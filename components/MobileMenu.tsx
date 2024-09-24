import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-500 hover:text-gray-600"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="/" className="text-2xl font-astloch" onClick={() => setIsOpen(false)}>
              mercedes farias
            </Link>
            <a
              href="/portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
              onClick={() => setIsOpen(false)}
            >
              portfolio
            </a>
            <Link href="/about" className="text-lg" onClick={() => setIsOpen(false)}>
              about
            </Link>
            <a href="mailto:mechi.farias@gmail.com" className="text-lg" onClick={() => setIsOpen(false)}>
              email: mechi.farias@gmail.com
            </a>
            <a
              href="https://www.instagram.com/mechifariasu.u"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
              onClick={() => setIsOpen(false)}
            >
              instagram
            </a>
            <div className="text-orange-700 text-sm">
              UPCOMING: 26-29 Sept. 2Chairs Group Show
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
