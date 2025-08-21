import './globals.css';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import VolverArriba from "../../components/VolverArriba/VolverArriba";
import BotonWsp from "../../components/BotonWSP/BotonWsp";
import TopBanner from '../../components/TopBanner/TopBanner';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales as supportedLocales, defaultLocale, withLocale } from '../../../i18n';
import { Analytics } from "@vercel/analytics/react"

const RootLayout = async (props) => {
  const { children, params: { locale } } = props;

  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    console.error("Error fetching messages:", error);
    messages = {};
  }

  const schemaMarkup = {
    "@id": "https://ocularinsumosquirurgicos.com/es",
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "INSUMOS QUIRURGICOS PARA OFTALMOLOGIA - OCULAR INSUMOS CIRUGIA",
    "logo": "https://ocularinsumosquirurgicos.com/favicon.ico",
    "image": "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724436814/salon_rgxwa4.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rincón 1203 esquina Av. San Juan",
      "addressLocality": "Ciudad de Buenos Aires (CABA)",
      "addressRegion": "Buenos Aires",
      "postalCode": "C1251ACB",
      "addressCountry": "AR"
    },
    "telephone": "+5491152371300",
    "url": "https://ocularinsumosquirurgicos.com",
    "description": "Ocular es una empresa de insumos quirúrgicos para cirugía ocular y descartables para cirugías oftalmológicas de cataratas, retina y glaucoma. Venta de equipos oftalmológicos de alta calidad con asesoramiento gratuito personalizado. En la Ciudad Buenos Aires, Argentina, somos referentes en el sector de la salud visual",
    "openingHours": "Lunes - Viernes 07:00-15:00",
    "sameAs": [
      "https://wa.me/+5491152371300?text=%C2%A1Cont%C3%A1ctanos!",
      "https://www.instagram.com/ocularinsumosquirurgicos/"
    ]
  }

  return (
    <html lang={locale}>
      <head>
        {/** Dynamic title/description with safe fallbacks */}
        {
          (() => {
            const siteBase = process.env.SITE_URL || 'https://ocularinsumosquirurgicos.com';
            const defaultTitle = 'INSUMOS QUIRURGICOS PARA OFTALMOLOGIA - OCULAR INSUMOS CIRUGIA';
            const defaultDesc = 'Ocular es una empresa de insumos quirúrgicos para cirugía ocular y descartables para cirugías oftalmológicas de cataratas, retina y glaucoma. Venta de equipos oftalmológicos de alta calidad con asesoramiento gratuito personalizado.';
            const pageTitle = messages && messages.inicio && messages.inicio.titulo ? `${messages.inicio.titulo} · OCULAR` : defaultTitle;
            const pageDesc = messages && messages.inicio && messages.inicio.descripcion ? messages.inicio.descripcion : defaultDesc;
            const canonical = `${siteBase}${withLocale('/', locale)}`;

            return (
              <>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDesc} />
                <link rel="canonical" href={canonical} />

                {/** hreflang alternate links */}
                {supportedLocales.map((l) => (
                  <link
                    key={`hreflang-${l}`}
                    rel="alternate"
                    hrefLang={l}
                    href={`${siteBase}${withLocale('/', l)}`}
                  />
                ))}
                <link rel="alternate" hrefLang="x-default" href={`${siteBase}${withLocale('/', defaultLocale)}`} />

                {/** Open Graph */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDesc} />
                <meta property="og:url" content={canonical} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={defaultTitle} />
                <meta property="og:locale" content={locale} />
                {supportedLocales.filter(l => l !== locale).map(l => (
                  <meta key={`og:alt:${l}`} property="og:locale:alternate" content={l} />
                ))}
                <meta property="og:image" content="https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724436814/salon_rgxwa4.webp" />

                {/** Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ocularinsumos" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDesc} />
                <meta name="twitter:image" content="https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724436814/salon_rgxwa4.webp" />
              </>
            );
          })()
        }
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charSet="UTF-8" />
  <meta name="theme-color" content="#007BC7" />
  <meta name="robots" content="index, follow, max-snippet:200, max-image-preview:large" />
  <meta name="publisher" content="Gonzalo Torres Grau" />
  <meta name="author" content="Matias Rozas, Gonzalo Torres Grau" />
  <link rel="author" href="https://gonzalotorresgrau.com" />
        <meta name="keywords" content="insumos, insumos quirúrgicos, oftalmología, cirugía oftalmológica, cirugía, cirugía de cataratas, retina, cataratas, equipos oftalmológicos, material quirúrgico, instrumentos oftalmológicos, lentes intraoculares, vitrectomía, microcirugía ocular, facoemulsificación, láser oftalmológico, insumos para cirugía refractiva, quirófano oftalmológico, desprendimiento de retina, glaucoma, insumos para cirugía de glaucoma, insumos para cirugía de retina, insumos para cirugía de córnea, anestesia oftalmológica, cirugía ocular" />
  <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@1,600&display=swap" rel="stylesheet" />
        {/* Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-KBHMWPKSR6" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KBHMWPKSR6');
            `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      </head>
      <body className='bg-white text-gray-900'>
        <NextIntlClientProvider messages={messages}>
          <TopBanner />
          <nav>
            <Navbar />
          </nav>
          <main id="skip">
            {children}
          </main>
          <footer>
            <Footer />
            <VolverArriba />
            <BotonWsp />
          </footer>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
