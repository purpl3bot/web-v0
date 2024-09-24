'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
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
        <div className="fixed inset-0 z-50 bg-slate-100 pt-16">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="/" className="text-2xl font-astloch font-bold" onClick={() => setIsOpen(false)}>
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
            <a className="text-lg" onClick={() => setIsOpen(false)}>
              mechi.farias at gmail.com
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
