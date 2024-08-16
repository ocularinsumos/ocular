/* eslint-disable react/prop-types */
'use client'
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import userData from "../Constantes/userData";

// const userData = { ----- Asi tiene que ser el documento dentro de constantes -----
//   codigoPais: 51,
//   contact: 934127752,
//   textBoton:'¡Contáctame!',
//   textoPredefinido :`Hola, me gustaria saber mas sobre,`
// };

// export default userData;

const BotonWsp = ({ text, contact, codigoPais }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const enviar = `https://wa.me/+${userData.codigoPais}${userData.contact}?text=${encodeURIComponent(userData.textBoton)}`;

  return (
    <article className="fixed bottom-6 right-6 z-50">
      <a href={enviar} >
        <button rel="noopener noreferrer" className='flex items-center justify-center bg-green-500 text-white font-bold p-4 rounded-full' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-label="Contact via WhatsApp" role="button" data-client={true} >
          <FaWhatsapp className='text-white text-3xl'/>
          {isHovered && <h2 className='ml-2'>{text}</h2>}
        </button>
      </a>
    </article>
  );
}

export default BotonWsp;
