'use client'
import { useState, useEffect } from 'react';
import texto from '../Constantes/texto';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724435081/local_anz3wo.jpg",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724435081/contexto_apdbxv.jpg",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724435081/reunion_pahte4.jpg",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724435082/cotizar_q3z6vs.jpg",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724435081/salon_sfk4dg.jpg",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724435081/trabajo_yechyk.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => {
      clearInterval(interval); // Limpia el intervalo al desmontar el componente
    };
  }, [slides.length]);

  return (
    <section id='inicio' className="bg-black">
      <div className="relative w-full">
        <div className="relative min-h-screen overflow-hidden rounded-lg md:h-96">
          {slides.map((slide, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}>
              <img src={slide} className="block w-full h-full object-cover opacity-30" alt={`Slide ${index + 1}`} aria-label={`Imagen del Local ${index + 1}`}/>
            </div>
          ))}

          {/* Text overlay */}
          <div className="absolute inset-0 flex justify-center items-center bottom-16 text-white z-10">
            <div className="text-center">
              <p className="text-[40px] md:text-[62px] tracking-tight text-customBeige leading-none font-playfair-regular-italic"><strong>{texto.inicio.titulo}</strong></p>
              <p className="text-[20px] md:text-[22px] tracking-wide text-customBeige font-light font-lato">{texto.inicio.subtitulo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
