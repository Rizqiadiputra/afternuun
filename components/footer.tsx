import Link from 'next/link'
import { Instagram, Mail, Globe, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Afternuun Yogyakarta</h3>
            <p className="text-sm text-muted-foreground">
              Rumah keberlanjutan ekosistem Sanggar Nuun.
            </p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>Komunitas Budaya Afternuun Yogyakarta</p>
              <p>SK Menteri Hukum RI Nomor AHU-0004877.AH.01.07.Tahun 2026</p>
              <p>Akta Notaris Nomor 01 tanggal 15 Juni 2026</p>
              <p>Salakan RT 02, Potorono, Banguntapan, Bantul, DIY</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/perihal-kami" className="text-muted-foreground hover:text-primary">
                  Perihal Kami
                </Link>
              </li>
              <li>
                <Link href="/khazanah" className="text-muted-foreground hover:text-primary">
                  Khazanah
                </Link>
              </li>
              <li>
                <Link href="/kenduri" className="text-muted-foreground hover:text-primary">
                  Kenduri
                </Link>
              </li>
              <li>
                <Link href="/risalah" className="text-muted-foreground hover:text-primary">
                  Risalah
                </Link>
              </li>
              <li>
                <Link href="/ruang-srawung" className="text-muted-foreground hover:text-primary">
                  Ruang Srawung
                </Link>
              </li>
              <li>
                <Link href="/dukungan" className="text-muted-foreground hover:text-primary">
                  Dukungan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Hubungi Kami</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:afternuun.id@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                afternuun.id@gmail.com
              </a>
              <a
                href="https://wa.me/6289649719824"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                0896-4971-9824
              </a>
              <a
                href="https://instagram.com/afternuun.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
                @afternuun.id
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Afternuun Yogyakarta. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
