import React from "react";
import Link from "next/link";
import texto from "../Constantes/texto";
import "./servicios.css";
import { robotoCondensed } from "@/Utils/fonts";
export default function Servicios() {
  return (
        <div id="servicios">
            <div className="my-10 md:my-20 text-center">
              <h2 className="titl text-7xl">{texto.productos.titulo}</h2>
              <h3 className={`text-3xl md:text-[60px] text-text-primary px-2 mx-auto pt-3 ${robotoCondensed.className}`}>
              {texto.productos.subtitulo}</h3>
            </div>
            <div className="flex justify-evenly my-10 md:px-0 flex-wrap md:mx-10">
              {texto.servicios.map((servicios, i) => (
                <Link href={servicios.href} key={i} className="flex flex-col items-center text-center w-1/2 md:w-1/4 mb-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-110 active:duration-75" >
                  <img loading='lazy' width={200} height={200} src={servicios.img} alt="img" className="w-full px-2 md:p-5"/>
                  <h2 className="text-black mt-6">{servicios.title}</h2>
                  <h2 className="text-black">{servicios.title2}</h2>
                </Link>
              ))}
            </div>
        </div>
     );
}
