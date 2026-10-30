'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Banknote, TrendingUp, Handshake, ArrowRight, Check, Copy } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const impactAreas = [
  {
    icon: Banknote,
    title: 'Nuun Archive Project',
    description: 'Digitalisasi dan publikasi arsip, dokumentasi naskah, foto, dan video, serta perekaman sejarah lisan lintas generasi.',
    impact: 'Target tiga tahun: arsip digital dan dokumentasi sejarah lisan'
  },
  {
    icon: TrendingUp,
    title: 'Afternuun School',
    description: 'Pendidikan nonformal lintas disiplin melalui kelas, lokakarya, mentoring, residensi, dan forum pengetahuan.',
    impact: 'Target tiga tahun: forum belajar reguler dan produksi karya lintas disiplin'
  },
  {
    icon: Heart,
    title: 'Creative Lab & Network',
    description: 'Produksi kolaboratif lintas generasi serta jejaring kampus, lembaga budaya, media, dan ekosistem kreatif.',
    impact: 'Target tiga tahun: festival, pameran, dan jaringan kolaborasi regional'
  }
]

const fundingSources = [
  'Kontribusi Anggota',
  'Program Pendidikan & Pelatihan',
  'Proyek Seni & Kebudayaan',
  'Hibah & Pendanaan Kebudayaan',
  'Penerbitan & Produksi Kreatif',
  'Kemitraan Strategis',
  'Donasi Publik',
  'Pengembangan Unit Usaha (Selaras Nilai)'
]

const partners = [
  {
    name: 'Universitas Islam Negeri Yogyakarta',
    category: 'Akademik',
    image: '/logos/uin-sunan-kalijaga.png'
  },
  {
    name: 'Sanggar Nuun',
    category: 'Budaya',
    image: '/logos/sanggar-nuun.jpg'
  },
  {
    name: 'PP Budaya Kaliopak',
    category: 'Warisan',
    image: '/logos/kaliopak.jpg'
  },
  {
    name: 'Teater Eska',
    category: 'Komunitas',
    image: '/logos/teater-eska.jpg'
  },
  {
    name: 'Kalimasada',
    category: 'Media'
  },
  {
    name: 'PSM Gitasavana',
    category: 'Musik',
    image: '/logos/gita-savana.jpg'
  }
]

  const donationMethods = [
    {
      title: 'Transfer Bank',
      description: 'Donasi langsung melalui transfer ke rekening resmi kami',
      qris: '/qris.jpeg',
      details: [
        { label: 'Bank', value: 'Bank Syariah Indonesia (BSI)' },
        { label: 'Nomor Rekening', value: '7370423835' },
        { label: 'Atas Nama', value: 'Komunitas Budaya Afternuun' },
      ]
    },
    {
      title: 'Hubungi Admin',
      description: 'Ingin mendukung Afternuun? Hubungi kami terlebih dahulu agar kami dapat membantu menyesuaikan bentuk dukungan yang paling tepat.',
      details: [
        { label: 'WhatsApp', value: '+62 896-4971-9824' },
        { label: 'Email', value: 'afternuun.id@gmail.com' },
        { label: 'Dukungan', value: 'Donasi, sponsorship, kolaborasi program, atau kontribusi lainnya.' },
      ]
    },
  // {
  //   title: 'E-Wallet',
  //   description: 'Donasi melalui berbagai platform pembayaran digital',
  //   details: [
  //     { label: 'GoPay', value: '+62 896 5350 9715' },
  //     { label: 'DANA', value: '+62 896 5350 9715' },
  //     { label: 'OVO', value: '+62 896 5350 9715' },
  //   ]
  // },
  // {
  //   title: 'Crowdfunding',
  //   description: 'Dukungan donasi melalui platform BenihBaik',
  //   details: [
  //     { label: 'Platform', value: 'BenihBaik' },
  //     { label: 'Campaign', value: 'Afternuun Indonesia Foundation' },
  //     { label: 'Link Donasi', value: 'https://benihbaik.com/campaign/afternuun-indonesia-foundation' },
  //   ]
  // }
]


