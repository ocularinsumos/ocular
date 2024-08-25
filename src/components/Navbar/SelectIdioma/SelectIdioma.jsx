

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
      <button
        id="languageDropdown"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-background-primary text-primary  border rounded-md shadow-sm "
      >
        <img
          src={
            currentLocale === 'en'
              ? 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'
              : 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg'
          }
          alt={currentLocale === 'en' ? 'US Flag' : 'Spain Flag'}
          className="w-5 h-3.5 mr-2"
        />
        {currentLocale === 'en' ? 'English' : 'Español'}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div
          id="languageOptions"
          className="absolute right-0 w-full mt-2 origin-top-right bg-background-primary border border-gray-200 rounded-md shadow-lg z-10"
        >
          <ul className="py-1">
            <li>
              <button
                onClick={() => handleLocaleChange('en')}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  alt="US Flag"
                  className="w-5 h-5 mr-2"
                />
                English
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLocaleChange('es')}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
                  alt="Spain Flag"
                  className="w-5 h-3.5 mr-2"
                />
                Español
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
