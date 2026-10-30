import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import GalleryClient from './gallery-client'

export const metadata = {
  title: 'Galeri - Afternuun Yogyakarta',
  description: 'Jelajahi galeri foto dan video dari berbagai kegiatan, pameran, dan program Afternuun Yogyakarta.'
}

export default function Galeri() {
  return (
    <>
      <Navigation />
      <GalleryClient />
      <Footer />
    </>
  )
}
