import { getMessages } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/Seo/JsonLd';
import Productos from '@/components/Productos/Productos';
import ContactButton from '@/components/Contact/ContactButton';

export async function generateMetadata({ params: { locale } }) {
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const isSpanish = locale === 'es';
  
  const title = isSpanish 
    ? 'Lentes Intraoculares Argentina | Comprar LIO Premium | Ocular'
    : 'Intraocular Lenses Argentina | Buy Premium IOL | Ocular';
  
  const description = isSpanish
    ? 'Comprar lentes intraoculares (LIO) de alta calidad en Argentina. Especialistas en cirugía de cataratas. Lentes monofocales, multifocales y tóricos. Marcas: Aurolab, Ophtec. Certificación ANMAT. Stock permanente. Envío a todo el país. Asesoramiento gratuito en Buenos Aires.'
    : 'Buy high-quality intraocular lenses (IOL) in Argentina. Cataract surgery specialists. Monofocal, multifocal and toric lenses. Brands: Aurolab, Ophtec. ANMAT certified. Permanent stock. Nationwide shipping. Free advice in Buenos Aires.';

  const keywords = isSpanish
    ? 'lentes intraoculares, lente intraocular, comprar lentes intraoculares, lentes intraoculares Argentina, lentes intraoculares Buenos Aires, LIO Argentina, IOL Argentina, lentes para cataratas, lentes para cirugía de cataratas, lentes monofocales precio, lentes multifocales precio, lentes tóricos, lentes asféricos, cirugía de cataratas, Aurolab Argentina, Ophtec Argentina, lentes Auroflex, lentes premium cataratas, insumos quirúrgicos oftalmológicos, precio lentes intraoculares, venta lentes intraoculares, lentes intraoculares CABA, ANMAT lentes intraoculares'
    : 'intraocular lenses, intraocular lens, buy intraocular lenses, intraocular lenses Argentina, intraocular lenses Buenos Aires, IOL Argentina, cataract lenses, cataract surgery lenses, monofocal lenses price, multifocal lenses price, toric lenses, aspheric lenses, cataract surgery, Aurolab Argentina, Ophtec Argentina, Auroflex lenses, premium cataract lenses, ophthalmic surgical supplies, intraocular lenses price, intraocular lenses sale, ANMAT intraocular lenses';

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
      type: 'website',
      images: [{
        url: `${SITE_URL}/images/servicios/lentes-intraoculares.webp`,
        width: 1200,
        height: 630,
        alt: 'Lentes Intraoculares Premium Argentina',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/images/servicios/lentes-intraoculares.webp`],
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
    other: {
      'geo.region': 'AR-C',
      'geo.placename': 'Buenos Aires',
      'geo.position': '-34.6220;-58.3814',
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

  // Medical Product Schema - Enhanced for SEO
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalDevice', 'Product'],
    '@id': pageUrl,
    name: isSpanish ? 'Lentes Intraoculares Premium para Cirugía de Cataratas' : 'Premium Intraocular Lenses for Cataract Surgery',
    alternateName: ['LIO', 'IOL', 'Lente Intraocular', 'Lentes Intraoculares Argentina', 'Comprar Lentes Intraoculares'],
    description: isSpanish 
      ? 'Lentes intraoculares (LIO) de alta calidad para cirugía de cataratas en Argentina. Disponibles en versiones monofocales, multifocales, tóricos y asféricos. Certificación ANMAT. Marcas: Aurolab, Ophtec. Envío a todo el país.'
      : 'High-quality intraocular lenses (IOL) for cataract surgery in Argentina. Available in monofocal, multifocal, toric and aspheric versions. ANMAT certified. Brands: Aurolab, Ophtec. Nationwide shipping.',
    url: pageUrl,
    image: [
      `${SITE_URL}/images/servicios/lentes-intraoculares.webp`,
      'https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724685417/msz-aurolab-auroflex_gdnoin.webp'
    ],
    brand: [
      {
        '@type': 'Brand',
        name: 'Aurolab',
      },
      {
        '@type': 'Brand',
        name: 'Ophtec',
      }
    ],
    medicalSpecialty: 'Ophthalmology',
    deviceCategory: 'Intraocular Lens',
    purpose: isSpanish 
      ? 'Reemplazo del cristalino natural durante la cirugía de cataratas para restaurar la visión. Indicado para pacientes con cataratas que requieren recuperación visual óptima.'
      : 'Replacement of the natural lens during cataract surgery to restore vision. Indicated for patients with cataracts requiring optimal visual recovery.',
    contraindication: {
      '@type': 'MedicalContraindication',
      name: isSpanish ? 'Consultar con oftalmólogo especialista' : 'Consult with specialist ophthalmologist',
    },
    manufacturer: [
      {
        '@type': 'Organization',
        name: 'Aurolab',
        url: 'https://www.aurolab.com',
      },
      {
        '@type': 'Organization',
        name: 'Ophtec',
        url: 'https://www.ophtec.com',
      }
    ],
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'ARS',
      lowPrice: '50000',
      highPrice: '300000',
      offerCount: '15',
      priceValidUntil: '2026-12-31',
      seller: {
        '@id': `${SITE_URL}/#organization`
      },
      areaServed: {
        '@type': 'Country',
        name: 'Argentina'
      },
      availableAtOrFrom: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Buenos Aires',
          addressRegion: 'CABA',
          addressCountry: 'AR'
        }
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'AR'
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          businessDays: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
          }
        }
      }
    },
    category: isSpanish ? 'Insumos Quirúrgicos Oftalmológicos' : 'Ophthalmic Surgical Supplies',
    keywords: isSpanish 
      ? 'lentes intraoculares, lente intraocular, LIO, IOL, comprar lentes intraoculares, lentes intraoculares Argentina, lentes intraoculares Buenos Aires, lentes para cataratas, cirugía de cataratas, lentes monofocales, lentes multifocales, lentes tóricos, Aurolab, Ophtec, ANMAT'
      : 'intraocular lenses, intraocular lens, IOL, buy intraocular lenses, intraocular lenses Argentina, intraocular lenses Buenos Aires, cataract lenses, cataract surgery, monofocal lenses, multifocal lenses, toric lenses, Aurolab, Ophtec, ANMAT',
    audience: {
      '@type': 'PeopleAudience',
      audienceType: isSpanish ? 'Oftalmólogos, cirujanos, pacientes' : 'Ophthalmologists, surgeons, patients'
    },
    isProprietary: false,
    legalStatus: {
      '@type': 'MedicalEnumeration',
      name: 'ANMAT Approved'
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
        name: isSpanish ? '¿Dónde comprar lentes intraoculares en Argentina?' : 'Where to buy intraocular lenses in Argentina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish 
            ? 'En Ocular Insumos Quirúrgicos tenemos más de 20 años proveyendo lentes intraoculares premium en Argentina. Contamos con stock permanente de las marcas Aurolab y Ophtec, certificación ANMAT y envíos a todo el país. Ubicados en Buenos Aires, ofrecemos asesoramiento gratuito y atención personalizada.'
            : 'At Ocular Insumos Quirúrgicos we have over 20 years providing premium intraocular lenses in Argentina. We have permanent stock of Aurolab and Ophtec brands, ANMAT certification and nationwide shipping. Located in Buenos Aires, we offer free advice and personalized attention.',
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
        name: isSpanish ? '¿Cuánto cuesta un lente intraocular en Argentina?' : 'How much does an intraocular lens cost in Argentina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSpanish 
            ? 'El precio de los lentes intraoculares en Argentina varía según el tipo y marca. Los lentes monofocales básicos comienzan desde $50.000 ARS, mientras que los lentes premium multifocales o tóricos pueden llegar hasta $300.000 ARS. Contáctanos para recibir una cotización personalizada según tus necesidades específicas.'
            : 'The price of intraocular lenses in Argentina varies depending on the type and brand. Basic monofocal lenses start from $50,000 ARS, while premium multifocal or toric lenses can reach up to $300,000 ARS. Contact us to receive a personalized quote according to your specific needs.',
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

  // ItemList Schema for Product Categories
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: isSpanish ? 'Tipos de Lentes Intraoculares Disponibles' : 'Available Intraocular Lens Types',
    description: isSpanish ? 'Catálogo completo de lentes intraoculares para cirugía de cataratas' : 'Complete catalog of intraocular lenses for cataract surgery',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          name: isSpanish ? 'Lentes Intraoculares Monofocales' : 'Monofocal Intraocular Lenses',
          description: isSpanish ? 'Lentes monofocales de calidad premium para visión a una distancia' : 'Premium quality monofocal lenses for single distance vision',
          brand: ['Aurolab', 'Ophtec'],
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          name: isSpanish ? 'Lentes Intraoculares Multifocales' : 'Multifocal Intraocular Lenses',
          description: isSpanish ? 'Lentes multifocales para visión a múltiples distancias sin anteojos' : 'Multifocal lenses for multiple distance vision without glasses',
          brand: ['Aurolab', 'Ophtec'],
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Product',
          name: isSpanish ? 'Lentes Intraoculares Tóricos' : 'Toric Intraocular Lenses',
          description: isSpanish ? 'Lentes tóricos especializados para corrección de astigmatismo' : 'Specialized toric lenses for astigmatism correction',
          brand: ['Aurolab', 'Ophtec'],
        }
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Product',
          name: isSpanish ? 'Lentes Intraoculares Asféricos' : 'Aspheric Intraocular Lenses',
          description: isSpanish ? 'Lentes asféricos de última generación con mejor calidad óptica' : 'Latest generation aspheric lenses with better optical quality',
          brand: ['Aurolab'],
        }
      },
    ]
  };

  return (
    <>
      <article className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href={`/${locale}`} className="hover:text-primary">
            {isSpanish ? 'Inicio' : 'Home'}
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">{isSpanish ? 'Lentes Intraoculares' : 'Intraocular Lenses'}</span>
        </div>

        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {isSpanish ? 'Lentes Intraoculares en Argentina | Comprar LIO Premium' : 'Intraocular Lenses in Argentina | Buy Premium IOL'}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-3">
            {isSpanish 
              ? 'Especialistas en venta de lentes intraoculares (LIO) de alta calidad para cirugía de cataratas en Argentina. Más de 20 años de experiencia en el mercado oftalmológico.'
              : 'Specialists in selling high-quality intraocular lenses (IOL) for cataract surgery in Argentina. Over 20 years of experience in the ophthalmology market.'}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isSpanish 
              ? '✓ Stock permanente ✓ Certificación ANMAT ✓ Envío a todo el país ✓ Asesoramiento gratuito en Buenos Aires'
              : '✓ Permanent stock ✓ ANMAT Certification ✓ Nationwide shipping ✓ Free advice in Buenos Aires'}
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
                  ? 'Los lentes intraoculares (LIO o IOL por sus siglas en inglés) son dispositivos médicos especializados que se implantan en el ojo durante la cirugía de cataratas para reemplazar el cristalino natural que se ha opacificado. En Argentina, estos lentes están regulados por ANMAT y son fundamentales para recuperar la visión después de una cirugía de cataratas.'
                  : 'Intraocular lenses (IOL) are specialized medical devices that are implanted in the eye during cataract surgery to replace the natural lens that has become cloudy. In Argentina, these lenses are regulated by ANMAT and are essential for vision recovery after cataract surgery.'}
              </p>
              <p className="text-lg text-gray-700 mb-4">
                {isSpanish 
                  ? 'Al comprar lentes intraoculares en Argentina, es importante elegir productos certificados de marcas reconocidas como Aurolab y Ophtec. Estos lentes permiten restaurar la visión del paciente y, dependiendo del tipo elegido (monofocal, multifocal o tórico), pueden corregir también otros problemas visuales como miopía, hipermetropía o astigmatismo.'
                  : 'When buying intraocular lenses in Argentina, it is important to choose certified products from recognized brands such as Aurolab and Ophtec. These lenses allow patient vision to be restored and, depending on the type chosen (monofocal, multifocal or toric), can also correct other visual problems such as myopia, hyperopia or astigmatism.'}
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724685417/msz-aurolab-auroflex_gdnoin.webp"
                alt="Lente intraocular premium de alta calidad para cirugía de cataratas"
                fill
                className="object-contain rounded-lg"
                title="Lente Intraocular Premium Aurolab - Comprar en Argentina"
                aria-label="Lente Intraocular Premium certificado ANMAT"
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
            {isSpanish ? 'Marcas Premium de Lentes Intraoculares en Argentina' : 'Premium Intraocular Lens Brands in Argentina'}
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            {isSpanish 
              ? 'Disponemos de stock permanente de las mejores marcas de lentes intraoculares del mercado. Todos nuestros productos cuentan con certificación ANMAT y garantía de calidad internacional.'
              : 'We have permanent stock of the best intraocular lens brands on the market. All our products have ANMAT certification and international quality guarantee.'}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-primary p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-3">Aurolab - Lentes Intraoculares India</h3>
              <p className="text-gray-700 mb-3">
                {isSpanish 
                  ? 'Líder mundial en fabricación de lentes intraoculares de calidad. Aurolab ofrece la línea completa Auroflex, incluyendo lentes asféricos e hidrofílicos de última generación. Ideales para cirugía de cataratas en Argentina con excelente relación calidad-precio.'
                  : 'World leader in manufacturing quality intraocular lenses. Aurolab offers the complete Auroflex line, including state-of-the-art aspheric and hydrophilic lenses. Ideal for cataract surgery in Argentina with excellent quality-price ratio.'}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Auroflex Asférico:</strong> {isSpanish ? 'Lente intraocular monofocal asférico premium' : 'Premium aspheric monofocal intraocular lens'}</li>
                <li><strong>Auroflex EV Gold:</strong> {isSpanish ? 'Tecnología de punta para mejor visión' : 'Cutting-edge technology for better vision'}</li>
                <li><strong>Aurolens Monofocal:</strong> {isSpanish ? 'Solución confiable y económica' : 'Reliable and economical solution'}</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                {isSpanish ? '✓ Certificado ANMAT ✓ Material hidrofílico ✓ Diseño asférico' : '✓ ANMAT Certified ✓ Hydrophilic material ✓ Aspheric design'}
              </p>
            </div>

            <div className="border-2 border-primary p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-3">Ophtec - Lentes Intraoculares Holanda</h3>
              <p className="text-gray-700 mb-3">
                {isSpanish 
                  ? 'Fabricante holandés de prestigio internacional con más de 35 años de experiencia en oftalmología. Especialistas en lentes fáquicos de última tecnología para casos especiales. Distribuidor oficial en Argentina.'
                  : 'Prestigious Dutch manufacturer with international prestige and over 35 years of experience in ophthalmology. Specialists in state-of-the-art phakic lenses for special cases. Official distributor in Argentina.'}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Artiflex 401:</strong> {isSpanish ? 'Lente fáquico para alta miopía' : 'Phakic lens for high myopia'}</li>
                <li><strong>Artisan:</strong> {isSpanish ? 'Lente de cámara anterior para casos complejos' : 'Anterior chamber lens for complex cases'}</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                {isSpanish ? '✓ Tecnología europea ✓ Para casos especiales ✓ Alta precisión' : '✓ European technology ✓ For special cases ✓ High precision'}
              </p>
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
            {isSpanish ? '¿Necesitas Comprar Lentes Intraoculares en Argentina?' : 'Need to Buy Intraocular Lenses in Argentina?'}
          </h2>
          <p className="text-xl mb-6">
            {isSpanish 
              ? 'Contáctanos para recibir asesoramiento personalizado gratuito, cotización de lentes intraoculares y consulta sobre el mejor LIO para tu cirugía de cataratas. Atendemos en Buenos Aires y enviamos a toda Argentina.'
              : 'Contact us for free personalized advice, intraocular lens quotes and consultation about the best IOL for your cataract surgery. We serve Buenos Aires and ship throughout Argentina.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactButton 
              className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              initialMessage={isSpanish ? 'Consulta sobre lentes intraoculares' : 'Inquiry about intraocular lenses'}
              locale={locale}
              isSpanish={isSpanish}
            >
              {isSpanish ? 'Solicitar Presupuesto Gratis' : 'Request Free Quote'}
            </ContactButton>
            <a 
              href="https://wa.me/5491152371300?text=Hola,%20quiero%20comprar%20lentes%20intraoculares%20en%20Argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              {isSpanish ? 'Consultar por WhatsApp' : 'WhatsApp Consultation'}
            </a>
          </div>
          <p className="mt-6 text-sm">
            {isSpanish ? '📍 Buenos Aires, Argentina | 📞 (+54) 11 5237-1300 | ✉️ info@ocularinsumos.com' : '📍 Buenos Aires, Argentina | 📞 (+54) 11 5237-1300 | ✉️ info@ocularinsumos.com'}
          </p>
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
      <JsonLd data={itemListSchema} />
    </>
  );
}
