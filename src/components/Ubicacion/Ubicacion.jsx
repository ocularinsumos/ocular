'use client';
import { Map, Marker } from 'pigeon-maps';
import { useState } from 'react';

const Mapa = () => {
  const center = [-34.622959938473436, -58.39504191349283]; // Coordenadas de ejemplo (Buenos Aires, Argentina)

  // Estado para controlar el marcador
  const [anchor, setAnchor] = useState([-34.622959938473436, -58.39504191349283]);

  return (
    <Map height={400} defaultCenter={center} defaultZoom={13}>
      <Marker anchor={anchor}>
        <a href="https://www.google.com/maps/dir/-34.9491129,-58.0007115/ocular+elementos+quirurgicos/@-34.623136,-58.3951626,21z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95bccb1f8415c595:0xc60ce607280e2fa3!2m2!1d-58.3950741!2d-34.6231012?entry=ttu">
          <img src='/images/logos/punto.webp' width={80} height={95} alt="Marker" />
        </a>
      </Marker>
    </Map>
  );
};

export default Mapa;
