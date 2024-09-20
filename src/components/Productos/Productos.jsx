'use client'
import React from "react";
import Link from "next/link";
import { robotoCondensed } from "@/Utils/fonts";
import { useLocale } from "next-intl";
import Slider from "react-slick";  // Importa el componente Slider de react-slick

export default function Productos({ producto, texto, categorias }) {
  const locale = useLocale();

  // Configuración para react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false, // Desactiva flechas si quieres un diseño más limpio
  };

  return (
    <section id="productos">
      <article className="my-10 md:my-10 text-center">
        <h2 className={`text-3xl md:text-[60px] leading-[80px] text-text-primary font-normal italic px-2 mx-auto pt-3 font-playfair ${robotoCondensed.className}`} aria-label={texto.titulo}>{texto.titulo}</h2>
        <h3 className="text-primary p-2 " aria-label={texto.subtitulo}>{texto.subtitulo}</h3>
      </article>

      {/* Sección de productos */}
      <article className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 my-10 md:px-0 md:mx-10">
        {producto.map((servicio, i) => (
          <Link href={`/${locale}/${servicio.href}`} key={i} className="flex flex-col shadow-md items-center text-center mx-10 md:mx-2 mb-10 transform transition-transform duration-300 hover:scale-110 hover:shadow-xl active:scale-110 active:duration-75 rounded-lg bg-primary overflow-hidden" title={servicio.title}>
            <img loading="lazy" width={150} height={150} src={servicio.img} alt={servicio.title} className="w-full object-cover" aria-label={servicio.title} title={servicio.title}/>
            <h2 className="text-background-primary p-2 w-full text-center mb-10 mx-6 md:m-6 " aria-label={servicio.title}>
              {servicio.title.toUpperCase()}
            </h2>
          </Link>
        ))}
      </article>

      {/* Sección de categorías */}
      <article className="my-10 md:my-10 text-center">
        <h2 className={`text-3xl md:text-[60px] leading-[80px] text-text-primary font-normal italic px-2 mx-auto pt-3 font-playfair ${robotoCondensed.className}`} aria-label={texto.tituloCat}>
          {texto.tituloCat}
        </h2>
        <h3 className="text-primary p-2 " aria-label={texto.subCat}>
          {texto.subCat}
        </h3>
      </article>

      <article className="my-10 md:px-0 md:mx-10">
        {/* Carrusel react-slick para móviles */}
        <div className="md:hidden">
          <Slider {...settings}>
            {categorias.map((categoria, i) => (
              <div key={i} className="flex flex-col shadow-md items-center text-center mb-10 transform transition-transform duration-300 hover:scale-110 hover:shadow-xl active:scale-110 active:duration-75 bg-primary overflow-hidden gap-2 border-white border-8 ">
                <Link href={`/${locale}/categorias/${categoria.href}`} title={categoria.title}>
                  <img loading="lazy" width={150} height={150} src={categoria.img} alt={categoria.title} className="w-full object-cover" aria-label={categoria.title} title={categoria.title} />
                  <h2 className="text-background-primary p-2 w-full text-center rounded-b-md" aria-label={categoria.title}>
                    {categoria.title.toUpperCase()}
                  </h2>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        {/* Diseño de grid para pantallas más grandes */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categorias.map((categoria, i) => (
            <Link href={`/${locale}/categorias/${categoria.href}`} key={i} className="flex flex-col shadow-md items-center text-center mb-10 transform transition-transform duration-300 hover:scale-110 hover:shadow-xl active:scale-110 active:duration-75 rounded-lg bg-primary overflow-hidden" title={categoria.title}>
              <img loading="lazy" width={150} height={150} src={categoria.img} alt={categoria.title} className="w-full object-cover" aria-label={categoria.title} title={categoria.title}/>
              <h2 className="text-background-primary p-2 w-full text-center" aria-label={categoria.title}>
                {categoria.title.toUpperCase()}
              </h2>
            </Link>
          ))}
        </div>
      </article>
    </section>
  );
}
