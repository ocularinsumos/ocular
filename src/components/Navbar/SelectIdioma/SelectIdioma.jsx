

'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTransition } from 'react';

export default function LanguageSelector() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale();
  const pathname = usePathname().slice(3);
  
  const handleLocaleChange = (locale) => {
    setIsOpen(false); // Cierra el menú después de seleccionar un idioma
    startTransition(() => {
      router.replace(`/${locale}${pathname}`);
    });
  };

  return (
    <div className="relative inline-block">
      <button id="languageDropdown" onClick={() => setIsOpen(!isOpen)} className="flex items-center px-4 py-2 bg-background-primary text-primary  rounded-md " aria-label='cambiar idioma'>
        <img src={currentLocale === 'en'
              ? 'https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724675128/Eeuu_ulugsa.svg'
              : 'https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724675128/Argentina_v235v9.svg'
          } alt={currentLocale === 'en' ? 'US Flag' : 'Argentina Flag'} className="w-5 h-3.5 mr-2" width={20} height={20} aria-label={currentLocale === 'en' ? 'US Flag' : 'Argentina Flag'} title={currentLocale === 'en' ? 'US Flag' : 'Argentina Flag'}/>
        {currentLocale === 'en' ? 'EN' : 'ES'}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div id="languageOptions" className="absolute right-0 w-full mt-2 origin-top-right bg-background-primary border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1">
            <li>
              <button onClick={() => handleLocaleChange('en')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label='change to English'>
                <img src="https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724675128/Eeuu_ulugsa.svg" alt="US Flag" width={20} height={20} className="w-5 h-5 mr-2"   aria-label='Selector idioma US' title='Selector idioma US'/>
                EN
              </button>
            </li>
            <li>
              <button onClick={() => handleLocaleChange('es')} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label='cambiar a español'>
                <img src="https://res.cloudinary.com/dz2c7o9z6/image/upload/v1724675128/Argentina_v235v9.svg" alt="Argentina Flag" width={20} height={20} className="w-5 h-3.5 mr-2" aria-label='Selector idioma AR' title='Selector idioma AR'/>
                ES
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
