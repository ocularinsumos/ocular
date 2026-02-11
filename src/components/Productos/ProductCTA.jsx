'use client';
import { useState } from 'react';
import Contactusform from '@/components/Contact/Contactus';

export default function ProductCTA({ productName, productCode, locale, isSpanish }) {
  let [isOpen, setIsOpen] = useState(false);

  const initialMessage = `${isSpanish ? 'Consulta sobre' : 'Inquiry about'} ${productName} (${isSpanish ? 'Código' : 'Code'}: ${productCode})`;

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3">
        <a 
          href={`https://wa.me/5491152371300?text=${isSpanish ? 'Hola' : 'Hello'}, ${isSpanish ? 'quiero consultar sobre' : 'I want to inquire about'} ${productName} (${isSpanish ? 'Código' : 'Code'}: ${productCode})`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors text-center"
        >
          {isSpanish ? '💬 Consultar por WhatsApp' : '💬 WhatsApp Inquiry'}
        </a>
        <button
          onClick={openModal}
          className="flex-1 border-2 bg-white border-primary text-primary px-6 py-3 rounded-lg font-bold hover:border-white hover:bg-primary hover:text-white transition-colors text-center"
        >
          {isSpanish ? '📧 Solicitar Cotización' : '📧 Request Quote'}
        </button>
      </div>

      <Contactusform 
        initialMessage={initialMessage}
        isOpenExternal={isOpen}
        onCloseExternal={closeModal}
      />
    </>
  );
}
