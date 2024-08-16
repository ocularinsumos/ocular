import React from "react";
import texto from '../Constantes/texto';

export default function SobreMi() {
  return (
    <section>
      <h2 className="text-text-primary text-[40px] m-4 items-center text-center">{texto.nosotros.titulo}</h2>
      <p className="text-text-secondary mb-8 text-[30px] px-10">{texto.nosotros.descripcion}</p>
      <div id="nosotros" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center sm:p-10 px-4 py-8">
        <div className="flex flex-col items-center text-center md:text-start md:px-2 md:items-start">
          <p className="text-text-secondary mb-4 text-[30px]">{texto.nosotros.mision}</p>
          <p className="text-text-secondary text-[30px]">{texto.nosotros.valores}</p>
        </div>
        <img loading="lazy" width={100} className="md:p-24 w-full" src="images/sobreMi/ojo.webp" alt="ojo del logo" aria-description="ojo del logo" />
      </div>
    </section>
  );
}
