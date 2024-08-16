// Importa React y otros módulos necesarios
import React from "react";
import "./conoceMas.css";

// Componente para la sección "Sobre Mí"
const ConoceMas = () => {
  return (
    <div className="">
      <div className="flex flex-col text-center md:text-start p-4 max-w-6xl mx-auto md:px-20 md:pt-32 md:pb-16">
        <div>
          <h2 className="nombre text-6xl">Caro López Bravo</h2>
          <h4 className="creadora text-3xl">Creadora Programa M.A.R.E</h4>
        </div>
        <div className="image-text-wrapper">
          <img loading='lazy' src='images/sobreMi/caroSobreMi.webp'  alt="Foto Caro Sonriendo" className="w-[400px] h-[500px]  shadow-lg lg:mt-[-110px] mt-12 md:mb-12 object-cover" />
          <div className=" text-start content-end">
            <p className="text">
              Nací en La Plata Argentina. Siempre me gustó trabajar en el
              movimiento de mi cuerpo, pero asimismo sentía que la energía iba
              más allá del cuerpo físico. Un gran llamado de mi alma me invitó a
              iniciar la búsqueda, a ir más profundo. Ese autoconocimiento,
              intenso pero maravilloso, me llevó a formarme en diferentes áreas
              terapéuticas.
            </p>
            <p className="text">
              Así comencé este camino lleno de paz, amor y gratitud, que preciso
              compartir contigo, para acompañarte en tu propio proceso de
              expansión, con todo el amor.
            </p>
          </div>
        </div>
        <p className="text2 ">
          Mi objetivo es crear un espacio de sanación y crecimiento donde las
          personas se sientan seguras para explorar su potencial más profundo.
          Trabajo con cada individuo de manera única, adaptando mis técnicas y
          enfoques para satisfacer sus necesidades específicas. Creo firmemente
          en el poder de la autocompasión y la autoexploración para promover la
          transformación y la realización personal.
        </p>
        <p className="text2">
          Estoy aquí para ayudarte en tu viaje hacia el bienestar y la
          realización personal. Ha sido un placer compartir un poco sobre quién
          soy y qué hago. Si tienes alguna pregunta o estás interesado en
          trabajar juntos, ¡no dudes en ponerte en contacto conmigo!
        </p>
      </div>
    </div>
  );
};

export default ConoceMas;
