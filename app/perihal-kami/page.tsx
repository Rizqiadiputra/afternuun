'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRight, BookOpen, Users, Lightbulb, Heart, User } from 'lucide-react'

const functions = [
  {
    icon: BookOpen,
    title: 'Pelestarian & Arsip',
    description: 'Mengumpulkan, mendokumentasikan, dan melestarikan warisan budaya serta ingatan kolektif untuk generasi mendatang.'
  },
  {
    icon: Users,
    title: 'Edukasi & Pembelajaran',
    description: 'Menyediakan platform belajar kolaboratif melalui kelas, workshop, diskusi, dan residensi seni untuk semua generasi.'
  },
  {
    icon: Lightbulb,
    title: 'Produksi & Inovasi',
    description: 'Mendukung penciptaan karya baru, pameran, festival, dan kolaborasi yang menggabungkan tradisi dengan kontemporer.'
  },
  {
    icon: Heart,
    title: 'Komunitas & Jejaring',
    description: 'Membangun ekosistem yang kuat dengan menghubungkan seniman, akademisi, komunitas, dan penggerak budaya.'
  },
  {
    icon: BookOpen,
    title: 'Penelitian & Advokasi',
    description: 'Mendorong penelitian budaya kritis dan advokasi untuk kebijakan yang mendukung pelestarian dan pengembangan budaya lokal.'
  },
  {
    icon: Heart,
    title: 'Keberlanjutan & Model Ekonomi',
    description: 'Mengembangkan model pendanaan, kemitraan, dan ekonomi sosial untuk menjaga gerakan ini berkelanjutan dan bermakna.'
  }
]

const principles = [
  {
    number: '01',
    title: 'Inklusif & Lintas Generasi',
    description: 'Membuka ruang untuk semua: dari seniman, pelajar, peneliti, budayawan, hingga komunitas grassroot yang ingin berpartisipasi aktif.'
  },
  {
    number: '02',
    title: 'Berbasis Komunitas',
    description: 'Menghormati inisiatif lokal, pengetahuan komunitas, dan kebijaksanaan yang telah berkembang dalam komunitas.'
  },
  {
    number: '03',
    title: 'Kolaboratif & Berjejaring',
    description: 'Membangun sinergi dengan berbagai stakeholder: kampus, sekolah, lembaga budaya, organisasi sosial, dan komunitas.'
  },
  {
    number: '04',
    title: 'Inovasi Berkelanjutan',
    description: 'Menggabungkan kebijaksanaan tradisional dengan inovasi kontemporer untuk menciptakan cara baru dalam berbudaya.'
  },
  {
    number: '05',
    title: 'Transparansi & Akuntabilitas',
    description: 'Beroperasi dengan transparansi penuh, akuntabel kepada komunitas, dan berkomitmen pada pembelajaran berkelanjutan.'
  },
  {
    number: '06',
    title: 'Keberlanjutan & Keadilan',
    description: 'Memastikan praktik yang ramah lingkungan, adil, dan berkelanjutan dalam semua aspek kegiatan kami.'
  }
]

const team = [
  {
    name: 'Zulfan Arif',
    role: 'Ketua',
    bio: 'Pemimpin gerakan budaya dan seniman dengan pengalaman puluhan tahun dalam pelestarian dan pengembangan seni tradisional Indonesia.',
    image: 'https://res.cloudinary.com/rizqiadiputra/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1780322333/zulfan_bgg4tp.jpg'
  },
  {
    name: 'Zusdi F. Arianto',
    role: 'Sekretaris',
    bio: 'Pengelola administratif dan strategis yang memastikan kelancaran operasional dan koordinasi program-program Afternuun Indonesia.',
    image: 'https://res.cloudinary.com/rizqiadiputra/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1780322333/rian_m8wx5k.jpg'
  },
  {
    name: 'Wahyudin',
    role: 'Bendahara',
    bio: 'Pengelola keuangan dan sumber daya dengan komitmen pada transparansi dan keberlanjutan finansial gerakan kami.',
    image: 'https://res.cloudinary.com/rizqiadiputra/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1780322333/after_qjihii.jpg'
  }
]


function PerihalKamiContent() {
  return (
    <>
      <Navigation />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-96 bg-gradient-to-b from-primary/20 to-background px-4 py-20 sm:px-6 lg:px-8 flex items-center">
          <div className="mx-auto max-w-4xl text-center w-full">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Perihal Kami
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ruang kolektif lintas generasi untuk merawat ingatan, membangun pengetahuan, menciptakan masa depan, dan menjaga keberlanjutan budaya Indonesia.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Visi Kami</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Membangun ekosistem budaya Indonesia yang hidup, berkelanjutan, dan inklusif, di mana tradisi dan inovasi berdialog untuk menciptakan masa depan yang bermakna bagi semua.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Misi Kami</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Menyediakan ruang, sumber daya, dan platform bagi seniman, peneliti, komunitas, dan penggerak budaya untuk merawat warisan, membangun pengetahuan, berkolaborasi, dan menciptakan masa depan kebudayaan Indonesia bersama.
                  </p>
                </div>
              </div>
              
              <div className="relative h-96 w-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800"
                  alt="Komunitas Afternuun"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Functions Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Fungsi Strategis</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Afternuun Indonesia beroperasi melalui enam fungsi yang saling terintegrasi dan saling menguatkan.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {functions.map((func, idx) => {
                const Icon = func.icon
                return (
                  <Card key={idx} className="hover:shadow-lg transition-shadow border-border">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                        <CardTitle className="text-lg">{func.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {func.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Prinsip Dasar</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Prinsip-prinsip ini memandu setiap keputusan dan aksi kami dalam membangun gerakan budaya yang bermakna.
              </p>
            </div>

            <div className="space-y-6">
              {principles.map((principle) => (
                <div key={principle.number} className="flex gap-6 pb-6 border-b border-border last:border-0">
                  <div className="text-4xl font-bold text-primary flex-shrink-0 w-16">
                    {principle.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Tim & Komunitas Kami</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Gerakan Afternuun Indonesia dipimpin oleh tim profesional dan didukung oleh ribuan anggota komunitas yang berdedikasi.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <Card key={member.name} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <p className="text-sm font-medium text-primary">{member.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Bergabunglah dengan Gerakan Kami
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kami mengundang Anda untuk menjadi bagian dari komunitas yang merawat, mempelajari, dan menciptakan budaya Indonesia yang berkelanjutan.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button size="lg" className="gap-2">
                Daftar Komunitas
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default function PerihalKami() {
  return <PerihalKamiContent />
}
