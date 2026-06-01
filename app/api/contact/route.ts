import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiting (per-session based on IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nama, email, subjek, pesan, honeypot } = body

    // Check honeypot field
    if (honeypot) {
      return NextResponse.json(
        { message: 'Form submission failed' },
        { status: 400 }
      )
    }

    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Rate limiting: 3 submissions per 10 minutes
    const now = Date.now()
    const rateLimitData = rateLimitMap.get(ip)

    if (rateLimitData) {
      if (now < rateLimitData.resetTime) {
        if (rateLimitData.count >= 3) {
          return NextResponse.json(
            { message: 'Terlalu banyak pengajuan. Silakan coba lagi dalam 10 menit.' },
            { status: 429 }
          )
        }
        rateLimitData.count += 1
      } else {
        rateLimitMap.set(ip, { count: 1, resetTime: now + 10 * 60 * 1000 })
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + 10 * 60 * 1000 })
    }

    // Validate input
    const nameRegex = /^[a-zA-Z\s]+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!nama || !nama.match(nameRegex) || nama.length < 3 || nama.length > 100) {
      return NextResponse.json(
        { message: 'Nama harus berisi 3-100 karakter (hanya huruf dan spasi)' },
        { status: 400 }
      )
    }

    if (!email || !email.match(emailRegex)) {
      return NextResponse.json(
        { message: 'Format email tidak valid' },
        { status: 400 }
      )
    }

    if (!subjek || subjek.length < 5 || subjek.length > 150) {
      return NextResponse.json(
        { message: 'Subjek harus berisi 5-150 karakter' },
        { status: 400 }
      )
    }

    if (!pesan || pesan.length < 20 || pesan.length > 2000) {
      return NextResponse.json(
        { message: 'Pesan harus berisi 20-2000 karakter' },
        { status: 400 }
      )
    }

    // Sanitize input (basic HTML/script removal)
    const sanitizedNama = nama.replace(/[<>]/g, '')
    const sanitizedEmail = email.trim().toLowerCase()
    const sanitizedSubjek = subjek.replace(/[<>]/g, '')
    const sanitizedPesan = pesan.replace(/[<>]/g, '')

    // For this implementation, we'll just return success
    // In production, you would integrate with Resend or Nodemailer here
    // Example with environment variables:
    // const apiKey = process.env.RESEND_API_KEY
    // Send email using Resend or similar service
    
    console.log('Contact form submission:', {
      nama: sanitizedNama,
      email: sanitizedEmail,
      subjek: sanitizedSubjek,
      pesan: sanitizedPesan,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        success: true,
        message: 'Terima kasih atas pesan Anda. Kami akan menghubungi Anda segera.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Terjadi kesalahan. Silakan coba lagi.' },
      { status: 500 }
    )
  }
}
