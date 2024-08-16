import React from 'react';
import Link from 'next/link';
import './mare.css';

export default function Mare() {
  return (
    <Link href='/Mare'>
      <div className='relative z-0 hover-container'>
        <img loading='lazy'  src='images/marePage/Background.webp' width={50} height={25} alt='img' className='relative w-full object-cover h-[300px] md:h-[400px]' />
        <div className='overlay'>
          <div className='overlay-text  '>
            <h4 className='tit text-md md:text-xl'>PROGRAMA</h4>
            <h2 className='programa text-[80px] md:text-[150px]'>M.A.R.E</h2>
            <h4 className='tit text-md md:text-xl'>TU CAMINO DE VUELTA A CASA</h4>
          </div>
        </div>
        <div className='hover-text'>
        </div>
      </div>
    </Link>
  );
}
