import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import PDFParser from 'pdf2json'

export async function GET() {
  const pdfParser = new PDFParser(null, 1)

  return new Promise((resolve) => {
    pdfParser.on('pdfParser_dataError', (errData: any) => {
      console.error(errData.parserError)
      resolve(NextResponse.json({ error: 'Failed to parse PDF' }, { status: 500 }))
    })

    pdfParser.on('pdfParser_dataReady', (pdfData: any) => {
      const content = pdfData.Pages.map((page: any) => {
        return page.Texts.map((text: any) =>
          decodeURIComponent(text.R[0].T)
        ).join(' ')
      }).join('\n\n')

      resolve(NextResponse.json({ content }))
    })

    const pdfFilePath = path.join(process.cwd(), 'public', 'portfolio.pdf')
    
    if (fs.existsSync(pdfFilePath)) {
      pdfParser.loadPDF(pdfFilePath)
    } else {
      resolve(NextResponse.json({ error: 'PDF file not found' }, { status: 404 }))
    }
  })
}
