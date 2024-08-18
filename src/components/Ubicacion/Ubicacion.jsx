'use client';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Ubicacion'), {
  ssr: false,
});

const Ubicacion = () => {

  return (
      <section className="flex justify-center w-full bg-background-secondary mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.20317250079708!2d-58.39513046627046!3d-34.62310290000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f75.1!3m3!1m2!1s0x95bccb1f8415c595%3A0xc60ce607280e2fa3!2sOcular%20Insumos%20Quir%C3%BArgicos!5e0!3m2!1sen!2sar!4v1723828574394!5m2!1sen!2sar"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] border-0 max-w-[780px] pt-10"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title='Ubicacion de la empresa'
          aria-label='Ubicacion de la empresa'
        />
      </section>
  );
};

export default Ubicacion;
