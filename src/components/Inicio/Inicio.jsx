import React from "react";
import './inicio.css'
import texto from "../Constantes/texto";

export default function () {
  return (
    <div id="inicio" className="relative w-full bg-black">
      <img loading='lazy'  src='images/inicio/portada.webp' width={100} height={100} className="w-full object-cover h-[500px] opacity-50" alt="imageInicio" />
      <div className="absolute inset-0 flex justify-around gap-10 items-center bottom-16 text-white">
        <div className="flex justify-avenly items-center ">
          <div >
            <p className="text-[40px] md:text-[56px] tracking-tight text-customBeige leading-none relative z-10 font-playfair-regular-italic">{texto.inicio.titulo}</p>
            <p className="text-[15px] md:text-[20px] tracking-wide text-customBeige font-light font-lato relative  z-0">{texto.inicio.subtitulo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
