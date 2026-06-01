'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Users, MapPin, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'

const classes = [
  {
    id: 1,
    slug: 'workshop-penulisan-kreatif-sastra',
    title: 'Workshop Penulisan Kreatif & Sastra',
    description: 'Belajar teknik penulisan kreatif, storytelling, dan pengembangan gaya menulis sendiri untuk berbagai genre sastra kontemporer.',
    fullDescription: 'Workshop intensif ini dirancang untuk mengajarkan teknik-teknik penulisan kreatif yang digunakan oleh penulis profesional. Peserta akan mempelajari berbagai genre sastra, dari fiksi pendek hingga novel, serta cara mengembangkan gaya penulisan yang unik. Instruktur kami adalah penulis berpengalaman yang telah menerbitkan karya-karya mereka di berbagai platform. Setiap sesi akan mencakup pembahasan teori, praktik menulis, dan umpan balik dari mentor dan sesama peserta.',
    category: 'Sastra',
    instructor: 'Penulis & Sastrawan',
    schedule: 'Setiap Senin & Rabu, 19:00 - 20:30',
    duration: '8 Minggu',
    level: 'Semua Level',
    participants: 16,
    location: 'Yogyakarta',
    price: 'Rp 500.000',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800'
  },
  {
    id: 2,
    slug: 'kelas-musik-tradisi-kontemporer',
    title: 'Kelas Musik Tradisi & Kontemporer',
    description: 'Mendalami musik tradisional Indonesia dan eksplorasi fusion dengan musik kontemporer melalui instrumen dan komposisi.',
    fullDescription: 'Kelas musik ini menawarkan pengalaman mendalam tentang musik tradisional Indonesia dan bagaimana menggabungkannya dengan elemen kontemporer. Peserta akan belajar mengenai berbagai instrumen tradisional, teori musik, dan teknik komposisi. Workshop ini cocok untuk musisi pemula yang ingin memperdalam pengetahuan musik mereka, maupun untuk mereka yang ingin menciptakan fusion yang inovatif. Instruktur adalah musisi profesional dengan pengalaman internasional.',
    category: 'Musik',
    instructor: 'Musisi Profesional',
    schedule: 'Setiap Selasa & Kamis, 18:00 - 19:30',
    duration: '10 Minggu',
    level: 'Pemula',
    participants: 14,
    location: 'Yogyakarta',
    price: 'Rp 750.000',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800'
  },
  {
    id: 3,
    slug: 'studio-seni-rupa-instalasi',
    title: 'Studio Seni Rupa & Instalasi',
    description: 'Eksplorasi berbagai medium seni rupa dari lukisan, patung, hingga instalasi seni interaktif dan kontemporer.',
    fullDescription: 'Studio seni rupa ini menyediakan ruang untuk bereksperimen dengan berbagai medium artistik. Dari cat, patung, hingga media digital, peserta akan menggali potensi kreatif mereka di bawah bimbingan seniman profesional. Kelas ini menekankan pada eksplorasi personal dan pengembangan gaya unik setiap peserta. Kami juga menyediakan akses ke fasilitas studio lengkap dengan berbagai alat dan bahan seni.',
    category: 'Seni Rupa',
    instructor: 'Seniman Rupa',
    schedule: 'Setiap Sabtu, 10:00 - 12:30',
    duration: '12 Minggu',
    level: 'Menengah',
    participants: 18,
    location: 'Yogyakarta',
    price: 'Rp 1.000.000',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800'
  },
  {
    id: 4,
    slug: 'workshop-keaktoran-teater',
    title: 'Workshop Keaktoran & Teater',
    description: 'Pelajari teknik keaktoran, improvisasi, dan pengekspresian diri melalui seni teater dan pertunjukan langsung.',
    fullDescription: 'Workshop teater kami mengajarkan teknik akting klasik dan kontemporer yang digunakan oleh aktor profesional. Peserta akan belajar tentang karakter development, voice control, body language, dan improvisasi. Setiap minggu akan ada latihan praktis dan performance exercises yang dirancang untuk membangun kepercayaan diri dan kemampuan acting. Program ini berakhir dengan pertunjukan akhir di hadapan audiens.',
    category: 'Teater',
    instructor: 'Aktor & Sutradara',
    schedule: 'Setiap Rabu & Jumat, 17:00 - 18:30',
    duration: '10 Minggu',
    level: 'Semua Level',
    participants: 20,
    location: 'Yogyakarta',
    price: 'Rp 600.000',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800'
  },
  {
    id: 5,
    slug: 'kelas-dokumentasi-media-seni',
    title: 'Kelas Dokumentasi & Media Seni',
    description: 'Belajar teknik dokumentasi visual, fotografi, videografi, dan produksi media untuk melestarikan dan mempromosikan karya seni.',
    fullDescription: 'Kelas media seni ini melatih peserta dalam berbagai aspek dokumentasi visual dan produksi media. Dari fotografi dasar hingga videografi profesional, peserta akan belajar teknik-teknik praktis yang dapat langsung diaplikasikan. Kelas ini juga mencakup post-production, editing, dan digital storytelling. Peserta akan membuat proyek dokumentasi akhir yang menampilkan karya seni atau pertunjukan budaya.',
    category: 'Media',
    instructor: 'Sinematografer & Fotografer',
    schedule: 'Setiap Minggu, 19:00 - 21:00',
    duration: '8 Minggu',
    level: 'Pemula',
    participants: 12,
    location: 'Yogyakarta',
    price: 'Rp 800.000',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800'
  }
]

export default function ClassDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const classData = classes.find(c => c.slug === slug)
  
  if (!classData) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Kelas Tidak Ditemukan</h1>
            <p className="text-muted-foreground mb-8">Maaf, kelas yang Anda cari tidak tersedia.</p>
            <Link href="/khazanah">
              <Button className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Khazanah
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      
      <main className="flex flex-col">
        {/* Hero Image */}
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={classData.image}
            alt={classData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link href="/khazanah">
              <Button variant="outline" size="sm" className="mb-6 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Khazanah
              </Button>
            </Link>

            <div className="mb-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2 sm:text-5xl">
                    {classData.title}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {classData.category}
                    </span>
                    <span className="inline-flex text-sm font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full">
                      {classData.level}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {/* Description */}
              <div className="md:col-span-2">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-foreground">Tentang Kelas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      {classData.fullDescription}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Detail Kelas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Jadwal</p>
                        <p className="text-foreground font-medium">{classData.schedule}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-4 border-t border-border">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Durasi</p>
                        <p className="text-foreground font-medium">{classData.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-4 border-t border-border">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Lokasi</p>
                        <p className="text-foreground font-medium">{classData.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-4 border-t border-border">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Peserta</p>
                        <p className="text-foreground font-medium">{classData.participants} orang</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Mentor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground font-medium">{classData.instructor}</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Harga</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">{classData.price}</p>
                    <Button className="w-full">
                      Daftar Sekarang
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
