import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { PdfDocumentViewer } from '@/components/PdfDocumentViewer'

type OrderDetailPageProps = {
  params: Promise<{ slug: string }>
}

function formatOrderDate(date?: string | null) {
  if (!date) return ''

  return new Date(date).toLocaleDateString('uk-UA')
}

export default async function OrderDetailPage({ params }: OrderDetailPageProps) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'orders',
    depth: 1,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const order = docs[0]

  if (!order) {
    notFound()
  }

  const date = formatOrderDate(order.date)
  const pdfUrl = order.url || order.link
  const title = `Наказ № ${order.number || ''}${date ? ` від ${date}` : ''} «${order.name}»`

  return (
    <div className="c-section header-trigger">
      <div className="o-container orders-wrap">
        <Link href="/orders" className="laws-list-item inline-block">
          ← До переліку наказів
        </Link>

        <div className="orders-header-wrap">
          <div className="orders-header">Наказ</div>
          {order.number && (
            <>
              <div className="orders-header">№</div>
              <div className="orders-header">{order.number}</div>
            </>
          )}
          {date && (
            <>
              <div className="orders-header">від</div>
              <div className="orders-header">{date}</div>
            </>
          )}
          <div className="orders-header">&quot;</div>
          <div className="orders-header">{order.name}</div>
          <div className="orders-header">&quot;</div>
        </div>

        <PdfDocumentViewer pdfUrl={pdfUrl} title={title} />
      </div>
    </div>
  )
}
