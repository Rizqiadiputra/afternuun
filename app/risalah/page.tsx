'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight, BookOpen, FileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { client, urlFor } from '@/lib/sanity'
import { risalahListQuery } from '@/lib/queries'

type Risalah = {
  _id: string
  title: string
  slug: { current: string }
  author: string
  publishedAt: string
  category: string
  readTime: number
  excerpt: string
  image?: any
}

const researchPapers = [
  {
    id: 1,
    title: 'Ekosistem Budaya Lokal dan Model Keberlanjutan: Studi Kasus di Komunitas Seni Jawa',
    authors: 'Dr. Agus Triyanto, Prof. Wawan Setiawan',
    journal: 'Indonesian Journal of Cultural Studies',
    year: 2024,
    volume: 'Vol. 12, No. 2',
    pages: 'pp. 145-168',
    abstract: 'Penelitian ini mengeksplorasi model keberlanjutan dalam ekosistem budaya lokal, dengan fokus pada cara komunitas seni Jawa membangun ketahanan ekonomi dan sosial.',
    keywords: ['Budaya Lokal', 'Keberlanjutan', 'Ekosistem', 'Komunitas Seni']
  },
  {
    id: 2,
    title: 'Transformasi Digital dalam Seni Tradisional: Peluang dan Tantangan bagi Seniman Indonesia',
    authors: 'Siti Nurhaliza, Bambang Sutejo',
    journal: 'Contemporary Arts & Technology Review',
    year: 2024,
    volume: 'Vol. 8, No. 1',
    pages: 'pp. 89-112',
    abstract: 'Penelitian kualitatif yang menelusuri bagaimana seniman tradisional mengadopsi teknologi digital sambil mempertahankan nilai-nilai autentik dalam proses kreatif mereka.',
    keywords: ['Digital Art', 'Seni Tradisional', 'Teknologi', 'Transformasi']
  },
  {
    id: 3,
    title: 'Pendidikan Seni Kontekstual: Metode Pembelajaran yang Relevan dengan Komunitas Lokal',
    authors: 'Pak Haryo, Dr. Agus Triyanto',
    journal: 'Arts Education Quarterly',
    year: 2023,
    volume: 'Vol. 15, No. 4',
    pages: 'pp. 234-256',
    abstract: 'Artikel ini mempresentasikan kerangka pedagogi seni yang responsif terhadap konteks lokal dan kebutuhan komunitas, berdasarkan pengalaman praktis di lapangan.',
    keywords: ['Pendidikan Seni', 'Kontekstual', 'Komunitas', 'Pedagogi']
  },
  {
    id: 4,
    title: 'Arsitektur Tradisional Jawa sebagai Praktik Berkelanjutan: Kebijaksanaan Lingkungan dan Desain Kontemporer',
    authors: 'Prof. Wawan Setiawan',
    journal: 'Sustainable Architecture & Design',
    year: 2023,
    volume: 'Vol. 10, No. 3',
    pages: 'pp. 178-195',
    abstract: 'Studi mendalam tentang bagaimana prinsip-prinsip arsitektur tradisional Jawa dapat diintegrasikan ke dalam praktik desain berkelanjutan modern.',
    keywords: ['Arsitektur Tradisional', 'Keberlanjutan', 'Desain', 'Jawa']
  },
  {
    id: 5,
    title: 'Memori Kolektif dan Arsip Komunitas: Strategi Dokumentasi Warisan Budaya Lokal',
    authors: 'Dr. Agus Triyanto, Siti Nurhaliza',
    journal: 'Archive & Memory Studies',
    year: 2023,
    volume: 'Vol. 7, No. 2',
    pages: 'pp. 101-128',
    abstract: 'Penelitian etnografis tentang praktik dokumentasi dan pengarsipan tradisional serta kontribusinya terhadap pelestarian memori kolektif komunitas.',
    keywords: ['Arsip', 'Memori', 'Dokumentasi', 'Warisan Budaya']
  }
]

const aboutRisalah = {
  paragraphs: [
    'Risalah adalah ruang publikasi Afternuun yang menghimpun artikel, penelitian, wawancara, refleksi, dan berbagai bentuk dokumentasi pengetahuan yang lahir dari praktik seni, budaya, dan pembelajaran lintas generasi.',
    'Melalui Risalah, gagasan tidak berhenti dalam percakapan, tetapi didokumentasikan, dibagikan, dan dikembangkan sebagai sumber pembelajaran bagi publik.',
    'Risalah menjadi salah satu cara Afternuun merawat dan menyebarluaskan pengetahuan yang lahir dari proses belajar, praktik budaya, penelitian, dan pengalaman lintas generasi.'
  ]
}

