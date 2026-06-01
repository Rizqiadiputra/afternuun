'use client'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Users, ArrowRight, Search, Archive } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { khazanahClasses, archiveItems } from '@/data/khazanah-classes'

const aboutKhazanah = {
  paragraphs: [
    'Khazanah adalah ruang pengetahuan Afternuun yang menghimpun pengalaman, praktik artistik, dokumentasi, arsip, dan pembelajaran budaya lintas generasi.',
    'Kami percaya bahwa seni dan kebudayaan tidak hanya diwariskan melalui karya, tetapi juga melalui pengetahuan, pengalaman, percakapan, dan memori yang terus hidup. Karena itu, Khazanah hadir sebagai ruang belajar bersama untuk merawat sekaligus mengembangkan warisan pengetahuan budaya bagi generasi yang akan datang.',
  ]
}
const classes = khazanahClasses
const categories = ['Semua', ...new Set(classes.map(c => c.category))]

function KhazanahContent() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredClasses = classes.filter(cls => {
    const matchesCategory = selectedCategory === 'Semua' || cls.category === selectedCategory
    const matchesSearch = cls.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cls.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getSlug = (title: string) => {
    return title.toLowerCase().replace(/[&\s]/g, '-').replace(/-+/g, '-')
  }

  return (
    <>
      <Navigation />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-96 bg-gradient-to-b from-primary/20 to-background px-4 py-20 sm:px-6 lg:px-8 flex items-center">
          <div className="mx-auto max-w-4xl text-center w-full">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Khazanah
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Merawat Pengetahuan, Menghidupkan Pembelajaran
            </p>
          </div>
        </section>

        {/* About Khazanah Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Tentang Khazanah</h2>
            <div className="space-y-6">
              {aboutKhazanah.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Archive & Documentation Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-background border-t border-border">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Arsip & Dokumentasi
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-16">
              Selain menghadirkan ruang belajar, Khazanah juga menjadi wadah pengembangan arsip dan dokumentasi budaya yang bertujuan menjaga pengetahuan, pengalaman, dan memori kolektif agar dapat diwariskan kepada generasi berikutnya.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {archiveItems.map((item) => (
                <Card key={item.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Archive className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-center text-foreground">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-center text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-6 text-center">
                      <span className="inline-flex px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                        Segera Hadir
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <h3 className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mt-12 pt-12 border-t border-b border-border pb-12">
              Selain merawat arsip dan pengetahuan, Khazanah juga menghidupkan tradisi belajar bersama melalui berbagai kelas, lokakarya, dan forum pembelajaran yang terbuka bagi publik.
            </h3>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="px-4 py-8 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Afternuun School: Kelas & Workshop
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-16">
              Ruang Belajar dan Berbagi Pengetahuan Seni-Budaya Lintas Generasi.
            </p>
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Cari kelas atau workshop..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Category Filter */}
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

        {/* Classes Grid */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {filteredClasses.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-8">
                  Menampilkan {filteredClasses.length} dari {classes.length} kelas
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredClasses.map((cls) => (
                    <Link key={cls.id} href={`/khazanah/${getSlug(cls.title)}`}>
                      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow overflow-hidden cursor-pointer group">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={cls.image}
                            alt={cls.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <span className="inline-flex text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {cls.category}
                            </span>
                            <span className="inline-flex text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded-full">
                              {cls.level}
                            </span>
                          </div>
                          <CardTitle className="text-foreground text-lg line-clamp-2 group-hover:text-primary transition-colors">{cls.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-4">
                          <CardDescription className="text-foreground/70 leading-relaxed">
                            {cls.description}
                          </CardDescription>

                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{cls.schedule}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{cls.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              <span>{cls.participants} peserta</span>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-border">
                            <p className="text-sm font-medium text-foreground">Mentor: {cls.instructor}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">Tidak ada kelas yang sesuai dengan pencarian Anda.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Menjadi Bagian dari Khazanah
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Khazanah tumbuh melalui kontribusi banyak pihak. Anda dapat berpartisipasi sebagai mentor, fasilitator, peneliti, dokumentator, maupun penggerak program pembelajaran dan pengarsipan budaya.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Mari berbagi pengetahuan, pengalaman, dan praktik kebudayaan bersama ekosistem Afternuun.
            </p>
            <Button size="lg" className="gap-2">
              Bergabung dengan Khazanah
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default function Khazanah() {
  return <KhazanahContent />
}
