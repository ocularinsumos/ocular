import { getMessages } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/Seo/JsonLd';
import Productos from '@/components/Productos/Productos';

export async function generateMetadata({ params: { locale } }) {
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const isSpanish = locale === 'es';
  
  const title = isSpanish 
    ? 'Lentes Intraoculares Premium | LIO para Cirugía de Cataratas - Ocular'
    : 'Premium Intraocular Lenses | IOL for Cataract Surgery - Ocular';
  
  const description = isSpanish
    ? 'Lentes intraoculares (LIO) de alta calidad para cirugía de cataratas. Ofrecemos lentes monofocales, multifocales, tóricos y asféricos. Marcas premium: Aurolab, Ophtec. Asesoramiento gratuito especializado en Buenos Aires, Argentina. Certificación ANMAT.'
    : 'High-quality intraocular lenses (IOL) for cataract surgery. We offer monofocal, multifocal, toric and aspheric lenses. Premium brands: Aurolab, Ophtec. Free specialized advice in Buenos Aires, Argentina. ANMAT certified.';

  const keywords = isSpanish
    ? 'lentes intraoculares, lente intraocular, LIO, IOL, lentes para cataratas, lentes monofocales, lentes multifocales, lentes tóricos, lentes asféricos, cirugía de cataratas, lentes intraoculares Argentina, lentes intraoculares Buenos Aires, Aurolab, Ophtec, lentes premium, lentes de alta calidad'
    : 'intraocular lenses, intraocular lens, IOL, cataract lenses, monofocal lenses, multifocal lenses, toric lenses, aspheric lenses, cataract surgery, intraocular lenses Argentina, intraocular lenses Buenos Aires, Aurolab, Ophtec, premium lenses';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/lentes-intraoculares`,
      languages: {
        'es': `${SITE_URL}/es/lentes-intraoculares`,
        'en': `${SITE_URL}/en/lentes-intraoculares`,
        'x-default': `${SITE_URL}/lentes-intraoculares`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/lentes-intraoculares`,
      siteName: 'Ocular Insumos Quirúrgicos',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type: 'article',
      images: [{
        url: `${SITE_URL}/images/servicios/lentes-intraoculares.webp`,
        width: 1200,
        height: 630,
        alt: 'Lentes Intraoculares',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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

export default async function LentesIntraocularesPage({ params: { locale } }) {
  const messages = await getMessages();
  const isSpanish = locale === 'es';
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const pageUrl = `${SITE_URL}/${locale}/lentes-intraoculares`;

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
        item: pageUrl,
      },
    ],
  };

  // Medical Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalDevice',
    '@id': pageUrl,
    name: isSpanish ? 'Lentes Intraoculares' : 'Intraocular Lenses',
    alternateName: ['LIO', 'IOL', 'Lente Intraocular'],
    description: isSpanish 
      ? 'Lentes intraoculares de alta calidad para cirugía de cataratas. Disponibles en versiones monofocales, multifocales, tóricos y asféricos.'
      : 'High-quality intraocular lenses for cataract surgery. Available in monofocal, multifocal, toric and aspheric versions.',
    url: pageUrl,
    medicalSpecialty: 'Ophthalmology',
    deviceCategory: 'Intraocular Lens',
    purpose: isSpanish 
      ? 'Reemplazo del cristalino natural durante la cirugía de cataratas para restaurar la visión.'
      : 'Replacement of the natural lens during cataract surgery to restore vision.',
    contraindication: {
      '@type': 'MedicalContraindication',
      name: isSpanish ? 'Consultar con oftalmólogo' : 'Consult with ophthalmologist',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Multiple Brands',
      sameAs: ['Aurolab', 'Ophtec'],
    },
    availableIn: {
      '@type': 'Country',
      name: 'Argentina',
    },
  };

  // Article Schema for SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': pageUrl,
    name: isSpanish ? 'Guía Completa de Lentes Intraoculares' : 'Complete Guide to Intraocular Lenses',
    description: isSpanish 
      ? 'Información completa sobre lentes intraoculares para cirugía de cataratas: tipos, características, marcas y cómo elegir el mejor lente para cada paciente.'
      : 'Complete information about intraocular lenses for cataract surgery: types, characteristics, brands and how to choose the best lens for each patient.',
    url: pageUrl,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    author: {
      '@id': `${SITE_URL}/#organization`,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    mainEntity: {
      '@type': 'MedicalCondition',
      name: isSpanish ? 'Cataratas' : 'Cataracts',
      associatedAnatomy: {
        '@type': 'AnatomicalStructure',
        name: isSpanish ? 'Cristalino' : 'Lens',
      },
    },
    specialty: 'Ophthalmology',
    audience: {
      '@type': 'MedicalAudience',
      audienceType: ['Patient', 'Physician'],
    },
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isSpanish ? '¿Qué es un lente intraocular?' : 'What is an intraocular lens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish 
            ? 'Un lente intraocular (LIO) es un dispositivo médico que se implanta en el ojo para reemplazar el cristalino natural durante la cirugía de cataratas. Estos lentes permiten restaurar la visión después de la extracción de la catarata.'
            : 'An intraocular lens (IOL) is a medical device that is implanted in the eye to replace the natural lens during cataract surgery. These lenses allow vision to be restored after cataract extraction.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish ? '¿Qué tipos de lentes intraoculares existen?' : 'What types of intraocular lenses exist?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish 
            ? 'Existen varios tipos de lentes intraoculares: Monofocales (visión a una distancia), Multifocales (visión a múltiples distancias), Tóricos (para corregir astigmatismo) y Asféricos (mejor calidad de visión). Cada tipo está diseñado para necesidades visuales específicas.'
            : 'There are several types of intraocular lenses: Monofocal (vision at one distance), Multifocal (vision at multiple distances), Toric (to correct astigmatism) and Aspheric (better vision quality). Each type is designed for specific visual needs.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish ? '¿Cuánto dura un lente intraocular?' : 'How long does an intraocular lens last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish 
            ? 'Los lentes intraoculares están diseñados para durar toda la vida. Una vez implantados correctamente durante la cirugía de cataratas, no necesitan ser reemplazados y mantienen su funcionalidad de forma permanente.'
            : 'Intraocular lenses are designed to last a lifetime. Once properly implanted during cataract surgery, they do not need to be replaced and maintain their functionality permanently.',
        },
      },
      {
        '@type': 'Question',
        name: isSpanish ? '¿Cómo elegir el mejor lente intraocular?' : 'How to choose the best intraocular lens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish 
            ? 'La elección del lente intraocular depende de factores como el estilo de vida del paciente, necesidades visuales, presencia de astigmatismo y presupuesto. Nuestro equipo ofrece asesoramiento gratuito para ayudarte a elegir el mejor lente para tus necesidades específicas.'
            : 'The choice of intraocular lens depends on factors such as the patient\'s lifestyle, visual needs, presence of astigmatism and budget. Our team offers free advice to help you choose the best lens for your specific needs.',
        },
      },
    ],
  };

  return (
    <>
      <article className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {isSpanish ? 'Lentes Intraoculares Premium' : 'Premium Intraocular Lenses'}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {isSpanish 
              ? 'Especialistas en lentes intraoculares (LIO) de alta calidad para cirugía de cataratas. Más de 20 años de experiencia en el mercado oftalmológico argentino.'
              : 'Specialists in high-quality intraocular lenses (IOL) for cataract surgery. Over 20 years of experience in the Argentine ophthalmology market.'}
          </p>
        </header>

        {/* Main Content Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                {isSpanish ? '¿Qué son los Lentes Intraoculares?' : 'What are Intraocular Lenses?'}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {isSpanish 
                  ? 'Los lentes intraoculares (LIO o IOL por sus siglas en inglés) son dispositivos médicos que se implantan en el ojo durante la cirugía de cataratas para reemplazar el cristalino natural que se ha opacificado.'
                  : 'Intraocular lenses (IOL) are medical devices that are implanted in the eye during cataract surgery to replace the natural lens that has become cloudy.'}
              </p>
              <p className="text-lg text-gray-700 mb-4">
                {isSpanish 
                  ? 'Estos lentes permiten restaurar la visión del paciente y, dependiendo del tipo elegido, pueden corregir también otros problemas visuales como la miopía, hipermetropía o astigmatismo.'
                  : 'These lenses allow the patient\'s vision to be restored and, depending on the type chosen, can also correct other visual problems such as myopia, hyperopia or astigmatism.'}
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724685417/msz-aurolab-auroflex_gdnoin.webp"
                alt="Lente intraocular de alta calidad"
                fill
                className="object-contain rounded-lg"
                title="Lente Intraocular Premium"
                aria-label="Lente Intraocular Premium"
              />
            </div>
          </div>
        </section>

        {/* Types of Lenses Section */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
            {isSpanish ? 'Tipos de Lentes Intraoculares' : 'Types of Intraocular Lenses'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">
                {isSpanish ? 'Lentes Monofocales' : 'Monofocal Lenses'}
              </h3>
              <p className="text-gray-700">
                {isSpanish 
                  ? 'Proporcionan visión clara a una distancia específica (generalmente de lejos). Son los más utilizados y ofrecen excelentes resultados.'
                  : 'Provide clear vision at a specific distance (usually far). They are the most widely used and offer excellent results.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">
                {isSpanish ? 'Lentes Multifocales' : 'Multifocal Lenses'}
              </h3>
              <p className="text-gray-700">
                {isSpanish 
                  ? 'Permiten ver a múltiples distancias (cerca, intermedia y lejos), reduciendo la dependencia de anteojos después de la cirugía.'
                  : 'Allow vision at multiple distances (near, intermediate and far), reducing dependence on glasses after surgery.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">
                {isSpanish ? 'Lentes Tóricos' : 'Toric Lenses'}
              </h3>
              <p className="text-gray-700">
                {isSpanish 
                  ? 'Diseñados específicamente para pacientes con astigmatismo, corrigiendo esta condición durante la cirugía de cataratas.'
                  : 'Specifically designed for patients with astigmatism, correcting this condition during cataract surgery.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">
                {isSpanish ? 'Lentes Asféricos' : 'Aspheric Lenses'}
              </h3>
              <p className="text-gray-700">
                {isSpanish 
                  ? 'Mejoran la calidad de la visión reduciendo aberraciones ópticas, especialmente en condiciones de baja luz.'
                  : 'Improve vision quality by reducing optical aberrations, especially in low light conditions.'}
              </p>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
            {isSpanish ? 'Marcas de Lentes Intraoculares que Ofrecemos' : 'Intraocular Lens Brands We Offer'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-primary p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-3">Aurolab</h3>
              <p className="text-gray-700 mb-3">
                {isSpanish 
                  ? 'Líder mundial en lentes intraoculares de calidad. Ofrecemos la línea completa Auroflex, incluyendo lentes asféricos e hidrofílicos de última generación.'
                  : 'World leader in quality intraocular lenses. We offer the complete Auroflex line, including state-of-the-art aspheric and hydrophilic lenses.'}
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Auroflex Asférico</li>
                <li>Auroflex EV Gold</li>
                <li>Aurolens Monofocal</li>
              </ul>
            </div>

            <div className="border-2 border-primary p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-3">Ophtec</h3>
              <p className="text-gray-700 mb-3">
                {isSpanish 
                  ? 'Fabricante holandés de prestigio con más de 35 años de experiencia. Especialistas en lentes fáquicos de última tecnología.'
                  : 'Prestigious Dutch manufacturer with over 35 years of experience. Specialists in state-of-the-art phakic lenses.'}
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Artiflex 401</li>
                <li>Artisan</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
            {isSpanish ? '¿Por qué elegir nuestros Lentes Intraoculares?' : 'Why choose our Intraocular Lenses?'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="text-xl font-bold mb-2">{isSpanish ? 'Certificación ANMAT' : 'ANMAT Certification'}</h3>
              <p className="text-gray-700">
                {isSpanish 
                  ? 'Todos nuestros lentes cuentan con aprobación de ANMAT y cumplen con los más altos estándares de calidad.'
                  : 'All our lenses have ANMAT approval and meet the highest quality standards.'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">★</div>
              <h3 className="text-xl font-bold mb-2">{isSpanish ? 'Calidad Premium' : 'Premium Quality'}</h3>
              <p className="text-gray-700">
                {isSpanish 
                  ? 'Trabajamos solo con fabricantes reconocidos mundialmente que garantizan la excelencia en cada lente.'
                  : 'We work only with world-renowned manufacturers that guarantee excellence in every lens.'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-xl font-bold mb-2">{isSpanish ? 'Asesoramiento Gratuito' : 'Free Advice'}</h3>
              <p className="text-gray-700">
                {isSpanish 
                  ? 'Nuestro equipo de expertos te ayudará a elegir el lente más adecuado para cada caso sin costo adicional.'
                  : 'Our team of experts will help you choose the most suitable lens for each case at no additional cost.'}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary text-white p-12 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {isSpanish ? '¿Necesitas Lentes Intraoculares?' : 'Need Intraocular Lenses?'}
          </h2>
          <p className="text-xl mb-6">
            {isSpanish 
              ? 'Contáctanos para recibir asesoramiento personalizado y cotización de lentes intraoculares'
              : 'Contact us for personalized advice and intraocular lens quotes'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}#contacto`}
              className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              {isSpanish ? 'Solicitar Presupuesto' : 'Request Quote'}
            </Link>
            <a 
              href="https://wa.me/5491152371300?text=Hola,%20necesito%20información%20sobre%20lentes%20intraoculares"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              {isSpanish ? 'WhatsApp' : 'WhatsApp'}
            </a>
          </div>
        </section>

        {/* Download Section */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            {isSpanish ? 'Guía de Lentes Intraoculares' : 'Intraocular Lenses Guide'}
          </h2>
          <p className="text-gray-700 mb-6">
            {isSpanish 
              ? 'Descarga nuestra guía completa con información detallada sobre tipos de lentes y sus usos'
              : 'Download our complete guide with detailed information on lens types and their uses'}
          </p>
          <a 
            href="/docs/Tipos_Lentes_Intraoculares_y_Sus_Usos-OCULAR.pdf"
            download
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            {isSpanish ? 'Descargar Guía PDF' : 'Download PDF Guide'}
          </a>
        </section>
      </article>

      {/* Related Products */}
      <Productos 
        producto={messages.producto} 
        texto={messages.productos} 
        categorias={messages.categorias}
      />

      {/* JSON-LD Schemas */}
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}
