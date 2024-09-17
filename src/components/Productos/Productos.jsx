'use client'
import React from "react";
import Link from "next/link";
import { robotoCondensed } from "@/Utils/fonts";
import { useLocale } from "next-intl";

export default function Productos({producto,texto,categorias}) {
  const locale = useLocale()

  return (
    <section id="productos">
      <article className="my-10 md:my-10 text-center">
        <h2 className={`text-3xl md:text-[60px] leading-[80px] text-text-primary font-normal italic px-2 mx-auto pt-3 font-playfair ${robotoCondensed.className}`} aria-label={texto.titulo}>{texto.titulo}</h2>
        <h3 className="text-primary p-2 " aria-label={texto.subtitulo}>{texto.subtitulo}</h3>
      </article>
      <article className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-10 md:px-0 md:mx-10">
        {producto.map((servicio, i) => (
          <Link href={`/${locale}/${servicio.href}`} key={i} className="flex flex-col shadow-md items-center text-center mb-10 transform transition-transform duration-300 hover:scale-110 hover:shadow-xl active:scale-110 active:duration-75 rounded-lg bg-primary overflow-hidden" >
            <img loading="lazy" width={150} height={150} src={servicio.img} alt={servicio.title} className="w-full object-cover" aria-label={servicio.title}/>
            <h2 className="text-background-primary p-2 w-full text-center" aria-label={servicio.title}>
              {servicio.title.toUpperCase()}
            </h2>
          </Link>
        ))}
      </article>
      <article className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-10 md:px-0 md:mx-10">
        {categorias.map((categoria, i) => (
           <Link href={`/${locale}/categorias/${categoria.href}`} key={i} className="flex flex-col shadow-md items-center text-center mb-10 transform transition-transform duration-300 hover:scale-110 hover:shadow-xl active:scale-110 active:duration-75 rounded-lg bg-primary overflow-hidden" >
            <img loading="lazy" width={150} height={150} src={categoria.img} alt={categoria.title} className="w-full object-cover" aria-label={categoria.title}/>
            <h2 className="text-background-primary p-2 w-full text-center" aria-label={categoria.title}>
              {categoria.title.toUpperCase()}
            </h2>
          </Link>
        ))}
      </article>
    </section>
  );
}
