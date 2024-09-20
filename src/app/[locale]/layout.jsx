import './globals.css';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import VolverArriba from "../../components/VolverArriba/VolverArriba";
import BotonWsp from "../../components/BotonWSP/BotonWsp";
import TopBanner from '../../components/TopBanner/TopBanner';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Analytics } from "@vercel/analytics/react"

export const meta = {
  title: "OCULAR INSUMOS QUIRURGICOS",
  description: "Insumos quirurgicos para cirugias oftalmologicas, Ocular es una empresa con mas de 2 deadas de trayectoria en producotos descartables para la cirugia ocular",
  manifest: "/manifest.json",
  type: "website",
  author : "Matias Rozas, Gonzalo Torres Grau",
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#451F49',
  charSet: 'UTF-8',
  icon: '/favicon.ico',
  appleTouchIcon: '/icons/icon-192x192.png', // 180x180
  keywords: 'insumos, insumos quirúrgicos, oftalmología, cirugía oftalmológica, cirugía, cirugía de cataratas, retina, cataratas, equipos oftalmológicos, material quirúrgico, instrumentos oftalmológicos, lentes intraoculares, vitrectomía, microcirugía ocular, facoemulsificación, láser oftalmológico, insumos para cirugía refractiva, quirófano oftalmológico, desprendimiento de retina, glaucoma, insumos para cirugía de glaucoma, insumos para cirugía de retina, insumos para cirugía de córnea, anestesia oftalmológica'

};

const RootLayout = async (props) => {
  const { children, params: { locale } } = props;

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>OCULAR INSUMOS QUIRURGICOS</title>
        <meta name="description" content="Insumos quirurgicos para cirugias oftalmologicas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#007BC7" />
        <meta name="robots" content="follow, index" />
        <meta name="author" content="Matias Rozas, Gonzalo Torres Grau" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="OCULAR INSUMOS QUIRURGICOS" />
        <meta property="og:description" content="Insumos quirurgicos para cirugias oftalmologicas" />
        <meta property="og:title" content="OCULAR INSUMOS QUIRURGICOS" />
        <meta property="og:image" content="/favicon.ico" sizes="any" type="image/x-icon"/>
        <meta name="keywords" content="insumos, insumos quirúrgicos, oftalmología, cirugía oftalmológica, cirugía, cirugía de cataratas, retina, cataratas, equipos oftalmológicos, material quirúrgico, instrumentos oftalmológicos, lentes intraoculares, vitrectomía, microcirugía ocular, facoemulsificación, láser oftalmológico, insumos para cirugía refractiva, quirófano oftalmológico, desprendimiento de retina, glaucoma, insumos para cirugía de glaucoma, insumos para cirugía de retina, insumos para cirugía de córnea, anestesia oftalmológica" />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@1,600&display=swap" rel="stylesheet" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KBHMWPKSR6"/>
        <script dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KBHMWPKSR6');
            `,}}
        />
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
