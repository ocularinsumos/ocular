'use client';
import { Map, Marker, Draggable} from 'pigeon-maps';
import { useState } from 'react';

const Mapa = () => {
  const center = [-34.622959938473436, -58.39504191349283]; // Coordenadas de ejemplo (Nueva York, USA)

  // Estado para controlar el marcador
  const [anchor, setAnchor] = useState([-34.622959938473436, -58.39504191349283]);

  return (
    <Map height={400} defaultCenter={center} defaultZoom={13}>
    <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor} >
   
        <img src='/images/logos/punto.webp' width={80} height={95}/>
    </Draggable>

    </Map>
  );
};

export default Mapa;
