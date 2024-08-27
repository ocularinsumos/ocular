"use client";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const Ubicacion = () => {
  const t = useTranslations('userData')
  const i = useTranslations('contacto')

  return (
      <section id="ubicacion" className="w-full bg-background-secondary">
        <article className="flex flex-col items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.20317250079708!2d-58.39513046627046!3d-34.62310290000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f75.1!3m3!1m2!1s0x95bccb1f8415c595%3A0xc60ce607280e2fa3!2sOcular%20Insumos%20Quir%C3%BArgicos!5e0!3m2!1sen!2sar!4v1723828574394!5m2!1sen!2sar"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] border-0 max-w-[780px] mx-auto pt-10"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicacion de la empresa"
            aria-label="Ubicacion de la empresa"
          />
        </article>
        <article className="bg-white w-full">
          <div className="bg-white w-full max-w-[780px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
            <div className="">
              <h2 className="font-lato text-primary text-center">{i('btn')}</h2>

              <button className="flex items-center mt-8 space-x-2 text-dark-600 text-slate-800">
                <MapPinIcon className="w-5 h-5 text-primary" /><small>{t('ubicacion')}</small>
              </button>

              <button className="flex items-center mt-2 space-x-2 text-dark-600 text-slate-800" onClick={() => window.location.href = `mailto:${t('email')}`}>
                <EnvelopeIcon className="w-5 h-5 text-primary" /><span>{t('email')}</span>
              </button>

              <button className="flex items-center mt-2 space-x-2 text-dark-600 text-slate-800" onClick={() => window.location.href = `tel:+${t('codigoPais')}${t('contact')}`}>
                <FaPhone className="w-5 h-5 text-primary" /><span>{t('numContact')}</span>
              </button>

              <button className="flex items-center mt-2 space-x-2 text-dark-600 text-slate-800" onClick={() => window.open(`https://wa.me/+${t('codigoPais')}${t('contact')}?text=${encodeURIComponent(t('textBoton'))}`, '_blank', 'noopener,noreferrer')}>
                <FaWhatsapp className="w-5 h-5 text-primary" /><span>WhatsApp</span>
              </button>
            </div>
            <div className=" flex border-y px-2 md:border-l md:border-y-transparent items-center  justify-center border-primary md:pl-4 ">
              <p className="max-w-sm my-12 text-slate-800">{i('texto')}</p>
            </div>
          </div>
        </article>
      </section>
  );
};

export default Ubicacion;
