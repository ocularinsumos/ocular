import React from "react";
import Link from "next/link";
import Contactusform from "../Contact/Contactus";
import { useMessages } from "next-intl";

export default function Footer() {
  const t = useMessages()

  return (
      <section className="relative p-4 bg-black md:p-8 lg:p-10">
        <div className="absolute inset-0 bg-primary opacity-85" />
        <div className="relative mx-auto max-w-screen-xl text-center">
          <Link href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900" title="Volver arriba">
            <img src="/images/logos/ocularFooter.webp" width={200} style={{ filter: 'drop-shadow(0px 0px 100px rgba(255, 255, 255))' }}  alt="Logo de Empresa" title="Logo de Empresa" aria-label="logo de la empresa" />
          </Link>
          <p className="my-6 text-gray-300">{t.footer.info}</p>
          <ul className="flex flex-col gap-4 md:flex-row justify-center items-center mb-6 text-gray-900">
        {t.Links.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="mr-4 hover:underline md:mr-6 text-text-tertiary" aria-label={item.name} title={item.name}>
              {item.name.toLocaleUpperCase()}
            </Link>
          </li>
        ))}
        <li className="mr-4 hover:underline md:mr-6 text-text-tertiary font-normal">
          <Contactusform className="text-footer-style" aria-label='Contacto'/>
        </li>
        {t.sociales.map((red, index) => (
          <li key={index}>
            <Link href={red.href} target="_blank" title={red.name}>
              <div className="w-14 h-9 p-2 hover:opacity-75 rounded-full flex items-center">
                <img loading="lazy" src={red.icon} alt={red.name} aria-label={red.name} title={red.name}/>
              </div>
            </Link>
          </li>
        ))}
      </ul>

          <Link href='https://programundo.dev' title="Web de programundo">
            <small className="text-sm text-gray-300 sm:text-center">© 2024 - MATIGON. All Rights Reserved.</small>
          </Link>
        </div>
      </section>
  );
}
