'use client'
import { useState } from 'react';
import texto from '../Constantes/texto';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    "images/inicio/portada.webp",
    "images/404/404.webp",
    "images/inicio/img-inicio.webp",
    "images/inicio/portada.webp"
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id='inicio' className="bg-black">
      <div className="relative w-full">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {slides.map((slide, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}>
              <img src={slide} className="block w-full h-full object-cover opacity-30" alt={`Slide ${index + 1}`} />
            </div>
          ))}

          {/* Text overlay */}
          <div className="absolute inset-0 flex justify-center items-center bottom-16 text-white z-10">
            <div className="text-center">
              <p className="text-[40px] md:text-[56px] tracking-tight text-customBeige leading-none font-playfair-regular-italic">{texto.inicio.titulo}</p>
              <p className="text-[15px] md:text-[20px] tracking-wide text-customBeige font-light font-lato">{texto.inicio.subtitulo}</p>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button key={index} type="button" className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-white" : "bg-gray-400"}`} aria-label={`Slide ${index + 1}`} onClick={() => goToSlide(index)} />
          ))}
        </div>

        {/* Previous button */}
        <button type="button" className="absolute top-0 start-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handlePrev}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next button */}
        <button type="button" className="absolute top-0 end-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handleNext}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-label="Next" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
