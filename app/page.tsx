'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BookOpen, Users, Image, Zap } from 'lucide-react'
import NextImage from 'next/image'

const programs = [
  {
    icon: BookOpen,
    title: 'Arsip & Dokumentasi',
    description: 'Merawat ingatan kolektif melalui pengumpulan arsip, dokumentasi karya, cerita, foto, rekaman, dan sejarah komunitas agar tidak hilang oleh waktu.',
    href: '/kegiatan',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800'
  },
  {
    icon: Users,
    title: 'Program & Pendidikan',
    description: 'Menyelenggarakan forum belajar, diskusi, workshop, residensi, dan ruang pembelajaran seni-budaya bagi generasi muda.',
    href: '/kegiatan',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800'
  },
  {
    icon: Image,
    title: 'Produksi & Jejaring',
    description: 'Memfasilitasi produksi karya, pameran, festival, kolaborasi, dan jejaring dengan komunitas, kampus, sekolah, dan lembaga budaya.',
    href: '/galeri',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800'
  },
  {
    icon: Zap,
    title: 'Pendanaan & Keberlanjutan',
    description: 'Mengembangkan model pendanaan, donasi, publikasi, merchandise, hibah, dan unit usaha sosial untuk menjaga keberlanjutan gerakan.',
    href: '/donasi',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800'
  }
]

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-black px-4 py-20 sm:px-6 lg:px-8 flex items-center">
          <div className="absolute inset-0 z-0">
            <NextImage
              src="https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?w=1600"
              alt="Hero Banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center w-full">
            <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-6">
              Afternuun <span className="text-primary">Indonesia</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ruang kolektif lintas generasi untuk seni, pengetahuan, arsip, dan keberlanjutan.
            </p>
            <p className="text-balance text-lg text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
              Afternuun Indonesia hadir sebagai rumah bersama bagi seniman, pelajar, peneliti, budayawan, alumni, dan komunitas yang ingin menjaga ingatan, membangun pengetahuan, serta menciptakan masa depan kebudayaan Indonesia.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/perihal-kami">
                <Button size="lg" className="gap-2">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dukungan">
                <Button size="lg" variant="outline">
                  Dukung Kami
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground mb-4">
                Program Kami
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ekosistem yang mempertemukan generasi, pengalaman, dan gagasan untuk membangun masa depan budaya Indonesia bersama.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => {
                const Icon = program.icon
                return (
                  <Link key={program.title} href={program.href}>
                    <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary overflow-hidden">
                      <div className="relative h-48 w-full overflow-hidden">
                        <NextImage
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <Icon className="h-10 w-10 text-primary mb-2" />
                        <CardTitle className="text-foreground">{program.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {program.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Sorotan Agenda Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground mb-4">
                Sorotan Agenda
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Jelajahi kelas, workshop, acara, dan pameran budaya terbaru kami
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {/* Khazanah Preview */}
              <Link href="/khazanah">
                <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary overflow-hidden group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <NextImage
                      src="https://images.unsplash.com/photo-1514306688772-87c333ba84e1?w=600"
                      alt="Wayang Kulit Kelas"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                      Wayang Kulit: Seni Pertunjukan Tradisional Jawa
                    </CardTitle>
                    <CardDescription>
                      Pelajari seni pertunjukan wayang kulit tradisional Jawa dari Ki Suradji, setiap Jumat malam.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="gap-2">
                      Lihat Semua Kelas
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              {/* Kenduri Preview */}
              <Link href="/kenduri">
                <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary overflow-hidden group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <NextImage
                      src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600"
                      alt="Festival Seni Jawa"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                      Festival Seni Jawa: Lintas Generasi
                    </CardTitle>
                    <CardDescription>
                      Festival seni tiga hari dengan pertunjukan wayang, tari, musik gamelan, dan pameran karya kontemporer.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="gap-2">
                      Lihat Semua Acara
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/khazanah">
                <Button size="lg" variant="secondary" className="gap-2 mr-4">
                  Jelajahi Khazanah
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/kenduri">
                <Button size="lg" variant="secondary" className="gap-2">
                  Jelajahi Kenduri
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Bergabunglah dengan Komunitas Kami
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kami mengundang Anda untuk menjadi bagian dari gerakan kolektif yang merawat, mempelajari, dan menciptakan budaya Indonesia yang berkelanjutan.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/kontak">
                <Button size="lg" className="gap-2">
                  Hubungi Kami
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dukungan">
                <Button size="lg" variant="outline">
                  Dukung Kami
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
