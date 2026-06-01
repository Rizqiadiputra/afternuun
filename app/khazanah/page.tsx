'use client'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Users, ArrowRight, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const classes = [
  {
    id: 1,
    title: 'Workshop Penulisan Kreatif & Sastra',
    description: 'Belajar teknik penulisan kreatif, storytelling, dan pengembangan gaya menulis sendiri untuk berbagai genre sastra kontemporer.',
    category: 'Sastra',
    instructor: 'Penulis & Sastrawan',
    schedule: 'Setiap Senin & Rabu, 19:00 - 20:30',
    duration: '8 Minggu',
    level: 'Semua Level',
    participants: 16,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800'
  },
  {
    id: 2,
    title: 'Kelas Musik Tradisi & Kontemporer',
    description: 'Mendalami musik tradisional Indonesia dan eksplorasi fusion dengan musik kontemporer melalui instrumen dan komposisi.',
    category: 'Musik',
    instructor: 'Musisi Profesional',
    schedule: 'Setiap Selasa & Kamis, 18:00 - 19:30',
    duration: '10 Minggu',
    level: 'Pemula',
    participants: 14,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800'
  },
  {
    id: 3,
    title: 'Studio Seni Rupa & Instalasi',
    description: 'Eksplorasi berbagai medium seni rupa dari lukisan, patung, hingga instalasi seni interaktif dan kontemporer.',
    category: 'Seni Rupa',
    instructor: 'Seniman Rupa',
    schedule: 'Setiap Sabtu, 10:00 - 12:30',
    duration: '12 Minggu',
    level: 'Menengah',
    participants: 18,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800'
  },
  {
    id: 4,
    title: 'Workshop Keaktoran & Teater',
    description: 'Pelajari teknik keaktoran, improvisasi, dan pengekspresian diri melalui seni teater dan pertunjukan langsung.',
    category: 'Teater',
    instructor: 'Aktor & Sutradara',
    schedule: 'Setiap Rabu & Jumat, 17:00 - 18:30',
    duration: '10 Minggu',
    level: 'Semua Level',
    participants: 20,
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800'
  },
  {
    id: 5,
    title: 'Kelas Dokumentasi & Media Seni',
    description: 'Belajar teknik dokumentasi visual, fotografi, videografi, dan produksi media untuk melestarikan dan mempromosikan karya seni.',
    category: 'Media',
    instructor: 'Sinematografer & Fotografer',
    schedule: 'Setiap Minggu, 19:00 - 21:00',
    duration: '8 Minggu',
    level: 'Pemula',
    participants: 12,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800'
  }
]

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
        <section className="bg-gradient-to-b from-primary/20 to-background px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Khazanah
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Kelas, Workshop, dan Ruang Belajar Seni-Budaya
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="px-4 py-8 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-6xl">
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
              Ingin Menjalankan Kelas Sendiri?
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Kami membuka kesempatan bagi mentor, instruktur, dan pakar budaya untuk menyelenggarakan kelas dan workshop di Khazanah.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Atau ingin mendaftarkan kegiatan seni-budaya Anda agar tampil di Khazanah? Kami membuka ruang bagi komunitas dan individu untuk berbagi program bersama ekosistem Afternuun.
            </p>
            <Button size="lg" className="gap-2">
              Daftarkan Kegiatan
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
