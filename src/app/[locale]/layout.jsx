import './globals.css';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import VolverArriba from "../../components/VolverArriba/VolverArriba";
import BotonWsp from "../../components/BotonWSP/BotonWsp";
import TopBanner from '../../components/TopBanner/TopBanner';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Analytics } from "@vercel/analytics/react";
import JsonLdDefault from "../../components/Seo/JsonLdDefault"; // 👈 importar TU default
import { robotoCondensed } from "../../Utils/fonts";

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
    <html lang={locale}>
      <head>
        <title>OCULAR INSUMOS QUIRURGICOS - Cirugía oftalmológica</title>
        <meta name="description" content="Ocular es una empresa de insumos quirúrgicos para cirugía ocular y descartables para cirugías oftalmológicas de cataratas, retina y glaucoma. Venta de equipos oftalmológicos de alta calidad con asesoramiento gratuito personalizado. En la Ciudad Buenos Aires, Argentina, somos referentes en el sector de la salud visual" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#007BC7" />
        <meta name="robots" content="follow, index" />
        <meta name="publisher" content="Gonzalo Torres Grau"/>
        <meta name="author" content="Matias Rozas, Gonzalo Torres Grau" />
        <link rel="author" href="https://gonzalotorresgrau.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="OCULAR INSUMOS QUIRURGICOS - Cirugía oftalmológica" />
        <meta property="og:description" content="Ocular es una empresa de insumos quirúrgicos para cirugía ocular y descartables para cirugías oftalmológicas de cataratas, retina y glaucoma. Venta de equipos oftalmológicos de alta calidad con asesoramiento gratuito personalizado. En la Ciudad Buenos Aires, Argentina, somos referentes en el sector de la salud visual" />
        <meta property="og:title" content="OCULAR INSUMOS QUIRURGICOS - Cirugía oftalmológica" />
        {/* Recomendado: usar una imagen ABSOLUTA para og:image */}
        <meta property="og:image" content="https://ocularinsumosquirurgicos.com/favicon.ico" />
        <link rel="canonical" href="https://ocularinsumosquirurgicos.com/" />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
  {/** Fuente principal gestionada por next/font (ver Utils/fonts.js) */}
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
        {/* 👇 Tu JSON-LD de negocio, una sola vez por página */}
        <JsonLdDefault />
      </head>
  <body className={`bg-white text-gray-900 `}>
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
      </body>
    </html>
  );
};

export default RootLayout;
