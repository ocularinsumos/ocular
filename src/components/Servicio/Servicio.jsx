import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import SubCategorias from "./SubCategorias";

export default function Servicio({ titulo, texto, texto2, texto3, icono, prod, texto4, faq = [] }) {
  const locale = useLocale();
  const isEs = locale === 'es';
  const userData = useTranslations('userData');
  const productos = useTranslations('productos');

  const enviar = `https://wa.me/+${userData('codigoPais')}${userData('contact')}?text=${encodeURIComponent(userData('textoPredefinido'))}`;

  return (
    <section className="md:min-h-screen grid col-span-1 justify-items-center md:grid-cols-3 md:px-4 lg:pl-20 lg:pr-10 py-16 lg:gap-20 ">
      <article className="md:flex md:flex-col grid-cols-1 justify-between text-center px-6 md:px-6 py-10 lg:pr-10 min-h-96">
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-4xl text-black font-light italic font-playfair tracking-[-2px]">{titulo.toUpperCase()}</h1>
            {icono && (
              <img src={icono} loading="lazy" className="w-fit px-2" width={60} height="auto" alt={`Icono de ${titulo}`} aria-label={`Icono de ${titulo}`} title={`Icono de ${titulo}`}/>
            )}
          </div>
          <p className="py-6 text-[#007BC7]">{texto}</p>
          <p className="text-text-primary">{texto2}</p>
          {texto3 ? <p className="py-6 text-text-primary">{texto3}</p> : null}
          <div className="mx-auto">
            <Link href={enviar} className="bg-primary hover:bg-primary-hover active:bg-primary-active text-text-tertiary mx-2 mt-8 px-4 py-2 rounded-lg text-center inline-block" target="_blank" rel="noopener noreferrer" aria-label="Boton de contacto" title={userData('textoProductos')}>
              {userData('textoProductos')}
            </Link>
          </div>
        </div>
      </article>
      <article className="relative w-full col-span-1 md:col-span-2 p-2"> 
        <SubCategorias prod={prod}/>
      </article>
      <div className="mx-auto">
            <Link href='/#productos' className="bg-primary hover:bg-primary-hover active:bg-primary-active md:hidden text-text-tertiary mx-2 mt-8 px-4 py-2 rounded-lg text-center inline-block" aria-label={productos('btnVolver')} title={productos('btnVolver')}>
              {productos('btnVolver')}
            </Link>
      </div>
      <article className="items-center w-full col-span-1 md:col-span-3 p-2 place-items-center">
        <div id="desarrolloProductos" className="max-w-6xl flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold text-[#007BC7]">
            {isEs ? `Más información sobre ${titulo.trim().toLowerCase()}` : `More about ${titulo.trim().toLowerCase()}`}
          </h2>
          {texto4 ? <p className="py-6 text-text-primary">{texto4}</p> : null}
        </div>
      </article>

      {faq.length > 0 && (
        <article id="faq" className="w-full col-span-1 md:col-span-3 p-2 max-w-4xl">
          <h2 className="text-2xl font-semibold text-[#007BC7] mb-4">
            {isEs ? 'Preguntas frecuentes' : 'Frequently asked questions'}
          </h2>
          {faq.map((item) => (
            <details key={item.q} className="mb-3 border border-gray-200 rounded-xl bg-white">
              <summary className="cursor-pointer p-4 font-medium text-gray-700">{item.q}</summary>
              <p className="p-4 pt-0 text-gray-700">{item.a}</p>
            </details>
          ))}
          <p className="mt-6 text-text-primary">
            {isEs ? 'Ver también: ' : 'See also: '}
            <Link className="text-blue-600 hover:underline" href={`/${locale}/lentes-intraoculares`}>
              {isEs ? 'lentes intraoculares' : 'intraocular lenses'}
            </Link>
            {' · '}
            <Link className="text-blue-600 hover:underline" href={`/${locale}/marcas`}>
              {isEs ? 'marcas representadas' : 'represented brands'}
            </Link>
          </p>
        </article>
      )}
    </section>
  );
}
