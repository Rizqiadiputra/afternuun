import Link from 'next/link'
import { Instagram, Mail, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Afternuun Indonesia</h3>
            <p className="text-sm text-muted-foreground">
              Ruang kolektif lintas generasi untuk seni, pengetahuan, arsip, dan keberlanjutan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tentang-kami" className="text-muted-foreground hover:text-primary">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kegiatan" className="text-muted-foreground hover:text-primary">
                  Kegiatan & Program
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-muted-foreground hover:text-primary">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="text-muted-foreground hover:text-primary">
                  Artikel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Hubungi Kami</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@afternuunindonesia.id"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                hello@afternuunindonesia.id
              </a>
              <a
                href="https://instagram.com/afternuunindonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
                @afternuunindonesia
              </a>
              <a
                href="https://www.afternuunindonesia.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Globe className="h-4 w-4" />
                www.afternuunindonesia.id
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Afternuun Indonesia. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
