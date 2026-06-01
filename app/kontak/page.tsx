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
    nama: '',
    email: '',
    subjek: '',
    pesan: '',
    honeypot: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    // Validate name
    if (!formData.nama.trim()) {
      newErrors.nama = 'Nama harus diisi'
    } else if (!/^[a-zA-Z\s]+$/.test(formData.nama)) {
      newErrors.nama = 'Nama hanya boleh berisi huruf dan spasi'
    } else if (formData.nama.length < 3 || formData.nama.length > 100) {
      newErrors.nama = 'Nama harus 3-100 karakter'
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }
    
    // Validate subject
    if (!formData.subjek.trim()) {
      newErrors.subjek = 'Subjek harus diisi'
    } else if (formData.subjek.length < 5 || formData.subjek.length > 150) {
      newErrors.subjek = 'Subjek harus 5-150 karakter'
    }
    
    // Validate message
    if (!formData.pesan.trim()) {
      newErrors.pesan = 'Pesan harus diisi'
    } else if (formData.pesan.length < 20 || formData.pesan.length > 2000) {
      newErrors.pesan = 'Pesan harus 20-2000 karakter'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')
    
    // Validate form
    if (!validateForm()) {
      return
    }
    
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ nama: '', email: '', subjek: '', pesan: '', honeypot: '' })
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setErrorMessage(data.message || 'Terjadi kesalahan. Silakan coba lagi.')
      }
    } catch (error) {
      setErrorMessage('Gagal mengirim pesan. Silakan coba lagi.')
      console.error('Form submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@afternuun.id',
      href: 'mailto:hello@afternuun.id'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '0896-5350-9715',
      href: 'https://wa.me/6289653509715'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      value: 'Yogyakarta, Indonesia',
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
                {/* <div className="pt-6 border-t border-border">
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <a href="https://instagram.com/afternuunindonesia" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Instagram: @afternuunindonesia
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="https://www.afternuunindonesia.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Website: www.afternuunindonesia.id
                      </a>
                    </p>
                  </div>
                </div> */}
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
                        {/* Honeypot field - hidden from users */}
                        <input
                          type="text"
                          name="honeypot"
                          value={formData.honeypot}
                          onChange={handleChange}
                          style={{ display: 'none' }}
                          tabIndex={-1}
                          autoComplete="off"
                        />

                        {errorMessage && (
                          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                            <p className="text-sm text-red-700">{errorMessage}</p>
                          </div>
                        )}

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Nama Lengkap
                          </label>
                          <Input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            placeholder="Nama Anda"
                            className={errors.nama ? 'border-red-500' : ''}
                          />
                          {errors.nama && <p className="text-xs text-red-500 mt-1">{errors.nama}</p>}
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
                            className={errors.email ? 'border-red-500' : ''}
                          />
                          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Subjek
                          </label>
                          <Input
                            type="text"
                            name="subjek"
                            value={formData.subjek}
                            onChange={handleChange}
                            placeholder="Subjek pesan Anda"
                            className={errors.subjek ? 'border-red-500' : ''}
                          />
                          {errors.subjek && <p className="text-xs text-red-500 mt-1">{errors.subjek}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Pesan
                          </label>
                          <textarea
                            name="pesan"
                            value={formData.pesan}
                            onChange={handleChange}
                            placeholder="Tulis pesan Anda di sini..."
                            rows={6}
                            className={`w-full px-3 py-2 border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                              errors.pesan ? 'border-red-500' : 'border-input'
                            }`}
                          />
                          {errors.pesan && <p className="text-xs text-red-500 mt-1">{errors.pesan}</p>}
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
