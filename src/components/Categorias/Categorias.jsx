import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import OtrasCategorias from './OtrasCategorias'

 const Categorias = ({ titulo, imagen, icono, cat }) => {
  console.log('categoria en cat:', titulo, imagen, icono, cat);

  const userData = useTranslations('userData');
  const categorias = useTranslations('categorias');
  const productos = useTranslations('productos');

  const enviar = `https://wa.me/+${userData('codigoPais')}${userData('contact')}?text=${encodeURIComponent(userData('textoPredefinido'))}`;


  return (
    <section className="md:min-h-screen grid col-span-1 justify-items-center md:grid-cols-3 md:px-4 lg:pl-20 lg:pr-10 py-16 lg:gap-20 ">
      <article className="md:flex md:flex-col grid-cols-1 justify-between text-center px-6 md:px-6 py-10 lg:pr-10 min-h-96">
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-4xl text-black font-light italic font-playfair tracking-[-2px]">{titulo.toUpperCase()}</h1>
            {icono && (<img src={icono} loading="lazy" className="w-fit px-2" width={60} height="auto" alt={`Icono de ${titulo}`} title={`Icono de ${titulo}`} aria-label={`Icono de ${titulo}`} />)}
          </div>
          <div className="mx-auto">
            <Link href={enviar} className="bg-primary hover:bg-primary-hover active:bg-primary-active text-text-tertiary mx-2 mt-8 px-4 py-2 rounded-lg text-center inline-block"target="_blank" rel="noopener noreferrer" aria-label={userData('textoProductos')} title={userData('textoProductos')}>
              {userData('textoProductos')}
            </Link>
          </div>
        </div>
      </article>
      <article className="relative w-full col-span-1 md:col-span-2 p-2">
        <OtrasCategorias cat={cat} />
      </article>
      <div className="mx-auto">
        <Link href="/#productos" className="bg-primary hover:bg-primary-hover active:bg-primary-active md:hidden text-text-tertiary mx-2 mt-8 px-4 py-2 rounded-lg text-center inline-block"aria-label={productos('btnVolver')} title={productos('btnVolver')}>
          {productos('btnVolver')}
        </Link>
      </div>
    </section>
  );
}

export default Categorias