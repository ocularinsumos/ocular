// Utility functions for generating SEO metadata across the site
const SITE_URL = 'https://ocularinsumosquirurgicos.com';

export const siteConfig = {
  name: 'Ocular Insumos Quirúrgicos',
  shortName: 'Ocular',
  description: {
    es: 'Empresa líder en insumos quirúrgicos oftalmológicos en Argentina. Más de 20 años de experiencia.',
    en: 'Leading ophthalmic surgical supplies company in Argentina. Over 20 years of experience.',
  },
  url: SITE_URL,
  ogImage: `${SITE_URL}/images/logos/logo.webp`,
  links: {
    instagram: 'https://www.instagram.com/ocularinsumosquirurgicos/',
    whatsapp: 'https://wa.me/5491152371300',
  },
  contact: {
    phone: '+54-11-5237-1300',
    phoneDisplay: '(+54) 11 5237-1300',
    email: 'info@ocularinsumos.com',
  },
  address: {
    street: 'Rincón 1203, esquina Av. San Juan',
    city: 'Ciudad Autónoma de Buenos Aires',
    region: 'Buenos Aires',
    postalCode: 'C1282',
    country: 'AR',
    countryName: 'Argentina',
  },
  geo: {
    latitude: '-34.6220',
    longitude: '-58.3814',
  },
};

export function generateMetadata({ 
  title, 
  description, 
  path = '', 
  locale = 'es',
  type = 'website',
  images = [],
  keywords = '',
}) {
  const isSpanish = locale === 'es';
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;
  
  const fullDescription = description || siteConfig.description[locale];
  const canonical = `${SITE_URL}/${locale}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords,
    authors: [{ name: siteConfig.name }],
    creator: 'Gonzalo Torres Grau',
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical,
      languages: {
        'es': `${SITE_URL}/es${path}`,
        'en': `${SITE_URL}/en${path}`,
        'x-default': `${SITE_URL}${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type,
      images: images.length > 0 ? images : [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: images.length > 0 ? images.map(img => img.url) : [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateBreadcrumbSchema({ items, locale = 'es' }) {
  const SITE = SITE_URL;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${SITE}${item.url}` : undefined,
    })),
  };
}

export function generateProductSchema({ 
  name, 
  description, 
  image, 
  url,
  sku,
  brand = siteConfig.name,
  offers = null,
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    url,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
  };

  if (sku) {
    schema.sku = sku;
  }

  if (offers) {
    schema.offers = {
      '@type': 'Offer',
      ...offers,
      seller: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    };
  }

  return schema;
}

export function generateFAQSchema(faqItems, locale = 'es') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
