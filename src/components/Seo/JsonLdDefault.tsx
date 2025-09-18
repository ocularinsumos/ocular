// components/Seo/JsonLdDefault.tsx
'use client';

export default function JsonLdDefault() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalSupplyStore",
    "@id": "https://ocularinsumosquirurgicos.com/",
    "name": "Ocular Insumos Quirúrgicos",
    "url": "https://ocularinsumosquirurgicos.com/",
    "description": "Insumos quirúrgicos para cirugía oftalmológica (cataratas, retina, glaucoma, etc.). Atención a profesionales, pacientes e instituciones.",
    "telephone": "+54 11 5237-1300",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rincón 1203, esquina Av. San Juan",
      "addressLocality": "Ciudad Autónoma de Buenos Aires",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "07:00",
        "closes": "15:00"
      }
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "customer support",
      "telephone": "+54 11 5237-1300",
      "email": "ocularinsumosquirurgicos@gmail.com",
      "areaServed": "AR",
      "availableLanguage": ["es", "en"]
    }],
    "sameAs": [
      "https://www.instagram.com/ocularinsumosquirurgicos/",
      "https://wa.me/+5491152371300?text=%C2%A1Cont%C3%A1ctanos!"
    ],
    "paymentAccepted": ["Cash","CreditCard","DebitCard","MercadoPago"],
    "currenciesAccepted": "ARS"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
