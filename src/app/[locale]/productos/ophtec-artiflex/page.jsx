import { getMessages } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/Seo/JsonLd';
import ProductCTA from '@/components/Productos/ProductCTA';

export async function generateMetadata({ params: { locale } }) {
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const isSpanish = locale === 'es';
  
  const title = isSpanish 
    ? 'Ophtec Artiflex | Lente Fáquico para Alta Miopía Argentina'
    : 'Ophtec Artiflex | Phakic Lens for High Myopia Argentina';
  
  const description = isSpanish
    ? 'Lente intraocular fáquico Ophtec Artiflex 401 para corrección de alta miopía. Tecnología holandesa premium. Ideal para pacientes jóvenes con cristalino transparente. Certificación ANMAT. Distribuidor oficial en Argentina.'
    : 'Ophtec Artiflex 401 phakic intraocular lens for high myopia correction. Premium Dutch technology. Ideal for young patients with clear lens. ANMAT certified. Official distributor in Argentina.';

  const keywords = isSpanish
    ? 'Ophtec Artiflex, lente fáquico, alta miopía, lentes Ophtec Argentina, Artiflex 401, corrección miopia, lente de cámara anterior, cirugía refractiva, Ophtec Buenos Aires, comprar Ophtec, lente intraocular fáquico, ANMAT'
    : 'Ophtec Artiflex, phakic lens, high myopia, Ophtec lenses Argentina, Artiflex 401, myopia correction, anterior chamber lens, refractive surgery, Ophtec Buenos Aires, buy Ophtec, phakic intraocular lens, ANMAT';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/productos/ophtec-artiflex`,
      languages: {
        'es': `${SITE_URL}/es/productos/ophtec-artiflex`,
        'en': `${SITE_URL}/en/productos/ophtec-artiflex`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/productos/ophtec-artiflex`,
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

export default async function OphtecArtiflexPage({ params: { locale } }) {
  const isSpanish = locale === 'es';
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const pageUrl = `${SITE_URL}/${locale}/productos/ophtec-artiflex`;

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
        name: 'Ophtec Artiflex',
        item: pageUrl,
      },
    ],
  };

  // Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': ['Product', 'MedicalDevice'],
    '@id': pageUrl,
    name: 'Ophtec Artiflex 401 - Lente Intraocular Fáquico',
    description: isSpanish 
      ? 'Lente intraocular fáquico articulado de cámara anterior para corrección de alta miopía (-2.00 a -14.50 D). Tecnología holandesa premium. Implantación delante del iris en ojos con cristalino transparente. Reversible.'
      : 'Articulated anterior chamber phakic intraocular lens for high myopia correction (-2.00 to -14.50 D). Premium Dutch technology. Implantation in front of iris in eyes with clear lens. Reversible.',
    brand: {
      '@type': 'Brand',
      name: 'Ophtec',
      url: 'https://www.ophtec.com',
      description: isSpanish 
        ? 'Ophtec - Fabricante holandés de prestigio con más de 35 años de experiencia en oftalmología. Líder mundial en lentes fáquicos.'
        : 'Ophtec - Prestigious Dutch manufacturer with over 35 years of experience in ophthalmology. World leader in phakic lenses.'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Ophtec BV',
      url: 'https://www.ophtec.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'NL',
        addressLocality: 'Groningen'
      }
    },
    model: 'Artiflex 401',
    category: isSpanish ? 'Lentes Intraoculares Fáquicos' : 'Phakic Intraocular Lenses',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@id': `${SITE_URL}/#organization`
      },
      url: pageUrl,
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Tipo de Lente' : 'Lens Type',
        value: isSpanish ? 'Fáquico de Cámara Anterior' : 'Anterior Chamber Phakic'
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Material' : 'Material',
        value: isSpanish ? 'Silicona Flexible' : 'Flexible Silicone'
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Origen' : 'Origin',
        value: isSpanish ? 'Holanda' : 'Netherlands'
      },
      {
        '@type': 'PropertyValue',
        name: isSpanish ? 'Certificación' : 'Certification',
        value: 'ANMAT, CE, FDA'
      }
    ],
    audience: {
      '@type': 'MedicalAudience',
      audienceType: ['Ophthalmologist', 'Refractive Surgeon']
    },
    isRelatedTo: {
      '@type': 'MedicalCondition',
      name: isSpanish ? 'Alta Miopía' : 'High Myopia'
    }
  };

  return (
    <>
      <article className="max-w-7xl mx-auto px-4 py-12">
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
            <span className="text-primary font-medium">Ophtec Artiflex</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative h-96 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">👁️</div>
                <h2 className="text-2xl font-bold text-primary">Ophtec Artiflex</h2>
                <p className="text-gray-600">{isSpanish ? 'Lente Fáquico Premium' : 'Premium Phakic Lens'}</p>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {isSpanish ? 'Consultar Disponibilidad' : 'Check Availability'}
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2 ml-2">
                  ANMAT
                </span>
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-2 ml-2">
                  {isSpanish ? '🇳🇱 Holanda' : '🇳🇱 Netherlands'}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Ophtec Artiflex 401
              </h1>
              
              <p className="text-xl text-gray-600 mb-4">
                {isSpanish 
                  ? 'Lente Intraocular Fáquico para Alta Miopía'
                  : 'Phakic Intraocular Lens for High Myopia'}
              </p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-700">{isSpanish ? 'Marca:' : 'Brand:'}</span>
                  <span className="text-lg font-bold text-primary">Ophtec BV</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-700">{isSpanish ? 'Modelo:' : 'Model:'}</span>
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">Artiflex 401</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">{isSpanish ? 'Tecnología:' : 'Technology:'}</span>
                  <span>{isSpanish ? 'Holandesa Premium' : 'Premium Dutch'}</span>
                </div>
              </div>

              <ProductCTA 
                productName="Ophtec Artiflex 401"
                productCode="ARTIFLEX401"
                locale={locale}
                isSpanish={isSpanish}
              />
            </div>
          </div>
        </header>

        {/* Sobre Ophtec */}
        <section className="mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            {isSpanish ? 'Sobre Ophtec - Tecnología Holandesa' : 'About Ophtec - Dutch Technology'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-blue-50">
                {isSpanish 
                  ? 'Ophtec BV es un fabricante holandés líder mundial en lentes intraoculares fáquicos con sede en Groningen, Países Bajos. Con más de 35 años de experiencia, Ophtec es pionera en el desarrollo de lentes fáquicos para la corrección de altas ametropías.'
                  : 'Ophtec BV is a world-leading Dutch manufacturer of phakic intraocular lenses based in Groningen, Netherlands. With over 35 years of experience, Ophtec is a pioneer in developing phakic lenses for correcting high refractive errors.'}
              </p>
              <p className="text-blue-50">
                {isSpanish 
                  ? 'La línea Artiflex/Artisan de Ophtec cuenta con más de 300,000 implantes exitosos en todo el mundo y es reconocida por su seguridad, predictibilidad y excelentes resultados visuales a largo plazo.'
                  : 'Ophtec\'s Artiflex/Artisan line has over 300,000 successful implants worldwide and is recognized for its safety, predictability, and excellent long-term visual results.'}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-yellow-300 text-xl">★</span>
                <div>
                  <p className="font-bold">{isSpanish ? 'Líder en Lentes Fáquicos' : 'Leader in Phakic Lenses'}</p>
                  <p className="text-sm text-blue-100">{isSpanish ? 'Más de 300,000 implantes mundiales' : 'Over 300,000 implants worldwide'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-300 text-xl">★</span>
                <div>
                  <p className="font-bold">{isSpanish ? 'Tecnología Europea' : 'European Technology'}</p>
                  <p className="text-sm text-blue-100">{isSpanish ? 'Fabricado en Países Bajos' : 'Made in Netherlands'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-300 text-xl">★</span>
                <div>
                  <p className="font-bold">{isSpanish ? 'Certificaciones Internacionales' : 'International Certifications'}</p>
                  <p className="text-sm text-blue-100">CE Mark, FDA, ANMAT</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Características */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {isSpanish ? 'Características del Artiflex' : 'Artiflex Features'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-lg font-bold mb-2">{isSpanish ? 'Lente Fáquico' : 'Phakic Lens'}</h3>
              <p className="text-sm text-gray-700">
                {isSpanish 
                  ? 'Se implanta delante del iris preservando el cristalino natural transparente'
                  : 'Implanted in front of the iris preserving the natural transparent lens'}
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="text-lg font-bold mb-2">{isSpanish ? 'Material Flexible' : 'Flexible Material'}</h3>
              <p className="text-sm text-gray-700">
                {isSpanish 
                  ? 'Silicona flexible plegable para incisión pequeña (3.2-3.5 mm)'
                  : 'Foldable flexible silicone for small incision (3.2-3.5 mm)'}
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="text-lg font-bold mb-2">{isSpanish ? 'Reversible' : 'Reversible'}</h3>
              <p className="text-sm text-gray-700">
                {isSpanish 
                  ? 'Procedimiento reversible, puede ser removido si es necesario'
                  : 'Reversible procedure, can be removed if necessary'}
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold mb-2">{isSpanish ? 'Alta Precisión' : 'High Precision'}</h3>
              <p className="text-sm text-gray-700">
                {isSpanish 
                  ? 'Excelente predictibilidad y resultados visuales superiores'
                  : 'Excellent predictability and superior visual results'}
              </p>
            </div>
          </div>
        </section>

        {/* Indicaciones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {isSpanish ? 'Indicaciones y Pacientes Ideales' : 'Indications and Ideal Patients'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ✓ {isSpanish ? 'Alta Miopía' : 'High Myopia'}
              </h3>
              <p className="text-gray-700 mb-3">
                {isSpanish 
                  ? 'Ideal para corrección de miopía entre -2.00 y -14.50 dioptrías. Especialmente indicado cuando LASIK no es viable por córnea delgada.'
                  : 'Ideal for myopia correction between -2.00 and -14.50 diopters. Especially indicated when LASIK is not viable due to thin cornea.'}
              </p>
              <p className="text-sm font-medium text-green-700">
                {isSpanish ? 'Rango dióptrico: -2.00 a -14.50 D' : 'Diopter range: -2.00 to -14.50 D'}
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ✓ {isSpanish ? 'Pacientes Jóvenes' : 'Young Patients'}
              </h3>
              <p className="text-gray-700 mb-3">
                {isSpanish 
                  ? 'Pacientes entre 21-45 años con cristalino transparente y acomodación funcional. No candidatos a cirugía refractiva corneal.'
                  : 'Patients aged 21-45 years with clear crystalline lens and functional accommodation. Not candidates for corneal refractive surgery.'}
              </p>
              <p className="text-sm font-medium text-blue-700">
                {isSpanish ? 'Edad: 21-45 años aproximadamente' : 'Age: approximately 21-45 years'}
              </p>
            </div>
          </div>
        </section>

        {/* Especificaciones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {isSpanish ? 'Especificaciones Técnicas' : 'Technical Specifications'}
          </h2>
          
          <div className="bg-white border rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 w-1/3">{isSpanish ? 'Tipo' : 'Type'}</td>
                  <td className="px-6 py-4 text-gray-700">{isSpanish ? 'Lente Fáquico de Cámara Anterior' : 'Anterior Chamber Phakic Lens'}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{isSpanish ? 'Material' : 'Material'}</td>
                  <td className="px-6 py-4 text-gray-700">{isSpanish ? 'Silicona Flexible Plegable' : 'Foldable Flexible Silicone'}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{isSpanish ? 'Rango Dióptrico' : 'Diopter Range'}</td>
                  <td className="px-6 py-4 text-gray-700">-2.00 a -14.50 D</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{isSpanish ? 'Diámetro Óptico' : 'Optical Diameter'}</td>
                  <td className="px-6 py-4 text-gray-700">6.0 mm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{isSpanish ? 'Longitud Total' : 'Overall Length'}</td>
                  <td className="px-6 py-4 text-gray-700">8.5 mm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{isSpanish ? 'Incisión' : 'Incision'}</td>
                  <td className="px-6 py-4 text-gray-700">3.2 - 3.5 mm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{isSpanish ? 'Filtro UV' : 'UV Filter'}</td>
                  <td className="px-6 py-4 text-gray-700">{isSpanish ? 'Sí' : 'Yes'}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{isSpanish ? 'Reversibilidad' : 'Reversibility'}</td>
                  <td className="px-6 py-4 text-gray-700">{isSpanish ? 'Sí (removible)' : 'Yes (removable)'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ventajas */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {isSpanish ? 'Ventajas del Ophtec Artiflex' : 'Ophtec Artiflex Advantages'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <h4 className="font-bold text-gray-900">{isSpanish ? 'Preserva el Cristalino' : 'Preserves Crystalline Lens'}</h4>
                  <p className="text-sm text-gray-600">{isSpanish ? 'Mantiene la acomodación natural' : 'Maintains natural accommodation'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-bold text-gray-900">{isSpanish ? 'Procedimiento Reversible' : 'Reversible Procedure'}</h4>
                  <p className="text-sm text-gray-600">{isSpanish ? 'Puede ser removido si necesario' : 'Can be removed if necessary'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-bold text-gray-900">{isSpanish ? 'Alta Predictibilidad' : 'High Predictability'}</h4>
                  <p className="text-sm text-gray-600">{isSpanish ? 'Resultados muy precisos' : 'Very precise results'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-bold text-gray-900">{isSpanish ? 'Recuperación Rápida' : 'Fast Recovery'}</h4>
                  <p className="text-sm text-gray-600">{isSpanish ? 'Mejora visual inmediata' : 'Immediate visual improvement'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛡️</span>
                <div>
                  <h4 className="font-bold text-gray-900">{isSpanish ? 'Material Biocompatible' : 'Biocompatible Material'}</h4>
                  <p className="text-sm text-gray-600">{isSpanish ? 'Silicona de calidad médica' : 'Medical grade silicone'}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👁️</span>
                <div>
                  <h4 className="font-bold text-gray-900">{isSpanish ? 'Visión de Alta Calidad' : 'High Quality Vision'}</h4>
                  <p className="text-sm text-gray-600">{isSpanish ? 'Excelente calidad óptica' : 'Excellent optical quality'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isSpanish ? '¿Necesitas Ophtec Artiflex?' : 'Need Ophtec Artiflex?'}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            {isSpanish 
              ? 'Distribuidor oficial en Argentina • Consulta disponibilidad'
              : 'Official distributor in Argentina • Check availability'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a 
              href={`https://wa.me/5491152371300?text=Hola, quiero consultar sobre Ophtec Artiflex`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              {isSpanish ? '💬 Consultar por WhatsApp' : '💬 WhatsApp Inquiry'}
            </a>
            <Link 
              href={`/${locale}#contacto`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              {isSpanish ? '📧 Solicitar Información' : '📧 Request Information'}
            </Link>
          </div>
        </section>

        {/* Productos Relacionados */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {isSpanish ? 'Otros Productos Ophtec' : 'Other Ophtec Products'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href={`/${locale}/productos/ophtec-artisan`} className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-primary mb-2">Ophtec Artisan</h3>
              <p className="text-gray-600 text-sm">{isSpanish ? 'Lente fáquico rigido para casos especiales' : 'Rigid phakic lens for special cases'}</p>
            </Link>
            <Link href={`/${locale}/lentes-intraoculares`} className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-primary mb-2">{isSpanish ? 'Todos los LIO' : 'All IOLs'}</h3>
              <p className="text-gray-600 text-sm">{isSpanish ? 'Ver catálogo completo' : 'See complete catalog'}</p>
            </Link>
            <Link href={`/${locale}/productos/aurolab-auroflex`} className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-primary mb-2">Aurolab Auroflex</h3>
              <p className="text-gray-600 text-sm">{isSpanish ? 'Lente monofocal para cataratas' : 'Monofocal lens for cataracts'}</p>
            </Link>
          </div>
        </section>
      </article>

      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productSchema} />
    </>
  );
}
