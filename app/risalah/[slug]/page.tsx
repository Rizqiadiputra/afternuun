'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowLeft, Download } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { client, urlFor } from '@/lib/sanity'
import { risalahBySlugQuery } from '@/lib/queries'
import { PortableText } from '@portabletext/react'

type RisalahDetail = {
  _id: string
  title: string
  slug: { current: string }
  author: string
  publishedAt: string
  category: string
  readTime: number
  excerpt: string
  image?: any
  body: any[]
}

const components = {
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-bold text-foreground mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">{children}</h4>,
    h5: ({ children }: any) => <h5 className="text-lg font-semibold text-foreground mt-4 mb-2">{children}</h5>,
    h6: ({ children }: any) => <h6 className="text-base font-semibold text-foreground mt-4 mb-2">{children}</h6>,
    normal: ({ children }: any) => <p className="text-foreground/80 leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/80">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside space-y-2 mb-4 text-foreground/80">{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-foreground">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>,
  },
}

export default function ArticleDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  const [article, setArticle] = useState<RisalahDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    client.fetch(risalahBySlugQuery, { slug }).then((data) => {
      setArticle(data)
      setLoading(false)
    })
  }, [slug])

  const handleDownloadPDF = async () => {
    if (!article) return
    setDownloading(true)
    try {
      const { downloadRisalahPDF } = await import('@/components/risalahpdf')
      const imageUrl = article.image ? urlFor(article.image).width(800).url() : undefined
      await downloadRisalahPDF(article, imageUrl)
    } catch (error) {
      console.error('Gagal membuat PDF:', error)
    } finally {
      setDownloading(false)
    }
  }

  if (loading) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Memuat artikel...</p>
        </main>
        <Footer />
      </>
    )
  }

  if (!article) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Artikel Tidak Ditemukan</h1>
            <p className="text-muted-foreground mb-8">Maaf, artikel yang Anda cari tidak tersedia.</p>
            <Link href="/risalah">
              <Button className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Risalah
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />

      <main className="flex flex-col">
        {/* Hero Image */}
        {article.image && (
          <div className="relative h-80 w-full overflow-hidden">
            <Image
              src={urlFor(article.image).width(1200).url()}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        )}

        {/* Content */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link href="/risalah">
              <Button variant="outline" size="sm" className="mb-6 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Risalah
              </Button>
            </Link>

            {/* Area yang akan di-capture untuk PDF */}
            <article className="bg-background">
              <div className="mb-8">
                <span className="inline-flex text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                  {article.category}
                </span>

                <h1 className="text-4xl font-bold text-foreground mb-4 sm:text-5xl">
                  {article.title}
                </h1>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground border-b border-border pb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div>
                    <span>{article.readTime} min baca</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-invert max-w-none mb-12">
                {article.body && <PortableText value={article.body} components={components} />}
              </div>
            </article>

            <Card className="border-primary/20 bg-primary/5 p-6">
              <CardContent className="p-0 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Penulis</p>
                  <p className="text-lg font-semibold text-foreground">{article.author}</p>
                </div>
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={handleDownloadPDF}
                  disabled={downloading}
                >
                  <Download className="h-4 w-4" />
                  {downloading ? 'Menyiapkan PDF...' : 'Unduh PDF'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
