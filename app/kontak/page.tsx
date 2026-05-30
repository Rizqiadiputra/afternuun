'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsLoading(false)
    setFormData({ name: '', email: '', subject: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@afternuunindonesia.id',
      href: 'mailto:hello@afternuunindonesia.id'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+62 812 3456 7890',
      href: 'https://wa.me/628123456789'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      value: 'Jakarta, Indonesia',
      href: '#'
    }
  ]

  return (
    <>
      <Navigation />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-primary/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
              Hubungi Kami
            </h1>
            <p className="text-xl text-muted-foreground">
              Kami siap menjawab pertanyaan dan mendengarkan masukan Anda
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Informasi Kontak</h2>
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={info.title}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="border-primary/20 cursor-pointer hover:shadow-lg transition-shadow">
                        <CardContent className="flex items-start gap-4 pt-6">
                          <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-foreground mb-1">{info.title}</p>
                            <p className="text-muted-foreground group-hover:text-primary transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  )
                })}

                {/* Social Media */}
                <div className="pt-6 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">Media Sosial</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <a href="https://instagram.com/afternuunindonesia" className="text-primary hover:underline">
                        Instagram: @afternuunindonesia
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="https://www.afternuunindonesia.id" className="text-primary hover:underline">
                        Website: www.afternuunindonesia.id
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-foreground">Kirim Pesan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <CheckCircle className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-lg font-semibold text-foreground mb-2">Terima Kasih!</h3>
                        <p className="text-muted-foreground mb-6">
                          Pesan Anda telah kami terima. Tim kami akan merespons dalam waktu 24 jam.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)}>
                          Kembali ke Form
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Nama Lengkap
                          </label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nama Anda"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@example.com"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Subjek
                          </label>
                          <Input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subjek pesan Anda"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Pesan
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tulis pesan Anda di sini..."
                            rows={6}
                            required
                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full gap-2"
                        >
                          {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
                          {!isLoading && <Send className="h-4 w-4" />}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
