import Servicio from "@/components/Servicio/Servicio";
import React from "react";
import imagen from '../../../public/images/servicios/2.webp'
import VolverArriba from "@/components/VolverArriba/VolverArriba";
import BotonWsp from "@/components/BotonWSP/BotonWsp";
import userData from "@/components/Constantes/userData";

const data = {
    titulo:'Sanación energética',
    texto:'Mediante la imposición de manos como técnica de canalización y transmisión de energía vital, logramos identificar los bloqueos que se encuentran a nivel inconsciente limpiando e equilibrando los centros energéticos, dando paz y armonía. Otorgando beneficios a nivel mental, energético y espiritual. La sanación energética nos libera y da ayor claridad.',
    texto2:'El amor y la gratitud son las frecuencias más elevadas que benefician nuestro campo energético. Acceder a ellas hará que puedas realmente transformar tu vida.'
  }

export default function Cornea() {

  return (<div>
    <Servicio titulo={data.titulo} texto={data.texto} imagen={imagen} texto2={data.texto2}/>
    <VolverArriba/>
    <BotonWsp codigoPais={userData.codigoPais} contact={userData.contact} text={userData.textBoton}/>
  </div>
  );
}