'use client'

import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'

export default function Portfolio() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  useEffect(() => {
    // Fetch the PDF URL from an API or use a static URL
    setPdfUrl('/portfolio.pdf')
  }, [])

  const handleDownload = () => {
    // Log the download event (you can replace this with your preferred analytics method)
    console.log('Portfolio PDF downloaded')
    
    // You can also send this event to your backend or analytics service
    // fetch('/api/log-download', { method: 'POST' })
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-astloch mb-6">Portfolio</h1>
        {pdfUrl ? (
          <>
            <iframe
              src={`${pdfUrl}#view=FitH`}
              className="w-full max-w-3xl h-[70vh] mb-4"
              title="Portfolio PDF"
            />
            <a
              href={pdfUrl}
              download="Mercedes_Farias_Portfolio.pdf"
              onClick={handleDownload}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              Download Portfolio
            </a>
          </>
        ) : (
          <p>Loading portfolio...</p>
        )}
      </div>
    </Layout>
  )
}

