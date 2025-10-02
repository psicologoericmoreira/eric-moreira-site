import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.psicologoericmoreira.com'
  
  // Páginas estáticas
  const staticPages = [
    '',
    '/sobre',
    '/servicos',
    '/blog',
    '/contato',
    '/eventos',
    '/recursos',
    '/faq',
    '/glossario',
    '/privacidade',
    '/depoimentos',
  ]

  // Serviços
  const servicos = [
    'ansiedade',
    'depressao',
    'panico',
    'tdah',
    'estresse',
    'relacionamentos',
    'autoestima',
    'online',
  ]

  // Posts do blog
  const blogPosts = [
    'entendendo-ansiedade',
    'tecnicas-tcc-ansiedade',
    'sinais-depressao',
    'panico-entenda',
    'terapia-online-funciona',
    'autocuidado-saude-mental',
  ]

  // Data atual
  const now = new Date()

  return [
    // Páginas estáticas
    ...staticPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })),

    // Serviços
    ...servicos.map((servico) => ({
      url: `${baseUrl}/servicos/${servico}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),

    // Blog posts
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}




