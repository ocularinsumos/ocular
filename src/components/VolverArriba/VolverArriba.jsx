'use client'
import { useState } from "react";
import Image from "next/image";

const VolverArriba = () => {
  const [isVisible, setIsVisible] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const shouldShowButton = scrollY > 500;
  
      if (shouldShowButton !== isVisible) {
        setIsVisible(shouldShowButton);
      }
    });
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Este parámetro hace que el desplazamiento sea suave
    });
  };

  return (
    <article>
      <button className="fixed bottom-28 right-9 rounded-md w-10 z-index-50 active:animate-ping hover:scale-110" style={{ visibility: isVisible ? 'visible' : 'hidden', }} onClick={scrollToTop} aria-label="Volver arriba" title="Volver arriba">
        <Image src="/images/up-arrow.webp" alt="Volver arriba" width={40} height={40} title="Flecha para volver arriba" aria-label="Flecha para volver arriba" />
      </button>
    </article>
  );
};

export default VolverArriba;
