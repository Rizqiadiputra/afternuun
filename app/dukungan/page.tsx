'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Banknote, TrendingUp, Handshake, ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const donationTiers = [
  {
    name: 'Pendukung Komunitas',
    amount: 'Rp 100.000 - Rp 500.000',
    description: 'Dukungan rutin dari individu yang percaya pada misi kami',
    benefits: [
      'Akses eksklusif ke konten komunitas',
      'Nama di halaman donatur',
      'Update bulanan program kami',
      'Diskon khusus untuk acara'
    ]
  },
  {
    name: 'Mitra Budaya',
    amount: 'Rp 1.000.000 - Rp 5.000.000',
    description: 'Komitmen jangka panjang untuk mendukung program budaya kami',
    benefits: [
      'Semua benefit Pendukung Komunitas',
      'Akses ke forum khusus donatur',
      'Laporan dampak kuartalan',
      'Logo di website kami',
      'Undangan ke acara eksklusif'
    ]
  },
  {
    name: 'Patron Budaya',
    amount: 'Rp 5.000.000+',
    description: 'Dukungan signifikan untuk proyek-proyek strategis kami',
    benefits: [
      'Semua benefit Mitra Budaya',
      'Naming rights untuk program tertentu',
      'Laporan dampak khusus',
      'Akses langsung ke tim kami',
      'Kesempatan berkolaborasi dalam desain program'
    ]
  }
]

const impactAreas = [
  {
    icon: Heart,
    title: 'Pemberdayaan Komunitas',
    description: 'Mendukung seniman, pelajar, dan komunitas budaya Indonesia untuk berkembang dan berinovasi.',
    impact: '1,234 seniman & komunitas terlayani'
  },
  {
    icon: Banknote,
    title: 'Pengarsipan & Dokumentasi',
    description: 'Melestarikan warisan budaya dan sejarah komunitas melalui digitalisasi dan pengarsipan profesional.',
    impact: '5,000+ aset budaya terdokumentasi'
  },
  {
    icon: TrendingUp,
    title: 'Program Pendidikan',
    description: 'Menyediakan workshop, residensi, dan forum pembelajaran untuk generasi muda yang tertarik dengan seni dan budaya.',
    impact: '150+ workshop & kelas per tahun'
  }
]

const partners = [
  {
    name: 'Universitas Islam Negeri Yogyakarta',
    category: 'Akademik',
    image: 'https://upload.wikimedia.org/wikipedia/id/thumb/5/52/Logo_UIN_Sunan_Kalijaga.svg/200px-Logo_UIN_Sunan_Kalijaga.svg.png'
  },
  {
    name: 'Sanggar Nuun',
    category: 'Budaya',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&h=200&fit=crop'
  },
  {
    name: 'PP Budaya Kaliopak',
    category: 'Warisan',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=200&h=200&fit=crop'
  },
  {
    name: 'Teater Eska',
    category: 'Komunitas',
    image: 'https://images.unsplash.com/photo-1516451833694-deb029205a81?w=200&h=200&fit=crop'
  },
  {
    name: 'Kalimasada',
    category: 'Media',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop'
  },
  {
    name: 'PSM Gitasavana',
    category: 'Musik',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=200&h=200&fit=crop'
  }
]

const donationMethods = [
  {
    title: 'Transfer Bank',
    description: 'Donasi langsung melalui transfer ke rekening resmi kami',
    details: [
      { label: 'Bank', value: 'BCA' },
      { label: 'Nomor Rekening', value: '1234567890' },
      { label: 'Atas Nama', value: 'Yayasan Afternuun Indonesia' },
    ]
  },
  {
    title: 'E-Wallet',
    description: 'Donasi melalui berbagai platform pembayaran digital',
    details: [
      { label: 'GoPay', value: '+62 896 5350 9715' },
      { label: 'DANA', value: '+62 896 5350 9715' },
      { label: 'OVO', value: '+62 896 5350 9715' },
    ]
  },
  {
    title: 'Crowdfunding',
    description: 'Dukungan donasi melalui platform BenihBaik',
    details: [
      { label: 'Platform', value: 'BenihBaik' },
      { label: 'Campaign', value: 'Afternuun Indonesia Foundation' },
      { label: 'Link Donasi', value: 'https://benihbaik.com/campaign/afternuun-indonesia-foundation' },
    ]
  }
]


