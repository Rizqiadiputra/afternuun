'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowLeft, Download } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'

const articles = [
  {
    id: 1,
    slug: 'pentingnya-arsip-budaya-identitas-komunitas',
    title: 'Pentingnya Arsip Budaya dalam Melestarikan Identitas Komunitas',
    excerpt: 'Mengapa dokumentasi dan pengarsipan karya seni lokal menjadi krusial untuk menjaga warisan budaya dari generasi ke generasi.',
    date: '15 Juni 2024',
    category: 'Arsip & Dokumentasi',
    author: 'Dr. Agus Triyanto',
    readTime: '5 min baca',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800',
    fullContent: 'Arsip budaya merupakan fondasi penting dalam melestarikan identitas suatu komunitas. Melalui dokumentasi yang sistematis, kita dapat menjaga kekayaan warisan budaya agar tetap hidup dan dapat diakses oleh generasi-generasi mendatang. Pentingnya arsip budaya mencakup berbagai aspek, mulai dari preservation (pelestarian), access (aksesibilitas), hingga educational value (nilai pendidikan). Artikel ini mengeksplorasi mengapa pengarsipan budaya menjadi sangat penting di era digital ini, dan bagaimana komunitas dapat memulai proses dokumentasi mereka sendiri dengan sumber daya terbatas.'
  },
  {
    id: 2,
    slug: 'kolaborasi-lintas-generasi-tradisi-inovasi',
    title: 'Kolaborasi Lintas Generasi: Bagaimana Tradisi Bertemu dengan Inovasi',
    excerpt: 'Eksplorasi cara seniman muda dan senior bekerja sama menciptakan karya yang menghubungkan masa lalu dan masa depan.',
    date: '10 Juni 2024',
    category: 'Produksi & Jejaring',
    author: 'Bambang Sutejo',
    readTime: '7 min baca',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
    fullContent: 'Kolaborasi antara seniman muda dan senior menciptakan dinamika kreatif yang unik. Melalui intergenerational collaboration, kita melihat bagaimana tradisi tidak hanya dilestarikan, tetapi juga ditransformasikan menjadi bentuk-bentuk baru yang relevan dengan konteks kontemporer. Artikel ini membahas beberapa studi kasus kolaborasi sukses, tantangan yang dihadapi, dan bagaimana menciptakan ruang yang kondusif untuk kolaborasi lintas generasi. Dengan menggabungkan kebijaksanaan seniman senior dengan keberanian eksperimental seniman muda, kita dapat menciptakan warisan budaya yang dinamis dan berkelanjutan.'
  },
  {
    id: 3,
    slug: 'workshop-seni-digital-seniman-lokal',
    title: 'Workshop Seni Digital: Memberdayakan Seniman Lokal melalui Teknologi',
    excerpt: 'Laporan dari workshop kami tentang bagaimana teknologi digital dapat menjadi alat pemberdayaan untuk seniman kontemporer Indonesia.',
    date: '5 Juni 2024',
    category: 'Program & Pendidikan',
    author: 'Siti Nurhaliza',
    readTime: '6 min baca',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800',
    fullContent: 'Teknologi digital membuka peluang baru bagi seniman lokal untuk mengeksplorasi medium artistik, memperluas jangkauan audiens, dan mendapatkan sumber pendapatan yang berkelanjutan. Workshop seni digital yang kami selenggarakan dirancang untuk memberikan akses dan pengetahuan tentang tools digital kepada seniman yang mungkin belum familiar dengan teknologi. Dari digital illustration, motion graphics, hingga virtual exhibitions, seniman Indonesia mulai memanfaatkan platform digital untuk mengekspresikan kreativitas mereka. Artikel ini membagikan insights dari workshop, serta tantangan dan peluang dalam memberdayakan seniman lokal melalui teknologi digital.'
  },
  {
    id: 4,
    slug: 'model-pendanaan-berkelanjutan-organisasi-budaya',
    title: 'Model Pendanaan Berkelanjutan untuk Organisasi Budaya Independen',
    excerpt: 'Strategi dan pembelajaran dari berbagai inisiatif budaya tentang cara membangun model pendanaan yang inklusif dan berkelanjutan.',
    date: '1 Juni 2024',
    category: 'Pendanaan & Keberlanjutan',
    author: 'Prof. Wawan Setiawan',
    readTime: '8 min baca',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    fullContent: 'Keberlanjutan finansial adalah salah satu tantangan terbesar yang dihadapi organisasi budaya independen. Artikel ini mengeksplorasi berbagai model pendanaan yang telah terbukti efektif, mulai dari diversifikasi revenue streams, grant funding, hingga social enterprise models. Melalui studi perbandingan dengan organisasi budaya di berbagai negara, kami mengidentifikasi best practices yang dapat diadaptasi dalam konteks Indonesia. Fokus khusus diberikan pada bagaimana organisasi budaya dapat membangun ekosistem pendanaan yang sehat tanpa mengorbankan integritas dan misi artistik mereka.'
  },
  {
    id: 5,
    slug: 'wawancara-pendiri-komunitas-seni-lokal',
    title: 'Wawancara: Dialog dengan Pendiri Komunitas Seni Lokal',
    excerpt: 'Mendengarkan cerita dan visi dari para pemimpin komunitas seni yang telah berkontribusi pada ekosistem budaya Indonesia.',
    date: '28 Mei 2024',
    category: 'Wawancara',
    author: 'Pak Haryo',
    readTime: '10 min baca',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    fullContent: 'Melalui serangkaian wawancara mendalam, kami menggali kisah-kisah inspiratif dari para pendiri komunitas seni yang telah bekerja keras dalam melestarikan dan mengembangkan budaya lokal. Setiap narasumber membagikan perjalanan mereka, tantangan yang mereka hadapi, dan visi mereka untuk masa depan gerakan budaya. Dari komunitas seni rupa, pertunjukan, hingga warisan budaya, wawancara ini memberikan perspektif beragam tentang bagaimana komunitas grassroots menjadi agent of change dalam ekosistem budaya Indonesia. Artikel ini juga berisi lessons learned dan rekomendasi bagi calon pembuat komunitas seni.'
  },
  {
    id: 6,
    slug: 'literasi-seni-pendidikan-generasi-muda',
    title: 'Literasi Seni: Mengapa Pendidikan Seni Penting bagi Generasi Muda',
    excerpt: 'Refleksi tentang peran penting pendidikan seni dalam mengembangkan kreativitas, empati, dan pemahaman budaya pada anak muda.',
    date: '20 Mei 2024',
    category: 'Program & Pendidikan',
    author: 'Dr. Agus Triyanto',
    readTime: '6 min baca',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800',
    fullContent: 'Pendidikan seni bukan hanya tentang mengajarkan teknik artistik, tetapi tentang mengembangkan kapasitas kognitif, emosional, dan sosial generasi muda. Literasi seni membantu individu memahami dan mengapresiasi warisan budaya, sekaligus mengembangkan kreativitas dan critical thinking skills. Artikel ini mengeksplorasi penelitian terkini tentang dampak pendidikan seni pada perkembangan anak, serta menganalisis bagaimana kurikulum pendidikan formal di Indonesia dapat lebih mengintegrasikan pembelajaran seni. Melalui case studies dari berbagai institusi pendidikan, kami menunjukkan bagaimana pendidikan seni yang holistik dapat menjadi investasi penting untuk masa depan generasi muda Indonesia.'
  }
]

