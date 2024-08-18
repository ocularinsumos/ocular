'use client';
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import logo from '../../public/favicon.ico'
import './globals.css';


const RootLayout = (props) => {
  const { children } = props;
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

  return (
    <html lang="es">
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <Head>
        <meta name="robots" content="follow, index" />
        <link rel="shortcut icon" href={meta.image} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={logo} />
      </Head>
      <body className=''>
          <Navbar />
          <main id="skip">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
