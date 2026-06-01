'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Ticket, Users, ArrowRight, Filter, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const events = [
  {
    id: 1,
    title: 'Malam Baca Puisi & Peluncuran Buku',
    description: 'Acara sastra dengan pembacaan puisi dari penulis lokal dan peluncuran buku-buku baru yang menggali tema-tema budaya dan sejarah.',
    type: 'Sastra',
    date: '15 Juli 2026',
    location: 'Yogyakarta',
    image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=800'
  },
  {
    id: 2,
    title: 'Konser Musik Tradisi Nusantara',
    description: 'Pertunjukan musik yang menampilkan instrumen tradisional dari berbagai wilayah Indonesia, dari Aceh hingga Papua.',
    type: 'Musik',
    date: '22 Juli 2026',
    location: 'Yogyakarta',
    image: 'https://images.unsplash.com/photo-1470019693664-1d202d2c0401?w=800'
  },
  {
    id: 3,
    title: 'Pameran Seni Rupa Lintas Generasi',
    description: 'Pameran yang menampilkan karya seniman dari berbagai generasi, memperlihatkan dialog antara tradisional dan kontemporer dalam seni rupa.',
    type: 'Seni Rupa',
    date: '1 Agustus 2026',
    location: 'Yogyakarta',
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800'
  },
  {
    id: 4,
    title: 'Festival Teater Kampus & Komunitas',
    description: 'Festival teater yang menghadirkan pertunjukan dari grup teater kampus dan komunitas independen, menampilkan kreativitas generasi muda.',
    type: 'Teater',
    date: '10 Agustus 2026',
    location: 'Yogyakarta',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800'
  },
  {
    id: 5,
    title: 'Pemutaran Film Dokumenter Budaya',
    description: 'Seri pemutaran film dokumenter tentang pelestarian budaya, diikuti dengan diskusi bersama pembuat film dan tokoh budaya.',
    type: 'Media & Dokumentasi',
    date: '20 Agustus 2026',
    location: 'Yogyakarta',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800'
  }
]

const eventTypes = ['Semua', ...new Set(events.map(e => e.type))]

const galleryPhotos = [
  'https://images.unsplash.com/photo-1460461603893-e9f3b8db7b14?w=600',
  'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=600',
  'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600',
  'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=600',
  'https://images.unsplash.com/photo-1470019693664-1d202d2c0401?w=600',
  'https://images.unsplash.com/photo-1503095396549-807759245b35?w=600',
]

const galleryVideos = [
  {
    title: 'Dokumentasi Festival Teater 2025',
    duration: '12:34',
    thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600'
  },
  {
    title: 'Konser Musik Tradisi Nusantara',
    duration: '45:20',
    thumbnail: 'https://images.unsplash.com/photo-1460461603893-e9f3b8db7b14?w=600'
  },
  {
    title: 'Workshop Keaktoran — Sesi 1',
    duration: '28:15',
    thumbnail: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=600'
  },
  {
    title: 'Pameran Seni Rupa Lintas Generasi',
    duration: '8:45',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600'
  },
  {
    title: 'Malam Baca Puisi — Dokumentasi',
    duration: '22:10',
    thumbnail: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=600'
  },
  {
    title: 'Kelas Musik Tradisi — Rekaman',
    duration: '35:00',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600'
  }
]


function KenduriContent() {
  const [selectedType, setSelectedType] = useState('Semua')
  const [currentPage, setCurrentPage] = useState(1)
  const [galleryTab, setGalleryTab] = useState<'foto' | 'video'>('foto')
  const [photoSlide, setPhotoSlide] = useState(0)
  const [videoSlide, setVideoSlide] = useState(0)

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
              <>
                <div className="space-y-6 mb-8">
                  {filteredEvents.map((event) => (
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

                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                            <span>{event.date} | {event.location}</span>
                          </div>

                          <div className="pt-4 border-t border-border">
                            <a
                              href="https://loket.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="gap-2">
                                Pesan Tiket
                                <Ticket className="h-4 w-4" />
                              </Button>
                            </a>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mb-12">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50"
                  >
                    ←
                  </button>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 rounded-lg ${
                          currentPage === page
                            ? 'bg-primary text-primary-foreground'
                            : 'border border-border hover:bg-muted'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                    disabled={currentPage === 3}
                    className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50"
                  >
                    →
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">Tidak ada acara dalam kategori ini.</p>
              </div>
            )}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Gallery
            </h2>
            
            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setGalleryTab('foto')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  galleryTab === 'foto'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Foto
              </button>
              <button
                onClick={() => setGalleryTab('video')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  galleryTab === 'video'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Video
              </button>
            </div>

            {/* Foto Tab */}
            {galleryTab === 'foto' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {galleryPhotos.map((img, idx) => (
                    <div key={idx} className="relative h-48 overflow-hidden rounded-lg group cursor-pointer">
                      <Image
                        src={img}
                        alt={`Foto ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Photo Navigation */}
                <div className="flex justify-center gap-4 items-center">
                  <button
                    onClick={() => setPhotoSlide(Math.max(0, photoSlide - 1))}
                    disabled={photoSlide === 0}
                    className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="text-sm text-muted-foreground">
                    Foto {photoSlide + 1} dari {galleryPhotos.length}
                  </span>
                  <button
                    onClick={() => setPhotoSlide(Math.min(galleryPhotos.length - 1, photoSlide + 1))}
                    disabled={photoSlide === galleryPhotos.length - 1}
                    className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Video Tab */}
            {galleryTab === 'video' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {galleryVideos.map((video, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <div className="relative h-48 overflow-hidden rounded-lg group cursor-pointer">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                          <Play className="h-12 w-12 text-white fill-white" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm line-clamp-2">
                          {video.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {video.duration}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Video Navigation */}
                <div className="flex justify-center gap-4 items-center">
                  <button
                    onClick={() => setVideoSlide(Math.max(0, videoSlide - 1))}
                    disabled={videoSlide === 0}
                    className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="text-sm text-muted-foreground">
                    Video {videoSlide + 1} dari {galleryVideos.length}
                  </span>
                  <button
                    onClick={() => setVideoSlide(Math.min(galleryVideos.length - 1, videoSlide + 1))}
                    disabled={videoSlide === galleryVideos.length - 1}
                    className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
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
