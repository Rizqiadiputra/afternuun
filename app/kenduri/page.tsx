'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Ticket, Users, ArrowRight, Filter } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const events = [
  {
    id: 1,
    title: 'Malam Baca Puisi & Peluncuran Buku',
    description: 'Acara sastra dengan pembacaan puisi dari penulis lokal dan peluncuran buku-buku baru yang menggali tema-tema budaya dan sejarah.',
    type: 'Sastra',
    date: '15 Juli 2026',
    time: '19:00 - 21:00',
    location: 'Yogyakarta',
    price: 'Gratis',
    capacity: 150,
    registered: 98,
    image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=800'
  },
  {
    id: 2,
    title: 'Konser Musik Tradisi Nusantara',
    description: 'Pertunjukan musik yang menampilkan instrumen tradisional dari berbagai wilayah Indonesia, dari Aceh hingga Papua.',
    type: 'Musik',
    date: '22 Juli 2026',
    time: '18:00 - 21:00',
    location: 'Yogyakarta',
    price: 'Rp 75.000',
    capacity: 300,
    registered: 245,
    image: 'https://images.unsplash.com/photo-1470019693664-1d202d2c0401?w=800'
  },
  {
    id: 3,
    title: 'Pameran Seni Rupa Lintas Generasi',
    description: 'Pameran yang menampilkan karya seniman dari berbagai generasi, memperlihatkan dialog antara tradisional dan kontemporer dalam seni rupa.',
    type: 'Seni Rupa',
    date: '1 Agustus 2026',
    time: '10:00 - 18:00',
    location: 'Yogyakarta',
    price: 'Gratis',
    capacity: 'Unlimited',
    registered: 567,
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800'
  },
  {
    id: 4,
    title: 'Festival Teater Kampus & Komunitas',
    description: 'Festival teater yang menghadirkan pertunjukan dari grup teater kampus dan komunitas independen, menampilkan kreativitas generasi muda.',
    type: 'Teater',
    date: '10 Agustus 2026',
    time: '19:00 - 23:00',
    location: 'Yogyakarta',
    price: 'Rp 50.000',
    capacity: 250,
    registered: 189,
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800'
  },
  {
    id: 5,
    title: 'Pemutaran Film Dokumenter Budaya',
    description: 'Seri pemutaran film dokumenter tentang pelestarian budaya, diikuti dengan diskusi bersama pembuat film dan tokoh budaya.',
    type: 'Media',
    date: '20 Agustus 2026',
    time: '19:00 - 21:30',
    location: 'Yogyakarta',
    price: 'Rp 30.000',
    capacity: 120,
    registered: 94,
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800'
  }
]

const eventTypes = ['Semua', ...new Set(events.map(e => e.type))]


function KenduriContent() {
  const [selectedType, setSelectedType] = useState('Semua')

  const filteredEvents = events.filter(event =>
    selectedType === 'Semua' || event.type === selectedType
  )

  return (
    <>
      <Navigation />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/20 to-background px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Kenduri
            </h1>
            <p className="text-xl text-muted-foreground">
              Acara, Pameran, dan Perayaan Karya
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="px-4 py-8 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedType === type
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {filteredEvents.length > 0 ? (
              <div className="space-y-6">
                {filteredEvents.map((event) => {
                  const isSoldOut = event.capacity !== 'Unlimited' && event.registered >= (typeof event.capacity === 'number' ? event.capacity : 0)
                  return (
                    <Card
                      key={event.id}
                      className="hover:shadow-lg transition-all overflow-hidden md:flex group"
                    >
                      <div className="relative h-48 w-full md:h-auto md:w-80 flex-shrink-0 overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                            {event.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col w-full">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-foreground text-xl group-hover:text-primary transition-colors">
                            {event.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4 flex-1">
                          <CardDescription className="text-foreground/70 leading-relaxed">
                            {event.description}
                          </CardDescription>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4 flex-shrink-0" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="h-4 w-4 flex-shrink-0" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4 flex-shrink-0" />
                              <span className="line-clamp-1">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="h-4 w-4 flex-shrink-0" />
                              <span>
                                {event.registered} {event.capacity !== 'Unlimited' ? `dari ${event.capacity}` : ''}
                              </span>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-border flex items-center justify-between">
                            <div>
                              <p className="text-sm text-muted-foreground">Harga</p>
                              <p className="text-lg font-semibold text-primary">{event.price}</p>
                            </div>
                            <Button
                              className="gap-2"
                              disabled={isSoldOut}
                              variant={isSoldOut ? 'secondary' : 'default'}
                            >
                              {isSoldOut ? 'Penuh' : 'Pesan Tiket'}
                              {!isSoldOut && <Ticket className="h-4 w-4" />}
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">Tidak ada acara dalam kategori ini.</p>
              </div>
            )}
          </div>
        </section>

        {/* Gallery Section Preview */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Galeri Acara Kami
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                'https://images.unsplash.com/photo-1514306688772-87c333ba84e1?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1503853585528-48b4efb9d4d5?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop',
              ].map((img, idx) => (
                <div key={idx} className="relative h-48 overflow-hidden rounded-lg group cursor-pointer">
                  <Image
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ingin Menyelenggarakan Acara?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kami membuka kesempatan kolaborasi untuk menyelenggarakan festival, pameran, workshop, dan acara budaya bersama.
            </p>
            <Button size="lg" className="gap-2">
              Hubungi Kami
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

// Add missing import
import { Clock } from 'lucide-react'

export default function Kenduri() {
  return <KenduriContent />
}
