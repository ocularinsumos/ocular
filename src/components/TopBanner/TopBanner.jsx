'use client'
import React, { useEffect, useState } from 'react';
import texto from '../Constantes/texto';

function TopBanner() {
  const [bannerText, setBannerText] = useState(texto.TopBanner.texto1);

  useEffect(() => {
    const number = Math.floor(Math.random() * 3) + 1;
    setBannerText(texto.TopBanner[`texto${number}`]);
  }, []);

  return (
    <section className="bg-primary text-white py-1 px-6 text-center w-full fixed top-0 z-30">
      <p className="text-xs md:text-lg font-semibold">{bannerText}</p> 
    </section>
  );
}

export default TopBanner;
