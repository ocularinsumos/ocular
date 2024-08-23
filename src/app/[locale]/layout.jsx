import './globals.css';
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import VolverArriba from "../../components/VolverArriba/VolverArriba";
import userData from "../../components/Constantes/userData";
import BotonWsp from "../../components/BotonWSP/BotonWsp";
import TopBanner from '../../components/TopBanner/TopBanner';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const RootLayout = async (props) => {
  const { children,params: {locale} } = props;
  const meta = {
    title: "OCULAR INSUMOS QUIRURGICOS",
    description: "Insumos quirurgicos para cirugias oftalmologicas",
    type: "website",
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#451F49',
    charSet: 'UTF-8',
    icon: '/favicon.ico',
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
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <Head>
        <meta name="robots" content="follow, index" />
        <link rel="shortcut icon" href={meta.icon} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.icon} />
      </Head>
      <body className=''>
      <NextIntlClientProvider messages={messages}>
          <TopBanner/>
          <nav>
            <Navbar />
          </nav>
          <main id="skip">
            {children}
          </main>
          <footer>
            <Footer />
            <VolverArriba />
            <BotonWsp codigoPais={userData.codigoPais} contact={userData.contact} text={userData.textBoton}/>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
