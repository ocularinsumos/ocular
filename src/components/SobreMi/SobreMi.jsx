import React from "react";
import texto from '../Constantes/texto';
import { robotoCondensed } from "@/Utils/fonts";

export default function SobreMi() {
  return (
    <section className="p-4 max-w-[780px] mx-auto">
      <h2 className={`text-text-primary text-3xl  m-4 items-center text-center ${robotoCondensed.className}`}>{texto.nosotros.titulo}</h2>
      <p className="text-text-secondary text-lg">{texto.nosotros.descripcion}</p>
      <br />
      <div id="nosotros" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start ">
        <div className="flex flex-col items-center text-start md:text-start md:items-start">
          <p className="text-text-secondary text-lg indent-6">{texto.nosotros.mision}</p>
          <br />
          <p className="text-text-secondary text-lg indent-6">{texto.nosotros.valores}</p>
        </div>
        <img loading="lazy" width={100} style={{ filter: 'drop-shadow(0 4px 25px rgba(0, 123, 199))' }} className="hidden md:block md:w-full p-6 place-self-center " src="images/sobreMi/ojo.webp" alt="ojo del logo" aria-description="ojo del logo" />
      </div>
    </section>
  );
}
