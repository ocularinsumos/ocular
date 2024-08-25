import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function Servicio({ titulo, texto, imagen, texto2,texto3, icono }) {
  console.log(titulo)
  const userData = useTranslations('userData')
  const productos = useTranslations('productos')
  const enviar = `https://wa.me/+${userData('codigoPais')}${userData('contact')}?text=${encodeURIComponent(`${userData('textoPredefinido')}}`)}`;

  return (
    <div className="min-h-screen grid grid-cols-1 justify-items-center md:grid-cols-2 md:pl-20 md:pr-10 py-16 gap-10 md:gap-20">
      <div className="relative w-60 md:w-96">
        <img loading='lazy' className="w-full relative top-5 left-5 z-10 shadow-[box-shadow:-23px_25px_0px_5px_#007BC7]" width={100} src={imagen} height={100} alt="imagen"  aria-label={titulo}/>
      </div>
      <div className="flex flex-col justify-between text-center px-6 md:px-6 pt-10 lg:pr-10">
        <div>
          <div className="flex justify-center align-middle items-center">
            <h1 className="text-4xl text-black font-light italic font-playfair tracking-[-2px]">{titulo.toUpperCase()}</h1>
            {icono && (
              <img  loading="lazy" src={icono} className="w-fit px-2" width={60} height="auto" alt={`Icono de ${titulo}`} aria-label={`Icono de ${titulo}`} />
            )}
          </div>
          <p className="py-6 text-[#007BC7]">{texto}</p>
          <p className="text-text-primary">{texto2}</p>
          {texto3 ? <p className="pt-6 text-text-primary">{texto3}</p> : null}
          <div className="mx-auto">
            <Link href={enviar} className="bg-primary hover:bg-primary-hover active:bg-primary-active text-text-tertiary mx-2 mt-8 px-4 py-2 rounded-lg text-center inline-block" target="_blank" rel="noopener noreferrer" aria-label="Boton de contacto">{userData('textoProductos')}</Link>
            <Link href='/#productos' className="bg-primary hover:bg-primary-hover active:bg-primary-active md:hidden text-text-tertiary mx-2 mt-8 px-4 py-2 rounded-lg text-center inline-block" aria-label={productos('btnVolver')}>{productos('btnVolver')}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
