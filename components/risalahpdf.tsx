'use client'

import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
  pdf,
} from '@react-pdf/renderer'

// ─── Types ────────────────────────────────────────────────────────────────────

type PortableTextBlock = {
  _type: string
  _key: string
  style?: string
  children?: Array<{ _type: string; text: string; marks?: string[] }>
  markDefs?: any[]
}

type RisalahDetail = {
  _id: string
  title: string
  slug: { current: string }
  author: string
  publishedAt: string
  category: string
  readTime: number
  excerpt: string
  image?: any
  body: PortableTextBlock[]
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 72,
    paddingHorizontal: 60,
    backgroundColor: '#FDFAF6',
    fontFamily: 'Helvetica',
  },
  // Header
  header: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E5DDD3',
    paddingBottom: 16,
  },
  siteName: {
    fontSize: 9,
    letterSpacing: 2,
    color: '#8B7355',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  category: {
    fontSize: 9,
    color: '#A89070',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  // Hero image
  heroImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    marginBottom: 24,
    borderRadius: 4,
  },
  // Article header
  title: {
    fontSize: 26,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1208',
    lineHeight: 1.35,
    marginBottom: 16,
  },
  meta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#D4C9B8',
  },
  metaItem: {
    fontSize: 9,
    color: '#8B7355',
    letterSpacing: 0.5,
  },
  // Body
  excerpt: {
    fontSize: 11,
    color: '#4A3F2F',
    lineHeight: 1.7,
    fontFamily: 'Helvetica-Oblique',
    marginBottom: 20,
    paddingLeft: 12,
    borderLeftWidth: 2,
    borderLeftColor: '#C4A882',
  },
  paragraph: {
    fontSize: 10.5,
    color: '#2D2417',
    lineHeight: 1.8,
    marginBottom: 10,
    fontFamily: 'Helvetica',
  },
  h1: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1208',
    marginTop: 20,
    marginBottom: 8,
  },
  h2: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1208',
    marginTop: 18,
    marginBottom: 8,
  },
  h3: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: '#2D2417',
    marginTop: 14,
    marginBottom: 6,
  },
  blockquote: {
    fontSize: 10.5,
    color: '#6B5A45',
    lineHeight: 1.8,
    fontFamily: 'Helvetica-Oblique',
    marginVertical: 12,
    paddingLeft: 12,
    paddingVertical: 4,
    borderLeftWidth: 2,
    borderLeftColor: '#C4A882',
  },
  listItem: {
    fontSize: 10.5,
    color: '#2D2417',
    lineHeight: 1.8,
    marginBottom: 4,
    paddingLeft: 12,
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 32,
    left: 60,
    right: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#D4C9B8',
    paddingTop: 8,
  },
  footerText: {
    fontSize: 8,
    color: '#A89070',
    letterSpacing: 0.5,
  },
  pageNumber: {
    fontSize: 8,
    color: '#A89070',
  },
  // Author card
  authorCard: {
    marginTop: 32,
    padding: 16,
    backgroundColor: '#F0E8DC',
    borderRadius: 4,
  },
  authorLabel: {
    fontSize: 8,
    color: '#8B7355',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  authorName: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1208',
  },
})

// ─── Portable Text Renderer ───────────────────────────────────────────────────

function renderBlock(block: PortableTextBlock, index: number) {
  if (!block.children) return null

  const text = block.children.map((child) => child.text).join('')

  switch (block.style) {
    case 'h1':
      return <Text key={index} style={styles.h1}>{text}</Text>
    case 'h2':
      return <Text key={index} style={styles.h2}>{text}</Text>
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return <Text key={index} style={styles.h3}>{text}</Text>
    case 'blockquote':
      return <Text key={index} style={styles.blockquote}>{text}</Text>
    default:
      return text ? (
        <Text key={index} style={styles.paragraph}>{text}</Text>
      ) : null
  }
}

function renderBody(body: PortableTextBlock[]) {
  if (!body) return null
  return body.map((block, index) => {
    if (block._type === 'block') {
      return renderBlock(block, index)
    }
    return null
  })
}

// ─── PDF Document ─────────────────────────────────────────────────────────────

function RisalahDocument({ article, imageUrl }: { article: RisalahDetail; imageUrl?: string }) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Document
      title={article.title}
      author={article.author}
      subject={article.category}
      creator="Afternuun"
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.siteName}>Afternuun · Risalah</Text>
          <Text style={styles.category}>{article.category}</Text>
        </View>

        {/* Hero Image */}
        {imageUrl && (
          <Image src={imageUrl} style={styles.heroImage} />
        )}

        {/* Title */}
        <Text style={styles.title}>{article.title}</Text>

        {/* Meta */}
        <View style={styles.meta}>
          <Text style={styles.metaItem}>{article.author}</Text>
          <Text style={styles.metaItem}>·</Text>
          <Text style={styles.metaItem}>{formattedDate}</Text>
          <Text style={styles.metaItem}>·</Text>
          <Text style={styles.metaItem}>{article.readTime} min baca</Text>
        </View>

        {/* Excerpt */}
        {article.excerpt && (
          <Text style={styles.excerpt}>{article.excerpt}</Text>
        )}

        {/* Body */}
        <View>
          {renderBody(article.body)}
        </View>

        {/* Author Card */}
        <View style={styles.authorCard}>
          <Text style={styles.authorLabel}>Penulis</Text>
          <Text style={styles.authorName}>{article.author}</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>afternuun.id · {article.title}</Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          />
        </View>
      </Page>
    </Document>
  )
}

// ─── Download Handler ─────────────────────────────────────────────────────────

export async function downloadRisalahPDF(article: RisalahDetail, imageUrl?: string) {
  const blob = await pdf(
    <RisalahDocument article={article} imageUrl={imageUrl} />
  ).toBlob()

  const fileName = article.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${fileName}.pdf`
  link.click()
  URL.revokeObjectURL(url)
}