function DukunganContent() {
  const [activeTab, setActiveTab] = useState('donation')
  const [copiedMethod, setCopiedMethod] = useState<string | null>(null)

  const handleCopy = (methodTitle: string, details: Array<{ label: string; value: string }>) => {
    const text = details.map(d => `${d.label}: ${d.value}`).join('\n')
    navigator.clipboard.writeText(text)
    setCopiedMethod(methodTitle)
    setTimeout(() => setCopiedMethod(null), 2000)
  }

  return (
    <>
      <Navigation />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/20 to-background px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Kerjasama
            </h1>
            <p className="text-xl text-muted-foreground">
              Dukung misi kami untuk melestarikan, mempelajari, dan menciptakan budaya Indonesia melalui donasi dan kemitraan
            </p>
          </div>
        </section>

        {/* Tabs */}
        <section className="px-4 py-8 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('donation')}
                className={`px-6 py-3 font-medium transition-colors rounded-lg ${
                  activeTab === 'donation'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Heart className="h-4 w-4 inline mr-2" />
                Donasi
              </button>
              <button
                onClick={() => setActiveTab('partnership')}
                className={`px-6 py-3 font-medium transition-colors rounded-lg ${
                  activeTab === 'partnership'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Handshake className="h-4 w-4 inline mr-2" />
                Kemitraan Budaya
              </button>
            </div>
          </div>
        </section>

        {/* Donation Tab */}
        {activeTab === 'donation' && (
          <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl space-y-20">
              {/* Donation Methods */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Cara Berdonasi</h2>
                  <p className="text-lg text-muted-foreground">
                    Pilih metode donasi yang paling memudahkan Anda
                  </p>
                </div>

                <div className="grid gap-8">
                  {donationMethods.map((method) => (
                    <Card key={method.title} className="border-primary/20 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-foreground">{method.title}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className={method.qris ? 'grid gap-4 md:grid-cols-[1fr_auto] md:items-center' : undefined}>
                          <div className={`grid gap-4 bg-muted/30 p-4 rounded ${method.qris ? '' : 'md:grid-cols-3'}`}>
                            {method.details.map((detail) => (
                              <div key={detail.label} className="space-y-1">
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                  {detail.label}
                                </p>
                                <p className="font-mono text-sm text-foreground break-all">
                                  {detail.value}
                                </p>
                              </div>
                            ))}
                          </div>
                          {method.qris && (
                            <div className="space-y-2 text-center">
                              <div className="mx-auto w-fit rounded bg-white p-3">
                                <Image src={method.qris} alt="QRIS Komunitas Budaya Afternuun" width={200} height={202} />
                              </div>
                              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Pindai QRIS</p>
                            </div>
                          )}
                        </div>
                        <Button
                          className="w-full gap-2"
                          variant={copiedMethod === method.title ? "default" : "outline"}
                          onClick={() => handleCopy(method.title, method.details)}
                        >
                          {copiedMethod === method.title ? (
                            <>
                              <Check className="h-4 w-4" />
                              Tersalin!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4" />
                              Salin Detail
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Why Donate */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Mengapa Mendukung Kami?</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Afternuun adalah ruang yang hanya dapat hidup apabila dirawat bersama. Dukungan Anda menggerakkan tiga program unggulan kami.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {impactAreas.map((area) => {
                    const Icon = area.icon
                    return (
                      <Card key={area.title} className="border-primary/20 hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <Icon className="h-10 w-10 text-primary mb-2" />
                          <CardTitle className="text-foreground">{area.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-muted-foreground leading-relaxed">
                            {area.description}
                          </p>
                          <p className="text-sm font-semibold text-primary">
                            {area.impact}
                          </p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Funding Model */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Model Keberlanjutan Finansial</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Arsitektur pendanaan yang terdesentralisasi. Tidak bergantung pada satu sumber.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {fundingSources.map((source, idx) => (
                    <div key={source} className="flex gap-3 rounded-lg border border-primary/20 p-4">
                      <span className="font-bold text-primary flex-shrink-0">{idx + 1}.</span>
                      <span className="text-foreground">{source}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-8 bg-primary/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground">Informasi Tambahan</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Status Organisasi</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Afternuun Yogyakarta adalah perkumpulan nirlaba dengan nama resmi Komunitas Budaya Afternuun Yogyakarta, berdasarkan SK Menteri Hukum Republik Indonesia Nomor AHU-0004877.AH.01.07.Tahun 2026 dan Akta Notaris Nomor 01 tanggal 15 Juni 2026. Setiap donasi yang diterima akan digunakan sepenuhnya untuk mendukung program-program kami dan memberikan dampak positif bagi komunitas.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Transparansi Keuangan</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kami berkomitmen menjaga transparansi dalam pengelolaan dana.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Partnership Tab */}
        {activeTab === 'partnership' && (
          <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl space-y-20">
              {/* Partnership Section */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Kemitraan Budaya</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Kami bermitra dengan kampus, lembaga budaya, media, dan komunitas untuk memperkuat ekosistem budaya Indonesia.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {partners.map((partner) => (
                    <Card key={partner.name} className="hover:shadow-lg transition-shadow overflow-hidden">
                      <div className={`relative flex h-32 w-full items-center justify-center overflow-hidden ${partner.image ? 'bg-white' : 'bg-primary/10'}`}>
                        {partner.image ? (
                          <Image
                            src={partner.image}
                            alt={`Logo ${partner.name}`}
                            fill
                            className="object-contain p-3"
                          />
                        ) : (
                          <Handshake className="h-12 w-12 text-primary/40" />
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{partner.name}</CardTitle>
                        <CardDescription>{partner.category}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CTA for Partnership */}
              <div className="bg-primary/10 p-12 rounded-lg text-center space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Mari Bermitra dengan Kami
                  </h2>
                  <p className="text-lg text-muted-foreground mb-2">
                    Tertarik untuk berkolaborasi dan memperkuat ekosistem budaya Indonesia?
                  </p>
                  <p className="text-muted-foreground">
                    Hubungi tim kami untuk membahas peluang kemitraan yang sesuai dengan organisasi atau inisiatif Anda.
                  </p>
                </div>

                <Link href="/kontak">
                  <Button size="lg" className="gap-2">
                    Hubungi Kami
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}

export default function Kerjasama() {
  return <DukunganContent />
}
