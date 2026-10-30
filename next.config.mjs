/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/khazanah/:path*', destination: '/literasi/:path*', permanent: true },
      { source: '/kenduri/:path*', destination: '/program/:path*', permanent: true },
      { source: '/risalah/:path*', destination: '/artikel/:path*', permanent: true },
      { source: '/srawung/:path*', destination: '/jejaring', permanent: true },
      { source: '/jejaring/:slug', destination: '/jejaring', permanent: true },
      { source: '/ruang-srawung', destination: '/jejaring', permanent: true },
      { source: '/dukungan', destination: '/kerjasama', permanent: true },
    ]
  },
}

export default nextConfig
