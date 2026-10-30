import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const aboutProgram = {
  paragraphs: [
    'Program adalah ruang perjumpaan Afternuun yang menghadirkan berbagai bentuk produksi, presentasi, dan perayaan karya seni-budaya.',
    'Melalui festival, pertunjukan, pameran, pemutaran film, diskusi, dan berbagai kegiatan lainnya, Program menjadi tempat bertemunya seniman, komunitas, akademisi, dan masyarakat dalam pengalaman budaya yang hidup dan terbuka.'
  ]
}

const galleryPhotos = [
  'https://res.cloudinary.com/rizqiadiputra/image/upload/v1781056354/P1020808_jgketq.png',
  'https://res.cloudinary.com/rizqiadiputra/image/upload/v1781056379/DSC_0054_kg4jvw.jpg',
  'https://res.cloudinary.com/rizqiadiputra/image/upload/v1781056414/IMG_1578_sp3puh.jpg',
  'https://res.cloudinary.com/rizqiadiputra/image/upload/v1780323616/375796_2346906405893_1647036719_2272604_249076703_n_dbdhva.jpg',
  'https://res.cloudinary.com/rizqiadiputra/image/upload/v1780323631/DSC_0973_mmomf0.jpg',
  'https://res.cloudinary.com/rizqiadiputra/image/upload/v1781058561/IMG_0245_ehfczd.jpg',
]

export default function Program() {
  return (
    <>
      <Navigation />

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/20 to-background px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Program
            </h1>
            <p className="text-xl text-muted-foreground">
              Ruang Perjumpaan, Produksi, dan Perayaan Budaya
            </p>
          </div>
        </section>

        {/* About Program Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Tentang Program</h2>
            <div className="space-y-6">
              {aboutProgram.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Agenda</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Agenda berikutnya akan diumumkan melalui Instagram{' '}
              <a
                href="https://instagram.com/afternuun.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @afternuun.id
              </a>
              .
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Dokumentasi Program
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-16">
              Dokumentasi berbagai perjumpaan, pertunjukan, pameran, diskusi, dan peristiwa budaya yang menjadi bagian dari perjalanan Program Afternuun.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryPhotos.map((img, idx) => (
                <div key={img} className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={img}
                    alt={`Dokumentasi kegiatan ${idx + 1}`}
                    fill
                    className="object-cover"
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
            <Link href="/kontak">
              <Button size="lg" className="gap-2">
                Hubungi Kami
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
