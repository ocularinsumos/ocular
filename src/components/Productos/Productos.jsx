'use client'
import React from "react";
import Link from "next/link";
import { robotoCondensed } from "@/Utils/fonts";
import { useLocale } from "next-intl";

export default function Productos({producto,texto}) {
  const locale = useLocale()
  return (
    <div id="productos">
      <div className="my-10 md:my-10 text-center">
        <h2 className={`text-3xl md:text-[60px] leading-[80px] text-text-primary font-normal italic px-2 mx-auto pt-3 font-playfair ${robotoCondensed.className}`}>{texto.titulo}</h2>
      </div>
      <div className="flex justify-around my-10 md:px-0 flex-wrap md:mx-10">
        {producto.map((servicio, i) => (
          <Link 
          href={`/${locale}/${servicio.id}`} key={i} 
          className="flex flex-col mx-2 shadow-md items-center text-center w-40 md:w-36 lg:w-44 xl:w-60 mb-10 transform transition-transform duration-300 hover:scale-110 hover:shadow-xl active:scale-110 active:duration-75 rounded-lg  bg-primary  "
          >
            <img loading="lazy" width={150} height={150} src={servicio.img} alt={servicio.title} className="w-fit rounded-t-md"/>
            <h2 className="text-background-primary p-2 ">{servicio.title.toUpperCase()}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
