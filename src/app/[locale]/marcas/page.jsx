import { getMessages } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/Seo/JsonLd';

export async function generateMetadata({ params: { locale } }) {
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const isSpanish = locale === 'es';
  
  const title = isSpanish 
    ? 'Marcas de Lentes Intraoculares en Argentina | Aurolab, Ophtec'
    : 'Intraocular Lens Brands in Argentina | Aurolab, Ophtec';
  
  const description = isSpanish
    ? 'Distribuidor oficial de marcas premium de lentes intraoculares en Argentina: Aurolab (Auroflex, EV Gold) y Ophtec (Artiflex, Artisan). Más de 20 años representando las mejores marcas mundiales. Stock permanente, certificación ANMAT, envío a todo el país.'
    : 'Official distributor of premium intraocular lens brands in Argentina: Aurolab (Auroflex, EV Gold) and Ophtec (Artiflex, Artisan). Over 20 years representing the best world brands. Permanent stock, ANMAT certification, nationwide shipping.';

  const keywords = isSpanish
    ? 'marcas lentes intraoculares Argentina, Aurolab Argentina, Ophtec Argentina, distribuidor Aurolab, distribuidor Ophtec, marcas premium lentes, lentes intraoculares marcas, Auroflex Argentina, Artiflex Argentina, representante Aurolab Buenos Aires, ANMAT'
    : 'intraocular lens brands Argentina, Aurolab Argentina, Ophtec Argentina, Aurolab distributor, Ophtec distributor, premium lens brands, intraocular lens brands, Auroflex Argentina, Artiflex Argentina, Aurolab representative Buenos Aires, ANMAT';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/marcas`,
      languages: {
        'es': `${SITE_URL}/es/marcas`,
        'en': `${SITE_URL}/en/marcas`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/marcas`,
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

export default async function MarcasPage({ params: { locale } }) {
  const messages = await getMessages();
  const isSpanish = locale === 'es';
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const pageUrl = `${SITE_URL}/${locale}/marcas`;

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
        name: isSpanish ? 'Marcas' : 'Brands',
        item: pageUrl,
      },
    ],
  };

  // ItemList Schema for Brands
  const brandsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: isSpanish ? 'Marcas de Lentes Intraoculares' : 'Intraocular Lens Brands',
    description: isSpanish 
      ? 'Marcas premium de lentes intraoculares distribuidas por Ocular en Argentina'
      : 'Premium intraocular lens brands distributed by Ocular in Argentina',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Brand',
          name: 'Aurolab',
          url: 'https://www.aurolab.com',
          description: isSpanish 
            ? 'Fabricante líder mundial de lentes intraoculares de calidad desde 1992'
            : 'World leading manufacturer of quality intraocular lenses since 1992'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Brand',
          name: 'Ophtec',
          url: 'https://www.ophtec.com',
          description: isSpanish 
            ? 'Fabricante holandés premium con más de 35 años de experiencia en lentes fáquicos'
            : 'Premium Dutch manufacturer with over 35 years of experience in phakic lenses'
        }
      }
    ]
  };

  const marcas = [
    {
      nombre: 'Aurolab',
      pais: 'India',
      flag: '🇮🇳',
      fundacion: '1992',
      descripcion: isSpanish 
        ? 'Aurolab es un fabricante líder mundial de lentes intraoculares con sede en Madurai, India. Fundada por Aravind Eye Care System, Aurolab ha revolucionado el mercado oftalmológico global ofreciendo productos de alta calidad a precios accesibles.'
        : 'Aurolab is a world-leading manufacturer of intraocular lenses based in Madurai, India. Founded by Aravind Eye Care System, Aurolab has revolutionized the global ophthalmic market by offering high-quality products at accessible prices.',
      especialidad: isSpanish ? 'Lentes Intraoculares Monofocales y Multifocales' : 'Monofocal and Multifocal Intraocular Lenses',
      implantes: '30+ millones',
      url: 'https://www.aurolab.com',
      productos: [
        {
          nombre: 'Auroflex Asférico',
          descripcion: isSpanish ? 'Lente monofocal hidrofílico asférico de 1 pieza' : 'Hydrophilic aspheric monofocal 1-piece lens',
          link: `/productos/aurolab-auroflex`,
          codigo: 'FH5600SQ'
        },
        {
          nombre: 'Auroflex EV Gold',
          descripcion: isSpanish ? 'Lente premium con tecnología avanzada' : 'Premium lens with advanced technology',
          link: `/productos/aurolab-auroflex-ev-gold`,
          codigo: 'EVGOLD'
        },
        {
          nombre: 'Aurovisc',
          descripcion: isSpanish ? 'Viscoelástico 2% HPMC' : 'Viscoelastic 2% HPMC',
          link: `/productos/aurolab-aurovisc`,
          codigo: '2000'
        },
        {
          nombre: 'Auroblue',
          descripcion: isSpanish ? 'Azul tripan para tinción capsular' : 'Trypan blue for capsular staining',
          link: `/productos/aurolab-auroblue`,
          codigo: '2003'
        }
      ],
      certificaciones: ['ISO 13485', 'CE Mark', 'FDA', 'ANMAT'],
      ventajas: isSpanish 
        ? ['Mejor relación calidad-precio', 'Más de 30 millones de implantes', 'Tecnología probada', 'Stock permanente en Argentina']
        : ['Best quality-price ratio', 'Over 30 million implants', 'Proven technology', 'Permanent stock in Argentina']
    },
    {
      nombre: 'Ophtec',
      pais: 'Países Bajos',
      flag: '🇳🇱',
      fundacion: '1989',
      descripcion: isSpanish 
        ? 'Ophtec BV es un fabricante holandés de prestigio líder mundial en lentes intraoculares fáquicos. Con más de 35 años de experiencia, Ophtec es pionera en el desarrollo de lentes para alta miopía y casos especiales.'
        : 'Ophtec BV is a prestigious Dutch manufacturer and world leader in phakic intraocular lenses. With over 35 years of experience, Ophtec is a pioneer in developing lenses for high myopia and special cases.',
      especialidad: isSpanish ? 'Lentes Intraoculares Fáquicos' : 'Phakic Intraocular Lenses',
      implantes: '300,000+',
      url: 'https://www.ophtec.com',
      productos: [
        {
          nombre: 'Artiflex 401',
          descripcion: isSpanish ? 'Lente fáquico flexible para alta miopía' : 'Flexible phakic lens for high myopia',
          link: `/productos/ophtec-artiflex`,
          codigo: 'ARTIFLEX401'
        },
        {
          nombre: 'Artisan',
          descripcion: isSpanish ? 'Lente fáquico rígido para casos especiales' : 'Rigid phakic lens for special cases',
          link: `/productos/ophtec-artisan`,
          codigo: 'ARTISAN'
        }
      ],
      certificaciones: ['CE Mark', 'FDA', 'ANMAT'],
      ventajas: isSpanish 
        ? ['Tecnología europea premium', 'Líder en lentes fáquicos', 'Procedimiento reversible', 'Más de 300,000 implantes']
        : ['Premium European technology', 'Leader in phakic lenses', 'Reversible procedure', 'Over 300,000 implants']
    }
  ];

  return (
    <>
      <article className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href={`/${locale}`} className="hover:text-primary">
            {isSpanish ? 'Inicio' : 'Home'}
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">{isSpanish ? 'Marcas' : 'Brands'}</span>
        </div>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {isSpanish ? 'Marcas Representadas' : 'Represented Brands'}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-3">
            {isSpanish 
              ? 'Distribuidor oficial de las marcas líderes mundiales en lentes intraoculares'
              : 'Official distributor of world-leading intraocular lens brands'}
          </p>
          <p className="text-lg text-gray-600">
            {isSpanish 
              ? 'Más de 20 años representando calidad y excelencia en Argentina'
              : 'Over 20 years representing quality and excellence in Argentina'}
          </p>
        </header>

        {/* Marcas */}
        {marcas.map((marca, index) => (
          <section key={marca.nombre} className={`mb-16 ${index % 2 === 0 ? 'bg-gradient-to-r from-blue-50 to-cyan-50' : 'bg-gradient-to-r from-purple-50 to-pink-50'} p-8 rounded-lg`}>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Info de la Marca */}
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-2">{marca.flag}</div>
                    <h2 className="text-3xl font-bold text-primary mb-2">{marca.nombre}</h2>
                    <p className="text-gray-600">{marca.pais}</p>
                    <p className="text-sm text-gray-500">{isSpanish ? 'Fundada en' : 'Founded in'} {marca.fundacion}</p>
                  </div>

                  <div className="border-t pt-4 space-y-3">
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase">{isSpanish ? 'Especialidad' : 'Specialty'}</p>
                      <p className="text-sm font-bold text-gray-900">{marca.especialidad}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase">{isSpanish ? 'Implantes Globales' : 'Global Implants'}</p>
                      <p className="text-sm font-bold text-gray-900">{marca.implantes}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase mb-1">{isSpanish ? 'Certificaciones' : 'Certifications'}</p>
                      <div className="flex flex-wrap gap-1">
                        {marca.certificaciones.map(cert => (
                          <span key={cert} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a 
                    href={marca.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    {isSpanish ? '🌐 Sitio Web Oficial' : '🌐 Official Website'}
                  </a>
                </div>
              </div>

              {/* Descripción y Productos */}
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {isSpanish ? 'Sobre ' : 'About '}{marca.nombre}
                  </h3>
                  <p className="text-gray-700 mb-4">{marca.descripcion}</p>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isSpanish ? 'Ventajas Principales' : 'Main Advantages'}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {marca.ventajas.map((ventaja, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-gray-700">{ventaja}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {isSpanish ? 'Productos Disponibles' : 'Available Products'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {marca.productos.map(producto => (
                      <Link 
                        key={producto.codigo}
                        href={`/${locale}${producto.link}`}
                        className="border-2 border-gray-200 p-4 rounded-lg hover:border-primary hover:shadow-md transition-all"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-gray-900">{producto.nombre}</h4>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">{producto.codigo}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{producto.descripcion}</p>
                        <span className="text-primary text-sm font-medium">
                          {isSpanish ? 'Ver detalles →' : 'View details →'}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Por qué elegirnos */}
        <section className="mb-12 bg-primary text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {isSpanish ? '¿Por qué somos Distribuidores Oficiales?' : 'Why are we Official Distributors?'}
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-bold text-lg mb-2">{isSpanish ? 'Más de 20 Años' : 'Over 20 Years'}</h3>
              <p className="text-sm text-blue-100">
                {isSpanish ? 'De experiencia en el mercado oftalmológico' : 'Of experience in the ophthalmic market'}
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-bold text-lg mb-2">{isSpanish ? 'Stock Permanente' : 'Permanent Stock'}</h3>
              <p className="text-sm text-blue-100">
                {isSpanish ? 'Disponibilidad inmediata en Buenos Aires' : 'Immediate availability in Buenos Aires'}
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-lg mb-2">{isSpanish ? 'Certificación ANMAT' : 'ANMAT Certification'}</h3>
              <p className="text-sm text-blue-100">
                {isSpanish ? 'Todos los productos certificados' : 'All certified products'}
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold text-lg mb-2">{isSpanish ? 'Envío Nacional' : 'National Shipping'}</h3>
              <p className="text-sm text-blue-100">
                {isSpanish ? 'Llegamos a todo el país' : 'We reach the entire country'}
              </p>
            </div>
          </div>
        </section>

        {/* Comparación de Marcas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {isSpanish ? 'Comparación de Marcas' : 'Brands Comparison'}
          </h2>
          
          <div className="bg-white border rounded-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">{isSpanish ? 'Característica' : 'Feature'}</th>
                  <th className="px-6 py-4 text-center font-bold text-primary">Aurolab</th>
                  <th className="px-6 py-4 text-center font-bold text-primary">Ophtec</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{isSpanish ? 'Origen' : 'Origin'}</td>
                  <td className="px-6 py-4 text-center text-gray-700">🇮🇳 India</td>
                  <td className="px-6 py-4 text-center text-gray-700">🇳🇱 Países Bajos</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{isSpanish ? 'Especialidad' : 'Specialty'}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{isSpanish ? 'Monofocales' : 'Monofocals'}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{isSpanish ? 'Fáquicos' : 'Phakic'}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{isSpanish ? 'Precio' : 'Price'}</td>
                  <td className="px-6 py-4 text-center text-gray-700">$$</td>
                  <td className="px-6 py-4 text-center text-gray-700">$$$</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{isSpanish ? 'Implantes Mundiales' : 'Global Implants'}</td>
                  <td className="px-6 py-4 text-center text-gray-700">30M+</td>
                  <td className="px-6 py-4 text-center text-gray-700">300K+</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{isSpanish ? 'Certificaciones' : 'Certifications'}</td>
                  <td className="px-6 py-4 text-center text-gray-700">CE, FDA, ANMAT</td>
                  <td className="px-6 py-4 text-center text-gray-700">CE, FDA, ANMAT</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{isSpanish ? 'Ideal Para' : 'Ideal For'}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{isSpanish ? 'Cirugía cataratas' : 'Cataract surgery'}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{isSpanish ? 'Alta miopía' : 'High myopia'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isSpanish ? '¿Necesitas Productos de Nuestras Marcas?' : 'Need Products from Our Brands?'}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            {isSpanish 
              ? 'Contactanos para recibir asesoramiento especializado y cotización'
              : 'Contact us for specialized advice and quotation'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a 
              href={`https://wa.me/5491152371300?text=Hola, quiero consultar sobre marcas de lentes intraoculares`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              {isSpanish ? '💬 Consultar por WhatsApp' : '💬 WhatsApp Inquiry'}
            </a>
            <Link 
              href={`/${locale}#contacto`}
              className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-900 transition-colors"
            >
              {isSpanish ? '📧 Solicitar Catálogo' : '📧 Request Catalog'}
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-80">
            📞 (+54) 11 5237-1300 | ✉️ ocularinsumosquirurgicos@gmail.com
          </p>
        </section>

        {/* Links Relacionados */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {isSpanish ? 'Productos por Categoría' : 'Products by Category'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href={`/${locale}/lentes-intraoculares`} className="border-2 border-primary rounded-lg p-6 hover:bg-blue-50 transition-colors text-center">
              <div className="text-4xl mb-3">👁️</div>
              <h3 className="text-xl font-bold text-primary mb-2">{isSpanish ? 'Lentes Intraoculares' : 'Intraocular Lenses'}</h3>
              <p className="text-gray-600 text-sm">{isSpanish ? 'Ver catálogo completo de LIO' : 'See complete IOL catalog'}</p>
            </Link>
            <Link href={`/${locale}/cataratas`} className="border-2 border-primary rounded-lg p-6 hover:bg-blue-50 transition-colors text-center">
              <div className="text-4xl mb-3">⚕️</div>
              <h3 className="text-xl font-bold text-primary mb-2">{isSpanish ? 'Cirugía de Cataratas' : 'Cataract Surgery'}</h3>
              <p className="text-gray-600 text-sm">{isSpanish ? 'Insumos para cirugía' : 'Surgery supplies'}</p>
            </Link>
            <Link href={`/${locale}#contacto`} className="border-2 border-primary rounded-lg p-6 hover:bg-blue-50 transition-colors text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-xl font-bold text-primary mb-2">{isSpanish ? 'Asesoramiento' : 'Advice'}</h3>
              <p className="text-gray-600 text-sm">{isSpanish ? 'Consulta gratuita' : 'Free consultation'}</p>
            </Link>
          </div>
        </section>
      </article>

      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={brandsListSchema} />
    </>
  );
}