function DukunganContent() {
  const [activeTab, setActiveTab] = useState('donation')

  return (
    <>
      <Navigation />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/20 to-background px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Dukungan
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
              {/* Why Donate */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Mengapa Mendukung Kami?</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Dukungan Anda membantu kami menjaga ingatan kolektif, membangun pengetahuan, dan menciptakan masa depan budaya Indonesia yang berkelanjutan.
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

              {/* Donation Tiers */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Pilih Tingkat Dukungan</h2>
                  <p className="text-lg text-muted-foreground">
                    Berbagai opsi dukungan dengan benefit yang disesuaikan
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  {donationTiers.map((tier) => (
                    <Card key={tier.name} className="hover:shadow-lg transition-shadow border-primary/20 flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-foreground text-2xl">{tier.name}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary">
                          {tier.amount}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground mt-2">
                          {tier.description}
                        </p>
                      </CardHeader>
                      <CardContent className="flex-1 space-y-6">
                        <ul className="space-y-3">
                          {tier.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground/80">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full gap-2">
                          Donasi Sekarang
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Donation Methods */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Cara Berdonasi</h2>
                  <p className="text-lg text-muted-foreground">
                    Pilih metode donasi yang paling memudahkan Anda
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  {donationMethods.map((method) => (
                    <Card key={method.title} className="border-primary/20 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-foreground">{method.title}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3 bg-muted/30 p-4 rounded">
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
                        <Button className="w-full" variant="outline">
                          Salin Detail
                        </Button>
                      </CardContent>
                    </Card>
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
                      Afternuun Indonesia adalah yayasan sosial yang terdaftar dan bersifat nirlaba. Setiap donasi yang diterima akan digunakan sepenuhnya untuk mendukung program-program kami dan memberikan dampak positif bagi komunitas.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Transparansi Keuangan</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kami berkomitmen pada transparansi penuh dalam pengelolaan dana. Laporan keuangan dan penggunaan dana tersedia untuk disertifikasi oleh auditor independen setiap tahunnya.
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
                    Kami bermitra dengan universitas, museum, organisasi budaya, dan komunitas untuk memperkuat ekosistem budaya Indonesia.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {partners.map((partner) => (
                    <Card key={partner.name} className="hover:shadow-lg transition-shadow overflow-hidden">
                      <div className="relative h-32 w-full overflow-hidden">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{partner.name}</CardTitle>
                        <CardDescription>{partner.category}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Partnership Models */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Model Kemitraan</h2>
                  <p className="text-lg text-muted-foreground">
                    Berbagai cara untuk berkolaborasi dengan Afternuun Indonesia
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: 'Kemitraan Program',
                      description: 'Berkolaborasi dalam menyelenggarakan workshop, kelas, dan acara budaya bersama.'
                    },
                    {
                      title: 'Kemitraan Penelitian',
                      description: 'Bekerja sama dalam penelitian, dokumentasi, dan advokasi budaya lokal.'
                    },
                    {
                      title: 'Kemitraan Akses',
                      description: 'Membuka akses ke koleksi, arsip, atau platform untuk kepentingan budaya bersama.'
                    },
                    {
                      title: 'Kemitraan Advokasi',
                      description: 'Bersama-sama memperjuangkan kebijakan dan lingkungan yang mendukung pelestarian budaya.'
                    }
                  ].map((model) => (
                    <Card key={model.title} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{model.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {model.description}
                        </p>
                      </CardContent>
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

                <Button size="lg" className="gap-2">
                  Hubungi Kami
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}

export default function Dukungan() {
  return <DukunganContent />
}
