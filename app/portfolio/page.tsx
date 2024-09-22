'use client'

import { useEffect, useState } from 'react'
import Layout from '@/components/Layout'

export default function Portfolio() {
  const [pdfContent, setPdfContent] = useState<string>('')

  useEffect(() => {
    const fetchPdfContent = async () => {
      try {
        const response = await fetch('/api/pdf-to-html')
        const data = await response.json()
        setPdfContent(data.content)
        console.log('Portfolio viewed')
      } catch (error) {
        console.error('Error fetching PDF content:', error)
      }
    }

    fetchPdfContent()
  }, [])

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-astloch mb-6">Portfolio</h1>
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded shadow-lg">
            {pdfContent.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
        <a
          href="/portfolio.pdf"
          download
          onClick={() => console.log('Portfolio PDF downloaded')}
          className="mt-8 text-black px-4 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          Download
        </a>
      </div>
    </Layout>
  )
}
