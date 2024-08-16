import React from "react";
import "./Servicio.css";
import userData from "../Constantes/userData";

export default function Servicio({ titulo, texto, imagen, texto2, texto3 }) {

  const enviar = `https://wa.me/+${userData.codigoPais}${userData.contact}?text=${encodeURIComponent(`${userData.textoPredefinido}${titulo.toLowerCase()}`)}`;

  return (
    <div className="min-h-screen grid grid-cols-1 justify-items-center md:grid-cols-2 md:pl-20 md:pr-10 py-16 gap-10 md:gap-20">
      <div className="servicio-relative w-60 md:w-96 ">
        <img loading='lazy'  className="servicio-imagen w-full top-5 left-5 relative z-10" width={100} src={imagen} height={100} alt="imagen" />
      </div>
      <div className="flex flex-col justify-between text-center px-6 md:px-6 pt-10 lg:pr-10">
        <div>
          <h2 className="tituloServicio text-4xl">{titulo}</h2>
          <p className="textoServicio py-6">{texto}</p>
          <p className="textoServicio ">{texto2}</p>
          {texto3? <p className="textoServicio pt-6">{texto3}</p>: null}
          <a href={enviar} className="bg-primary hover:bg-primary-hover active:bg-primary-active text-text-tertiary mx-auto mt-8 px-4 py-2 rounded-lg text-center inline-block"  target="_blank" >¡Contáctame ahora!</a>
        </div>
      </div>
    </div>
  );
}
