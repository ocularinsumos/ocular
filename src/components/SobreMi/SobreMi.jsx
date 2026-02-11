import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useTranslations, useLocale} from 'next-intl';



export default function SobreMi() {
  const t = useTranslations('nosotros');
  const locale = useLocale();
  const isSpanish = locale === 'es';

  return (
    <section id="nosotros" className="relative z-10"> 
      <article className="p-4 max-w-7xl mx-auto mb-8 pb-8 md:pb-24 xl:pb-36">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href={`/${locale}`} className="hover:text-primary">
            {isSpanish ? 'Inicio' : 'Home'}
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">{isSpanish ? 'Nosotros' : 'About Us'}</span>
        </div>

        <h2 className="text-text-primary text-3xl m-4 items-center text-center font-roboto">{t('titulo')}</h2>
        <p className="text-text-secondary text-lg">{t('descripcion')}</p>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col items-center text-start md:text-start md:items-start">
            <p className="text-text-secondary text-lg indent-6">{t('mision')}</p>
            <br />
            <p className="text-text-secondary text-lg indent-6">{t('valores')}</p>
          </div>
          <Image
            src="/images/sobreMi/ojo.webp"
            alt="ojo del logo"
            width={600}
            height={400}
            className="hidden md:block p-6 place-self-center z-10 h-auto w-full md:w-1/2"
            style={{ filter: 'drop-shadow(0 4px 25px rgba(0, 123, 199))' }}
            sizes="(min-width: 768px) 600px, 100vw"
            title="Ojo del logo de Ocular"
            aria-label="Ojo del logo de Ocular"
          />
        </div>
      </article>
      
      {/* Curva ondulada SVG */}
      <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-20 bottom-[-30px] md:bottom-[-35px] left-0 w-full h-auto">
        <path d="M0,64L60,80C120,96,240,128,360,160C480,192,600,224,720,213.3C840,203,960,149,1080,128C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="#007BC7" />
      </svg>
    </section>
  );
}
