'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Lightbulb, User } from 'lucide-react'

type Member = {
  name: string
  role: string
  image?: string
}

const programs = [
  {
    icon: BookOpen,
    title: 'Nuun Archive Project',
    items: [
      'Digitalisasi dan publikasi arsip.',
      'Dokumentasi naskah, foto, dan video.',
      'Perekaman sejarah lisan lintas generasi.'
    ]
  },
  {
    icon: Users,
    title: 'Afternuun School',
    items: [
      'Pendidikan nonformal lintas disiplin.',
      'Kelas, lokakarya, dan mentoring.',
      'Residensi dan forum pengetahuan.'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Creative Lab & Network',
    items: [
      'Produksi kolaboratif lintas generasi.',
      'Jejaring kampus, lembaga budaya, dan media.',
      'Koneksi ekosistem kreatif nasional dan internasional.'
    ]
  }
]

const whyEstablished = {
  paragraphs: [
    'Selama tiga dekade, Sanggar Nuun menjadi ruang lahirnya karya, pengetahuan, dan pembentukan cara pandang berkesenian bagi banyak generasi.',
    'Namun keberlanjutan sebuah tradisi tidak dapat hanya bergantung pada ingatan, romantisme sejarah, atau pergantian generasi yang alamiah. Afternuun lahir sebagai ruang yang secara sengaja dirancang untuk merawat dan mewariskannya.'
  ]
}

const challenges = [
  {
    title: 'Siklus Organisasi Kampus',
    items: [
      'Dibatasi dinamika kampus dan pergantian kepengurusan.',
      'Jaringan bergantung pada individu tertentu.'
    ]
  },
  {
    title: 'Lanskap Budaya Digital',
    items: [
      'Perubahan cara dokumentasi dan memori kolektif.',
      'Arsip tersebar, tidak terintegrasi, dan rentan hilang.'
    ]
  }
]

const preserved = [
  'Tradisi belajar lintas disiplin.',
  'Cara pandang dalam berkesenian.',
  'Jejaring manusia yang pernah dipertemukan.',
  'Memori kolektif penempaan identitas.'
]

const legalForms = [
  {
    dimension: 'Basis Pendirian',
    perkumpulan: 'Dibangun oleh himpunan orang dengan tujuan, nilai, dan kepentingan bersama.',
    yayasan: 'Dibangun berdasarkan pemisahan kekayaan atau aset.'
  },
  {
    dimension: 'Aktor Utama & Mekanisme',
    perkumpulan: 'Anggota adalah unsur vital. Arah ditentukan melalui musyawarah dan partisipasi.',
    yayasan: 'Tidak ada sistem keanggotaan. Dijalankan oleh organ Pembina, Pengurus, dan Pengawas.'
  },
  {
    dimension: 'Kecocokan Ekosistem',
    perkumpulan: 'Komunitas, jaringan, dan gerakan berbasis partisipasi.',
    yayasan: 'Lembaga filantropi, rumah sakit, atau lembaga berorientasi aset.'
  }
]

const foundations = [
  {
    title: 'Akar',
    items: [
      'Pengalaman historis Sanggar Nuun.',
      'Tradisi seni budaya Islam Indonesia.',
      'Semangat religius-humanistik: memanusiakan manusia.'
    ]
  },
  {
    title: 'Proses',
    items: [
      'Pembelajaran dan penciptaan karya.',
      'Pengarsipan dan penelitian.',
      'Transmisi lintas generasi.'
    ]
  },
  {
    title: 'Tujuan',
    items: [
      'Ekosistem seni berkelanjutan.',
      'Penguatan kapasitas manusia.',
      'Manfaat sosial-kultural yang meluas.'
    ]
  }
]

const partnership = [
  { dimension: 'Status', sanggarNuun: 'Organisasi Mahasiswa', afternuun: 'Ekosistem Berkelanjutan' },
  { dimension: 'Peran Utama', sanggarNuun: 'Ruang Kaderisasi Utama', afternuun: 'Ruang Penopang & Pengembangan' },
  { dimension: 'Siklus Hidup', sanggarNuun: 'Siklus Kepengurusan Kampus', afternuun: 'Lintas Generasi & Jangka Panjang' },
  { dimension: 'Ruang Lingkup', sanggarNuun: 'Terikat Teritorial Kampus', afternuun: 'Jaringan Nasional & Global' },
  { dimension: 'Fokus Output', sanggarNuun: 'Proses Belajar & Berkesenian Dasar', afternuun: 'Arsip, Produksi Profesional, Jejaring' }
]

const networkActors = [
  'Seniman & Budayawan',
  'Akademisi',
  'Komunitas Kreatif',
  'Media',
  'Pemerintah',
  'Sektor Swasta',
  'Masyarakat Umum'
]

const outputs = [
  'Arsip digital dan dokumentasi sejarah lisan.',
  'Penerbitan buku dan platform media digital.',
  'Forum belajar reguler dan produksi karya lintas disiplin.',
  'Festival, pameran, dan jaringan kolaborasi regional.'
]

const outcomes = [
  'Terjaganya transmisi nilai lintas generasi.',
  'Ekosistem pembelajaran mandiri di luar siklus kampus.',
  'Model keberlanjutan tradisi kreatif yang relevan.',
  'Kontribusi riil kebudayaan Islam Indonesia di ruang publik.'
]

const roadmap = [
  {
    year: 'Tahun Pertama',
    phase: 'Fase Fondasi',
    description: 'Legalisasi lembaga, konsolidasi warga, pembangunan sistem organisasi, pemetaan arsip, dan peluncuran program awal.'
  },
  {
    year: 'Tahun Kedua',
    phase: 'Fase Penguatan',
    description: 'Pengembangan program reguler, perluasan jejaring, penguatan arsip digital, dan inisiasi model pendanaan mandiri.'
  },
  {
    year: 'Tahun Ketiga',
    phase: 'Fase Ekspansi',
    description: 'Penguatan posisi Afternuun sebagai pusat jejaring, pembelajaran, produksi, dan dokumentasi kebudayaan yang kokoh.'
  }
]

const roles = [
  'Menciptakan karya bersama.',
  'Menyumbangkan pengalaman dan memori.',
  'Menjadi mentor lintas generasi.',
  'Membantu dokumentasi dan pengarsipan.',
  'Membuka pintu jejaring dan kemitraan.',
  'Mengembangkan dan mengelola program.'
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

const badanPengurus: Member[] = [
  {
    name: 'Zulfan Arif',
    role: 'Ketua',
    image: 'https://res.cloudinary.com/rizqiadiputra/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1780322333/zulfan_bgg4tp.jpg'
  },
  {
    name: 'Zusdi Furi Arianto',
    role: 'Sekretaris',
    image: 'https://res.cloudinary.com/rizqiadiputra/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1780322333/rian_m8wx5k.jpg'
  },
  {
    name: 'Istifadah Nur Rohmah',
    role: 'Bendahara'
  }
]

const badanPengawas: Member[] = [
  { name: 'Wahyudin, M.Hum', role: 'Ketua' },
  { name: 'Ahmad Fauzan, M.Ag', role: 'Anggota' },
  { name: 'Dr. H. Masngudi, M.E.I', role: 'Anggota' },
  { name: 'Misbachul Munir, S.Hum', role: 'Anggota' }
]

const legalInfo = [
  { label: 'Nama Resmi', value: 'Komunitas Budaya Afternuun Yogyakarta' },
  { label: 'Pengesahan', value: 'SK Menteri Hukum Republik Indonesia Nomor AHU-0004877.AH.01.07.Tahun 2026' },
  { label: 'Akta Notaris', value: 'Nomor 01 tanggal 15 Juni 2026' },
  { label: 'Sekretariat', value: 'Dusun Salakan RT 02, Potorono, Banguntapan, Bantul, DIY' }
]

function MemberCard({ member }: { member: Member }) {
  return (
    <Card className="hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-primary/10">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover hover:scale-105 transition-transform"
          />
        ) : (
          <User className="h-16 w-16 text-primary/40" />
        )}
      </div>
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-lg">{member.name}</CardTitle>
          <p className="text-sm font-medium text-primary">{member.role}</p>
        </div>
      </CardHeader>
    </Card>
  )
}


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
              Rumah keberlanjutan ekosistem Sanggar Nuun: instrumen kelembagaan lintas generasi, lintas periode, dan lintas ruang.
            </p>
          </div>
        </section>

        {/* Why Established Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Mengapa Afternuun Didirikan?</h2>
            <div className="space-y-6">
              {whyEstablished.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-12">
              {challenges.map((challenge) => (
                <Card key={challenge.title} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground leading-relaxed">
                      {challenge.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-lg font-semibold text-primary mt-8">
              Keduanya berujung pada terputusnya transmisi pengalaman dan pengetahuan antargenerasi.
            </p>
          </div>
        </section>

        {/* Memory Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Memori, Nilai, dan Ruh</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Yang hilang dari sebuah komunitas sering kali bukan organisasinya, melainkan pengetahuan dan ruh yang menghidupinya.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Yang ingin kita jaga bukan sekadar nama atau sejarah masa lalu, melainkan:
                </p>
              </div>
              <ul className="space-y-4 text-lg text-foreground">
                {preserved.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="font-bold text-primary flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                  src="/images/perihal-kami.jpg"
                  alt="Komunitas Afternuun"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Legal Form Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Mengapa Perkumpulan?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Status perkumpulan bukan sekadar legalitas, melainkan cermin filosofis cara kerja kita.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Wadah yang Paling Dekat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Bentuk perkumpulan dipilih karena paling merepresentasikan watak kolektif sejarah Sanggar Nuun.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Keanggotaan Sentral</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Partisipasi aktif anggota menjadi instrumen utama dalam penentuan arah organisasi.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dimensi</TableHead>
                  <TableHead className="text-primary">Perkumpulan</TableHead>
                  <TableHead>Yayasan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {legalForms.map((row) => (
                  <TableRow key={row.dimension}>
                    <TableCell className="font-medium text-foreground whitespace-normal min-w-32">{row.dimension}</TableCell>
                    <TableCell className="text-foreground whitespace-normal min-w-56">{row.perkumpulan}</TableCell>
                    <TableCell className="text-muted-foreground whitespace-normal min-w-56">{row.yayasan}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-12 text-center space-y-2">
              <p className="text-muted-foreground leading-relaxed">
                Afternuun bukan untuk mengelola aset atau menjalankan lembaga hierarkis, melainkan ruang kolektif warga lintas generasi untuk belajar, berkarya, dan berjejaring.
              </p>
              <p className="text-xl font-semibold text-primary">
                Kita tidak membutuhkan pengelola aset. Kita membutuhkan penjaga ruh organisasi.
              </p>
            </div>
          </div>
        </section>

        {/* Foundation Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Fondasi Ekosistem Afternuun</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {foundations.map((foundation) => (
                <Card key={foundation.title} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{foundation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground leading-relaxed">
                      {foundation.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Kemitraan dan Saling Penguatan</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Hubungan simbiotis, bukan substitusi. Afternuun hadir sebagai ruang penopang di luar keterbatasan struktural kampus.
              </p>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dimensi</TableHead>
                  <TableHead>Sanggar Nuun</TableHead>
                  <TableHead className="text-primary">Afternuun</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {partnership.map((row) => (
                  <TableRow key={row.dimension}>
                    <TableCell className="font-medium text-foreground whitespace-normal min-w-28">{row.dimension}</TableCell>
                    <TableCell className="text-muted-foreground whitespace-normal min-w-40">{row.sanggarNuun}</TableCell>
                    <TableCell className="text-foreground whitespace-normal min-w-40">{row.afternuun}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Programs Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Mesin Penggerak Ekosistem</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tiga program unggulan yang saling terhubung dan saling menguatkan.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {programs.map((program) => {
                const Icon = program.icon
                return (
                  <Card key={program.title} className="hover:shadow-lg transition-shadow border-border">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                        <CardTitle className="text-lg">{program.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground leading-relaxed">
                        {program.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Network Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border bg-muted/20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Simpul Perjumpaan yang Meluas</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Afternuun tidak hanya ditujukan bagi internal warga Sanggar Nuun, baik mahasiswa maupun alumni. Ia dirancang sebagai simpul terbuka yang mempertemukan berbagai unsur dalam satu ruang kolaborasi, berakar pada perhatian yang sama terhadap seni dan kebudayaan.
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

        {/* Impact Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Dari Karya Menuju Dampak</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Target Output Tiga Tahun Pertama</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    {outputs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Outcome Jangka Panjang</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    {outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Peta Jalan Pengembangan</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tiga tahun pertama Afternuun, dari fondasi menuju ekspansi.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {roadmap.map((step) => (
                <Card key={step.year} className="border-border">
                  <CardHeader>
                    <p className="text-sm font-medium text-primary">{step.year}</p>
                    <CardTitle className="text-lg">{step.phase}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Pengurus & Pengawas</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Afternuun dijalankan bersama oleh pengurus dan warga lintas generasi melalui musyawarah dan partisipasi.
              </p>
            </div>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">Badan Pengurus</h3>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {badanPengurus.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">Badan Pengawas</h3>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {badanPengawas.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Legalitas</h2>
            <dl className="grid gap-6 md:grid-cols-2">
              {legalInfo.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm font-medium text-primary mb-1">{item.label}</dt>
                  <dd className="text-muted-foreground leading-relaxed">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Mengapa Warga Perlu Terlibat?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Afternuun adalah ruang yang hanya dapat hidup apabila dirawat bersama. Pilih peran Anda dalam ekosistem ini:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 text-left text-foreground mb-8">
              {roles.map((role) => (
                <li key={role} className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">•</span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/kontak">
                <Button size="lg" className="gap-2">
                  Hubungi Kami
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/kerjasama">
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

export default function PerihalKami() {
  return <PerihalKamiContent />
}
