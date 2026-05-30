'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import { Image as ImageIcon, Play } from 'lucide-react'
import NextImage from 'next/image'

const galleryItems = {
  photos: [
    { id: 1, title: 'Pameran Seni Kontemporer 2024', category: 'Pameran', image: 'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?w=600' },
    { id: 2, title: 'Workshop Batik Tradisional', category: 'Workshop', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600' },
    { id: 3, title: 'Diskusi Komunitas Juni 2024', category: 'Diskusi', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600' },
    { id: 4, title: 'Festival Seni Lintas Generasi', category: 'Festival', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600' },
    { id: 5, title: 'Residensi Seniman Internasional', category: 'Residensi', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600' },
    { id: 6, title: 'Kolaborasi dengan Seniman Lokal', category: 'Kolaborasi', image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600' },
    { id: 7, title: 'Pengarsipan Koleksi Komunitas', category: 'Dokumentasi', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600' },
    { id: 8, title: 'Kunjungan Studio Seniman', category: 'Kunjungan', image: 'https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=600' },
    { id: 9, title: 'Instalasi Karya Interaktif', category: 'Pameran', image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600' },
  ],
  videos: [
    { id: 1, title: 'Dokumentasi: Proses Kreatif Seniman', category: 'Dokumentasi', duration: '12:34' },
    { id: 2, title: 'Wawancara: Dialog tentang Budaya Indonesia', category: 'Wawancara', duration: '18:45' },
    { id: 3, title: 'Rekaman: Workshop "Seni & Teknologi"', category: 'Workshop', duration: '45:20' },
    { id: 4, title: 'Behind the Scenes: Pameran Kolektif', category: 'Pameran', duration: '8:15' },
    { id: 5, title: 'Testimoni: Dampak Program Kami', category: 'Testimoni', duration: '6:30' },
    { id: 6, title: 'Live Performance: Festival Seni 2024', category: 'Pertunjukan', duration: '22:50' },
  ]
}

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState('photos')

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
            Galeri
          </h1>
          <p className="text-xl text-muted-foreground">
            Lihat dokumentasi visual dari berbagai kegiatan dan karya kami
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="photos" className="gap-2">
                <ImageIcon className="h-4 w-4" />
                Foto
              </TabsTrigger>
              <TabsTrigger value="videos" className="gap-2">
                <Play className="h-4 w-4" />
                Video
              </TabsTrigger>
            </TabsList>

            {/* Photos Grid */}
            <TabsContent value="photos" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {galleryItems.photos.map((item) => (
                  <Card
                    key={item.id}
                    className="group relative overflow-hidden cursor-pointer hover:shadow-lg transition-all border-primary/20"
                  >
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <NextImage
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 flex items-center justify-center">
                        <button className="bg-white text-primary px-4 py-2 rounded font-medium hover:bg-primary hover:text-white transition-colors">
                          Lihat Foto
                        </button>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Videos Grid */}
            <TabsContent value="videos" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {galleryItems.videos.map((item) => (
                  <Card
                    key={item.id}
                    className="group relative overflow-hidden cursor-pointer hover:shadow-lg transition-all border-primary/20"
                  >
                    {/* Video Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Play className="h-12 w-12 text-primary/40 group-hover:text-primary/60 transition-colors fill-current" />
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 flex items-center justify-center">
                        <button className="bg-white text-primary px-4 py-2 rounded font-medium hover:bg-primary hover:text-white transition-colors">
                          Tonton Video
                        </button>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                        {item.duration}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
