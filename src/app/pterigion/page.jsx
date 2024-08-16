import Servicio from "@/components/Servicio/Servicio";
import React from "react";
import imagen from '../../../public/images/servicios/4.webp'
import BotonWsp from "@/components/BotonWSP/BotonWsp";
import VolverArriba from "@/components/VolverArriba/VolverArriba";
import userData from "@/components/Constantes/userData";

const data = {
    titulo:'Constelaciones familiares',
    texto:'"Cuando estamos en sintonia con nuestro destino, con nuestros padres, con nuestro origen y tomamos nuestro lugar, tenemos fuerza"',
    texto2:'Bert Hellinger Las constelaciones familiares nos ayudan a tomar conciencia de que lugar estamos ocupando dentro del sistema familiar al que todos tenemos derecho a pertenecer.',
    texto3:'De esta manera ordenar y liberar las lealtades inconscientes que aceptamos por amor ciego.'
  }

export default function Pterigion() {

  return (
    <div>
      <Servicio titulo={data.titulo} texto={data.texto} imagen={imagen} texto2={data.texto2} texto3={data.texto3}/>
      <VolverArriba/>
      <BotonWsp codigoPais={userData.codigoPais} contact={userData.contact} text={userData.textBoton}/>
    </div>
  );
}
