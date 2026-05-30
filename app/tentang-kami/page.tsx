import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const values = [
  {
    title: 'Merawat Ingatan',
    description: 'Mengumpulkan dan melestarikan arsip, dokumentasi, cerita, dan sejarah komunitas agar tetap hidup dan dapat diakses oleh generasi mendatang.'
  },
  {
    title: 'Membangun Pengetahuan',
    description: 'Menciptakan ruang belajar kolaboratif melalui workshop, diskusi, dan residensi seni-budaya yang melibatkan berbagai perspektif dan pengalaman.'
  },
  {
    title: 'Menciptakan Masa Depan',
    description: 'Memfasilitasi produksi karya baru, pameran, festival, dan kolaborasi yang mengintegrasikan tradisi dengan inovasi kontemporer.'
  },
  {
    title: 'Keberlanjutan Bersama',
    description: 'Mengembangkan model pendanaan dan ekonomi sosial yang berkelanjutan untuk menjaga gerakan ini terus hidup dan berkembang.'
  }
]

export const metadata = {
  title: 'Tentang Kami - Afternuun Indonesia',
  description: 'Pelajari tentang visi, misi, dan nilai-nilai Afternuun Indonesia sebagai ruang kolektif lintas generasi.'
}

export default function TentangKami() {
  return (
    <>
      <Navigation />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Tentang Kami
            </h1>
            <p className="text-xl text-muted-foreground">
              Mengenal lebih dekat visi, misi, dan perjalanan Afternuun Indonesia
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Featured Image */}
            <div className="relative h-96 w-full overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200"
                alt="Komunitas Afternuun Indonesia"
                fill
                className="object-cover"
              />
            </div>

            {/* About Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Siapa Kami?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Afternuun Indonesia tumbuh dari pengalaman panjang komunitas, sanggar, dan ruang belajar yang percaya bahwa kebudayaan tidak hanya diwariskan, tetapi juga dirawat, dipelajari, dan diciptakan kembali.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Visi & Misi Kami</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Kami membangun ruang yang mempertemukan generasi, pengalaman, dan gagasan. Di sini, arsip bertemu dengan karya baru, tradisi berdialog dengan masa depan, dan kebersamaan menjadi fondasi utama.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Afternuun Indonesia adalah ekosistem: tempat belajar, berkarya, berdiskusi, berjejaring, dan saling menguatkan.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Nilai-Nilai Kami</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {values.map((value) => (
                  <Card key={value.title} className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-primary">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Ecosystem */}
            <div className="space-y-8 bg-primary/5 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-foreground">Ekosistem Kami</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Afternuun Indonesia berfungsi sebagai ekosistem yang integral, menciptakan sinergi antara empat pilar utama:
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-4">
                  <span className="font-bold text-primary flex-shrink-0">•</span>
                  <span><strong>Pelestarian</strong>: Menjaga ingatan kolektif melalui arsip dan dokumentasi yang terstruktur dan dapat diakses.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary flex-shrink-0">•</span>
                  <span><strong>Edukasi</strong>: Menyediakan platform belajar yang inklusif dan multidisiplin untuk semua generasi.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary flex-shrink-0">•</span>
                  <span><strong>Produksi</strong>: Mendukung penciptaan dan produksi karya seni-budaya yang relevan dan berkelanjutan.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary flex-shrink-0">•</span>
                  <span><strong>Keberlanjutan</strong>: Membangun model finansial dan organisasi yang memastikan gerakan ini dapat terus berkembang.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
