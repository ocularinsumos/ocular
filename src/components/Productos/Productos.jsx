import React from "react";
import Link from "next/link";
import productos from '../Constantes/productos.json';
import { robotoCondensed } from "@/Utils/fonts";
import texto from "../Constantes/texto";

export default function Productos() {
  return (
    <div id="productos">
      <div className="my-10 md:my-10 text-center">
        <h2 className={`text-3xl md:text-[60px] leading-[80px] text-text-primary font-normal italic px-2 mx-auto pt-3 font-playfair ${robotoCondensed.className}`}>{texto.productos.titulo}</h2>
      </div>
      <div className="flex justify-around my-10 md:px-0 flex-wrap md:mx-5">
        {productos.map((servicio, i) => (
          <Link href={`/${servicio.id}`} key={i} className="flex flex-col shadow-md items-center text-center w-48 md:w-36 lg:w-44 xl:w-60 mb-10 transform transition-transform duration-300 hover:scale-110 hover:shadow-xl active:scale-110 active:duration-75 rounded-[50px] py-2 shadow-blue-200">
            <img loading="lazy" width={150} height={150} src={servicio.img} alt={servicio.title} className="w-fit px-2 rounded-[50px]"/>
            <h2 className="text-black mt-6">{servicio.title.toUpperCase()}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
