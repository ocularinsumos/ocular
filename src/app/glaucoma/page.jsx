import Servicio from "@/components/Servicio/Servicio";
import React from "react";
import imagen from '../../../public/images/servicios/3.webp'
import VolverArriba from "@/components/VolverArriba/VolverArriba";
import BotonWsp from "@/components/BotonWSP/BotonWsp";
import userData from "@/components/Constantes/userData";

const data = {
    titulo:'Registros akáshicos y canalizaciones',
    texto:'Todos tenemos un "libro de vida" donde vamos guardando información desde el origen hasta el regreso al mismo, son sus memorias. El alma se encarna para poder crecer, evolucionar, aprender. Tanto los registros  como las canalizaciones nos brindan información y mayor conocimiento para poder recordar quienes somos, como así también comprender con mayor sabiduría y claridad nuestro propósito de vida. Recuerda " cuanto más te conoces, más libre eres".',
    texto2:'¿Te gustaría acceder a esta información?'
  }

export default function Glaucoma() {

  return (
    <div>
      <Servicio titulo={data.titulo} texto={data.texto} imagen={imagen} texto2={data.texto2} />
      <VolverArriba/>
      <BotonWsp codigoPais={userData.codigoPais} contact={userData.contact} text={userData.textBoton}/>
    </div>
  );
}