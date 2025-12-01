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
    ? 'Empresa líder en insumos quirúrgicos oftalmológicos en Argentina. Más de 20 años de experiencia en cirugía de cataratas, retina, glaucoma y córnea. Lentes intraoculares, productos descartables certificados ANMAT. Asesoramiento profesional gratuito en Buenos Aires.'
    : 'Leading ophthalmic surgical supplies company in Argentina. Over 20 years of experience in cataract, retina, glaucoma and cornea surgery. Intraocular lenses, ANMAT certified disposable products. Free professional advice in Buenos Aires.';

  const keywords = isSpanish
    ? 'insumos quirúrgicos oftalmológicos, cirugía de cataratas Buenos Aires, lentes intraoculares Argentina, cirugía de retina, cirugía de glaucoma, córnea, pterigion, productos descartables oftalmológicos, equipos oftalmológicos, ANMAT, insumos oculares, cirugía ocular Argentina'
    : 'ophthalmic surgical supplies, cataract surgery Buenos Aires, intraocular lenses Argentina, retina surgery, glaucoma surgery, cornea, pterygium, ophthalmic disposable products, ophthalmic equipment, eye surgery Argentina';

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
