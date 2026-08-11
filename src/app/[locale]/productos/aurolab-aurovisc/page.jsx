import { getMessages } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/Seo/JsonLd';
import ProductCTA from '@/components/Productos/ProductCTA';

export async function generateMetadata({ params: { locale } }) {
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const isSpanish = locale === 'es';
  
  const title = isSpanish 
    ? 'Aurolab Aurovisc 2% HPMC | Viscoelástico Premium para Cirugía de Cataratas Argentina'
    : 'Aurolab Aurovisc 2% HPMC | Premium Viscoelastic for Cataract Surgery Argentina';
  
  const description = isSpanish
    ? 'Viscoelástico Aurolab Aurovisc 2% HPMC (hidroxipropilmetilcelulosa) de alta viscosidad para protección endotelial en cirugía de cataratas. Calidad premium, excelente transparencia. Certificación ANMAT. Distribuidor oficial Aurolab en Argentina. Stock permanente en Buenos Aires.'
    : 'Aurolab Aurovisc 2% HPMC (hydroxypropyl methylcellulose) high viscosity viscoelastic for endothelial protection in cataract surgery. Premium quality, excellent transparency. ANMAT certified. Official Aurolab distributor in Argentina. Permanent stock in Buenos Aires.';

  const keywords = isSpanish
    ? 'Aurovisc, viscoelástico Aurolab, HPMC 2%, hidroxipropilmetilcelulosa, viscoelástico cirugía cataratas, protección endotelial, Aurolab Argentina, viscoelástico oftálmico, cirugía intraocular, Aurovisc 2000, ANMAT, comprar viscoelástico Buenos Aires'
    : 'Aurovisc, Aurolab viscoelastic, HPMC 2%, hydroxypropyl methylcellulose, cataract surgery viscoelastic, endothelial protection, Aurolab Argentina, ophthalmic viscoelastic, intraocular surgery, Aurovisc 2000, ANMAT, buy viscoelastic Buenos Aires';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/productos/aurolab-aurovisc`,
      languages: {
        'es': `${SITE_URL}/es/productos/aurolab-aurovisc`,
        'en': `${SITE_URL}/en/productos/aurolab-aurovisc`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/productos/aurolab-aurovisc`,
      siteName: 'Ocular Insumos Quirúrgicos',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AurolabAuroviscPage({ params: { locale } }) {
  const messages = await getMessages();
  const isSpanish = locale === 'es';
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const pageUrl = `${SITE_URL}/${locale}/productos/aurolab-aurovisc`;

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
        name: isSpanish ? 'Productos Oftálmicos' : 'Ophthalmic Products',
        item: `${SITE_URL}/${locale}#productos`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Aurolab Aurovisc',
        item: pageUrl,
      },
    ],
  };

  // Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': ['Product', 'MedicalDevice'],
    '@id': pageUrl,
    name: 'Aurolab Aurovisc 2% HPMC - Viscoelástico Oftálmico',
    description: isSpanish 
      ? 'Viscoelástico de alta viscosidad con 2% de hidroxipropilmetilcelulosa (HPMC) para protección endotelial durante cirugía de cataratas y procedimientos intraoculares. Excelente transparencia y mantenimiento del espacio. Fácil inyección y remoción. Certificado ANMAT.'
      : 'High viscosity viscoelastic with 2% hydroxypropyl methylcellulose (HPMC) for endothelial protection during cataract surgery and intraocular procedures. Excellent transparency and space maintenance. Easy injection and removal. ANMAT certified.',
    brand: {
      '@type': 'Brand',
      name: 'Aurolab',
      url: 'https://www.aurolab.com',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Aurolab',
      description: isSpanish 
        ? 'Fabricante líder mundial de productos oftálmicos de calidad, fundado por Aravind Eye Care System'
        : 'World-leading manufacturer of quality ophthalmic products, founded by Aravind Eye Care System',
      foundingDate: '1992',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Madurai',
        addressCountry: 'IN',
      },
      url: 'https://www.aurolab.com',
    },
    url: pageUrl,
    model: 'Aurovisc 2%',
    mpn: '2000',
    sku: 'AUROLAB-AUROVISC-2000',
    offers: {
      '@type': 'Offer',
      url: pageUrl,
      priceCurrency: 'ARS',
      price: '18000',
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
      ratingValue: '4.8',
      reviewCount: '245',
      bestRating: '5',
      worstRating: '1',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Composición' : 'Composition',
        value: '2% HPMC (Hidroxipropilmetilcelulosa)',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Viscosidad' : 'Viscosity',
        value: isSpanish ? 'Alta (Coheisivo)' : 'High (Cohesive)',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Presentación' : 'Presentation',
        value: isSpanish ? 'Jeringa prellenada 0.5ml / 1.0ml' : 'Prefilled syringe 0.5ml / 1.0ml',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Esterilización' : 'Sterilization',
        value: isSpanish ? 'Autoclave' : 'Autoclave',
      },
    ],
    isRelatedTo: [
      {
        '@type': 'MedicalProcedure',
        name: isSpanish ? 'Cirugía de Cataratas' : 'Cataract Surgery',
        procedureType: isSpanish ? 'Facoemulsificación' : 'Phacoemulsification',
      },
    ],
    category: isSpanish ? 'Viscoelásticos Oftálmicos' : 'Ophthalmic Viscoelastics',
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Qué es el Aurovisc y para qué se utiliza?'
          : 'What is Aurovisc and what is it used for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'Aurovisc es un dispositivo viscoelástico oftálmico compuesto por 2% de hidroxipropilmetilcelulosa (HPMC) en solución estéril. Se utiliza durante la cirugía de cataratas para proteger el endotelio corneal, mantener el espacio de la cámara anterior, proteger tejidos intraoculares durante la manipulación quirúrgica, y facilitar la implantación del lente intraocular. Su alta viscosidad proporciona excelente protección de las estructuras oculares.'
            : 'Aurovisc is an ophthalmic viscoelastic device composed of 2% hydroxypropyl methylcellulose (HPMC) in sterile solution. It is used during cataract surgery to protect the corneal endothelium, maintain anterior chamber space, protect intraocular tissues during surgical manipulation, and facilitate intraocular lens implantation. Its high viscosity provides excellent protection of ocular structures.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Cuáles son las ventajas del Aurovisc 2% HPMC?'
          : 'What are the advantages of Aurovisc 2% HPMC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'Aurovisc ofrece múltiples ventajas: Excelente protección endotelial, alta viscosidad que mantiene el espacio de la cámara anterior, transparencia óptima que permite excelente visualización, fácil inyección a través de cánula pequeña, remoción sencilla al final del procedimiento, compatibilidad con todas las técnicas de facoemulsificación, no tóxico y biocompatible, relación calidad-precio excepcional.'
            : 'Aurovisc offers multiple advantages: Excellent endothelial protection, high viscosity that maintains anterior chamber space, optimal transparency allows excellent visualization, easy injection through small cannula, simple removal at end of procedure, compatibility with all phacoemulsification techniques, non-toxic and biocompatible, exceptional quality-price ratio.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Cuál es el precio del Aurovisc en Argentina?'
          : 'What is the price of Aurovisc in Argentina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'El precio del Aurovisc 2% HPMC en Argentina es de ARS $18,000 por jeringa prellenada. Este precio incluye el viscoelástico estéril en presentación de 0.5ml o 1.0ml según disponibilidad. Para mayores volúmenes o instituciones, ofrecemos precios especiales. Contáctenos por WhatsApp +54 9 11 5237-1300 para consultar disponibilidad y condiciones.'
            : 'The price of Aurovisc 2% HPMC in Argentina is ARS $18,000 per prefilled syringe. This price includes the sterile viscoelastic in 0.5ml or 1.0ml presentation as available. For larger volumes or institutions, we offer special pricing. Contact us via WhatsApp +54 9 11 5237-1300 to check availability and conditions.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Cómo se utiliza el Aurovisc durante la cirugía?'
          : 'How is Aurovisc used during surgery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'El Aurovisc se inyecta en la cámara anterior a través de la incisión quirúrgica antes de la capsulorrexis para proteger el endotelio y mantener el espacio. Se puede reinyectar según necesidad durante la facoemulsificación y antes de implantar el lente intraocular. Al finalizar el procedimiento, se remueve mediante aspiración-irrigación. La técnica específica varía según la preferencia del cirujano y las características del caso.'
            : 'Aurovisc is injected into the anterior chamber through the surgical incision before capsulorhexis to protect the endothelium and maintain space. It can be reinjected as needed during phacoemulsification and before implanting the intraocular lens. At the end of the procedure, it is removed by aspiration-irrigation. The specific technique varies according to surgeon preference and case characteristics.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿El Aurovisc está certificado en Argentina?'
          : 'Is Aurovisc certified in Argentina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'Sí, el Aurovisc cuenta con certificación ANMAT (Administración Nacional de Medicamentos, Alimentos y Tecnología Médica) para su comercialización en Argentina. Además, cumple con estándares internacionales ISO 13485, marca CE europea y está fabricado bajo normas GMP (Good Manufacturing Practices). Aurolab es un fabricante reconocido mundialmente con productos distribuidos en más de 130 países.'
            : 'Yes, Aurovisc has ANMAT (National Administration of Medicines, Food and Medical Technology) certification for commercialization in Argentina. It also complies with international standards ISO 13485, European CE mark and is manufactured under GMP (Good Manufacturing Practices) standards. Aurolab is a world-renowned manufacturer with products distributed in over 130 countries.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Dónde comprar Aurovisc en Argentina?'
          : 'Where to buy Aurovisc in Argentina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'Ocular Insumos Quirúrgicos es distribuidor oficial de Aurolab en Argentina. Tenemos stock permanente de Aurovisc en Buenos Aires y realizamos envíos a todo el país. Contáctenos: WhatsApp +54 9 11 5237-1300, Email: info@ocularinsumos.com. Visitanos en Rincón 1203 esq. Av. San Juan, CABA. Horario: Lunes a Viernes 7:00-15:00hs.'
            : 'Ocular Insumos Quirúrgicos is the official Aurolab distributor in Argentina. We have permanent stock of Aurovisc in Buenos Aires and ship nationwide. Contact us: WhatsApp +54 9 11 5237-1300, Email: info@ocularinsumos.com. Visit us at Rincón 1203 corner Av. San Juan, CABA. Hours: Monday to Friday 7:00-15:00hs.',
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
          <Link href={`/${locale}#productos`} className="hover:text-primary">
            {isSpanish ? 'Productos' : 'Products'}
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">Aurolab Aurovisc</span>
        </div>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💧 {isSpanish ? 'VISCOELÁSTICO PREMIUM 2% HPMC' : 'PREMIUM VISCOELASTIC 2% HPMC'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Aurolab Aurovisc 2%
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            {isSpanish 
              ? 'Viscoelástico Oftálmico de Alta Viscosidad para Cirugía de Cataratas'
              : 'High Viscosity Ophthalmic Viscoelastic for Cataract Surgery'}
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

        {/* Características Principales */}
        <section className="mb-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-cyan-200">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            {isSpanish ? '✨ Características del Viscoelástico' : '✨ Viscoelastic Features'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-500">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🛡️</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Protección Endotelial Superior' : 'Superior Endothelial Protection'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Alta viscosidad que proporciona protección óptima del endotelio corneal durante todo el procedimiento quirúrgico. Minimiza el trauma celular durante la facoemulsificación y manipulación quirúrgica.'
                      : 'High viscosity that provides optimal protection of corneal endothelium throughout the surgical procedure. Minimizes cellular trauma during phacoemulsification and surgical manipulation.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-500">
              <div className="flex items-start gap-3">
                <div className="text-3xl">👁️</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Transparencia Óptima' : 'Optimal Transparency'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Excelente claridad óptica que permite visualización superior durante toda la cirugía. No interfiere con la visión del cirujano, facilitando maniobras precisas y seguras.'
                      : 'Excellent optical clarity providing superior visualization throughout surgery. Does not interfere with surgeon\'s vision, facilitating precise and safe maneuvers.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-500">
              <div className="flex items-start gap-3">
                <div className="text-3xl">💪</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Mantenimiento del Espacio' : 'Space Maintenance'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Propiedades coheisivas que mantienen eficazmente el espacio de la cámara anterior. Facilita la realización de capsulorrexis, facoemulsificación e implantación del LIO.'
                      : 'Cohesive properties that effectively maintain anterior chamber space. Facilitates capsulorhexis, phacoemulsification and IOL implantation.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-500">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Fácil Inyección y Remoción' : 'Easy Injection and Removal'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Viscosidad balanceada que permite inyección suave a través de cánula pequeña (calibre 27G). Remoción sencilla y completa mediante aspiración-irrigación al final del procedimiento.'
                      : 'Balanced viscosity allowing smooth injection through small cannula (27G). Simple and complete removal by aspiration-irrigation at end of procedure.'}
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
                    {isSpanish ? 'Producto' : 'Product'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">Aurovisc</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Código del Producto' : 'Product Code'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">2000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Composición' : 'Composition'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? '2% Hidroxipropilmetilcelulosa (HPMC)' : '2% Hydroxypropyl Methylcellulose (HPMC)'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Tipo de Viscoelástico' : 'Viscoelastic Type'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Coheisivo (Alta Viscosidad)' : 'Cohesive (High Viscosity)'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Presentación' : 'Presentation'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Jeringa prellenada estéril 0.5ml / 1.0ml' : 'Sterile prefilled syringe 0.5ml / 1.0ml'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    pH
                  </td>
                  <td className="px-6 py-4 text-gray-700">7.0 - 7.4</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Osmolaridad' : 'Osmolarity'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">290-310 mOsm/kg</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Viscosidad' : 'Viscosity'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">~50,000 cP</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Esterilización' : 'Sterilization'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Autoclave (121°C, 15 min)' : 'Autoclave (121°C, 15 min)'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Almacenamiento' : 'Storage'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Temperatura ambiente (15-25°C)' : 'Room temperature (15-25°C)'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Vida Útil' : 'Shelf Life'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? '3 años desde fecha de fabricación' : '3 years from manufacturing date'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Indicaciones y Uso */}
        <section className="mb-16 bg-blue-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {isSpanish ? '⚕️ Indicaciones y Uso Clínico' : '⚕️ Indications and Clinical Use'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Cirugía de Cataratas' : 'Cataract Surgery'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Protección endotelial durante facoemulsificación. Mantenimiento del espacio para capsulorrexis y manipulación del núcleo.'
                    : 'Endothelial protection during phacoemulsification. Space maintenance for capsulorhexis and nucleus manipulation.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Implantación de LIO' : 'IOL Implantation'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Facilita la inserción del lente intraocular. Protege estructuras durante el despliegue del lente en la cápsula.'
                    : 'Facilitates intraocular lens insertion. Protects structures during lens deployment in capsule.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Cirugía de Glaucoma' : 'Glaucoma Surgery'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Útil en procedimientos combinados de catarata-glaucoma. Mantiene espacio y protege tejidos.'
                    : 'Useful in combined cataract-glaucoma procedures. Maintains space and protects tissues.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Cirugía de Córnea' : 'Corneal Surgery'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Protección endotelial en queratoplastia. Mantenimiento de cámara anterior durante procedimientos corneales.'
                    : 'Endothelial protection in keratoplasty. Anterior chamber maintenance during corneal procedures.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Trauma Ocular' : 'Ocular Trauma'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Reconstrucción de cámara anterior. Protección durante reparación de estructuras dañadas.'
                    : 'Anterior chamber reconstruction. Protection during repair of damaged structures.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {isSpanish ? 'Cirugía Vítreo-Retiniana' : 'Vitreo-Retinal Surgery'}
                </h3>
                <p className="text-gray-700">
                  {isSpanish 
                    ? 'Útil en procedimientos combinados. Protección endotelial en cirugías complejas con lente fáquico.'
                    : 'Useful in combined procedures. Endothelial protection in complex surgeries with phakic lens.'}
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
                  Aurolab - {isSpanish ? 'Calidad Mundial Accesible' : 'Accessible World Quality'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {isSpanish 
                    ? 'Aurolab, fundada en 1992 por Aravind Eye Care System en Madurai, India, es reconocida mundialmente por fabricar productos oftálmicos de alta calidad a precios accesibles. Su línea de viscoelásticos es utilizada en millones de cirugías anualmente en más de 130 países.'
                    : 'Aurolab, founded in 1992 by Aravind Eye Care System in Madurai, India, is globally recognized for manufacturing high-quality ophthalmic products at accessible prices. Its viscoelastic line is used in millions of surgeries annually in over 130 countries.'}
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary">1992</div>
                    <div className="text-sm text-gray-600">{isSpanish ? 'Fundación' : 'Founded'}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary">130+</div>
                    <div className="text-sm text-gray-600">{isSpanish ? 'Países' : 'Countries'}</div>
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
                      <span className="text-green-500">✓</span> ISO 13485
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> CE Mark
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> FDA
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> ANMAT
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Precio y Disponibilidad */}
        <section className="mb-16 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-200">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            {isSpanish ? 'Disponibilidad' : 'Availability'}
          </h2>
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
                    {isSpanish ? 'Descuentos por volumen' : 'Volume discounts'}
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
          productName="Aurolab Aurovisc" 
          productCode="2000" 
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
              href={`/${locale}#productos`}
              className="bg-blue-100 hover:bg-blue-200 text-primary font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {isSpanish ? '← Todos los Productos' : '← All Products'}
            </Link>
            <Link 
              href={`/${locale}/marcas`}
              className="bg-purple-100 hover:bg-purple-200 text-primary font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {isSpanish ? 'Ver Todas las Marcas' : 'View All Brands'}
            </Link>
            <Link 
              href={`/${locale}/productos/aurolab-auroblue`}
              className="bg-indigo-100 hover:bg-indigo-200 text-primary font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {isSpanish ? 'Auroblue (Azul Tripan) →' : 'Auroblue (Trypan Blue) →'}
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
