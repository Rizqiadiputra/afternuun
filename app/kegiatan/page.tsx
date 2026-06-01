'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import { Calendar, Users, BookOpen } from 'lucide-react'
import Image from 'next/image'

const activities = [
  {
    id: 1,
    title: 'Workshop Seni Rupa Kontemporer',
    category: 'Workshop',
    date: '15 Juni 2024',
    description: 'Belajar teknik seni rupa kontemporer bersama seniman profesional dengan fokus pada eksplorasi media dan konsep kreatif.',
    program: 'Program & Pendidikan',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'
  },
  {
    id: 2,
    title: 'Pameran "Memori Kolektif"',
    category: 'Pameran',
    date: '20 Juni - 5 Juli 2024',
    description: 'Pameran karya seni dari berbagai seniman lokal yang mengeksplorasi tema ingatan, identitas, dan warisan budaya.',
    program: 'Produksi & Jejaring',
    image: 'https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=800'
  },
  {
    id: 3,
    title: 'Diskusi Publik: Masa Depan Kebudayaan Digital',
    category: 'Seminar',
    date: '22 Juni 2024',
    description: 'Dialog terbuka tentang bagaimana teknologi digital mengubah cara kita menciptakan, mendokumentasikan, dan berbagi budaya.',
    program: 'Program & Pendidikan',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800'
  },
  {
    id: 4,
    title: 'Residensi Seniman Internasional',
    category: 'Residensi',
    date: 'Juli - Agustus 2024',
    description: 'Program residensi untuk seniman internasional yang ingin berkolaborasi dan belajar tentang seni-budaya Indonesia.',
    program: 'Produksi & Jejaring',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800'
  },
  {
    id: 5,
    title: 'Pelatihan Dokumentasi Arsip Digital',
    category: 'Workshop',
    date: '1-3 Juli 2024',
    description: 'Workshop intensif tentang cara mengarsipkan dan mendokumentasikan karya seni secara digital dengan standar profesional.',
    program: 'Arsip & Dokumentasi',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800'
  },
  {
    id: 6,
    title: 'Kunjungan Komunitas ke Studio Seniman',
    category: 'Kunjungan',
    date: '10 Juli 2024',
    description: 'Kesempatan untuk mengunjungi studio seniman lokal dan mempelajari proses kreatif mereka secara langsung.',
    program: 'Produksi & Jejaring',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800'
  },
  {
    id: 7,
    title: 'Festival Seni Lintas Generasi',
    category: 'Festival',
    date: '19-26 Juli 2024',
    description: 'Perayaan seni yang melibatkan seniman muda dan senior, menampilkan pertunjukan, instalasi, dan karya interaktif.',
    program: 'Produksi & Jejaring',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=800'
  },
  {
    id: 8,
    title: 'Forum Diskusi: Pendanaan Budaya',
    category: 'Seminar',
    date: '5 Agustus 2024',
    description: 'Dialog tentang strategi pendanaan dan keberlanjutan untuk organisasi dan inisiatif budaya independen.',
    program: 'Pendanaan & Keberlanjutan',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
  }
]

const categories = ['Semua', 'Workshop', 'Pameran', 'Seminar', 'Residensi', 'Festival', 'Kunjungan']

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Workshop':
    case 'Pelatihan':
      return <BookOpen className="h-5 w-5" />
    case 'Seminar':
    case 'Diskusi':
      return <Users className="h-5 w-5" />
    default:
      return <Calendar className="h-5 w-5" />
  }
}

export default function Kegiatan() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')

  const filteredActivities = selectedCategory === 'Semua'
    ? activities
    : activities.filter(activity => activity.category === selectedCategory)

  return (
    <>
      <Navigation />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Kegiatan & Program
            </h1>
            <p className="text-xl text-muted-foreground">
              Jelajahi berbagai kegiatan, workshop, pameran, dan program pembelajaran kami
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wide">Filter Kategori</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredActivities.map((activity) => (
                <Card key={activity.id} className="flex flex-col border-primary/20 hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {getCategoryIcon(activity.category)}
                        {activity.category}
                      </span>
                    </div>
                    <CardTitle className="text-foreground">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div className="space-y-3 text-sm">
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {activity.date}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {activity.description}
                      </p>
                      <p className="text-xs font-medium text-primary bg-primary/10 inline-block px-2 py-1 rounded">
                        {activity.program}
                      </p>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Pelajari Lebih Lanjut
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
