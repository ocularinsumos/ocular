'use client'
import { useState } from "react";

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
      <button className="fixed bottom-28 right-9 rounded-md w-10 z-index-50 active:animate-ping hover:scale-110" style={{ visibility: isVisible ? 'visible' : 'hidden', }} onClick={scrollToTop}>
        <img loading='lazy' src='/images/up-arrow.webp' alt="flecha-arriba" aria-label="Volver arriba"/>
      </button>
    </article>
  );
};

export default VolverArriba;
