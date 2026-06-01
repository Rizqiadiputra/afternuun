'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageCircle, Heart, Share2, ArrowRight, Users, TrendingUp, Plus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const discussions = [
  {
    id: 1,
    author: 'Siti Nurhaliza',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    title: 'Bagaimana Cara Melestarikan Batik Tulis di Era Digital?',
    content: 'Saya ingin berbagi pengalaman tentang tantangan melestarikan keahlian batik tulis tradisional sambil mengadaptasi tren pasar modern. Ada yang ingin berbagi strategi?',
    category: 'Diskusi',
    replies: 24,
    likes: 156,
    views: 1230,
    date: '2 hari lalu',
    tags: ['Batik', 'Kerajinan', 'Tradisi']
  },
  {
    id: 2,
    author: 'Bambang Sutejo',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    title: 'Open Call: Kolaborasi Tari Kontemporer x Musik Tradisional',
    content: 'Saya sedang mencari penari, musisi, dan choreographer untuk project kolaborasi yang menggabungkan gerakan tari modern dengan instrumen gamelan tradisional.',
    category: 'Open Call',
    replies: 8,
    likes: 92,
    views: 567,
    date: '1 minggu lalu',
    tags: ['Tari', 'Musik', 'Kolaborasi']
  },
  {
    id: 3,
    author: 'Dr. Agus Triyanto',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    title: 'Penelitian: Peran Komunitas dalam Pelestarian Budaya Lokal',
    content: 'Saya melakukan penelitian tentang kontribusi komunitas grassroot dalam melestarikan dan mengembangkan budaya lokal. Siapa yang ingin berbagi cerita atau mengikuti focus group discussion?',
    category: 'Penelitian',
    replies: 5,
    likes: 78,
    views: 432,
    date: '2 minggu lalu',
    tags: ['Penelitian', 'Budaya', 'Komunitas']
  },
  {
    id: 4,
    author: 'Pak Haryo',
    avatar: 'https://images.unsplash.com/photo-1552058544-f6b08d0a6dba?w=100&h=100&fit=crop',
    title: 'Tips & Trik: Mengajar Gamelan untuk Generasi Muda',
    content: 'Berbagi tips tentang bagaimana membuat pembelajaran gamelan menjadi menarik dan relevan bagi generasi digital native. Apa strategi Anda?',
    category: 'Tips',
    replies: 18,
    likes: 134,
    views: 892,
    date: '3 minggu lalu',
    tags: ['Gamelan', 'Pendidikan', 'Pembelajaran']
  },
  {
    id: 5,
    author: 'Prof. Wawan Setiawan',
    avatar: 'https://images.unsplash.com/photo-1519345291446-c1400ca199e3?w=100&h=100&fit=crop',
    title: 'Open Call: Desa Wisata Budaya - Dokumentasi dan Penelitian',
    content: 'Kami membuka kesempatan untuk fotografer, videografer, dan peneliti yang ingin mendokumentasikan kehidupan budaya di desa-desa wisata tradisional.',
    category: 'Open Call',
    replies: 12,
    likes: 145,
    views: 1050,
    date: '1 bulan lalu',
    tags: ['Dokumentasi', 'Desa Wisata', 'Penelitian']
  },
  {
    id: 6,
    author: 'Komunitas Seni Lokal',
    avatar: 'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=100&h=100&fit=crop',
    title: 'Pengalaman: Membangun Komunitas Seni dari Nol',
    content: 'Cerita kami membangun komunitas seni dari scratch, menghadapi tantangan, dan menciptakan ekosistem yang berkelanjutan. Bagaimana pengalaman Anda?',
    category: 'Pengalaman',
    replies: 31,
    likes: 267,
    views: 2145,
    date: '1 bulan lalu',
    tags: ['Komunitas', 'Ekosistem', 'Keberlanjutan']
  }
]

const categories = ['Semua', 'Diskusi', 'Open Call', 'Penelitian', 'Tips', 'Pengalaman']


function RuangSrawungContent() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')

  const filteredDiscussions = discussions.filter(d =>
    selectedCategory === 'Semua' || d.category === selectedCategory
  )

  return (
    <>
      <Navigation />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/20 to-background px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Ruang Srawung Komunitas
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Forum diskusi, berbagi pengalaman, kolaborasi, dan ajuan terbuka dari komunitas Afternuun.
            </p>
            <Button size="lg" className="gap-2">
              Mulai Diskusi Baru
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1,234</div>
                <p className="text-muted-foreground">Anggota Komunitas Aktif</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">486</div>
                <p className="text-muted-foreground">Diskusi & Topik</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2,841</div>
                <p className="text-muted-foreground">Tanggapan & Kontribusi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="px-4 py-8 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Discussions List */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-6">
            {filteredDiscussions.map((discussion) => (
              <Card
                key={discussion.id}
                className="hover:shadow-lg transition-all overflow-hidden cursor-pointer group hover:border-primary/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="relative h-12 w-12 flex-shrink-0 rounded-full overflow-hidden">
                        <Image
                          src={discussion.avatar}
                          alt={discussion.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{discussion.author}</p>
                        <p className="text-sm text-muted-foreground">{discussion.date}</p>
                      </div>
                    </div>
                    <span className="inline-flex text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full flex-shrink-0">
                      {discussion.category}
                    </span>
                  </div>

                  <CardTitle className="text-foreground text-xl group-hover:text-primary transition-colors">
                    {discussion.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-foreground/70 leading-relaxed">
                    {discussion.content}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {discussion.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex text-xs font-medium bg-muted px-3 py-1 rounded-full text-muted-foreground hover:bg-muted/80 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <button className="flex items-center gap-2 hover:text-primary transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span>{discussion.replies}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Heart className="h-4 w-4" />
                        <span>{discussion.likes}</span>
                      </button>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        <span>{discussion.views} views</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      Lihat Diskusi
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-muted/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Panduan Komunitas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Hormati Keberagaman',
                  description: 'Kami menghormati berbagai perspektif, budaya, dan latar belakang. Berkontribusi dengan terbuka dan inklusif.'
                },
                {
                  title: 'Berbagi Pengetahuan',
                  description: 'Bagikan pengalaman, tips, pembelajaran, dan riset Anda untuk memperkaya komunitas bersama.'
                },
                {
                  title: 'Kolaborasi Positif',
                  description: 'Mari bekerja sama, saling mendukung, dan membangun ekosistem budaya yang berkelanjutan.'
                },
                {
                  title: 'Jujur dan Transparan',
                  description: 'Komunikasi yang jujur dan transparan adalah fondasi kepercayaan dalam komunitas kami.'
                }
              ].map((guideline, idx) => (
                <Card key={idx} className="bg-background">
                  <CardHeader>
                    <CardTitle className="text-lg">{guideline.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{guideline.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Bergabung dengan Komunitas Kami
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Jadilah bagian dari gerakan kolektif yang membangun ekosistem budaya Indonesia yang kuat dan berkelanjutan.
            </p>
            <Button size="lg" className="gap-2">
              Daftar Sekarang
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default function RuangSrawung() {
  return <RuangSrawungContent />
}
