'use client'
import { useState, useEffect } from 'react';
// import { useTranslations } from 'next-intl';


const Carousel = (inicio) => {
  // const t = useTranslations('inicio')
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    "images/inicio/portada.webp",
    "images/404/404.webp",
    "images/inicio/img-inicio.webp",
    "images/inicio/portada.webp"
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
              <img src={slide} className="block w-full h-full object-cover opacity-30" alt={`Slide ${index + 1}`} />
            </div>
          ))}

          {/* Text overlay */}
          <div className="absolute inset-0 flex justify-center items-center bottom-16 text-white z-10">
            <div className="text-center">
              <p className="text-[40px] md:text-[56px] tracking-tight text-customBeige leading-none font-playfair-regular-italic">{inicio.titulo}</p>
              <p className="text-[15px] md:text-[20px] tracking-wide text-customBeige font-light font-lato">{inicio.subtitulo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
