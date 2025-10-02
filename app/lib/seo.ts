// SEO Configuration and Schema Markup para Next.js
// Adaptado para Next.js 15 com Metadata API

import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  schema?: Record<string, unknown>;
}

export const DEFAULT_SEO: SEOConfig = {
  title: "Psicólogo TCC Online | Eric Moreira | Ansiedade, Depressão | Belo Horizonte",
  description: "Psicólogo especialista em Terapia Cognitivo-Comportamental (TCC). Atendimento online para todo o Brasil. Tratamento para ansiedade, depressão, pânico, TDAH e mais. Agende sua sessão.",
  keywords: "psicólogo TCC online, terapia cognitivo comportamental, psicólogo para ansiedade, psicólogo Belo Horizonte, TCC online, tratamento ansiedade, tratamento depressão, Eric Moreira psicólogo",
  ogImage: "/images/og-image.jpg",
};

// Helper para criar metadata do Next.js
export function createMetadata(config: Partial<SEOConfig>): Metadata {
  const seo = { ...DEFAULT_SEO, ...config };
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage || DEFAULT_SEO.ogImage!],
      type: "website",
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage || DEFAULT_SEO.ogImage!],
    },
    alternates: {
      canonical: seo.canonical,
    },
  };
}

// Psychologist Schema Markup (Schema.org)
export const psychologistSchema = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Eric Moreira",
  jobTitle: "Psicólogo Clínico",
  description: "Psicólogo especialista em Terapia Cognitivo-Comportamental (TCC) com atendimento online e presencial em Belo Horizonte",
  url: "https://www.psicologoericmoreira.com",
  image: "https://www.psicologoericmoreira.com/images/eric-moreira.jpg",
  email: "ericmoreira6@gmail.com",
  telephone: "+5531995808387",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Terapia Cognitivo-Comportamental",
    "Ansiedade",
    "Depressão",
    "Transtorno de Pânico",
    "TDAH",
    "TOC",
    "Terapia Online",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Universidade",
  },
};

// Medical Service Schema
export const medicalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Eric Moreira - Psicólogo TCC",
  description: "Atendimento psicológico especializado em Terapia Cognitivo-Comportamental",
  url: "https://www.psicologoericmoreira.com",
  telephone: "+5531995808387",
  email: "ericmoreira6@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  medicalSpecialty: "Psychology",
  availableService: {
    "@type": "MedicalTherapy",
    name: "Terapia Cognitivo-Comportamental",
    description: "Tratamento especializado para ansiedade, depressão, pânico, TDAH e outras condições",
  },
  priceRange: "$$",
};

// Local Business Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Eric Moreira - Psicólogo TCC",
  description: "Psicólogo especialista em TCC com atendimento online e presencial em Belo Horizonte",
  url: "https://www.psicologoericmoreira.com",
  telephone: "+5531995808387",
  email: "ericmoreira6@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    postalCode: "",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-19.9191",
    longitude: "-43.9386",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  image: "https://www.psicologoericmoreira.com/images/eric-moreira.jpg",
};

// Service-specific schemas
export const createServiceSchema = (
  serviceName: string,
  description: string,
  condition: string
) => ({
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: serviceName,
  description: description,
  relevantSpecialty: "Psychology",
  recognizingAuthority: {
    "@type": "Organization",
    name: "Conselho Federal de Psicologia",
  },
  treatmentIndication: {
    "@type": "MedicalCondition",
    name: condition,
  },
  provider: {
    "@type": "Psychologist",
    name: "Eric Moreira",
    url: "https://www.psicologoericmoreira.com",
  },
});

// FAQ Schema
export const createFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// Blog Article Schema
export const createArticleSchema = (
  title: string,
  description: string,
  datePublished: string,
  imageUrl: string
) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description: description,
  image: imageUrl,
  datePublished: datePublished,
  dateModified: datePublished,
  author: {
    "@type": "Person",
    name: "Eric Moreira",
    jobTitle: "Psicólogo Clínico",
    url: "https://www.psicologoericmoreira.com/sobre",
  },
  publisher: {
    "@type": "Organization",
    name: "Eric Moreira - Psicólogo TCC",
    logo: {
      "@type": "ImageObject",
      url: "https://www.psicologoericmoreira.com/images/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.psicologoericmoreira.com/blog/${title.toLowerCase().replace(/\s+/g, "-")}`,
  },
});

// Breadcrumb Schema
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Helper para criar JSON-LD (usar em componentes)
export function createJsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data)
  };
}
