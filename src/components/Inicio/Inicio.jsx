'use client'
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';


const Carousel = (inicio) => {
  const t = useTranslations('inicio')
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724436815/local_smyuls.webp",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724436813/reunion_yi878l.webp",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724436814/cotizar_chivhj.webp",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724436814/contexto_t1sfop.webp",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724436814/salon_rgxwa4.webp",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724436814/trabajo_ec3sqt.webp"
  ];

  const SlidesMovil = [
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724437127/portada_lvtl8v.webp",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724437127/traabajando_dbhxom.webp",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724437126/local_v2g9hd.webp",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724437126/atencion_d20jdh.webp",
    "https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724437127/reunion_cv6v8d.webp"
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set the initial state
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (isMobile ? SlidesMovil.length : slides.length));
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => {
      clearInterval(interval); // Limpia el intervalo al desmontar el componente
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, slides.length, SlidesMovil.length]);

  const currentSlides = isMobile ? SlidesMovil : slides;

  return (
    <section id='inicio' className="bg-black">
      <div className="relative w-full">
        <div className="relative min-h-screen overflow-hidden rounded-lg md:h-96">
          {currentSlides.map((slide, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}>
              <img src={slide} className="block w-full h-full object-cover opacity-30" alt={`Slide ${index + 1}`} aria-label={`Imagen del Local ${index + 1}`}/>
            </div>
          ))}

          {/* Text overlay */}
          <div className="absolute inset-0 flex justify-center items-center bottom-16 text-white z-10">
            <div className="text-center">
            <p className="text-[40px] md:text-[62px] text-customBeige leading-none font-taviraj italic font-semibold tracking-wider"><strong>{t('titulo')}</strong></p>
              <p className="text-[20px] md:text-[22px] tracking-wide text-customBeige font-light font-lato">{t('subtitulo')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
