import Inicio from "@/components/Inicio/Inicio";
import SobreMi from "@/components/SobreMi/SobreMi";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentas/PreguntasFrecuentas";
import Ubicacion from "@/components/Ubicacion/Ubicacion";
import VideoPublicidad from "@/components/Video/VideoPublicidad";
import Productos from "@/components/Productos/Productos";
import {getMessages} from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const isSpanish = locale === 'es';
  
  const title = isSpanish 
    ? 'OCULAR INSUMOS QUIRURGICOS | Cirugía Oftalmológica - Cataratas, Retina, Glaucoma'
    : 'OCULAR SURGICAL SUPPLIES | Ophthalmic Surgery - Cataract, Retina, Glaucoma';
  
  const description = isSpanish
    ? 'Especialistas en lentes intraoculares (LIO) y cirugía de cataratas en Argentina. Ofrecemos lentes monofocales, multifocales y tóricos de marcas premium: Aurolab, Ophtec. Más de 20 años de experiencia. Insumos quirúrgicos oftalmológicos certificados ANMAT. Asesoramiento profesional gratuito en Buenos Aires.'
    : 'Specialists in intraocular lenses (IOL) and cataract surgery in Argentina. We offer monofocal, multifocal and toric lenses from premium brands: Aurolab, Ophtec. Over 20 years of experience. ANMAT certified ophthalmic surgical supplies. Free professional advice in Buenos Aires.';

  const keywords = isSpanish
    ? 'insumos quirúrgicos oftalmológicos, cirugía de cataratas Buenos Aires, lentes intraoculares, lente intraocular, LIO, IOL, lentes para cataratas Argentina, lentes monofocales, lentes multifocales, lentes tóricos, cirugía de retina, cirugía de glaucoma, córnea, pterigion, productos descartables oftalmológicos, equipos oftalmológicos, ANMAT, insumos oculares, cirugía ocular Argentina'
    : 'ophthalmic surgical supplies, cataract surgery Buenos Aires, intraocular lenses, intraocular lens, IOL, cataract lenses Argentina, monofocal lenses, multifocal lenses, toric lenses, retina surgery, glaucoma surgery, cornea, pterygium, ophthalmic disposable products, ophthalmic equipment, eye surgery Argentina';

  return {
    title,
    description,
    keywords,
    authors: [
      { name: 'Ocular Insumos Quirúrgicos' },
      { name: 'Gonzalo Torres Grau', url: 'https://gonzalotorresgrau.com' }
    ],
    creator: 'Gonzalo Torres Grau',
    publisher: 'Ocular Insumos Quirúrgicos',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}`,
      siteName: 'Ocular Insumos Quirúrgicos',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/images/logos/logo.webp`,
          width: 1200,
          height: 630,
          alt: 'Ocular Insumos Quirúrgicos Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/images/logos/logo.webp`],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        'es': `${SITE_URL}/es`,
        'en': `${SITE_URL}/en`,
        'x-default': SITE_URL,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function HomePage() {
  const messages = await getMessages();

  return (
      <>
        <Inicio inicio={messages.inicio}/>
        <Productos producto={messages.producto} texto={messages.productos} categorias={messages.categorias}/> 
        <VideoPublicidad />
        <SobreMi />
        <Ubicacion />
        <PreguntasFrecuentes />
      </>
  );
}