export default function ArticleDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const article = articles.find(a => a.slug === slug)
  
  if (!article) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Artikel Tidak Ditemukan</h1>
            <p className="text-muted-foreground mb-8">Maaf, artikel yang Anda cari tidak tersedia.</p>
            <Link href="/risalah">
              <Button className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Risalah
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
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link href="/risalah">
              <Button variant="outline" size="sm" className="mb-6 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Risalah
              </Button>
            </Link>

            <article>
              <div className="mb-8">
                <span className="inline-flex text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                  {article.category}
                </span>
                
                <h1 className="text-4xl font-bold text-foreground mb-4 sm:text-5xl">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground border-b border-border pb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-invert max-w-none mb-12">
                <div className="space-y-6 text-foreground/80 leading-relaxed">
                  <p>{article.fullContent}</p>
                  
                  <p>
                    Penelitian dan pengalaman praktis menunjukkan bahwa pendekatan holistik terhadap isu-isu budaya sangat penting. Kami percaya bahwa melalui kolaborasi, dokumentasi yang sistematis, dan komitmen jangka panjang, komunitas budaya Indonesia dapat terus berkembang dan memberikan kontribusi signifikan terhadap identitas nasional.
                  </p>
                </div>
              </div>

              <Card className="border-primary/20 bg-primary/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Penulis</p>
                    <p className="text-lg font-semibold text-foreground">{article.author}</p>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Unduh PDF
                  </Button>
                </div>
              </Card>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
