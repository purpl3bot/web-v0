import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import PDFParser from 'pdf2json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pdfParser = new PDFParser()

  pdfParser.on('pdfParser_dataError', (errData: any) =>
    console.error(errData.parserError)
  )

  pdfParser.on('pdfParser_dataReady', (pdfData: any) => {
    const content = pdfData.Pages.map((page: any) => {
      return page.Texts.map((text: any) =>
        decodeURIComponent(text.R[0].T)
      ).join(' ')
    }).join('\n\n')

    res.status(200).json({ content })
  })

  const pdfFilePath = path.join(process.cwd(), 'public', 'portfolio.pdf')
  pdfParser.loadPDF(pdfFilePath)
}
