import BotonWsp from "@/components/BotonWSP/BotonWsp";
import Comentarios from "@/components/Comentarios/Comentarios";
import Inicio from "@/components/Inicio/Inicio";
import Mare from "@/components/Mare/Mare";
import Servicios from "@/components/Servicios/Servicios";
import SobreMi from "@/components/SobreMi/SobreMi";
import VolverArriba from "@/components/VolverArriba/VolverArriba";
import userData from "@/components/Constantes/userData";

export default function HomePage() {
  return (
      <>
        <Inicio />
        <Servicios /> 
        <Mare />
        <SobreMi />
        {/* <Comentarios /> */}
        <VolverArriba />
        <BotonWsp codigoPais={userData.codigoPais} contact={userData.contact} text={userData.textBoton}/>
      </>
  );
}
