import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Servicio({ titulo, texto, imagen, texto2, texto3, icono, prod }) {
  console.log('servicio:', titulo, texto, imagen, texto2, texto3, icono);
  const userData = useTranslations('userData');
  const productos = useTranslations('productos');
  const enviar = `https://wa.me/+${userData('codigoPais')}${userData('contact')}?text=${encodeURIComponent(userData('textoPredefinido'))}`;
  console.log('productos:', prod);

  return (
    <section className="min-h-screen grid col-span-1 justify-items-center md:grid-cols-3 md:px-4 lg:pl-20 lg:pr-10 py-16 gap-10 lg:gap-20 ">
      <article className="flex flex-col grid-cols-1 justify-between text-center px-6 md:px-6 pt-10 lg:pr-10">
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-4xl text-black font-light italic font-playfair tracking-[-2px]">{titulo.toUpperCase()}</h1>
            {icono && (
              <img src={icono} loading="lazy" className="w-fit px-2" width={60} height="auto" alt={`Icono de ${titulo}`} aria-label={`Icono de ${titulo}`} />
            )}
          </div>
          <p className="py-6 text-[#007BC7]">{texto}</p>
          <p className="text-text-primary">{texto2}</p>
          {texto3 ? <p className="pt-6 text-text-primary">{texto3}</p> : null}
          <div className="mx-auto">
            <Link href={enviar} className="bg-primary hover:bg-primary-hover active:bg-primary-active text-text-tertiary mx-2 mt-8 px-4 py-2 rounded-lg text-center inline-block" target="_blank" rel="noopener noreferrer" aria-label="Boton de contacto">
              {userData('textoProductos')}
            </Link>
            <Link href='/#productos' className="bg-primary hover:bg-primary-hover active:bg-primary-active md:hidden text-text-tertiary mx-2 mt-8 px-4 py-2 rounded-lg text-center inline-block" aria-label={productos('btnVolver')}>
              {productos('btnVolver')}
            </Link>
          </div>
        </div>
      </article>
      <article className="relative w-full col-span-1 md:col-span-2 p-2"> 
  <ul className="space-y-4">
    {prod && prod.map((item, index) => (
      <li key={index} className="flex flex-row items-center bg-primary border hover:bg-primary-hover border-gray-200 rounded-lg shadow max-h-full mx-auto max-w-4xl">
        <img className="m-2 md:p-0 object-cover w-32 h-32 md:w-48 md:h-48 rounded-md" src={item.imagen} alt={item.descripcion} />
        <div className="flex flex-col justify-between py-2 md:p-4 leading-normal w-full ">
          <h2 className="md:mb-2 text-base md:text-2xl font-bold tracking-tight text-gray-300">{item.nombre}</h2>
          <p className="md:mb-2 text-xs lg:text-base font-normal text-gray-300">{item.descripcion}</p>
          <p className="md:mb-2 text-sm md:text-base font-normal text-gray-300">{item.marca}</p>
          <small className="text-xs md:text-sm font-normal text-gray-300">{item.codigo}</small>
        </div>
      </li>
    ))}
  </ul>
</article>


    </section>
  );
}