function RisalahContent() {
  const [activeTab, setActiveTab] = useState('articles')
  const [articles, setArticles] = useState<Risalah[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(risalahListQuery).then((data) => {
      setArticles(data)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <Navigation />

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/20 to-background px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 sm:text-5xl">
              Risalah
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Ruang Publikasi Pengetahuan, Refleksi, dan Dokumentasi Gagasan
            </p>
          </div>
        </section>

        {/* About Risalah Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Tentang Risalah</h2>
            <div className="space-y-6">
              {aboutRisalah.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="px-4 py-8 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('articles')}
                className={`px-6 py-3 font-medium transition-colors rounded-lg ${
                  activeTab === 'articles'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <BookOpen className="h-4 w-4 inline mr-2" />
                Publikasi Populer
              </button>
              {/* <button
                onClick={() => setActiveTab('research')}
                className={`px-6 py-3 font-medium transition-colors rounded-lg ${
                  activeTab === 'research'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <FileText className="h-4 w-4 inline mr-2" />
                Kajian & Penelitian
              </button> */}
            </div>
          </div>
        </section>

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              {loading ? (
                <div className="text-center py-20 text-muted-foreground">Memuat artikel...</div>
              ) : articles.length === 0 ? (
                <div className="text-center py-20 text-muted-foreground">Belum ada artikel yang dipublikasikan.</div>
              ) : (
                <div className="space-y-6 mb-12">
                  {articles.map((article) => (
                    <Link key={article._id} href={`/risalah/${article.slug.current}`} className="block">
                      <Card className="border-primary/20 hover:shadow-lg transition-all cursor-pointer group overflow-hidden md:flex">
                        {article.image && (
                          <div className="relative h-48 w-full md:h-auto md:w-48 flex-shrink-0">
                            <Image
                              src={urlFor(article.image).width(400).url()}
                              alt={article.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                        )}
                        <div className="flex flex-col w-full">
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <div>
                                <p className="text-sm text-muted-foreground mb-2">{article.author}</p>
                                <CardTitle className="text-foreground text-xl group-hover:text-primary transition-colors line-clamp-2">
                                  {article.title}
                                </CardTitle>
                              </div>
                              <ArrowRight className="h-5 w-5 text-primary/50 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4 flex-1">
                            <CardDescription className="text-foreground/70 leading-relaxed">
                              {article.excerpt}
                            </CardDescription>

                            <div className="flex flex-wrap items-center gap-4 text-sm">
                              <span className="inline-flex items-center gap-2 text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric'
                                })}
                              </span>
                              <span className="text-muted-foreground">{article.readTime} min baca</span>
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                {article.category}
                              </span>
                            </div>

                            <Button variant="outline" size="sm" className="gap-2">
                              Baca Selengkapnya
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}

              {/* Newsletter Signup */}
              <div className="bg-primary/10 p-8 rounded-lg text-center space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Langganan Newsletter Kami</h2>
                  <p className="text-muted-foreground">
                    Dapatkan artikel, refleksi, publikasi penelitian, dokumentasi pengetahuan, dan kabar terbaru dari ekosistem Afternuun langsung ke email Anda. Ikuti perkembangan gagasan, praktik budaya, dan pembelajaran lintas generasi yang tumbuh bersama Afternuun.
                  </p>
                </div>

                <form className="max-w-md mx-auto flex gap-2">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="flex-1 px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <Button type="submit" className="gap-2">
                    Langganan
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground">
                  Kami menghormati privasi Anda. Anda dapat berhenti berlangganan kapan saja.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Research Tab */}
        {activeTab === 'research' && (
          <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <p className="text-muted-foreground">
                  Kami menerbitkan dan mengkurasi penelitian akademik tentang budaya, seni, dan keberlanjutan di Indonesia.
                </p>
              </div>

              <div className="space-y-6">
                {researchPapers.map((paper) => (
                  <Card key={paper.id} className="hover:shadow-lg transition-all overflow-hidden group">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-foreground text-lg group-hover:text-primary transition-colors">
                        {paper.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {paper.authors}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-foreground/70 leading-relaxed">
                        {paper.abstract}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Jurnal</p>
                          <p className="text-foreground">{paper.journal}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Tahun</p>
                          <p className="text-foreground">{paper.year}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Volume</p>
                          <p className="text-foreground text-sm">{paper.volume}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibolic text-muted-foreground uppercase tracking-wide mb-1">Halaman</p>
                          <p className="text-foreground text-sm">{paper.pages}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {paper.keywords.map((keyword) => (
                          <span key={keyword} className="inline-flex text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                            {keyword}
                          </span>
                        ))}
                      </div>

                      <Button variant="outline" size="sm" className="gap-2">
                        Baca Lengkap / PDF
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call for Papers */}
              <div className="mt-16 bg-primary/10 p-8 rounded-lg text-center space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Kirimkan Penelitian Anda</h2>
                  <p className="text-muted-foreground">
                    Dapatkan artikel, refleksi, publikasi penelitian, dokumentasi pengetahuan, dan kabar terbaru dari ekosistem Afternuun langsung ke email Anda.
                  </p>
                </div>

                <Button size="lg" className="gap-2">
                  Panduan Kontribusi
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}

export default function Risalah() {
  return <RisalahContent />
}
