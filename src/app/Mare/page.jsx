'use client'
import React, { useState } from "react";
import "./mare.css";
import VolverArriba from "@/components/VolverArriba/VolverArriba";
import BotonWsp from "@/components/BotonWSP/BotonWsp";
import userData from "@/components/Constantes/userData";

export default function MarePage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      <div className="relative">
        <img loading='lazy' 
          width={100}
          height={600}
          src='images/marePage/img1.webp'
          alt="img"
          className="w-full object-cover h-[300px] md:h-[600px]"
          onLoad={handleImageLoad}
        />
        {imageLoaded && (
          <div className="over">
            <div className="over-text">
              <div className="flex flex-col justify-around">
                <h4 className="tit text-md md:text-xl">PROGRAMA</h4>
                <h2 className="programa text-[80px] md:text-[150px]">
                  M.A.R.E
                </h2>
              </div>
              <h4 className="tit2 text-md md:text-xl mt-[150px]">
                TU CAMINO DE VUELTA A CASA
              </h4>
            </div>
          </div>
        )}
      </div>

      <div className="tex mx-auto my-8 text-xl lg:text-2xl max-w-7xl lg:px-40 md:px-20 sm:px-10 px-6">
      
        <p>Si entendemos que nuestros pensamientos pueden crear nuestra realidad, que la respiración consciente pueden elevar nuestra energía, y que el amor es la frecuencia de vibración más alta, podremos realmente transformar nuestra vida y sostener esos cambios a lo largo del tiempo.</p>
        <br />
        <p>Y esto es</p>
        <br />
        <h2 className='mareP text-'>M.A.R.E</h2>
      </div>
      <div className="relative w-full object-cover h-[300px] md:h-[600px] bg-black">
        <img loading='lazy' 
          width={100}
          height={600}
          src='images/marePage/img2.webp'
          alt="img"
          className="absolute w-full object-cover h-[300px] md:h-[600px] opacity-70"
          onLoad={handleImageLoad}
        />
        <img loading='lazy' 
          width={100}
          height={500}
          src='images/marePage/img3.webp'
          alt="img"
          className="absolute w-[50%] max-w-[700px] min-w-[250px] mx-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-auto min-h-[177px] max-h-[500px] "
          onLoad={handleImageLoad}
        />
      </div>

      <div className="md:grid  md:grid-cols-3 flex flex-col max-w-7xl md:mx-auto py-10 md:px-20 px-6 gap-10">
        <div className="md:col-span-2 content-center">
          <h3 className="aprender text-center md:text-start text text-5xl">
            ¿Que aprenderás?
          </h3>
          <ul className="listaMare mx-auto md:pl-20 pl-6 py-10 text-[#605f4b] font-lato list-disc ">
            <li>Reconoce y despierta tu superpoder</li>
            <li>Eleva tu frecuencia vibratoria</li>
            <li>
              Comprende la importancia de la respiracion como energía vital
            </li>
            <li>
              Conecta con la energía del amor para expandir tu consciencia
            </li>
          </ul>
        </div>
        <div className="md:col-span-1 md:place-self-end self-center">
          <img loading='lazy'  src='images/marePage/img4.webp' alt="img4" width={410} height={547} />
        </div>
      </div>

      <VolverArriba />
      <BotonWsp
        codigoPais={userData.codigoPais}
        contact={userData.contact}
        text={userData.textBoton}
      />
    </div>
  );
}
