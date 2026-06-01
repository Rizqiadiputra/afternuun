import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const articles = [
  {
    id: 1,
    title: 'Pentingnya Arsip Budaya dalam Melestarikan Identitas Komunitas',
    excerpt: 'Mengapa dokumentasi dan pengarsipan karya seni lokal menjadi krusial untuk menjaga warisan budaya dari generasi ke generasi.',
    date: '15 Juni 2024',
    category: 'Arsip & Dokumentasi',
    readTime: '5 min baca',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800'
  },
  {
    id: 2,
    title: 'Kolaborasi Lintas Generasi: Bagaimana Tradisi Bertemu dengan Inovasi',
    excerpt: 'Eksplorasi cara seniman muda dan senior bekerja sama menciptakan karya yang menghubungkan masa lalu dan masa depan.',
    date: '10 Juni 2024',
    category: 'Produksi & Jejaring',
    readTime: '7 min baca',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800'
  },
  {
    id: 3,
    title: 'Workshop Seni Digital: Memberdayakan Seniman Lokal melalui Teknologi',
    excerpt: 'Laporan dari workshop kami tentang bagaimana teknologi digital dapat menjadi alat pemberdayaan untuk seniman kontemporer Indonesia.',
    date: '5 Juni 2024',
    category: 'Program & Pendidikan',
    readTime: '6 min baca',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800'
  },
  {
    id: 4,
    title: 'Model Pendanaan Berkelanjutan untuk Organisasi Budaya Independen',
    excerpt: 'Strategi dan pembelajaran dari berbagai inisiatif budaya tentang cara membangun model pendanaan yang inklusif dan berkelanjutan.',
    date: '1 Juni 2024',
    category: 'Pendanaan & Keberlanjutan',
    readTime: '8 min baca',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
  },
  {
    id: 5,
    title: 'Wawancara: Dialog dengan Pendiri Komunitas Seni Lokal',
    excerpt: 'Mendengarkan cerita dan visi dari para pemimpin komunitas seni yang telah berkontribusi pada ekosistem budaya Indonesia.',
    date: '28 Mei 2024',
    category: 'Wawancara',
    readTime: '10 min baca',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
  },
  {
    id: 6,
    title: 'Literasi Seni: Mengapa Pendidikan Seni Penting bagi Generasi Muda',
    excerpt: 'Refleksi tentang peran penting pendidikan seni dalam mengembangkan kreativitas, empati, dan pemahaman budaya pada anak muda.',
    date: '20 Mei 2024',
    category: 'Program & Pendidikan',
    readTime: '6 min baca',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800'
  }
]

export const metadata = {
  title: 'Artikel - Afternuun Indonesia',
  description: 'Baca artikel, wawancara, dan refleksi tentang seni, budaya, dan keberlanjutan di Afternuun Indonesia.'
}

export default function Artikel() {
  return (
    <>
      <Navigation />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Artikel & Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Membaca artikel, wawancara, dan refleksi tentang seni, budaya, dan keberlanjutan
            </p>
          </div>
        </section>

        {/* Articles List */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-6">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="border-primary/20 hover:shadow-lg transition-all cursor-pointer group overflow-hidden md:flex"
                >
                  <div className="relative h-48 w-full md:h-auto md:w-48 flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-foreground text-xl group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </CardTitle>
                        </div>
                        <ArrowRight className="h-5 w-5 text-primary/50 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1">
                      <CardDescription className="text-foreground/70 leading-relaxed">
                        {article.excerpt}
                      </CardDescription>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="inline-flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </span>
                      <span className="text-muted-foreground">
                        {article.readTime}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {article.category}
                      </span>
                    </div>

                      <Button variant="outline" size="sm" className="gap-2">
                        Baca Selengkapnya
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-20 bg-primary/10 p-8 rounded-lg text-center space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Langgani Newsletter Kami</h2>
                <p className="text-muted-foreground">
                  Dapatkan artikel terbaru, update program, dan berita dari Afternuun Indonesia langsung ke email Anda.
                </p>
              </div>

              <form className="max-w-md mx-auto flex gap-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <Button type="submit" className="gap-2">
                  Langgani
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground">
                Kami menghormati privasi Anda. Anda dapat berhenti berlangganan kapan saja.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
