import Inicio from "@/components/Inicio/Inicio";
import SobreMi from "@/components/SobreMi/SobreMi";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentas/PreguntasFrecuentas";
import Ubicacion from "@/components/Ubicacion/Ubicacion";
import VideoPublicidad from "@/components/Video/VideoPublicidad";
import Productos from "@/components/Productos/Productos";
import Link from "next/link";

export default function HomePage() {
  return (
      <>
        <Link href="#productos" className="skip-link absolute left-0 bg-gray-900 text-white p-2 rounded-md text-base font-medium -top-10 focus:top-0 focus:z-50">
        Saltar al contenido principal
        </Link>
        <Inicio />
        <Productos /> 
        <VideoPublicidad />
        <SobreMi />
        <Ubicacion />
        <PreguntasFrecuentes />
      </>
  );
}
