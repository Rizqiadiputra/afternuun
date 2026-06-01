'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Banknote, TrendingUp, Check, Copy } from 'lucide-react'
import { useState } from 'react'

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
      { label: 'GCash', value: '+62 812 3456 7890' },
      { label: 'DANA', value: '+62 812 3456 7890' },
      { label: 'OVO', value: '+62 812 3456 7890' },
    ]
  },
  {
    title: 'Transfer Internasional',
    description: 'Dukungan dari donatur di luar Indonesia',
    details: [
      { label: 'Swift Code', value: 'BCAIIDJA' },
      { label: 'IBAN', value: 'ID12BCAA1234567890' },
      { label: 'Atas Nama', value: 'Afternuun Indonesia Foundation' },
    ]
  }
]

const impactAreas = [
  {
    icon: Heart,
    title: 'Pemberdayaan Komunitas',
    description: 'Mendukung seniman, pelajar, dan komunitas budaya Indonesia untuk berkembang dan berinovasi.'
  },
  {
    icon: Banknote,
    title: 'Pengarsipan & Dokumentasi',
    description: 'Melestarikan warisan budaya dan sejarah komunitas melalui digitalisasi dan pengarsipan profesional.'
  },
  {
    icon: TrendingUp,
    title: 'Program Pendidikan',
    description: 'Menyediakan workshop, residensi, dan forum pembelajaran untuk generasi muda yang tertarik dengan seni dan budaya.'
  }
]

// export const metadata = {
//   title: 'Donasi & Sponsor - Afternuun Indonesia',
//   description: 'Dukung gerakan budaya Afternuun Indonesia melalui berbagai metode donasi dan sponsor.'
// }

export default function Donasi() {
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
        <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Donasi & Sponsor
            </h1>
            <p className="text-xl text-muted-foreground">
              Dukung misi kami untuk melestarikan, mempelajari, dan menciptakan budaya Indonesia
            </p>
          </div>
        </section>

        {/* Main Content */}
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
                    <Card key={area.title} className="border-primary/20">
                      <CardHeader>
                        <Icon className="h-10 w-10 text-primary mb-2" />
                        <CardTitle className="text-foreground">{area.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {area.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
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

              <div className="grid gap-8">
                {donationMethods.map((method) => (
                  <Card key={method.title} className="border-primary/20 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-foreground">{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-3 bg-muted/30 p-4 rounded">
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

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pertanyaan Lebih Lanjut?</h3>
                  <p className="text-muted-foreground mb-4">
                    Jika Anda memiliki pertanyaan tentang donasi atau ingin menjadi sponsor kami, jangan ragu untuk menghubungi kami.
                  </p>
                  <Button asChild>
                    <a href="mailto:hello@afternuunindonesia.id">
                      Hubungi Kami
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
