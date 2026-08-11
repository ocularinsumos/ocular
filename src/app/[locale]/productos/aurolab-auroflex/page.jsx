import { getMessages } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/Seo/JsonLd';
import ProductCTA from '@/components/Productos/ProductCTA';
import ContactButton from '@/components/Contact/ContactButton';

export async function generateMetadata({ params: { locale } }) {
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const isSpanish = locale === 'es';
  
  const title = isSpanish 
    ? 'Aurolab Auroflex Asférico | Lente Intraocular Premium Argentina'
    : 'Aurolab Auroflex Aspheric | Premium Intraocular Lens Argentina';
  
  const description = isSpanish
    ? 'Lente intraocular Aurolab Auroflex Asférico hidrofílico de 1 pieza para cirugía de cataratas. Alta calidad, diseño asférico, con inyector incluido. Certificación ANMAT. Distribuidor oficial en Argentina. Stock permanente en Buenos Aires.'
    : 'Aurolab Auroflex Aspheric hydrophilic 1-piece intraocular lens for cataract surgery. High quality, aspheric design, injector included. ANMAT certified. Official distributor in Argentina. Permanent stock in Buenos Aires.';

  const keywords = isSpanish
    ? 'Aurolab Auroflex, lente intraocular Aurolab, Auroflex asférico, lentes Aurolab Argentina, lente hidrofílico, lente monofocal asférico, cirugía de cataratas, LIO Aurolab, Aurolab Buenos Aires, comprar Aurolab, precio Aurolab, FH5600SQ, lente intraocular premium, ANMAT'
    : 'Aurolab Auroflex, Aurolab intraocular lens, Auroflex aspheric, Aurolab lenses Argentina, hydrophilic lens, aspheric monofocal lens, cataract surgery, Aurolab IOL, Aurolab Buenos Aires, buy Aurolab, Aurolab price, FH5600SQ, premium intraocular lens, ANMAT';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/productos/aurolab-auroflex`,
      languages: {
        'es': `${SITE_URL}/es/productos/aurolab-auroflex`,
        'en': `${SITE_URL}/en/productos/aurolab-auroflex`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/productos/aurolab-auroflex`,
      siteName: 'Ocular Insumos Quirúrgicos',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
      images: [{
        url: 'https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724685417/msz-aurolab-auroflex_gdnoin.webp',
        width: 1200,
        height: 630,
        alt: 'Lente Intraocular Aurolab Auroflex Asférico',
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

export default async function AurolabAuroflexPage({ params: { locale } }) {
  const messages = await getMessages();
  const isSpanish = locale === 'es';
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const pageUrl = `${SITE_URL}/${locale}/productos/aurolab-auroflex`;

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
        name: 'Aurolab Auroflex',
        item: pageUrl,
      },
    ],
  };

  // Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': ['Product', 'MedicalDevice'],
    '@id': pageUrl,
    name: 'Aurolab Auroflex Asférico - Lente Intraocular Hidrofílico',
    description: isSpanish 
      ? 'Lente intraocular monofocal asférico hidrofílico de 1 pieza para cirugía de cataratas. Material: Acrílico hidrofílico. Diseño asférico que reduce aberraciones. Incluye inyector para implantación segura. Certificado ANMAT.'
      : 'Hydrophilic aspheric monofocal intraocular lens, 1-piece for cataract surgery. Material: Hydrophilic acrylic. Aspheric design that reduces aberrations. Includes injector for safe implantation. ANMAT certified.',
    image: 'https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724685417/msz-aurolab-auroflex_gdnoin.webp',
    brand: {
      '@type': 'Brand',
      name: 'Aurolab',
      url: 'https://www.aurolab.com',
      logo: 'https://www.aurolab.com/images/logo.png',
      description: isSpanish 
        ? 'Aurolab - Fabricante líder mundial de lentes intraoculares de calidad desde 1992. Más de 30 millones de lentes implantados globalmente.'
        : 'Aurolab - World leading manufacturer of quality intraocular lenses since 1992. Over 30 million lenses implanted globally.'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Aurolab',
      url: 'https://www.aurolab.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: 'Madurai'
      }
    },
    model: 'FH5600SQ',
    sku: 'FH5600SQ',
    mpn: 'FH5600SQ',
    category: isSpanish ? 'Lentes Intraoculares Monofocales' : 'Monofocal Intraocular Lenses',
    offers: {
      '@type': 'Offer',
      price: '85000',
      priceCurrency: 'ARS',
      availability: 'https://schema.org/InStock',
      seller: {
        '@id': `${SITE_URL}/#organization`
      },
      priceValidUntil: '2026-12-31',
      url: pageUrl,
      itemCondition: 'https://schema.org/NewCondition',
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'AR'
        }
      }
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Tipo de Lente' : 'Lens Type',
        value: isSpanish ? 'Monofocal Asférico' : 'Aspheric Monofocal'
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Material' : 'Material',
        value: isSpanish ? 'Acrílico Hidrofílico' : 'Hydrophilic Acrylic'
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Diseño' : 'Design',
        value: isSpanish ? '1 Pieza' : '1-Piece'
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Certificación' : 'Certification',
        value: 'ANMAT, CE, ISO 13485'
      }
    ],
    audience: {
      '@type': 'MedicalAudience',
      audienceType: ['Ophthalmologist', 'Cataract Surgeon']
    },
    isRelatedTo: {
      '@type': 'MedicalCondition',
      name: isSpanish ? 'Cataratas' : 'Cataracts'
    }
  };

  return (
    <>
      <article className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href={`/${locale}`} className="hover:text-primary">
              {isSpanish ? 'Inicio' : 'Home'}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/lentes-intraoculares`} className="hover:text-primary">
              {isSpanish ? 'Lentes Intraoculares' : 'Intraocular Lenses'}
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">Aurolab Auroflex</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724685417/msz-aurolab-auroflex_gdnoin.webp"
                alt="Lente Intraocular Aurolab Auroflex Asférico - Hidrofílico 1 Pieza"
                fill
                className="object-contain p-4"
                priority
              />
            </div>

            <div>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {isSpanish ? 'En Stock' : 'In Stock'}
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2 ml-2">
                  ANMAT
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Aurolab Auroflex Asférico
              </h1>
              
              <p className="text-xl text-gray-600 mb-4">
                {isSpanish 
                  ? 'Lente Intraocular Monofocal Hidrofílico'
                  : 'Hydrophilic Monofocal Intraocular Lens'}
              </p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-700">{isSpanish ? 'Marca:' : 'Brand:'}</span>
                  <span className="text-lg font-bold text-primary">Aurolab</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-700">{isSpanish ? 'Código:' : 'Code:'}</span>
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">FH5600SQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">{isSpanish ? 'Origen:' : 'Origin:'}</span>
                  <span>India 🇮🇳</span>
                </div>
              </div>

              <ProductCTA 
                productName="Aurolab Auroflex"
                productCode="FH5600SQ"
                locale={locale}
                isSpanish={isSpanish}
              />
            </div>
          </div>
        </header>

        {/* Características Principales */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {isSpanish ? 'Características Principales' : 'Main Features'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {isSpanish ? 'Diseño Asférico' : 'Aspheric Design'}
              </h3>
              <p className="text-gray-700">
                {isSpanish 
                  ? 'Minimiza las aberraciones esféricas, mejorando la calidad visual y el contraste en condiciones de baja luz.'
                  : 'Minimizes spherical aberrations, improving visual quality and contrast in low light conditions.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-3">💧</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {isSpanish ? 'Material Hidrofílico' : 'Hydrophilic Material'}
              </h3>
              <p className="text-gray-700">
                {isSpanish 
                  ? 'Acrílico hidrofílico biocompatible con alto índice de refracción. Previene la opacificación capsular posterior.'
                  : 'Biocompatible hydrophilic acrylic with high refractive index. Prevents posterior capsular opacification.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {isSpanish ? 'Incluye Inyector' : 'Injector Included'}
              </h3>
              <p className="text-gray-700">
                {isSpanish 
                  ? 'Sistema completo con inyector desechable para una implantación segura y controlada con incisión mínima.'
                  : 'Complete system with disposable injector for safe and controlled implantation with minimal incision.'}
              </p>
            </div>
          </div>
        </section>

        {/* Sobre Aurolab */}
        <section className="mb-12">
          <div className="bg-white border-2 border-primary rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isSpanish ? 'Sobre Aurolab - Fabricante Mundial' : 'About Aurolab - Global Manufacturer'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  {isSpanish 
                    ? 'Aurolab es un fabricante líder mundial de lentes intraoculares con sede en Madurai, India. Fundada en 1992 por Aravind Eye Care System, Aurolab ha revolucionado el mercado oftalmológico global al ofrecer productos de alta calidad a precios accesibles.'
                    : 'Aurolab is a world-leading manufacturer of intraocular lenses based in Madurai, India. Founded in 1992 by Aravind Eye Care System, Aurolab has revolutionized the global ophthalmic market by offering high-quality products at accessible prices.'}
                </p>
                <p className="text-gray-700 mb-4">
                  {isSpanish 
                    ? 'Con más de 30 millones de lentes intraoculares implantados exitosamente en todo el mundo, Aurolab se ha consolidado como una marca de confianza para cirujanos oftalmólogos en más de 120 países.'
                    : 'With over 30 million intraocular lenses successfully implanted worldwide, Aurolab has established itself as a trusted brand for ophthalmic surgeons in over 120 countries.'}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <div>
                    <p className="font-bold">{isSpanish ? 'Certificaciones Internacionales' : 'International Certifications'}</p>
                    <p className="text-sm text-gray-600">ISO 13485, CE Mark, FDA, ANMAT</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <div>
                    <p className="font-bold">{isSpanish ? 'Instalaciones de Clase Mundial' : 'World-Class Facilities'}</p>
                    <p className="text-sm text-gray-600">{isSpanish ? 'Salas limpias ISO Clase 7' : 'ISO Class 7 clean rooms'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <div>
                    <p className="font-bold">{isSpanish ? 'Investigación y Desarrollo' : 'Research & Development'}</p>
                    <p className="text-sm text-gray-600">{isSpanish ? 'Innovación continua en diseño óptico' : 'Continuous innovation in optical design'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <div>
                    <p className="font-bold">{isSpanish ? 'Precio-Calidad' : 'Price-Quality'}</p>
                    <p className="text-sm text-gray-600">{isSpanish ? 'Mejor relación del mercado' : 'Best market ratio'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Especificaciones Técnicas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {isSpanish ? 'Especificaciones Técnicas' : 'Technical Specifications'}
          </h2>
          
          <div className="bg-white border rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 w-1/3">
                    {isSpanish ? 'Tipo de Lente' : 'Lens Type'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Monofocal Asférico' : 'Aspheric Monofocal'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isSpanish ? 'Material' : 'Material'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Acrílico Hidrofílico' : 'Hydrophilic Acrylic'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isSpanish ? 'Diseño' : 'Design'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? '1 Pieza' : '1-Piece'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isSpanish ? 'Hápticos' : 'Haptics'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Placa' : 'Plate'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isSpanish ? 'Diámetro Óptico' : 'Optical Diameter'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">6.0 mm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isSpanish ? 'Diámetro Total' : 'Overall Diameter'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">13.0 mm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isSpanish ? 'Rango Dióptrico' : 'Diopter Range'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">+6.00 a +30.00 D</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isSpanish ? 'Índice Refractivo' : 'Refractive Index'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">1.46</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isSpanish ? 'Filtro UV' : 'UV Filter'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Sí (protección completa)' : 'Yes (full protection)'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {isSpanish ? 'Certificaciones' : 'Certifications'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">ANMAT, CE, ISO 13485</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Indicaciones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {isSpanish ? '¿Para qué Cirugías está Indicado?' : 'Which Surgeries is it Indicated For?'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ✓ {isSpanish ? 'Cirugía de Cataratas' : 'Cataract Surgery'}
              </h3>
              <p className="text-gray-700 mb-2">
                {isSpanish 
                  ? 'Indicado principalmente para la extracción de cataratas mediante facoemulsificación con implante de lente intraocular.'
                  : 'Primarily indicated for cataract extraction by phacoemulsification with intraocular lens implantation.'}
              </p>
              <p className="text-sm text-gray-600">
                {isSpanish 
                  ? 'Ideal para pacientes que buscan una solución económica con excelente calidad visual para visión de lejos.'
                  : 'Ideal for patients seeking an economical solution with excellent visual quality for distance vision.'}
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ✓ {isSpanish ? 'Pacientes sin Astigmatismo' : 'Patients without Astigmatism'}
              </h3>
              <p className="text-gray-700 mb-2">
                {isSpanish 
                  ? 'Recomendado para pacientes sin astigmatismo corneal significativo (<1.0 D).'
                  : 'Recommended for patients without significant corneal astigmatism (<1.0 D).'}
              </p>
              <p className="text-sm text-gray-600">
                {isSpanish 
                  ? 'Para pacientes con astigmatismo, considerar lentes tóricos de Aurolab.'
                  : 'For patients with astigmatism, consider Aurolab toric lenses.'}
              </p>
            </div>
          </div>
        </section>

        {/* Ventajas */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {isSpanish ? 'Ventajas del Aurolab Auroflex' : 'Aurolab Auroflex Advantages'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <h4 className="font-bold text-gray-900">{isSpanish ? 'Mejor Relación Calidad-Precio' : 'Best Quality-Price Ratio'}</h4>
                  <p className="text-sm text-gray-600">{isSpanish ? 'Calidad premium a precio accesible' : 'Premium quality at accessible price'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-bold text-gray-900">{isSpanish ? 'Excelente Calidad Visual' : 'Excellent Visual Quality'}</h4>
                  <p className="text-sm text-gray-600">{isSpanish ? 'Diseño asférico optimizado' : 'Optimized aspheric design'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛡️</span>
                <div>
                  <h4 className="font-bold text-gray-900">{isSpanish ? 'Biocompatibilidad' : 'Biocompatibility'}</h4>
                  <p className="text-sm text-gray-600">{isSpanish ? 'Material hidrofílico probado' : 'Proven hydrophilic material'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-bold text-gray-900">{isSpanish ? 'Implantación Fácil' : 'Easy Implantation'}</h4>
                  <p className="text-sm text-gray-600">{isSpanish ? 'Incluye inyector de calidad' : 'Includes quality injector'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="font-bold text-gray-900">{isSpanish ? 'Estabilidad a Largo Plazo' : 'Long-Term Stability'}</h4>
                  <p className="text-sm text-gray-600">{isSpanish ? 'Material estable y duradero' : 'Stable and durable material'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">☀️</span>
                <div>
                  <h4 className="font-bold text-gray-900">{isSpanish ? 'Protección UV' : 'UV Protection'}</h4>
                  <p className="text-sm text-gray-600">{isSpanish ? 'Filtro UV integrado' : 'Integrated UV filter'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isSpanish 
              ? '¿Necesitas Aurolab Auroflex para tu Cirugía?'
              : 'Need Aurolab Auroflex for Your Surgery?'}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            {isSpanish 
              ? 'Distribuidor oficial en Argentina • Stock permanente • Envío a todo el país'
              : 'Official distributor in Argentina • Permanent stock • Nationwide shipping'}
          </p>
          <ProductCTA 
                productName="Aurolab Auroflex"
                productCode="FH5600SQ"
                locale={locale}
                isSpanish={isSpanish}
              />
          <p className="mt-6 text-sm opacity-80">
            📞 (+54) 11 5237-1300 | ✉️ info@ocularinsumos.com
          </p>
        </section>

        {/* Productos Relacionados */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {isSpanish ? 'Otros Productos de Aurolab' : 'Other Aurolab Products'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href={`/${locale}/productos/aurolab-auroflex-ev-gold`} className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-primary mb-2">Auroflex EV Gold</h3>
              <p className="text-gray-600 text-sm">{isSpanish ? 'Lente premium con tecnología avanzada' : 'Premium lens with advanced technology'}</p>
            </Link>
            <Link href={`/${locale}/lentes-intraoculares`} className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-primary mb-2">{isSpanish ? 'Todos los LIO' : 'All IOLs'}</h3>
              <p className="text-gray-600 text-sm">{isSpanish ? 'Ver catálogo completo de lentes' : 'See complete lens catalog'}</p>
            </Link>
            <Link href={`/${locale}/cataratas`} className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-primary mb-2">{isSpanish ? 'Cirugía Cataratas' : 'Cataract Surgery'}</h3>
              <p className="text-gray-600 text-sm">{isSpanish ? 'Insumos para cirugía de cataratas' : 'Cataract surgery supplies'}</p>
            </Link>
          </div>
        </section>
      </article>

      {/* JSON-LD Schemas */}
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productSchema} />
    </>
  );
}
