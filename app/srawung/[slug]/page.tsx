'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User, Calendar, ArrowLeft, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const discussions = [
  {
    id: 1,
    slug: 'preservasi-seni-tradisional-di-era-digital',
    title: 'Preservasi Seni Tradisional di Era Digital',
    description: 'Bagaimana kita dapat memanfaatkan teknologi digital untuk melestarikan seni tradisional tanpa kehilangan autentisitasnya?',
    date: '25 Juni 2024',
    author: 'Komunitas Afternuun',
    participants: 23,
    fullDescription: 'Forum diskusi ini mengeksplorasi tantangan dan peluang dalam melestarikan seni tradisional menggunakan teknologi digital. Peserta diskusi berbagi pengalaman tentang bagaimana digital documentation, virtual exhibitions, dan online communities dapat membantu dalam preservasi budaya. Diskusi juga menyentuh isu-isu seputar copyright, intellectual property, dan bagaimana komunitas tradisional dapat mengontrol narasi tentang seni mereka di platform digital.'
  },
  {
    id: 2,
    slug: 'membangun-ekosistem-seni-yang-inklusif',
    title: 'Membangun Ekosistem Seni yang Inklusif',
    description: 'Bagaimana kita memastikan bahwa ekosistem seni lokal dapat diakses oleh semua orang, terlepas dari latar belakang ekonomi mereka?',
    date: '20 Juni 2024',
    author: 'Tim Srawung',
    participants: 18,
    fullDescription: 'Diskusi ini berfokus pada aksesibilitas dalam seni dan budaya. Peserta membicarakan tentang program subsidi untuk peserta pendidikan seni, strategi pricing yang adil, dan bagaimana komunitas dapat menciptakan ruang yang welcoming bagi semua orang. Isu-isu seperti representasi di dalam komunitas seni, diversity dalam kepemimpinan, dan bagaimana melayani komunitas yang lebih luas juga menjadi bagian dari diskusi.'
  },
  {
    id: 3,
    slug: 'kolaborasi-internasional-seni-budaya',
    title: 'Kolaborasi Internasional dalam Seni & Budaya',
    description: 'Apa saja peluang dan tantangan dalam berkolaborasi dengan seniman dan komunitas dari negara lain?',
    date: '15 Juni 2024',
    author: 'Komunitas Global Afternuun',
    participants: 31,
    fullDescription: 'Forum ini mengumpulkan pengalaman dari berbagai kolaborasi internasional dalam bidang seni dan budaya. Peserta berbagi best practices, tantangan komunikasi lintas budaya, dan bagaimana mengelola ekspektasi yang berbeda dalam kolaborasi global. Topik termasuk cultural exchange programs, international exhibitions, dan bagaimana membangun bridges antara seniman dari berbagai belahan dunia sambil tetap menghormati konteks lokal.'
  },
  {
    id: 4,
    slug: 'mendokumentasikan-pengetahuan-tradisional',
    title: 'Mendokumentasikan Pengetahuan Tradisional',
    description: 'Metode dan etika dalam mendokumentasikan serta mengarsipkan pengetahuan tradisional komunitas lokal',
    date: '10 Juni 2024',
    author: 'Tim Arsip Budaya',
    participants: 16,
    fullDescription: 'Diskusi mendalam tentang metode dokumentasi yang etis dan efektif untuk pengetahuan tradisional. Peserta membahas tentang community ownership of knowledge, consent dalam dokumentasi, dan bagaimana teknologi dapat membantu dalam proses pengarsipan. Isu-isu hukum seperti intellectual property rights untuk traditional knowledge juga menjadi fokus dalam diskusi ini.'
  },
  {
    id: 5,
    slug: 'funding-dan-sustainability-komunitas-seni',
    title: 'Funding dan Sustainability dalam Komunitas Seni',
    description: 'Strategi pendanaan jangka panjang untuk memastikan keberlanjutan komunitas seni lokal',
    date: '5 Juni 2024',
    author: 'Forum Keberlanjutan',
    participants: 27,
    fullDescription: 'Forum ini memberikan ruang untuk komunitas seni berbagi strategi finansial mereka. Peserta membahas tentang grant writing, crowdfunding, social enterprise models, dan bagaimana diversifikasi revenue streams. Juga dibahas tentang sustainability yang bukan hanya finansial, tetapi juga sosial dan environmental sustainability dalam konteks komunitas seni.'
  },
  {
    id: 6,
    slug: 'pendidikan-seni-dan-relevansinya',
    title: 'Pendidikan Seni dan Relevansinya di Era Kontemporer',
    description: 'Bagaimana pendidikan seni dapat disesuaikan untuk memenuhi kebutuhan kontemporer tanpa melupakan warisan tradisional?',
    date: '1 Juni 2024',
    author: 'Komunitas Pendidik Seni',
    participants: 22,
    fullDescription: 'Diskusi tentang reformasi dan inovasi dalam pendidikan seni. Peserta berbagi pengalaman mengajar seni dengan pendekatan yang kontekstual dan relevant. Topik termasuk curriculum development, assessment methods yang tidak hanya berbasis angka, dan bagaimana mempersiapkan siswa untuk karir yang dinamis di bidang seni.'
  }
]

export default function DiscussionDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const discussion = discussions.find(d => d.slug === slug)
  
  if (!discussion) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Diskusi Tidak Ditemukan</h1>
            <p className="text-muted-foreground mb-8">Maaf, diskusi yang Anda cari tidak tersedia.</p>
            <Link href="/srawung">
              <Button className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Srawung
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const comments = [
    {
      id: 1,
      author: 'Siti Nurhaliza',
      date: '25 Juni 2024, 14:30',
      content: 'Sangat setuju dengan poin tentang digital documentation. Kami telah mencoba menggunakan virtual exhibitions dan hasilnya cukup promising untuk menjangkau audiens yang lebih luas.'
    },
    {
      id: 2,
      author: 'Bambang Sutejo',
      date: '26 Juni 2024, 09:15',
      content: 'Menarik untuk dipikirkan tentang authentic representation. Bagaimana menurut kalian cara terbaik untuk melibatkan community dalam proses dokumentasi agar mereka merasa ownership-nya?'
    },
    {
      id: 3,
      author: 'Dr. Agus Triyanto',
      date: '27 Juni 2024, 16:45',
      content: 'Dari perspektif research, kunci adalah transparency dan respect terhadap intellectual property komunitas. Dokumentasi harus menjadi proses kolaboratif, bukan extractive.'
    }
  ]

  return (
    <>
      <Navigation />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/20 to-background px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link href="/srawung">
              <Button variant="outline" size="sm" className="mb-6 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Srawung
              </Button>
            </Link>

            <h1 className="text-4xl font-bold text-foreground mb-4 sm:text-5xl">
              {discussion.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{discussion.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{discussion.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>{discussion.participants} peserta</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="border-primary/20 mb-12">
              <CardHeader>
                <CardTitle className="text-foreground">Tentang Diskusi Ini</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  {discussion.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Komentar & Partisipasi</h2>
                
                <div className="space-y-4 mb-8">
                  {comments.map((comment) => (
                    <Card key={comment.id} className="border-primary/20">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold text-foreground">{comment.author}</p>
                            <p className="text-sm text-muted-foreground">{comment.date}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 leading-relaxed">
                          {comment.content}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Button size="lg" className="w-full gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Ikut Diskusi
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
