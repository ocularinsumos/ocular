import './globals.css';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import VolverArriba from "../../components/VolverArriba/VolverArriba";
import BotonWsp from "../../components/BotonWSP/BotonWsp";
import TopBanner from '../../components/TopBanner/TopBanner';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#007BC7',
};
import JsonLdDefault from "../../components/Seo/JsonLdDefault";
import { robotoCondensed } from "../../Utils/fonts";

export async function generateMetadata({ params: { locale } }) {
  const SITE_URL = 'https://ocularinsumosquirurgicos.com';
  const isSpanish = locale === 'es';
  
  const title = isSpanish 
    ? 'OCULAR INSUMOS QUIRURGICOS - Cirugía Oftalmológica | Buenos Aires, Argentina'
    : 'OCULAR SURGICAL SUPPLIES - Ophthalmic Surgery | Buenos Aires, Argentina';
  
  const description = isSpanish
    ? 'Empresa líder en insumos quirúrgicos oftalmológicos en Argentina. Especialistas en cirugía de cataratas, retina, glaucoma y córnea. +20 años de experiencia. Asesoramiento profesional gratuito. Calidad certificada ANMAT.'
    : 'Leading ophthalmic surgical supplies company in Argentina. Specialists in cataract, retina, glaucoma and cornea surgery. +20 years experience. Free professional advice. ANMAT certified quality.';

  const keywords = isSpanish
    ? 'lentes intraoculares, lente intraocular, LIO, IOL, lentes para cataratas, lentes monofocales, lentes multifocales, lentes tóricos, insumos quirúrgicos oftalmológicos, cirugía de cataratas, cirugía de retina, glaucoma, córnea, pterigion, insumos descartables, equipos oftalmológicos, Buenos Aires, Argentina, ANMAT'
    : 'intraocular lenses, intraocular lens, IOL, cataract lenses, monofocal lenses, multifocal lenses, toric lenses, ophthalmic surgical supplies, cataract surgery, retina surgery, glaucoma, cornea, pterygium, disposable supplies, ophthalmic equipment, Buenos Aires, Argentina';

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Ocular Insumos Quirúrgicos' }],
    creator: 'Gonzalo Torres Grau',
    publisher: 'Ocular Insumos Quirúrgicos',
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
    // canonical/hreflang/og:url se definen en cada página (page.jsx o layout de ruta).
    // Un canonical global aquí hacía que todas las páginas apuntaran a la home.
    icons: {
      icon: [{ url: '/favicon.ico', sizes: 'any' }],
      apple: '/icons/icon-192x192.png',
    },
    manifest: '/manifest.json',
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      siteName: 'Ocular Insumos Quirúrgicos',
      title,
      description,
      images: [{
        url: `${SITE_URL}/images/logos/logo.webp`,
        width: 1200,
        height: 630,
        alt: 'Ocular Insumos Quirúrgicos',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/images/logos/logo.webp`],
    },
    verification: {
      google: 'G-KBHMWPKSR6',
    },
  };
}

const RootLayout = async (props) => {
  const { children, params: { locale } } = props;

  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    console.error("Error fetching messages:", error);
    messages = {};
  }

  return (
    <>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KBHMWPKSR6" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KBHMWPKSR6', { page_path: window.location.pathname });
          `}
        </Script>
        <JsonLdDefault locale={locale} />
        <NextIntlClientProvider messages={messages}>
          <TopBanner />
          <nav><Navbar /></nav>
          <main id="skip">{children}</main>
          <footer>
            <Footer />
            <VolverArriba />
            <BotonWsp />
          </footer>
          <Analytics />
        </NextIntlClientProvider>
    </>
  );
};

export default RootLayout;
