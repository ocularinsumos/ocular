import { getMessages } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/Seo/JsonLd';
import ProductCTA from '@/components/Productos/ProductCTA';

export async function generateMetadata({ params: { locale } }) {
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const isSpanish = locale === 'es';
  
  const title = isSpanish 
    ? 'Aurolab Auroblue | Azul Tripan 0.06% Tinción Capsular Cirugía Cataratas Argentina'
    : 'Aurolab Auroblue | Trypan Blue 0.06% Capsular Staining Cataract Surgery Argentina';
  
  const description = isSpanish
    ? 'Auroblue Azul Tripan 0.06% de Aurolab para tinción capsular en cirugía de cataratas. Visualización superior de cápsula anterior, especial para cataratas maduras y blancas. Calidad premium, fácil aplicación. Certificación ANMAT. Distribuidor oficial Aurolab en Argentina. Stock permanente en Buenos Aires.'
    : 'Auroblue Trypan Blue 0.06% by Aurolab for capsular staining in cataract surgery. Superior visualization of anterior capsule, especially for mature and white cataracts. Premium quality, easy application. ANMAT certified. Official Aurolab distributor in Argentina. Permanent stock in Buenos Aires.';

  const keywords = isSpanish
    ? 'Auroblue, azul tripan Aurolab, trypan blue 0.06%, tinción capsular, cataratas maduras, cataratas blancas, colorante oftálmico, Aurolab Argentina, tinción cápsula anterior, cirugía cataratas, Auroblue 2003, ANMAT, comprar azul tripan Buenos Aires'
    : 'Auroblue, Aurolab trypan blue, trypan blue 0.06%, capsular staining, mature cataracts, white cataracts, ophthalmic dye, Aurolab Argentina, anterior capsule staining, cataract surgery, Auroblue 2003, ANMAT, buy trypan blue Buenos Aires';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/productos/aurolab-auroblue`,
      languages: {
        'es': `${SITE_URL}/es/productos/aurolab-auroblue`,
        'en': `${SITE_URL}/en/productos/aurolab-auroblue`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/productos/aurolab-auroblue`,
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

export default async function AurolabAurobluePage({ params: { locale } }) {
  const messages = await getMessages();
  const isSpanish = locale === 'es';
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const pageUrl = `${SITE_URL}/${locale}/productos/aurolab-auroblue`;

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
        name: 'Aurolab Auroblue',
        item: pageUrl,
      },
    ],
  };

  // Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': ['Product', 'MedicalDevice'],
    '@id': pageUrl,
    name: 'Aurolab Auroblue - Azul Tripan 0.06%',
    description: isSpanish 
      ? 'Colorante oftálmico Auroblue con azul tripan al 0.06% para tinción de la cápsula anterior durante cirugía de cataratas. Especialmente útil en cataratas maduras, blancas e hipermaduras donde la visualización capsular es difícil. Concentración óptima que proporciona tinción uniforme sin toxicidad. Fácil aplicación y remoción. Certificado ANMAT.'
      : 'Auroblue ophthalmic dye with 0.06% trypan blue for anterior capsule staining during cataract surgery. Especially useful in mature, white and hypermature cataracts where capsular visualization is difficult. Optimal concentration providing uniform staining without toxicity. Easy application and removal. ANMAT certified.',
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
    model: 'Auroblue 0.06%',
    mpn: '2003',
    sku: 'AUROLAB-AUROBLUE-2003',
    offers: {
      '@type': 'Offer',
      url: pageUrl,
      priceCurrency: 'ARS',
      price: '22000',
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
      reviewCount: '187',
      bestRating: '5',
      worstRating: '1',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Principio Activo' : 'Active Ingredient',
        value: isSpanish ? '0.06% Azul Tripan (Trypan Blue)' : '0.06% Trypan Blue',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Concentración' : 'Concentration',
        value: '0.06% (0.6 mg/ml)',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Presentación' : 'Presentation',
        value: isSpanish ? 'Jeringa prellenada 0.5ml estéril' : 'Sterile prefilled syringe 0.5ml',
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Osmolaridad' : 'Osmolarity',
        value: isSpanish ? 'Isotónica' : 'Isotonic',
      },
    ],
    isRelatedTo: [
      {
        '@type': 'MedicalProcedure',
        name: isSpanish ? 'Cirugía de Cataratas' : 'Cataract Surgery',
        procedureType: isSpanish ? 'Facoemulsificación' : 'Phacoemulsification',
      },
    ],
    category: isSpanish ? 'Colorantes Oftálmicos' : 'Ophthalmic Dyes',
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Qué es el Auroblue y para qué se utiliza?'
          : 'What is Auroblue and what is it used for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'Auroblue es un colorante oftálmico que contiene azul tripan al 0.06% en solución estéril isotónica. Se utiliza durante la cirugía de cataratas para teñir la cápsula anterior del cristalino, mejorando significativamente su visualización. Es especialmente útil en cataratas maduras, blancas, hipermaduras o en pacientes con midriasis pobre donde la cápsula es difícil de visualizar. La tinción facilita la realización de una capsulorrexis circular continua (CCC) segura y precisa.'
            : 'Auroblue is an ophthalmic dye containing 0.06% trypan blue in isotonic sterile solution. It is used during cataract surgery to stain the anterior lens capsule, significantly improving its visualization. It is especially useful in mature, white, hypermature cataracts or in patients with poor mydriasis where the capsule is difficult to visualize. Staining facilitates safe and precise continuous curvilinear capsulorhexis (CCC).',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Cuándo está indicado el uso de Auroblue?'
          : 'When is the use of Auroblue indicated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'El Auroblue está indicado en: 1) Cataratas maduras o hipermaduras con córnea edematosa, 2) Cataratas blancas donde la cápsula es difícil de visualizar, 3) Cataratas en pacientes con leucocoria, 4) Casos con midriasis pobre o pupilas pequeñas, 5) Cirugías en condiciones de iluminación subóptima, 6) Cirujanos en entrenamiento aprendiendo capsulorrexis, 7) Cualquier caso donde mejorar la visualización capsular aumente la seguridad quirúrgica. La tinción con azul tripan no afecta negativamente células endoteliales ni otras estructuras oculares.'
            : 'Auroblue is indicated in: 1) Mature or hypermature cataracts with edematous cornea, 2) White cataracts where capsule is difficult to visualize, 3) Cataracts in patients with leukocoria, 4) Cases with poor mydriasis or small pupils, 5) Surgeries in suboptimal lighting conditions, 6) Surgeons in training learning capsulorhexis, 7) Any case where improving capsular visualization increases surgical safety. Trypan blue staining does not negatively affect endothelial cells or other ocular structures.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Cómo se aplica el Auroblue durante la cirugía?'
          : 'How is Auroblue applied during surgery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'Técnica de aplicación: 1) Realizar paracentesis e incisión principal, 2) Inyectar viscoelástico coheisivo para llenar cámara anterior, 3) Inyectar Auroblue (0.1-0.2ml) sobre la cápsula anterior a través de paracentesis, 4) Esperar 30-60 segundos para permitir fijación del colorante, 5) Lavar cámara anterior con BSS para remover exceso de colorante, 6) Reinyectar viscoelástico, 7) Proceder con capsulorrexis. La cápsula quedará teñida de azul intenso, facilitando enormemente su visualización. El colorante persiste durante todo el procedimiento sin interferir con pasos posteriores.'
            : 'Application technique: 1) Perform paracentesis and main incision, 2) Inject cohesive viscoelastic to fill anterior chamber, 3) Inject Auroblue (0.1-0.2ml) over anterior capsule through paracentesis, 4) Wait 30-60 seconds to allow dye fixation, 5) Wash anterior chamber with BSS to remove excess dye, 6) Reinject viscoelastic, 7) Proceed with capsulorhexis. Capsule will be stained intense blue, greatly facilitating visualization. Dye persists throughout procedure without interfering with subsequent steps.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Cuál es el precio del Auroblue en Argentina?'
          : 'What is the price of Auroblue in Argentina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'El precio del Auroblue (Azul Tripan 0.06%) en Argentina es de ARS $22,000 por jeringa prellenada estéril de 0.5ml. Este precio incluye el colorante de alta pureza listo para usar. Para instituciones y compras por volumen, ofrecemos precios preferenciales. Contáctenos por WhatsApp +54 9 11 5237-1300 para consultar disponibilidad inmediata, promociones vigentes y condiciones especiales.'
            : 'The price of Auroblue (Trypan Blue 0.06%) in Argentina is ARS $22,000 per 0.5ml sterile prefilled syringe. This price includes the high-purity ready-to-use dye. For institutions and volume purchases, we offer preferential pricing. Contact us via WhatsApp +54 9 11 5237-1300 to check immediate availability, current promotions and special conditions.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Es seguro el Auroblue? ¿Tiene efectos adversos?'
          : 'Is Auroblue safe? Does it have adverse effects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'El Auroblue es extremadamente seguro cuando se utiliza correctamente. Estudios clínicos extensos demuestran que el azul tripan al 0.06% no causa toxicidad endotelial, no afecta células de la cápsula posterior, ni interfiere con la función celular. Efectos adversos son raros y leves: tinción temporal de córnea (se resuelve en horas), leve inflamación postoperatoria (responde a corticoides). No se han reportado efectos sobre visión final, presión intraocular o complicaciones a largo plazo. La concentración 0.06% es considerada óptima por el balance entre eficacia de tinción y seguridad.'
            : 'Auroblue is extremely safe when used correctly. Extensive clinical studies demonstrate that 0.06% trypan blue does not cause endothelial toxicity, does not affect posterior capsule cells, nor interfere with cellular function. Adverse effects are rare and mild: temporary corneal staining (resolves in hours), mild postoperative inflammation (responds to corticosteroids). No effects on final vision, intraocular pressure or long-term complications have been reported. The 0.06% concentration is considered optimal for the balance between staining efficacy and safety.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish 
          ? '¿Dónde comprar Auroblue en Argentina?'
          : 'Where to buy Auroblue in Argentina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish
            ? 'Ocular Insumos Quirúrgicos es distribuidor oficial de Aurolab en Argentina. Mantenemos stock permanente de Auroblue en Buenos Aires con disponibilidad inmediata. Realizamos envíos urgentes a todo el país con tracking. Contáctenos: WhatsApp +54 9 11 5237-1300, Email: ocularinsumosquirurgicos@gmail.com. Visítenos en Rincón 1203 esq. Av. San Juan, CABA. Horario: Lunes a Viernes 7:00-15:00hs. Ofrecemos asesoramiento técnico sin cargo y programas especiales para instituciones.'
            : 'Ocular Insumos Quirúrgicos is the official Aurolab distributor in Argentina. We maintain permanent stock of Auroblue in Buenos Aires with immediate availability. We make urgent shipments nationwide with tracking. Contact us: WhatsApp +54 9 11 5237-1300, Email: ocularinsumosquirurgicos@gmail.com. Visit us at Rincón 1203 corner Av. San Juan, CABA. Hours: Monday to Friday 7:00-15:00hs. We offer free technical advice and special programs for institutions.',
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
          <span className="text-primary font-medium">Aurolab Auroblue</span>
        </div>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔵 {isSpanish ? 'AZUL TRIPAN 0.06% - TINCIÓN CAPSULAR' : 'TRYPAN BLUE 0.06% - CAPSULAR STAINING'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Aurolab Auroblue
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            {isSpanish 
              ? 'Colorante Oftálmico para Tinción de Cápsula Anterior en Cirugía de Cataratas'
              : 'Ophthalmic Dye for Anterior Capsule Staining in Cataract Surgery'}
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
        <section className="mb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg border border-blue-200">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            {isSpanish ? '✨ Características del Colorante' : '✨ Dye Features'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
              <div className="flex items-start gap-3">
                <div className="text-3xl">👁️</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Visualización Superior' : 'Superior Visualization'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Tinción uniforme y brillante de la cápsula anterior que facilita enormemente la capsulorrexis. Especialmente útil en cataratas maduras, blancas o en condiciones de iluminación subóptima.'
                      : 'Uniform and bright staining of anterior capsule that greatly facilitates capsulorhexis. Especially useful in mature, white cataracts or in suboptimal lighting conditions.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🛡️</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Concentración Óptima 0.06%' : 'Optimal Concentration 0.06%'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Balance perfecto entre eficacia de tinción y seguridad celular. Sin toxicidad endotelial demostrada. Concentración respaldada por estudios clínicos extensos y años de uso seguro.'
                      : 'Perfect balance between staining efficacy and cellular safety. No demonstrated endothelial toxicity. Concentration supported by extensive clinical studies and years of safe use.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Aplicación Rápida y Fácil' : 'Fast and Easy Application'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Tinción completa en 30-60 segundos. Fácil inyección y remoción. No requiere técnicas complejas. Presentación en jeringa prellenada lista para usar que simplifica el procedimiento.'
                      : 'Complete staining in 30-60 seconds. Easy injection and removal. No complex techniques required. Prefilled syringe presentation ready to use that simplifies the procedure.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {isSpanish ? 'Alta Pureza y Esterilidad' : 'High Purity and Sterility'}
                  </h3>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Azul tripan de grado farmacéutico con pureza superior al 99%. Esterilizado por filtración terminal. Libre de endotoxinas. Solución isotónica balanceada compatible con tejidos oculares.'
                      : 'Pharmaceutical grade trypan blue with purity exceeding 99%. Terminally sterilized by filtration. Endotoxin-free. Balanced isotonic solution compatible with ocular tissues.'}
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
                  <td className="px-6 py-4 text-gray-700">Auroblue</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Código del Producto' : 'Product Code'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">2003</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Principio Activo' : 'Active Ingredient'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Azul Tripan (Trypan Blue)' : 'Trypan Blue'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Concentración' : 'Concentration'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">0.06% (0.6 mg/ml)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Presentación' : 'Presentation'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Jeringa prellenada estéril 0.5ml' : 'Sterile prefilled syringe 0.5ml'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Pureza' : 'Purity'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">&gt; 99%</td>
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
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Isotónica (280-320 mOsm/kg)' : 'Isotonic (280-320 mOsm/kg)'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Esterilización' : 'Sterilization'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Filtración terminal 0.22 µm' : 'Terminal filtration 0.22 µm'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Endotoxinas' : 'Endotoxins'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Libre de endotoxinas' : 'Endotoxin-free'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                    {isSpanish ? 'Almacenamiento' : 'Storage'}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {isSpanish ? 'Temperatura ambiente (15-25°C), proteger de la luz' : 'Room temperature (15-25°C), protect from light'}
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

        {/* Indicaciones y Técnica */}
        <section className="mb-16 bg-indigo-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {isSpanish ? '⚕️ Indicaciones y Técnica Quirúrgica' : '⚕️ Indications and Surgical Technique'}
          </h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {isSpanish ? '📌 Indicaciones Principales' : '📌 Main Indications'}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    {isSpanish ? 'Cataratas Maduras/Hipermaduras' : 'Mature/Hypermature Cataracts'}
                  </h4>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Cuando el cristalino opaco hace difícil visualizar la cápsula anterior, especialmente con córnea edematosa.'
                      : 'When opaque lens makes anterior capsule difficult to visualize, especially with edematous cornea.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    {isSpanish ? 'Cataratas Blancas' : 'White Cataracts'}
                  </h4>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Opacidad total del núcleo que impide visualización del borde capsular con iluminación estándar.'
                      : 'Total nucleus opacity preventing capsular edge visualization with standard illumination.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    {isSpanish ? 'Midriasis Pobre' : 'Poor Mydriasis'}
                  </h4>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Pupilas pequeñas que limitan exposición capsular. Facilita capsulorrexis en espacio reducido.'
                      : 'Small pupils limiting capsular exposure. Facilitates capsulorhexis in reduced space.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    {isSpanish ? 'Entrenamiento Quirúrgico' : 'Surgical Training'}
                  </h4>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Cirujanos en formación aprendiendo técnica de capsulorrexis con mayor seguridad y confianza.'
                      : 'Surgeons in training learning capsulorhexis technique with greater safety and confidence.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {isSpanish ? '🔬 Técnica de Aplicación' : '🔬 Application Technique'}
            </h3>
            <div className="bg-white p-6 rounded-xl space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold mb-1">
                    {isSpanish ? 'Preparación' : 'Preparation'}
                  </h4>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Realizar paracentesis e incisión principal. Inyectar viscoelástico coheisivo para llenar completamente la cámara anterior.'
                      : 'Perform paracentesis and main incision. Inject cohesive viscoelastic to completely fill anterior chamber.'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold mb-1">
                    {isSpanish ? 'Inyección de Auroblue' : 'Auroblue Injection'}
                  </h4>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Inyectar 0.1-0.2ml de Auroblue sobre la cápsula anterior a través de la paracentesis. Distribuir uniformemente.'
                      : 'Inject 0.1-0.2ml of Auroblue over anterior capsule through paracentesis. Distribute uniformly.'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold mb-1">
                    {isSpanish ? 'Tiempo de Fijación' : 'Fixation Time'}
                  </h4>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Esperar 30-60 segundos para permitir que el colorante se fije a la cápsula. No es necesario tiempo prolongado.'
                      : 'Wait 30-60 seconds to allow dye to fix to capsule. Extended time is not necessary.'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold mb-1">
                    {isSpanish ? 'Lavado' : 'Washing'}
                  </h4>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Irrigar cámara anterior con BSS para remover exceso de colorante no fijado. La cápsula permanecerá teñida.'
                      : 'Irrigate anterior chamber with BSS to remove excess unfixed dye. Capsule will remain stained.'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h4 className="font-bold mb-1">
                    {isSpanish ? 'Capsulorrexis' : 'Capsulorhexis'}
                  </h4>
                  <p className="text-gray-700">
                    {isSpanish 
                      ? 'Reinyectar viscoelástico. Proceder con capsulorrexis circular continua con excelente visualización del borde capsular azul.'
                      : 'Reinject viscoelastic. Proceed with continuous curvilinear capsulorhexis with excellent visualization of blue capsular edge.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ventajas Clínicas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {isSpanish ? '🌟 Ventajas Clínicas' : '🌟 Clinical Advantages'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-xl mb-2">
                {isSpanish ? 'Mayor Seguridad' : 'Greater Safety'}
              </h3>
              <p className="text-gray-700">
                {isSpanish 
                  ? 'Reduce significativamente el riesgo de capsulorrexis incompleta o extensión radial en casos difíciles.'
                  : 'Significantly reduces risk of incomplete capsulorhexis or radial tear in difficult cases.'}
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-xl mb-2">
                {isSpanish ? 'Mayor Eficiencia' : 'Greater Efficiency'}
              </h3>
              <p className="text-gray-700">
                {isSpanish 
                  ? 'Acorta tiempo quirúrgico en cataratas difíciles. Capsulorrexis más rápida y precisa.'
                  : 'Shortens surgical time in difficult cataracts. Faster and more precise capsulorhexis.'}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="font-bold text-xl mb-2">
                {isSpanish ? 'Mayor Confianza' : 'Greater Confidence'}
              </h3>
              <p className="text-gray-700">
                {isSpanish 
                  ? 'Mejora confianza del cirujano en casos complejos. Facilita curva de aprendizaje.'
                  : 'Improves surgeon confidence in complex cases. Facilitates learning curve.'}
              </p>
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
                    ? 'Aurolab, fundada en 1992 por Aravind Eye Care System en Madurai, India, es reconocida mundialmente por fabricar productos oftálmicos de alta calidad a precios accesibles. Su línea de productos quirúrgicos es utilizada en millones de cirugías anualmente en más de 130 países.'
                    : 'Aurolab, founded in 1992 by Aravind Eye Care System in Madurai, India, is globally recognized for manufacturing high-quality ophthalmic products at accessible prices. Its surgical products line is used in millions of surgeries annually in over 130 countries.'}
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
                    {isSpanish ? 'Envíos urgentes a todo el país' : 'Urgent nationwide shipping'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">
                    {isSpanish ? 'Descuentos institucionales' : 'Institutional discounts'}
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
          productName="Aurolab Auroblue" 
          productCode="2003" 
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
              href={`/${locale}/productos/aurolab-aurovisc`}
              className="bg-cyan-100 hover:bg-cyan-200 text-primary font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {isSpanish ? '← Aurovisc (Viscoelástico)' : '← Aurovisc (Viscoelastic)'}
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
