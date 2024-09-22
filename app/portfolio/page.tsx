'use client'

import { useEffect } from 'react'
import Layout from '@/components/Layout'

export default function Portfolio() {
  useEffect(() => {
    const trackView = () => {
      // Log the view event (you can replace this with your preferred analytics method)
      console.log('Portfolio viewed')
      
      // You can also send this event to your backend or analytics service
      // fetch('/api/log-view', { method: 'POST' })
    }

    trackView()
  }, [])

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full h-[calc(100vh-200px)]">
          <iframe
            src="/portfolio.pdf"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          >
            <p>It appears you don't have a PDF plugin for this browser. You can <a href="/portfolio.pdf">click here to download the PDF file.</a></p>
          </iframe>
        </div>
      </div>
    </Layout>
  )
}
