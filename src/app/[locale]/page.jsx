import Inicio from "@/components/Inicio/Inicio";
import SobreMi from "@/components/SobreMi/SobreMi";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentas/PreguntasFrecuentas";
import Ubicacion from "@/components/Ubicacion/Ubicacion";
import VideoPublicidad from "@/components/Video/VideoPublicidad";
import Productos from "@/components/Productos/Productos";
import {getMessages} from 'next-intl/server';


export default async function HomePage() {
  const messages = await getMessages();

  return (
      <>
        <Inicio inicio={messages.inicio}/>
        <Productos producto={messages.producto} texto={messages.productos}/> 
        <VideoPublicidad />
        <SobreMi />
        <Ubicacion />
        <PreguntasFrecuentes />
      </>
  );
}
