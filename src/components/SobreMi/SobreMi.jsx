import React from "react";
import texto from '../Constantes/texto';
import { robotoCondensed } from "@/Utils/fonts";

export default function SobreMi() {
  return (
    <section id="nosotros" className="relative z-10"> 
      <article  className="p-4 max-w-[780px] mx-auto">
        <h2 className={`text-text-primary text-3xl m-4 items-center text-center ${robotoCondensed.className}`}>{texto.nosotros.titulo}</h2>
        <p className="text-text-secondary text-lg">{texto.nosotros.descripcion}</p>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col items-center text-start md:text-start md:items-start">
            <p className="text-text-secondary text-lg indent-6">{texto.nosotros.mision}</p>
            <br />
            <p className="text-text-secondary text-lg indent-6">{texto.nosotros.valores}</p>
          </div>
          <img loading="lazy" width={100} style={{ filter: 'drop-shadow(0 4px 25px rgba(0, 123, 199))' }} className="hidden md:block md:w-full p-6 place-self-center z-10" src="images/sobreMi/ojo.webp" alt="ojo del logo" aria-description="ojo del logo" />
        </div>

        {/* Curva ondulada SVG */}
      </article>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[-20px] sm:bottom-[-40px] w-full md:bottom-[-40px] md:right-0 md:w-[70%] lg:bottom-[-40px] lg:right-0 lg:w-[50%] ">
          <path d="M0 0H1440V50C1200 150 600 150 0 50V0Z" fill="#F3F5F5" />
        </svg>
    </section>
  );
}
