'use client'

import { useState } from 'react'
import Layout from '../../components/Layout'

export default function Portfolio() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPdfUrl(url)
    }
  }

  return (
    <Layout>
      <div>
        <input type="file" accept=".pdf" onChange={handleFileUpload} />
        {pdfUrl && (
          <iframe src={pdfUrl} width="100%" height="600px" style={{ border: 'none' }}></iframe>
        )}
      </div>
    </Layout>
  )
}
