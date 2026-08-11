import { getMessages } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/Seo/JsonLd';
import ProductCTA from '@/components/Productos/ProductCTA';

export async function generateMetadata({ params: { locale } }) {
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const isSpanish = locale === 'es';
  
  const title = isSpanish 
    ? 'Ophtec Artisan | Lente Fáquico Rígido PMMA para Casos Especiales Argentina'
    : 'Ophtec Artisan | Rigid PMMA Phakic Lens for Special Cases Argentina';
  
  const description = isSpanish
    ? 'Lente intraocular fáquico rígido Ophtec Artisan en PMMA para corrección de miopía, hipermetropía y astigmatismo. Tecnología holandesa premium líder mundial. Ideal para casos especiales y cirugía refractiva avanzada. Certificación ANMAT. Distribuidor oficial en Argentina.'
    : 'Ophtec Artisan rigid PMMA phakic intraocular lens for myopia, hyperopia and astigmatism correction. World-leading premium Dutch technology. Ideal for special cases and advanced refractive surgery. ANMAT certified. Official distributor in Argentina.';

  const keywords = isSpanish
    ? 'Ophtec Artisan, lente fáquico rígido, PMMA, alta miopía, astigmatismo, hipermetropía, lentes Ophtec Argentina, cirugía refractiva, lente de cámara anterior, Ophtec Buenos Aires, comprar Artisan, lente intraocular fáquico, ANMAT, Worst lens'
    : 'Ophtec Artisan, rigid phakic lens, PMMA, high myopia, astigmatism, hyperopia, Ophtec lenses Argentina, refractive surgery, anterior chamber lens, Ophtec Buenos Aires, buy Artisan, phakic intraocular lens, ANMAT, Worst lens';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/productos/ophtec-artisan`,
      languages: {
        'es': `${SITE_URL}/es/productos/ophtec-artisan`,
        'en': `${SITE_URL}/en/productos/ophtec-artisan`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/productos/ophtec-artisan`,
      siteName: 'Ocular Insumos Quirúrgicos',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function OphtecArtisanPage({ params: { locale } }) {
  const messages = await getMessages();
  const isSpanish = locale === 'es';
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const pageUrl = `${SITE_URL}/${locale}/productos/ophtec-artisan`;

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
        name: 'Ophtec Artisan',
        item: pageUrl,
      },
    ],
  };

  // Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': ['Product', 'MedicalDevice'],
    '@id': pageUrl,
    name: 'Ophtec Artisan - Lente Intraocular Fáquico Rígido PMMA',
    description: isSpanish 
      ? 'Lente intraocular fáquico rígido de PMMA para corrección de defectos refractivos complejos. Fijación iridiana con tecnología de pinza. Indicado para miopía (-23.50 a +12.00 D), hipermetropía y astigmatismo. Tecnología holandesa con más de 300,000 implantes. Certificado ANMAT.'
      : 'PMMA rigid phakic intraocular lens for correction of complex refractive errors. Iris fixation with claw technology. Indicated for myopia (-23.50 to +12.00 D), hyperopia and astigmatism. Dutch technology with over 300,000 implants. ANMAT certified.',
    brand: {
      '@type': 'Brand',
      name: 'Ophtec',
      url: 'https://www.ophtec.com',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Ophtec BV',
      description: isSpanish 
        ? 'Ophtec BV - Fabricante holandés de prestigio líder mundial en lentes fáquicos. Más de 35 años de experiencia en oftalmología.'
        : 'Ophtec BV - Prestigious Dutch manufacturer and world leader in phakic lenses. Over 35 years of experience in ophthalmology.',
      foundingDate: '1989',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Groningen',
        addressCountry: 'NL',
      },
      url: 'https://www.ophtec.com',
    },
    url: pageUrl,
    model: 'Artisan',
    mpn: 'ARTISAN',
    sku: 'OPHTEC-ARTISAN',
    offers: {
      '@type': 'Offer',
      url: pageUrl,
      priceCurrency: 'ARS',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Ocular Insumos Quirúrgicos',
        url: SITE_URL,
      },
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
      ratingValue: '4.8',
      reviewCount: '156',
      bestRating: '5',
      worstRating: '1',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Tipo de Lente' : 'Lens Type',
        value: isSpanish ? 'Fáquico Rígido de Cámara Anterior' : 'Rigid Anterior Chamber Phakic',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Material' : 'Material',
        value: 'PMMA (Polimetilmetacrilato)',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Diámetro' : 'Diameter',
        value: '8.5 mm',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Fijación' : 'Fixation',
        value: isSpanish ? 'Iridiana (Tecnología de Pinza)' : 'Iris Claw (Claw Technology)',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Rango Miopía' : 'Myopia Range',
        value: '-23.50 a -3.00 D',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Rango Hipermetropía' : 'Hyperopia Range',
        value: '+2.00 a +12.00 D',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Versión Tórica' : 'Toric Version',
        value: isSpanish ? 'Disponible para astigmatismo' : 'Available for astigmatism',
      },
    ],
    isRelatedTo: [
      {
        '@type': 'MedicalProcedure',
        name: isSpanish ? 'Cirugía Refractiva Fáquica' : 'Phakic Refractive Surgery',
      },
      {
        '@type': 'MedicalCondition',
        name: isSpanish ? 'Alta Miopía' : 'High Myopia',
      },
      {
        '@type': 'MedicalCondition',
        name: isSpanish ? 'Hipermetropía' : 'Hyperopia',
      },
      {
        '@type': 'MedicalCondition',
        name: isSpanish ? 'Astigmatismo' : 'Astigmatism',
      },
    ],
    category: isSpanish ? 'Lentes Intraoculares Fáquicos Rígidos' : 'Rigid Phakic Intraocular Lenses',
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Qué diferencia al Artisan de otros lentes fáquicos?'
          : 'What makes the Artisan different from other phakic lenses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'El Ophtec Artisan es un lente fáquico rígido de PMMA con tecnología de fijación iridiana única (pinza de Worst). A diferencia de los lentes flexibles, el Artisan no requiere soporte angular y se fija directamente al iris medio, lo que proporciona estabilidad excepcional. Con más de 300,000 implantes desde 1986, tiene el seguimiento a largo plazo más extenso de todos los lentes fáquicos.'
            : 'The Ophtec Artisan is a rigid PMMA phakic lens with unique iris fixation technology (Worst claw). Unlike flexible lenses, the Artisan does not require angle support and is fixed directly to the mid-peripheral iris, providing exceptional stability. With over 300,000 implants since 1986, it has the longest long-term follow-up of all phakic lenses.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Qué defectos refractivos puede corregir el lente Artisan?'
          : 'What refractive errors can the Artisan lens correct?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'El Artisan puede corregir un amplio rango de defectos refractivos: Miopía de -23.50 a -3.00 dioptría, Hipermetropía de +2.00 a +12.00 dioptrías. También está disponible en versión tórica para corrección simultánea de astigmatismo hasta 7.50 dioptrías. Es especialmente útil para pacientes con córneas irregulares o casos complejos no aptos para LASIK.'
            : 'The Artisan can correct a wide range of refractive errors: Myopia from -23.50 to -3.00 diopters, Hyperopia from +2.00 to +12.00 diopters. It is also available in a toric version for simultaneous astigmatism correction up to 7.50 diopters. It is especially useful for patients with irregular corneas or complex cases not suitable for LASIK.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Cuáles son los requisitos para ser candidato al Artisan?'
          : 'What are the requirements to be a candidate for Artisan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'Candidatos ideales: Edad 21-45 años con graduación estable (mínimo 1 año), cristalino transparente, profundidad de cámara anterior ≥3.2 mm, recuento endotelial ≥2500 células/mm², No candidatos para LASIK, córneas irregulares, queratocono estable grado 1-2, altas ametropías. El cirujano evaluará cada caso individualmente.'
            : 'Ideal candidates: Age 21-45 years with stable refraction (minimum 1 year), clear crystalline lens, anterior chamber depth ≥3.2 mm, endothelial cell count ≥2500 cells/mm², Not candidates for LASIK, irregular corneas, stable keratoconus grade 1-2, high ametropias. The surgeon will evaluate each case individually.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿El procedimiento con Artisan es reversible?'
          : 'Is the Artisan procedure reversible?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'Sí, el lente Artisan es completamente reversible. Si es necesario, el lente puede ser removido o reemplazado mediante un procedimiento relativamente sencillo. Esto es una ventaja significativa sobre procedimientos corneales permanentes como el LASIK. La reversibilidad hace al Artisan ideal para pacientes jóvenes que podrían desarrollar cataratas en el futuro.'
            : 'Yes, the Artisan lens is completely reversible. If necessary, the lens can be removed or replaced through a relatively simple procedure. This is a significant advantage over permanent corneal procedures like LASIK. Reversibility makes the Artisan ideal for young patients who might develop cataracts in the future.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Cuáles son los resultados visuales esperados con el Artisan?'
          : 'What are the expected visual outcomes with the Artisan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'Los estudios clínicos muestran excelentes resultados: 95% de pacientes alcanzan 20/40 o mejor sin corrección, 85% logran 20/25 o mejor, calidad visual superior con mínimas aberraciones, alta satisfacción del paciente (>95%), estabilidad refractiva a largo plazo. La mayoría de pacientes experimentan independencia de lentes para la mayoría de actividades.'
            : 'Clinical studies show excellent results: 95% of patients achieve 20/40 or better uncorrected, 85% achieve 20/25 or better, superior visual quality with minimal aberrations, high patient satisfaction (>95%), long-term refractive stability. Most patients experience lens independence for most activities.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Dónde comprar el lente Ophtec Artisan en Argentina?'
          : 'Where to buy the Ophtec Artisan lens in Argentina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'Ocular Insumos Quirúrgicos es distribuidor oficial de Ophtec en Argentina. Disponemos de stock del Artisan en Buenos Aires y realizamos envíos a todo el país. Contacto: WhatsApp +54 9 11 5237-1300, Email: info@ocularinsumos.com. Visitanos en Rincón 1203 esq. Av. San Juan, CABA. Horario: Lunes a Viernes 7:00-15:00hs.'
            : 'Ocular Insumos Quirúrgicos is the official Ophtec distributor in Argentina. We have Artisan stock in Buenos Aires and ship nationwide. Contact: WhatsApp +54 9 11 5237-1300, Email: info@ocularinsumos.com. Visit us at Rincón 1203 corner Av. San Juan, CABA. Hours: Monday to Friday 7:00-15:00hs.',
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
          <span className="text-primary font-medium">Ophtec Artisan</span>
        </div>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🇳🇱 {isSpanish ? 'TECNOLOGÍA HOLANDESA PREMIUM' : 'PREMIUM DUTCH TECHNOLOGY'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ophtec Artisan
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            {isSpanish 
              ? 'Lente Intraocular Fáquico Rígido con Tecnología de Pinza Iridiana'
              : 'Rigid Phakic Intraocular Lens with Iris Claw Technology'}
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {isSpanish ? '300,000+ Implantes' : '300,000+ Implants'}
            </span>
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              {isSpanish ? 'Certificado ANMAT' : 'ANMAT Certified'}
            </span>
            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              {isSpanish ? 'Reversible' : 'Reversible'}
            </span>
          </div>
        </header>

        {/* Características Principales */}
        <section className="mb-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-purple-200">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            {isSpanish ? '🔬 Tecnología de Pinza Iridiana Worst' : '🔬 Worst Iris Claw Technology'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚙️</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Fijación Iridiana Única' : 'Unique Iris Fixation'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Sistema de pinza patentado que se fija al iris medio periférico sin tocar la córnea ni el cristalino. Diseño que ha demostrado excelente estabilidad a largo plazo durante más de 35 años.'
                      : 'Patented claw system that fixes to the mid-peripheral iris without touching the cornea or lens. Design that has demonstrated excellent long-term stability for over 35 years.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600">
              <div className="flex items-start gap-3">
                <div className="text-3xl">💪</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Material PMMA de Alta Calidad' : 'High Quality PMMA Material'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Fabricado en PMMA (polimetilmetacrilato) rígido de grado médico. Material biocompatible con décadas de historia en oftalmología. Excelente calidad óptica y durabilidad.'
                      : 'Made from rigid medical-grade PMMA (polymethyl methacrylate). Biocompatible material with decades of history in ophthalmology. Excellent optical quality and durability.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600">
              <div className="flex items-start gap-3">
                <div className="text-3xl">📏</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Amplio Rango de Corrección' : 'Wide Correction Range'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Corrige miopías extremas (-23.50 D) e hipermetropías altas (+12.00 D). Disponible en versión tórica para astigmatismo hasta 7.50 D. Solución para casos complejos.'
                      : 'Corrects extreme myopia (-23.50 D) and high hyperopia (+12.00 D). Available in toric version for astigmatism up to 7.50 D. Solution for complex cases.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🔄</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Procedimiento Reversible' : 'Reversible Procedure'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'A diferencia de cirugías corneales, el Artisan puede removerse o reemplazarse si es necesario. Ideal para pacientes jóvenes que podrían requerir cirugía de cataratas en el futuro.'
                      : 'Unlike corneal surgeries, the Artisan can be removed or replaced if necessary. Ideal for young patients who might require cataract surgery in the future.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Indicaciones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {isSpanish ? '🎯 Indicaciones Clínicas' : '🎯 Clinical Indications'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <div className="text-4xl mb-3 text-center">👁️</div>
              <h3 className="font-bold text-xl text-center text-gray-900 mb-3">
                {isSpanish ? 'Alta Miopía' : 'High Myopia'}
              </h3>
              <p className="text-gray-700 text-sm">
                {isSpanish 
                  ? 'Corrección de miopías de -3.00 a -23.50 dioptrías. Especialmente útil en casos no aptos para LASIK por córnea delgada o graduación muy alta.'
                  : 'Correction of myopia from -3.00 to -23.50 diopters. Especially useful in cases not suitable for LASIK due to thin cornea or very high refraction.'}
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
              <div className="text-4xl mb-3 text-center">➕</div>
              <h3 className="font-bold text-xl text-center text-gray-900 mb-3">
                {isSpanish ? 'Hipermetropía' : 'Hyperopia'}
              </h3>
              <p className="text-gray-700 text-sm">
                {isSpanish 
                  ? 'Corrección de hipermetropías de +2.00 a +12.00 dioptrías. Opción efectiva para pacientes hipermétropes que no desean cirugía en el cristalino.'
                  : 'Correction of hyperopia from +2.00 to +12.00 diopters. Effective option for hyperopic patients who do not want lens surgery.'}
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
              <div className="text-4xl mb-3 text-center">🔄</div>
              <h3 className="font-bold text-xl text-center text-gray-900 mb-3">
                {isSpanish ? 'Astigmatismo' : 'Astigmatism'}
              </h3>
              <p className="text-gray-700 text-sm">
                {isSpanish 
                  ? 'El Artisan Tórico corrige astigmatismos hasta 7.50 dioptrías simultáneamente con miopía o hipermetropía. Solución para astigmatismos irregulares.'
                  : 'Toric Artisan corrects astigmatism up to 7.50 diopters simultaneously with myopia or hyperopia. Solution for irregular astigmatism.'}
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
              <div className="text-4xl mb-3 text-center">🌀</div>
              <h3 className="font-bold text-xl text-center text-gray-900 mb-3">
                {isSpanish ? 'Córneas Irregulares' : 'Irregular Corneas'}
              </h3>
              <p className="text-gray-700 text-sm">
                {isSpanish 
                  ? 'Ideal para pacientes con queratocono estable, ectasias corneales, o córneas irregulares post-cirugía que no son candidatos para cirugía corneal.'
                  : 'Ideal for patients with stable keratoconus, corneal ectasias, or irregular post-surgery corneas who are not candidates for corneal surgery.'}
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
              <div className="text-4xl mb-3 text-center">⛔</div>
              <h3 className="font-bold text-xl text-center text-gray-900 mb-3">
                {isSpanish ? 'No Aptos para LASIK' : 'Not Suitable for LASIK'}
              </h3>
              <p className="text-gray-700 text-sm">
                {isSpanish 
                  ? 'Pacientes con córneas delgadas (<500 µm), graduaciones extremas, pupilas grandes, o profesiones donde LASIK está contraindicado (pilotos, militares).'
                  : 'Patients with thin corneas (<500 µm), extreme refractions, large pupils, or professions where LASIK is contraindicated (pilots, military).'}
              </p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-xl border-2 border-cyan-200">
              <div className="text-4xl mb-3 text-center">🔬</div>
              <h3 className="font-bold text-xl text-center text-gray-900 mb-3">
                {isSpanish ? 'Casos Complejos' : 'Complex Cases'}
              </h3>
              <p className="text-gray-700 text-sm">
                {isSpanish 
                  ? 'Revisiones de cirugías refractivas previas, pacientes con altas exigencias visuales profesionales, o casos especiales que requieren máxima precisión.'
                  : 'Revisions of previous refractive surgeries, patients with high professional visual demands, or special cases requiring maximum precision.'}
              </p>
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
                  <td className="px-6 py-4 text-gray-700">Artisan / Worst Lens</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Código del Producto' : 'Product Code'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">ARTISAN</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Tipo de Lente' : 'Lens Type'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Fáquico Rígido de Cámara Anterior' : 'Rigid Anterior Chamber Phakic'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Material' : 'Material'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    PMMA (Polimetilmetacrilato)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Fijación' : 'Fixation'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Iridiana (Pinza de Worst)' : 'Iris Claw (Worst Claw)'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Diámetro' : 'Diameter'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">8.5 mm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Zona Óptica' : 'Optical Zone'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">5.0 - 6.0 mm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Rango Miopía' : 'Myopia Range'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">-23.50 a -3.00 D</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Rango Hipermetropía' : 'Hyperopia Range'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">+2.00 a +12.00 D</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Versión Tórica' : 'Toric Version'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Disponible (hasta 7.50 D cilindro)' : 'Available (up to 7.50 D cylinder)'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Índice de Refracción' : 'Refractive Index'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">1.49</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Incisión Requerida' : 'Required Incision'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">5.0 - 6.0 mm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Profundidad Cámara Anterior Mínima' : 'Minimum Anterior Chamber Depth'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">≥3.2 mm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Recuento Endotelial Mínimo' : 'Minimum Endothelial Count'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">≥2500 células/mm²</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ventajas Clínicas */}
        <section className="mb-16 bg-green-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {isSpanish ? '⚕️ Ventajas Clínicas del Artisan' : '⚕️ Clinical Advantages of Artisan'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Seguimiento a Largo Plazo' : 'Long-Term Follow-up'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Más de 35 años de seguimiento clínico con más de 300,000 implantes. La mayor experiencia a largo plazo de todos los lentes fáquicos.'
                    : 'Over 35 years of clinical follow-up with over 300,000 implants. The longest long-term experience of all phakic lenses.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Predictibilidad Excepcional' : 'Exceptional Predictability'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Fórmulas de cálculo altamente precisas desarrolladas a través de décadas. Resultados visuales predecibles y consistentes.'
                    : 'Highly accurate calculation formulas developed over decades. Predictable and consistent visual outcomes.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Sin Contacto con Estructuras Sensibles' : 'No Contact with Sensitive Structures'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'No contacta córnea ni cristalino. Fijación exclusiva en iris medio. Minimiza riesgo de daño endotelial y cataratas.'
                    : 'Does not contact cornea or lens. Exclusive fixation on mid-iris. Minimizes risk of endothelial damage and cataracts.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Calidad Óptica Superior' : 'Superior Optical Quality'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Material PMMA proporciona excelente calidad óptica. Sin aberraciones cromáticas. Visión nítida en todas las condiciones.'
                    : 'PMMA material provides excellent optical quality. No chromatic aberrations. Sharp vision in all conditions.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Estabilidad Rotacional' : 'Rotational Stability'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Fijación iridiana proporciona estabilidad rotacional excepcional. Crítico para versión tórica en corrección de astigmatismo.'
                    : 'Iris fixation provides exceptional rotational stability. Critical for toric version in astigmatism correction.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Compatibilidad con Cirugía Futura' : 'Compatibility with Future Surgery'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'No interfiere con futuras cirugías de cataratas. Puede removerse fácilmente cuando sea necesario. Preserva opciones futuras.'
                    : 'Does not interfere with future cataract surgeries. Can be easily removed when necessary. Preserves future options.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fabricante Ophtec */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {isSpanish ? '🏭 Sobre el Fabricante: Ophtec BV' : '🏭 About the Manufacturer: Ophtec BV'}
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ophtec - {isSpanish ? 'Pioneros en Lentes Fáquicos' : 'Pioneers in Phakic Lenses'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {isSpanish 
                    ? 'Ophtec BV, fundada en 1989 en Groningen, Países Bajos, es el fabricante líder mundial en lentes intraoculares fáquicos. Con más de 35 años de experiencia, Ophtec ha perfeccionado el diseño del lente Artisan (basado en el lente de Worst) y lo ha convertido en el gold standard de los lentes fáquicos rígidos.'
                    : 'Ophtec BV, founded in 1989 in Groningen, Netherlands, is the world\'s leading manufacturer of phakic intraocular lenses. With over 35 years of experience, Ophtec has perfected the Artisan lens design (based on the Worst lens) and made it the gold standard for rigid phakic lenses.'}
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary">1989</div>
                    <div className="text-sm text-gray-600">{isSpanish ? 'Fundación' : 'Founded'}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary">300K+</div>
                    <div className="text-sm text-gray-600">{isSpanish ? 'Implantes' : 'Implants'}</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <span>🏆</span> {isSpanish ? 'Certificaciones' : 'Certifications'}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
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
                    <span>🌍</span> {isSpanish ? 'Presencia Global' : 'Global Presence'}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {isSpanish 
                      ? 'Productos distribuidos en más de 70 países. Líder mundial en lentes fáquicos con la mayor base de evidencia científica publicada.'
                      : 'Products distributed in over 70 countries. World leader in phakic lenses with the largest published scientific evidence base.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <ProductCTA 
          productName="Ophtec Artisan" 
          productCode="ARTISAN" 
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
              href={`/${locale}/productos/ophtec-artiflex`}
              className="bg-green-100 hover:bg-green-200 text-primary font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {isSpanish ? 'Ophtec Artiflex (Flexible) →' : 'Ophtec Artiflex (Flexible) →'}
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
