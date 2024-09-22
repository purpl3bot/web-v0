'use client'

import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'

export default function Portfolio() {
  const [pdfContent, setPdfContent] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPdfContent = async () => {
      try {
        const response = await fetch('/api/pdf-to-html')
        if (!response.ok) {
          throw new Error('Failed to fetch PDF content')
        }
        const data = await response.json()
        setPdfContent(data.content)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching PDF content:', error)
        setError('Failed to load portfolio content. Please try again later.')
        setIsLoading(false)
      }
    }

    fetchPdfContent()
  }, [])

  return (
    <Layout>
      /* <div className="flex flex-col items-center justify-center min-h-screen "> */ 
        <div className="w-full max-w-4xl mx-auto">
        /* <div className="bg-white p-8 rounded shadow-lg"> */
          {isLoading ? (
              <p>Loading portfolio content...</p>
            ) : error ? (
            <p className="text-red-500">{error}</p>
            ) : pdfContent ? (
              pdfContent.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))
            ) : (
              <p>No content available.</p>
            )}
          </div>
        </div>
        <a
          href="/portfolio.pdf"
          download
          onClick={() => console.log('Portfolio PDF downloaded')}
          className="mt-8 text-black px-4 py-2 rounded hover:transition-colors"
        >
          Download
        </a>
      </div>
    </Layout>
  )
}
