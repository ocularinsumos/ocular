'use client';
import { useState } from 'react';
import Contactusform from './Contactus';

export default function ContactButton({ className = '', children, initialMessage = '', locale, isSpanish }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children}
      </button>

      <Contactusform 
        initialMessage={initialMessage}
        isOpenExternal={isOpen}
        onCloseExternal={() => setIsOpen(false)}
      />
    </>
  );
}
