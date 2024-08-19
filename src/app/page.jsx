
import Inicio from "@/components/Inicio/Inicio";
import Mare from "@/components/Mare/Mare";
import Servicios from "@/components/Servicios/Servicios";
import SobreMi from "@/components/SobreMi/SobreMi";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentas/PreguntasFrecuentas";
import Ubicacion from "@/components/Ubicacion/Ubicacion";

export default function HomePage() {
  return (
      <>
        <Inicio />
        <Servicios /> 
        <Mare />
        <SobreMi />
        {/* <Comentarios /> */}
        <Ubicacion />
        <PreguntasFrecuentes />
      </>
  );
}
