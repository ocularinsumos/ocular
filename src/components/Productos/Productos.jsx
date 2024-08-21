import React from "react";
import Link from "next/link";
import productos from '../Constantes/productos.json';
import { robotoCondensed } from "@/Utils/fonts";
import texto from "../Constantes/texto";

export default function Productos() {
  return (
    <div id="productos">
      <div className="my-10 md:my-20 text-center">
        <h2 className={`text-3xl md:text-[60px] leading-[80px] text-text-primary font-normal italic px-2 mx-auto pt-3 font-playfair ${robotoCondensed.className}`}>{texto.productos.titulo}</h2>
      </div>
      <div className="flex justify-evenly my-10 md:px-0 flex-wrap md:mx-10">
        {productos.map((servicio, i) => (
          <Link href={`/${servicio.id}`} key={i} className="flex flex-col items-center text-center w-1/2 md:w-1/4 mb-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-110 active:duration-75">
            <img loading="lazy" width={150} height={150} src={servicio.img} alt={servicio.title} className="w-fit px-2 md:p-5"/>
            <h2 className="text-black mt-6">{servicio.title.toUpperCase()}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
