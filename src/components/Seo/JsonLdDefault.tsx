// components/Seo/JsonLdDefault.tsx
'use client';

export default function JsonLdDefault({ locale = 'es' }) {
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const isSpanish = locale === 'es';

  // Main Organization Schema with Medical Business and Local Business properties
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "MedicalSupplyStore"],
    "@id": `${SITE_URL}/#organization`,
    "name": "Ocular Insumos Quirúrgicos",
    "alternateName": "Ocular",
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/images/logos/logo.webp`,
      "width": 250,
      "height": 60
    },
    "image": `${SITE_URL}/images/logos/logo.webp`,
    "description": isSpanish
      ? "Empresa líder en insumos quirúrgicos oftalmológicos en Argentina. Más de 20 años proveyendo productos de calidad para cirugía de cataratas, retina, glaucoma y córnea."
      : "Leading ophthalmic surgical supplies company in Argentina. Over 20 years providing quality products for cataract, retina, glaucoma and cornea surgery.",
    "foundingDate": "2000",
    "telephone": "+54-11-5237-1300",
    "email": "ocularinsumosquirurgicos@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rincón 1203, esquina Av. San Juan",
      "addressLocality": "Ciudad Autónoma de Buenos Aires",
      "addressRegion": "Buenos Aires",
      "postalCode": "C1282",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-34.6220",
      "longitude": "-58.3814"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "07:00",
        "closes": "15:00"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+54-11-5237-1300",
        "email": "ocularinsumosquirurgicos@gmail.com",
        "areaServed": "AR",
        "availableLanguage": ["Spanish", "English"],
        "contactOption": "TollFree",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "07:00",
          "closes": "15:00"
        }
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "telephone": "+54-11-5237-1300",
        "areaServed": "AR",
        "availableLanguage": ["Spanish", "English"]
      }
    ],
    "sameAs": [
      "https://www.instagram.com/ocularinsumosquirurgicos/",
      "https://wa.me/5491152371300"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash","Credit Card","Debit Card","MercadoPago"],
    "currenciesAccepted": "ARS",
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-34.6220",
        "longitude": "-58.3814"
      },
      "geoRadius": "1000000"
    },
    "knowsAbout": [
      "Ophthalmic Surgery",
      "Cataract Surgery",
      "Retina Surgery",
      "Glaucoma Surgery",
      "Corneal Surgery",
      "Intraocular Lenses",
      "Medical Supplies"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "120",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "url": SITE_URL,
    "name": "Ocular Insumos Quirúrgicos",
    "description": isSpanish
      ? "Proveedor de insumos quirúrgicos oftalmológicos"
      : "Ophthalmic surgical supplies provider",
    "publisher": {
      "@id": `${SITE_URL}/#organization`
    },
    "inLanguage": ["es-AR", "en-US"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb Schema for Homepage
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isSpanish ? "Inicio" : "Home",
        "item": `${SITE_URL}/${locale}`
      }
    ]
  };

  const schemas = [organizationSchema, websiteSchema, breadcrumbSchema];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
