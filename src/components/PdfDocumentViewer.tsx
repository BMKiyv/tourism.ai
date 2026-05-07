'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

type PdfJsPage = {
  getViewport: (options: { scale: number }) => { width: number; height: number }
  render: (options: { canvasContext: CanvasRenderingContext2D; viewport: { width: number; height: number } }) => { promise: Promise<void> }
}

type PdfJsDocument = {
  numPages: number
  getPage: (pageNumber: number) => Promise<PdfJsPage>
}

type PdfJsLib = {
  GlobalWorkerOptions: { workerSrc: string }
  getDocument: (url: string) => { promise: Promise<PdfJsDocument> }
}

declare global {
  interface Window {
    pdfjsLib?: PdfJsLib
  }
}

type PdfDocumentViewerProps = {
  pdfUrl?: string | null
  title: string
}

const PDF_JS_VERSION = '2.10.377'
const PDF_JS_SRC = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDF_JS_VERSION}/pdf.min.js`
const PDF_WORKER_SRC = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDF_JS_VERSION}/pdf.worker.min.js`

export function PdfDocumentViewer({ pdfUrl, title }: PdfDocumentViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scriptReady, setScriptReady] = useState(false)
  const [isRendering, setIsRendering] = useState(false)
  const [renderError, setRenderError] = useState<string | null>(null)

  useEffect(() => {
    if (!scriptReady || !pdfUrl || !containerRef.current || !window.pdfjsLib) {
      return
    }

    let cancelled = false
    const container = containerRef.current
    container.innerHTML = ''
    queueMicrotask(() => {
      if (!cancelled) {
        setIsRendering(true)
        setRenderError(null)
      }
    })

    window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_WORKER_SRC

    window.pdfjsLib
      .getDocument(pdfUrl)
      .promise.then(async (pdf) => {
        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          if (cancelled) return

          const page = await pdf.getPage(pageNumber)
          const viewport = page.getViewport({ scale: 1.35 })
          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')

          if (!context) {
            continue
          }

          canvas.width = viewport.width
          canvas.height = viewport.height
          canvas.className = 'pdf-page'
          canvas.setAttribute('aria-label', `${title}: сторінка ${pageNumber}`)
          container.appendChild(canvas)

          await page.render({ canvasContext: context, viewport }).promise
        }
      })
      .catch(() => {
        if (!cancelled) {
          setRenderError('Не вдалося відобразити PDF у вбудованому переглядачі. Скористайтеся кнопкою відкриття або завантаження документа.')
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsRendering(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [pdfUrl, scriptReady, title])

  if (!pdfUrl) {
    return (
      <div className="rounded-xl border border-[#c2c5cb] p-6 text-center text-[#1d1d1b]">
        PDF-файл для цього наказу не вказано.
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <Script src={PDF_JS_SRC} strategy="afterInteractive" onLoad={() => setScriptReady(true)} />

      <div className="flex flex-wrap gap-3">
        <a href={pdfUrl} target="_blank" rel="noreferrer" className="download-button inline-block rounded-md text-[#1d1d1b] no-underline">
          Відкрити PDF
        </a>
        <a href={pdfUrl} download className="download-button inline-block rounded-md text-[#1d1d1b] no-underline">
          Завантажити PDF
        </a>
      </div>

      {isRendering && (
        <div className="rounded-xl border border-[#c2c5cb] p-6 text-center text-[#1d1d1b]">
          Завантаження PDF…
        </div>
      )}

      {renderError && (
        <div className="rounded-xl border border-[#c2c5cb] p-6 text-center text-[#1d1d1b]">
          {renderError}
          <iframe src={pdfUrl} title={title} className="mt-5 h-[80vh] w-full rounded-lg border border-[#c2c5cb]" />
        </div>
      )}

      <div id="pdf-view" ref={containerRef} className="pdf-view" aria-live="polite" />
    </div>
  )
}
