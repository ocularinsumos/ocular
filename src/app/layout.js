'use client';
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import logo from '../../public/favicon.ico'
import { Inter } from "next/font/google";
import '@/styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

const RootLayout = (props) => {
  const { children, ...customMeta } = props;
  const meta = {
    title: "OCULAR INSUMOS QUIRURGICOS",
    description: "Instructora para sanar con amor - Sanación Energética",
    type: "website",
    ...customMeta,
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
      <body className={inter.className}>
          <Navbar />
          <main id="skip" className="bg-background-tertiary">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
