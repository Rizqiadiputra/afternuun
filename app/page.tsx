'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BookOpen, Users, Image } from 'lucide-react'
import NextImage from 'next/image'

const programs = [
  {
    icon: BookOpen,
    title: 'Nuun Archive Project',
    description: 'Digitalisasi dan publikasi arsip, dokumentasi naskah, foto, dan video, serta perekaman sejarah lisan lintas generasi.',
    href: '/risalah',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800'
  },
  {
    icon: Users,
    title: 'Afternuun School',
    description: 'Pendidikan nonformal lintas disiplin melalui kelas, lokakarya, mentoring, residensi, dan forum pengetahuan.',
    href: '/khazanah',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800'
  },
  {
    icon: Image,
    title: 'Creative Lab & Network',
    description: 'Produksi kolaboratif lintas generasi, jejaring kampus, lembaga budaya, dan media, serta koneksi ke ekosistem kreatif nasional dan internasional.',
    href: '/kenduri',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800'
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
              src="https://res.cloudinary.com/rizqiadiputra/image/upload/w_1600,q_auto,f_auto/v1780311509/IMG_0109_o6a4pd.jpg"
              alt="Hero Banner"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center w-full">
            <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-6">
              Afternuun <span className="text-primary">Yogyakarta</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Rumah Keberlanjutan Ekosistem Sanggar Nuun.
            </p>
            <p className="text-balance text-lg text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
              Keberlanjutan sebuah tradisi tidak dapat hanya bergantung pada ingatan, romantisme sejarah, atau pergantian generasi yang alamiah. Afternuun lahir sebagai ruang yang secara sengaja dirancang untuk merawat dan mewariskannya.
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

        {/* Agenda Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground mb-4">
                Agenda
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Jelajahi kelas, workshop, acara, dan pameran budaya terbaru kami
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Khazanah Preview */}
              <Link href="/khazanah">
                <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary overflow-hidden group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <NextImage
                      src="https://images.unsplash.com/photo-1503095396549-807759245b35?w=800"
                      alt="Workshop Keaktoran"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                      Workshop Keaktoran
                    </CardTitle>
                    <CardDescription>
                      Pelajari teknik keaktoran, improvisasi, dan pengekspresian diri melalui seni pertunjukan bersama instruktur berpengalaman.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full gap-2">
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
                      alt="Festival Seni"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                      Festival Seni: Lintas Generasi
                    </CardTitle>
                    <CardDescription>
                      Festival seni tiga hari dengan pertunjukan wayang, tari, musik gamelan, dan pameran karya kontemporer.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      Lihat Semua Acara
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground mb-4">
                Program Unggulan
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tiga mesin penggerak ekosistem Afternuun yang saling terhubung dan saling menguatkan.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
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



        {/* CTA Section */}
        <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Bergabunglah dengan Komunitas Kami
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Afternuun adalah ruang yang hanya dapat hidup apabila dirawat bersama. Pilih peran Anda dalam ekosistem ini: berkarya, berbagi memori, menjadi mentor, mengarsipkan, membuka jejaring, atau mengelola program.
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
