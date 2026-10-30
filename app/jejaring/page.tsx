import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const networkActors = [
  'Warga Sanggar Nuun',
  'Seniman & Budayawan',
  'Akademisi',
  'Komunitas Kreatif',
  'Media',
  'Pemerintah',
  'Sektor Swasta',
  'Masyarakat Umum'
]

const collaborationAreas = [
  'Produksi kolaboratif lintas generasi.',
  'Jejaring kampus, lembaga budaya, dan media.',
  'Koneksi ekosistem kreatif nasional dan internasional.'
]

export default function Jejaring() {
  return (
    <>
      <Navigation />

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/20 to-background px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Jejaring
            </h1>
            <p className="text-xl text-muted-foreground">
              Simpul terbuka yang mempertemukan berbagai unsur dalam satu ruang kolaborasi.
            </p>
          </div>
        </section>

        {/* Network Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Simpul Perjumpaan yang Meluas</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Afternuun tidak hanya ditujukan bagi internal warga Sanggar Nuun. Ia dirancang sebagai simpul terbuka, berakar pada perhatian yang sama terhadap seni dan kebudayaan.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {networkActors.map((actor) => (
                <span key={actor} className="rounded-full border border-border px-4 py-2 text-sm text-foreground">
                  {actor}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-muted/20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Ruang Kolaborasi</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              {collaborationAreas.map((area) => (
                <li key={area} className="flex gap-4">
                  <span className="font-bold text-primary flex-shrink-0">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Mari Terhubung
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Afternuun adalah ruang yang hanya dapat hidup apabila dirawat bersama.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/kontak">
                <Button size="lg" className="gap-2">
                  Hubungi Kami
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/kerjasama">
                <Button size="lg" variant="outline">
                  Lihat Kerjasama
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
