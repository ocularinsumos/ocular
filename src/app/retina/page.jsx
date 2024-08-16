import Servicio from "@/components/Servicio/Servicio";
import React from "react";
import imagen from '../../../public/images/servicios/1.webp'
import VolverArriba from "@/components/VolverArriba/VolverArriba";
import BotonWsp from "@/components/BotonWSP/BotonWsp";
import userData from "@/components/Constantes/userData";

const data = {
  titulo: 'La mente y sus posibilidades',
  texto: 'Si entendiéramos que cambiando nuestros pensamientos cambiamos nuestras experiencias de vida, creo que no perderíamos ni un segundo en seguir enfocados en aquellas cosas que ya no queremos. Comenzar a trabajar sobre nuestras creencias limitantes, aquellas heredadas, pero también propias nos abre un abanico de posibilidades. Cuando te des cuenta que lo que creas en tu mente aparece en tu vida, comenzarás a poner a trabajar a ella a tu favor. Recuerda que tu mente subconsciente siempre obedece.', 
  texto2:'¿Te gustaría que te acompañe en tu transformación?'
};

export default function Retina() {

  return (
    <div>
        <Servicio titulo={data.titulo} texto={data.texto} imagen={imagen} texto2={data.texto2}/>
        <VolverArriba/>
        <BotonWsp codigoPais={userData.codigoPais} contact={userData.contact} text={userData.textBoton}/>
    </div>
  );
}