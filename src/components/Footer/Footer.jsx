'use client'
import React, {useState} from "react";
import Link from "next/link";
import texto from "../Constantes/texto";
import Links from "../Constantes/Links";
import { useForm } from 'react-hook-form';
import { usePathname } from "next/navigation";
import Contactusform from "../Contact/Contactus";
import Swal from "sweetalert2";

export default function Footer() {
  const path = usePathname()
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onTouched' });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (data, e) => {
    console.log('data:',data)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });      
      if (response.status === 200) {
        setIsSuccess(true);
        Swal.fire({
          title: `tu mensaje ha sido enviado correctamente.`,
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        reset();
      } else {
        setIsSuccess(false);
        alert('Error al enviar el correo');
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('Client Error. Please check the console.log for more info');
      console.error(error);
    }
  };

  return (
<footer className="relative p-4 bg-black md:p-8 lg:p-10">
  <div className="absolute inset-0 bg-primary opacity-85" />
  <div className="relative mx-auto max-w-screen-xl text-center">
    <Link href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900">
      <img src="/images/logos/ocularFooter.webp" style={{ filter: 'drop-shadow(0px 0px 100px rgba(255, 255, 255))' }}  alt="Logo de Empresa" title="Logo de Empresa" />
    </Link>
    <p className="my-6 text-gray-300">24 Años en el mercado de Insumos Quirurgicos para Profesionales y Particulares</p>
    <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900">
      {Links.map((item) => (
        <li key={item.name}><Link href={item.href} className="mr-4 hover:underline md:mr-6 text-text-tertiary">{item.name.toLocaleUpperCase()}</Link></li>
      ))}
      <li className="mr-4 hover:underline md:mr-6 text-text-tertiary font-normal">
        <Contactusform />
      </li>
      {texto.sociales.map((red) => (
        <Link key={red.name} href={red.href} target="_blank">
          <div className="w-14 h-9 p-2 hover:opacity-75 rounded-full flex items-center">
            {red.icon}
          </div>
        </Link>
      ))}
    </ul>
    <span className="text-sm text-gray-300 sm:text-center">© 2024 <a href="#" className="hover:underline">MATIGON</a>. All Rights Reserved.</span>
  </div>
</footer>
  );
}
