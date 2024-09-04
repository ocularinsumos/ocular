import './globals.css';
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import VolverArriba from "../../components/VolverArriba/VolverArriba";
import BotonWsp from "../../components/BotonWSP/BotonWsp";
import TopBanner from '../../components/TopBanner/TopBanner';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const RootLayout = async (props) => {
  const { children, params: { locale } } = props;
  const meta = {
    title: "OCULAR INSUMOS QUIRURGICOS",
    description: "Insumos quirurgicos para cirugias oftalmologicas",
    manifest: "/manifest.json",
    type: "website",
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#451F49',
    charSet: 'UTF-8',
    icon: '/favicon.ico',
    appleTouchIcon: '/icons/apple-touch-icon.png', // 180x180
    keywords: [
      'insumos', 'insumos quirúrgicos', 'oftalmología', 'cirugía oftalmológica', 'cirugía', 
      'cirugía de cataratas', 'retina', 'cataratas', 'equipos oftalmológicos', 'material quirúrgico', 
      'instrumentos oftalmológicos', 'lentes intraoculares', 'vitrectomía', 'microcirugía ocular', 
      'facoemulsificación', 'láser oftalmológico', 'insumos para cirugía refractiva', 
      'quirófano oftalmológico', 'desprendimiento de retina', 'glaucoma', 
      'insumos para cirugía de glaucoma', 'insumos para cirugía de retina', 
      'insumos para cirugía de córnea', 'anestesia oftalmológica'
    ]
  };
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content={meta.viewport} />
        <meta charSet={meta.charSet} />
        <meta name="theme-color" content={meta.themeColor} />
        <meta name="robots" content="follow, index" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.icon} />
        <meta name="keywords" content={meta.keywords.join(', ')} />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href={meta.appleTouchIcon} />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@1,600&display=swap" rel="stylesheet" />
      </Head>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
