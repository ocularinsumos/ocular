'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import Slider from "react-slick";
import { usePathname } from "next/navigation";
import JsonLd from "../../components/Seo/JsonLd";
import { categorySlug } from "../../lib/slug";

export default function Productos({ producto, texto, categorias }) {
  const locale = useLocale();
  const pathname = usePathname();

  const isHome =
    pathname === "/" ||
    pathname === `/${locale}` ||
    pathname === `/${locale}/`;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false,
  };

// Constante (antes dependía de window/env y generaba URLs distintas en server y cliente)
const SITE = "https://ocularinsumosquirurgicos.com";

const itemListElements = producto.map((p, i) => {
  const url = `${SITE}/${locale}${p.href || ""}`.replace(/([^:]\/)\/+/g, "$1");
  const image = p.img?.startsWith("http") ? p.img : `${SITE}${p.img || ""}`;

  return {
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "Service",
      "name": p.title,
      ...(p.img ? { "image": [image] } : {}),
      "url": url,
      "provider": { "@id": "https://ocularinsumosquirurgicos.com/#organization" }
    }
  };
});

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": itemListElements
};


  return (
    <section id="productos">
      <article className="my-10 md:my-10 text-center">
        {isHome ? (
          <>
            <h1
              className="text-3xl md:leading-[60px] text-text-primary font-normal italic px-2 mx-auto pt-3 font-playfair"
              aria-label={texto.titulo}
            >
              {texto.titulo}
            </h1>
            <p className="text-primary p-2">
              {texto.subtitulo}
            </p>
          </>
        ) : (
          <>
            <h2
              className="text-3xl md:leading-[60px] text-text-primary font-normal italic px-2 mx-auto pt-3 font-playfair"
              aria-label={texto.titulo}
            >
              {texto.titulo}
            </h2>
            <p className="text-primary p-2">
              {texto.subtitulo}
            </p>
          </>
        )}
      </article>

      {/* Sección de productos (UI sin cambios) */}
      <article className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 my-10 md:px-0 md:mx-10">
        {producto.map((servicio) => (
          <Link
            href={`/${locale}${servicio.href}`}
            key={servicio.href || servicio.title}
            className="flex flex-col shadow-md items-center text-center mx-10 md:mx-2 mb-10 transform transition-transform duration-300 hover:scale-110 hover:shadow-xl active:scale-110 active:duration-75 rounded-lg bg-primary overflow-hidden"
            title={servicio.title}
          >
            <Image
              width={600}
              height={400}
              src={servicio.img.startsWith('http') ? servicio.img : `/${servicio.img.replace(/^\//,'')}`}
              alt={servicio.title}
              className="w-full object-cover h-auto"
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 90vw"
              title={`Imagen de ${servicio.title}`}
              aria-label={`Imagen de ${servicio.title}`}
            />
            {isHome ? (
              <h2
                className="text-background-primary p-2 w-full text-center font-semibold text-xl items-center mx-6 md:mx-4"
                aria-label={servicio.title}
              >
                {servicio.title.toLocaleUpperCase(locale)}
              </h2>
            ) : (
              <h3
                className="text-background-primary p-2 w-full text-center font-semibold text-xl items-center mx-6 md:mx-4"
                aria-label={servicio.title}
              >
                {servicio.title.toLocaleUpperCase(locale)}
              </h3>
            )}
          </Link>
        ))}
      </article>

      {/* Sección de categorías (tu UI) */}
      <article className="my-10 md:my-10 text-center">
        <h2
          className="text-3xl md:leading-[60px] text-text-primary font-normal italic px-2 mx-auto pt-3 font-playfair"
          aria-label={texto.tituloCat}
        >
          {texto.tituloCat}
        </h2>
        <p className="text-primary p-2">
          {texto.subCat}
        </p>
      </article>

      <article className="my-10 md:px-0 md:mx-10">
        {/* Carrusel mobile */}
        <div className="md:hidden">
          <Slider {...settings}>
            {categorias.map((categoria) => (
              <div
                key={categoria.href || categoria.title}
                className="flex flex-col shadow-md items-center text-center mb-10 transform transition-transform duration-300 hover:scale-110 hover:shadow-xl active:scale-110 active:duration-75 bg-primary overflow-hidden gap-2 border-white border-8"
              >
                <Link
                  href={`/${locale}/categorias/${categorySlug(categoria.id)}`}
                  title={categoria.title}
                >
                  <Image
                    width={600}
                    height={400}
                    src={categoria.img.startsWith('http') ? categoria.img : `/${categoria.img.replace(/^\//,'')}`}
                    alt={categoria.title}
                    className="w-full object-cover h-auto"
                    sizes="90vw"
                    title={`Categoría ${categoria.title}`}
                    aria-label={`Categoría ${categoria.title}`}
                  />
                  {/* Carrusel mobile duplica el grid desktop: sin heading para no repetir h3 */}
                  <p className="text-background-primary p-2 w-full text-center rounded-b-md">
                    {categoria.title.toLocaleUpperCase(locale)}
                  </p>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categorias.map((categoria) => (
            <Link
              href={`/${locale}/categorias/${categorySlug(categoria.id)}`}
              key={categoria.href || categoria.title}
              className="flex flex-col shadow-md items-center text-center mb-10 transform transition-transform duration-300 hover:scale-110 hover:shadow-xl active:scale-110 active:duration-75 rounded-lg bg-primary overflow-hidden"
              title={categoria.title}
            >
              <Image
                width={600}
                height={400}
                src={categoria.img.startsWith('http') ? categoria.img : `/${categoria.img.replace(/^\//,'')}`}
                alt={categoria.title}
                className="w-full object-cover h-auto"
                sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 90vw"
                title={`Categoría ${categoria.title}`}
                aria-label={`Categoría ${categoria.title}`}
              />
              <h3 className="text-background-primary p-2 w-full text-center">
                {categoria.title.toLocaleUpperCase(locale)}
              </h3>
            </Link>
          ))}
        </div>
      </article>

      {/* JSON-LD SEO */}
      <JsonLd data={itemListJsonLd} />
    </section>
  );
}
