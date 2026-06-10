export const risalahListQuery = `
  *[_type == "risalah"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    category,
    readTime,
    excerpt,
    image
  }
`

export const risalahBySlugQuery = `
  *[_type == "risalah" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    publishedAt,
    category,
    readTime,
    excerpt,
    image,
    body
  }
`