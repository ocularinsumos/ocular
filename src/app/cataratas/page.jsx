import Servicio from "@/components/Servicio/Servicio";
import React from "react";
import BotonWsp from "@/components/BotonWSP/BotonWsp";
import VolverArriba from "@/components/VolverArriba/VolverArriba";
import userData from "@/components/Constantes/userData";

const data = {
    titulo:'CATARATAS',
    texto:'Informacion sobre cataratas',
    texto2:'texto sobre eso',
    texto3:'mas texto.'
  }

export default function Cataratas() {

  return (
    <div>
      <Servicio titulo={data.titulo} texto={data.texto} imagen={'images/servicios/1.webp'} texto2={data.texto2} texto3={data.texto3}/>
      <VolverArriba/>
      <BotonWsp codigoPais={userData.codigoPais} contact={userData.contact} text={userData.textBoton}/>
    </div>
  );
}
