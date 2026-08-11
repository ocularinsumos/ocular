import { getMessages } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/Seo/JsonLd';
import ProductCTA from '@/components/Productos/ProductCTA';

export async function generateMetadata({ params: { locale } }) {
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const isSpanish = locale === 'es';
  
  const title = isSpanish 
    ? 'Aurolab Auroflex EV Gold | Lente Intraocular Premium con Filtro UV Argentina'
    : 'Aurolab Auroflex EV Gold | Premium UV Filter Intraocular Lens Argentina';
  
  const description = isSpanish
    ? 'Lente intraocular Aurolab Auroflex EV Gold hidrofílico premium con filtro de luz azul y UV. Tecnología de última generación para cirugía de cataratas. Óptica asférica mejorada, biocompatibilidad superior. Certificación ANMAT. Distribuidor oficial en Argentina.'
    : 'Aurolab Auroflex EV Gold premium hydrophilic intraocular lens with blue light and UV filter. Latest generation technology for cataract surgery. Enhanced aspheric optics, superior biocompatibility. ANMAT certified. Official distributor in Argentina.';

  const keywords = isSpanish
    ? 'Aurolab Auroflex EV Gold, lente intraocular premium, lente filtro UV, lente luz azul, Auroflex Gold Argentina, lentes premium Aurolab, cirugía de cataratas premium, LIO hidrofílico, Aurolab Buenos Aires, lente intraocular avanzado, EVGOLD, ANMAT, lente asférico premium'
    : 'Aurolab Auroflex EV Gold, premium intraocular lens, UV filter lens, blue light lens, Auroflex Gold Argentina, Aurolab premium lenses, premium cataract surgery, hydrophilic IOL, Aurolab Buenos Aires, advanced intraocular lens, EVGOLD, ANMAT, premium aspheric lens';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/productos/aurolab-auroflex-ev-gold`,
      languages: {
        'es': `${SITE_URL}/es/productos/aurolab-auroflex-ev-gold`,
        'en': `${SITE_URL}/en/productos/aurolab-auroflex-ev-gold`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/productos/aurolab-auroflex-ev-gold`,
      siteName: 'Ocular Insumos Quirúrgicos',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
      images: [{
        url: 'https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724685417/msz-aurolab-auroflex_gdnoin.webp',
        width: 1200,
        height: 630,
        alt: 'Lente Intraocular Aurolab Auroflex EV Gold',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724685417/msz-aurolab-auroflex_gdnoin.webp'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AurolabAuroflexEVGoldPage({ params: { locale } }) {
  const messages = await getMessages();
  const isSpanish = locale === 'es';
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const pageUrl = `${SITE_URL}/${locale}/productos/aurolab-auroflex-ev-gold`;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isSpanish ? 'Inicio' : 'Home',
        item: `${SITE_URL}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isSpanish ? 'Lentes Intraoculares' : 'Intraocular Lenses',
        item: `${SITE_URL}/${locale}/lentes-intraoculares`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Aurolab Auroflex EV Gold',
        item: pageUrl,
      },
    ],
  };

  // Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': ['Product', 'MedicalDevice'],
    '@id': pageUrl,
    name: 'Aurolab Auroflex EV Gold - Lente Intraocular Premium con Filtro UV',
    description: isSpanish 
      ? 'Lente intraocular monofocal premium hidrofílico con filtro de luz azul y UV. Material: Acrílico hidrofílico de última generación. Diseño asférico avanzado para visión superior. Protección contra daño retiniano. Biocompatibilidad mejorada. Certificado ANMAT.'
      : 'Premium hydrophilic monofocal intraocular lens with blue light and UV filter. Material: Latest generation hydrophilic acrylic. Advanced aspheric design for superior vision. Protection against retinal damage. Enhanced biocompatibility. ANMAT certified.',
    brand: {
      '@type': 'Brand',
      name: 'Aurolab',
      url: 'https://www.aurolab.com',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Aurolab',
      description: isSpanish 
        ? 'Fabricante líder mundial de lentes intraoculares de calidad, fundado por Aravind Eye Care System'
        : 'World-leading manufacturer of quality intraocular lenses, founded by Aravind Eye Care System',
      foundingDate: '1992',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Madurai',
        addressCountry: 'IN',
      },
      url: 'https://www.aurolab.com',
    },
    url: pageUrl,
    image: 'https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724685417/msz-aurolab-auroflex_gdnoin.webp',
    model: 'EV Gold',
    mpn: 'EVGOLD',
    sku: 'AUROLAB-EVGOLD',
    offers: {
      '@type': 'Offer',
      url: pageUrl,
      priceCurrency: 'ARS',
      price: '125000',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Ocular Insumos Quirúrgicos',
        url: SITE_URL,
      },
      priceValidUntil: '2026-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'AR',
        },
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '87',
      bestRating: '5',
      worstRating: '1',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Tipo de Lente' : 'Lens Type',
        value: isSpanish ? 'Monofocal Asférico Premium' : 'Premium Aspheric Monofocal',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Material' : 'Material',
        value: isSpanish ? 'Acrílico Hidrofílico con Filtro UV' : 'Hydrophilic Acrylic with UV Filter',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Diámetro Óptico' : 'Optical Diameter',
        value: '6.0 mm',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Diámetro Total' : 'Overall Diameter',
        value: '13.0 mm',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Diseño' : 'Design',
        value: isSpanish ? '1 Pieza Asférica' : '1-Piece Aspheric',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Rango Dióptrico' : 'Diopter Range',
        value: '+6.00 a +30.00 D',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Filtro' : 'Filter',
        value: isSpanish ? 'Luz Azul y UV' : 'Blue Light and UV',
      },
    ],
    isRelatedTo: [
      {
        '@type': 'MedicalProcedure',
        name: isSpanish ? 'Cirugía de Cataratas' : 'Cataract Surgery',
        procedureType: isSpanish ? 'Facoemulsificación' : 'Phacoemulsification',
      },
    ],
    category: isSpanish ? 'Lentes Intraoculares Premium' : 'Premium Intraocular Lenses',
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Qué diferencia al Auroflex EV Gold de otros lentes intraoculares?'
          : 'What makes the Auroflex EV Gold different from other intraocular lenses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'El Auroflex EV Gold es un lente premium con tecnología de filtro de luz azul y UV incorporado, que protege la retina del daño acumulativo. Además, cuenta con un diseño asférico de última generación que mejora la calidad visual, especialmente en condiciones de baja iluminación. Su biocompatibilidad superior reduce el riesgo de opacificación capsular posterior.'
            : 'The Auroflex EV Gold is a premium lens with built-in blue light and UV filter technology that protects the retina from cumulative damage. It also features a latest-generation aspheric design that improves visual quality, especially in low-light conditions. Its superior biocompatibility reduces the risk of posterior capsular opacification.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Por qué es importante el filtro de luz azul en un lente intraocular?'
          : 'Why is a blue light filter important in an intraocular lens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'La luz azul de alta energía puede causar daño oxidativo acumulativo en la retina, especialmente en la mácula. Los lentes con filtro de luz azul protegen contra este daño, reduciendo el riesgo de degeneración macular relacionada con la edad. Esto es particularmente importante en pacientes jóvenes y aquellos con alta exposición a pantallas digitales.'
            : 'High-energy blue light can cause cumulative oxidative damage to the retina, especially the macula. Lenses with blue light filter protect against this damage, reducing the risk of age-related macular degeneration. This is particularly important in young patients and those with high exposure to digital screens.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Cuál es el precio del lente Aurolab Auroflex EV Gold en Argentina?'
          : 'What is the price of the Aurolab Auroflex EV Gold lens in Argentina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'El precio del lente Aurolab Auroflex EV Gold en Argentina es de ARS $125,000. Este precio incluye el lente premium con filtro UV y luz azul, inyector y sistema de entrega. Para mayores volúmenes o instituciones, ofrecemos precios especiales. Contáctenos por WhatsApp +54 9 11 5237-1300 para consultar disponibilidad y condiciones.'
            : 'The price of the Aurolab Auroflex EV Gold lens in Argentina is ARS $125,000. This price includes the premium lens with UV and blue light filter, injector and delivery system. For larger volumes or institutions, we offer special pricing. Contact us via WhatsApp +54 9 11 5237-1300 to check availability and conditions.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Qué pacientes son candidatos ideales para el Auroflex EV Gold?'
          : 'What patients are ideal candidates for the Auroflex EV Gold?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'El Auroflex EV Gold es ideal para pacientes que buscan la máxima calidad visual post-operatoria y protección retiniana. Especialmente recomendado para: pacientes jóvenes con cataratas, usuarios de computadoras y dispositivos digitales, pacientes con riesgo de degeneración macular, y aquellos que desean la mejor tecnología disponible en lentes monofocales.'
            : 'The Auroflex EV Gold is ideal for patients seeking maximum post-operative visual quality and retinal protection. Especially recommended for: young patients with cataracts, computer and digital device users, patients at risk of macular degeneration, and those who want the best available technology in monofocal lenses.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿El lente Auroflex EV Gold está certificado en Argentina?'
          : 'Is the Auroflex EV Gold lens certified in Argentina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'Sí, el lente Aurolab Auroflex EV Gold cuenta con certificación ANMAT (Administración Nacional de Medicamentos, Alimentos y Tecnología Médica) para su comercialización en Argentina. Además, cumple con estándares internacionales ISO 13485, marca CE europea y aprobación FDA. Aurolab es un fabricante reconocido mundialmente con más de 30 millones de implantes realizados.'
            : 'Yes, the Aurolab Auroflex EV Gold lens has ANMAT (National Administration of Medicines, Food and Medical Technology) certification for commercialization in Argentina. It also complies with international standards ISO 13485, European CE mark and FDA approval. Aurolab is a world-renowned manufacturer with over 30 million implants performed.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Dónde comprar el lente Auroflex EV Gold en Argentina?'
          : 'Where to buy the Auroflex EV Gold lens in Argentina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'Ocular Insumos Quirúrgicos es distribuidor oficial de Aurolab en Argentina. Tenemos stock permanente del Auroflex EV Gold en Buenos Aires y realizamos envíos a todo el país. Contáctenos: WhatsApp +54 9 11 5237-1300, Email: info@ocularinsumos.com. Visitanos en Rincón 1203 esq. Av. San Juan, CABA. Horario: Lunes a Viernes 7:00-15:00hs.'
            : 'Ocular Insumos Quirúrgicos is the official Aurolab distributor in Argentina. We have permanent stock of the Auroflex EV Gold in Buenos Aires and ship nationwide. Contact us: WhatsApp +54 9 11 5237-1300, Email: info@ocularinsumos.com. Visit us at Rincón 1203 corner Av. San Juan, CABA. Hours: Monday to Friday 7:00-15:00hs.',
        },
      },
    ],
  };

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={productSchema} />
      <JsonLd schema={faqSchema} />

      <article className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href={`/${locale}`} className="hover:text-primary">
            {isSpanish ? 'Inicio' : 'Home'}
          </Link>
          <span>/</span>
          <Link href={`/${locale}/lentes-intraoculares`} className="hover:text-primary">
            {isSpanish ? 'Lentes Intraoculares' : 'Intraocular Lenses'}
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">Aurolab Auroflex EV Gold</span>
        </div>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⭐ {isSpanish ? 'PREMIUM GOLD EDITION' : 'PREMIUM GOLD EDITION'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Aurolab Auroflex EV Gold
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            {isSpanish 
              ? 'Lente Intraocular Premium con Filtro de Luz Azul y UV'
              : 'Premium Intraocular Lens with Blue Light and UV Filter'}
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {isSpanish ? 'Stock Permanente' : 'Permanent Stock'}
            </span>
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              {isSpanish ? 'Certificado ANMAT' : 'ANMAT Certified'}
            </span>
          </div>
        </header>

        {/* Características Premium */}
        <section className="mb-16 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-yellow-200">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            {isSpanish ? '✨ Características Premium Gold' : '✨ Premium Gold Features'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🛡️</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Filtro de Luz Azul y UV' : 'Blue Light & UV Filter'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Protección total contra radiación UV y luz azul dañina. Reduce el riesgo de degeneración macular y protege la retina del daño oxidativo acumulativo.'
                      : 'Complete protection against UV radiation and harmful blue light. Reduces risk of macular degeneration and protects the retina from cumulative oxidative damage.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
              <div className="flex items-start gap-3">
                <div className="text-3xl">👁️</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Óptica Asférica Avanzada' : 'Advanced Aspheric Optics'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Diseño asférico de última generación que minimiza aberraciones esféricas y mejora significativamente la calidad visual, especialmente en condiciones de baja iluminación.'
                      : 'Latest generation aspheric design that minimizes spherical aberrations and significantly improves visual quality, especially in low-light conditions.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🔬</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Biocompatibilidad Superior' : 'Superior Biocompatibility'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Material acrílico hidrofílico de última generación con biocompatibilidad mejorada. Menor riesgo de opacificación capsular posterior y reacciones inflamatorias.'
                      : 'Latest generation hydrophilic acrylic material with enhanced biocompatibility. Lower risk of posterior capsular opacification and inflammatory reactions.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
              <div className="flex items-start gap-3">
                <div className="text-3xl">💎</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Tecnología Premium' : 'Premium Technology'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Construcción de 1 pieza que garantiza estabilidad rotacional y centraje óptimo. Hápticos flexibles que se adaptan perfectamente al saco capsular.'
                      : '1-piece construction ensuring rotational stability and optimal centration. Flexible haptics that perfectly adapt to the capsular bag.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Especificaciones Técnicas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {isSpanish ? '📋 Especificaciones Técnicas' : '📋 Technical Specifications'}
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Modelo' : 'Model'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">Auroflex EV Gold</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Código del Producto' : 'Product Code'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">EVGOLD</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Tipo de Lente' : 'Lens Type'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Monofocal Asférico Premium con Filtro' : 'Premium Aspheric Monofocal with Filter'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Material' : 'Material'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Acrílico Hidrofílico con Filtro UV y Luz Azul' : 'Hydrophilic Acrylic with UV and Blue Light Filter'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Diseño' : 'Design'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? '1 Pieza Asférica' : '1-Piece Aspheric'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Diámetro Óptico' : 'Optical Diameter'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">6.0 mm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Diámetro Total' : 'Overall Diameter'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">13.0 mm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Rango Dióptrico' : 'Diopter Range'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">+6.00 a +30.00 D (incrementos de 0.50 D)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Constante A' : 'A Constant'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">118.5</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Índice de Refracción' : 'Refractive Index'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">1.46</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Filtración' : 'Filter'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'UV (280-400nm) + Luz Azul (400-500nm)' : 'UV (280-400nm) + Blue Light (400-500nm)'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Incisión Requerida' : 'Required Incision'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">2.2 - 2.8 mm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Contenido del Paquete' : 'Package Contents'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish 
                      ? 'Lente plegado precargado en inyector + Sistema de carga'
                      : 'Preloaded folded lens in injector + Loading system'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Esterilización' : 'Sterilization'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Óxido de Etileno (ETO)' : 'Ethylene Oxide (ETO)'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ventajas Clínicas */}
        <section className="mb-16 bg-blue-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {isSpanish ? '⚕️ Ventajas Clínicas' : '⚕️ Clinical Advantages'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Protección Retiniana' : 'Retinal Protection'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Filtro incorporado que bloquea luz azul dañina y radiación UV, protegiendo contra degeneración macular'
                    : 'Built-in filter that blocks harmful blue light and UV radiation, protecting against macular degeneration'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Calidad Visual Superior' : 'Superior Visual Quality'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Diseño asférico avanzado que reduce aberraciones y mejora contraste y agudeza visual'
                    : 'Advanced aspheric design that reduces aberrations and improves contrast and visual acuity'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Menor Opacificación Capsular' : 'Lower Capsular Opacification'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Material con biocompatibilidad mejorada que reduce significativamente la opacificación capsular posterior'
                    : 'Material with enhanced biocompatibility that significantly reduces posterior capsular opacification'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Estabilidad Excelente' : 'Excellent Stability'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Diseño de 1 pieza con hápticos flexibles que garantiza centraje óptimo y estabilidad a largo plazo'
                    : '1-piece design with flexible haptics that ensures optimal centration and long-term stability'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Implantación Sencilla' : 'Easy Implantation'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Sistema de inyección precargado que facilita la implantación a través de incisiones mínimas'
                    : 'Preloaded injection system that facilitates implantation through minimal incisions'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Visión Nocturna Mejorada' : 'Improved Night Vision'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Óptica optimizada que mejora la visión en condiciones de baja iluminación y reduce halos'
                    : 'Optimized optics that improve vision in low-light conditions and reduce halos'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fabricante */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {isSpanish ? '🏭 Sobre el Fabricante: Aurolab' : '🏭 About the Manufacturer: Aurolab'}
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Aurolab - {isSpanish ? 'Líder Mundial en Oftalmología' : 'World Leader in Ophthalmology'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {isSpanish 
                    ? 'Aurolab, fundada en 1992 por Aravind Eye Care System en Madurai, India, es reconocida mundialmente por fabricar lentes intraoculares de alta calidad a precios accesibles. Su misión de "eliminar la ceguera evitable en el mundo" la ha convertido en uno de los mayores fabricantes de dispositivos oftálmicos.'
                    : 'Aurolab, founded in 1992 by Aravind Eye Care System in Madurai, India, is globally recognized for manufacturing high-quality intraocular lenses at accessible prices. Its mission to "eliminate avoidable blindness in the world" has made it one of the largest manufacturers of ophthalmic devices.'}
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary">1992</div>
                    <div className="text-sm text-gray-600">{isSpanish ? 'Fundación' : 'Founded'}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary">30M+</div>
                    <div className="text-sm text-gray-600">{isSpanish ? 'Implantes' : 'Implants'}</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <span>🏆</span> {isSpanish ? 'Certificaciones Internacionales' : 'International Certifications'}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> ISO 13485 - {isSpanish ? 'Gestión de Calidad' : 'Quality Management'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> CE Mark - {isSpanish ? 'Conformidad Europea' : 'European Conformity'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> FDA - {isSpanish ? 'Aprobación EE.UU.' : 'U.S. Approval'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> ANMAT - {isSpanish ? 'Certificación Argentina' : 'Argentina Certification'}
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <span>🌍</span> {isSpanish ? 'Alcance Global' : 'Global Reach'}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {isSpanish 
                      ? 'Productos distribuidos en más de 130 países, con presencia en todos los continentes. Reconocido por la OMS por su contribución a la salud ocular mundial.'
                      : 'Products distributed in over 130 countries, with presence on all continents. Recognized by WHO for its contribution to global eye health.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Precio y Disponibilidad */}
        <section className="mb-16 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-200">

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="pt-6 space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">
                    {isSpanish ? 'Stock permanente en Buenos Aires' : 'Permanent stock in Buenos Aires'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">
                    {isSpanish ? 'Envíos a todo el país' : 'Nationwide shipping'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">
                    {isSpanish ? 'Precios especiales por volumen' : 'Special volume pricing'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">
                    {isSpanish ? 'Asesoramiento técnico incluido' : 'Technical advice included'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <ProductCTA 
          productName="Aurolab Auroflex EV Gold" 
          productCode="EVGOLD" 
          locale={locale} 
          isSpanish={isSpanish} 
        />

        {/* Links relacionados */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {isSpanish ? '🔗 Ver También' : '🔗 See Also'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href={`/${locale}/lentes-intraoculares`}
              className="bg-blue-100 hover:bg-blue-200 text-primary font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {isSpanish ? '← Todos los Lentes Intraoculares' : '← All Intraocular Lenses'}
            </Link>
            <Link 
              href={`/${locale}/marcas`}
              className="bg-purple-100 hover:bg-purple-200 text-primary font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {isSpanish ? 'Ver Todas las Marcas' : 'View All Brands'}
            </Link>
            <Link 
              href={`/${locale}/productos/aurolab-auroflex`}
              className="bg-yellow-100 hover:bg-yellow-200 text-primary font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {isSpanish ? 'Auroflex Estándar →' : 'Standard Auroflex →'}
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
