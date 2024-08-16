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
      <footer className="bg-primary text-white py-10 lg:pr-20 pl-4 ">
        <div className=" mx-auto lg:h-52 xl:h-60 grid grid-cols-1 md:grid-cols-12 items-center md:gap-4">
          
          {/* Columna del logo */}
          <div className="flex items-center justify-center col-span-1 md:col-span-3">
            <img loading='lazy' src='images/logos/OcularFooter.webp' alt="Logo" width={400} height={'auto'} className="mb-5" />
          </div>

          {/* Columna de la newsletter */}
          <div className="col-span-1 md:col-span-5 lg:col-span-6">
            <form className="flex flex-col px-10 md:px-0 my-6 gap-2 lg:flex-row justify-center md:justify-start" onSubmit={handleSubmit(onSubmit)}>
              <input autoComplete='true' type="email" id="email_Newsletter" placeholder={texto.footer.placeholder} className={`w-full px-4 py-3 border-2 placeholder:text-neutral-800 text-slate-800 outline-none bg-white focus:ring-4 ${errors.email ? 'border-rose-500 focus:border-rose-500 ring-rose-100' : 'border-neutral-300 focus:border-neutral-600 ring-neutral-100'}`}
                  {...register('email', { required: 'Ingresa tu correo electrónico', pattern: { value: /^\S+@\S+$/i, message: 'Por favor, ingresa un correo electrónico válido' } })} />
              <input type="hidden" value="Newsletter" {...register('Newsletter')} />
              <button className="bg-background-primary text-text-primary px-4 py-3">{texto.footer.btnSubs}</button>
              {errors.email && <div className="mt-1 text-rose-500"><small>{errors.email.message}</small></div>}
            </form>
            <div className="flex justify-center md:justify-start">
              {texto.sociales.map((red) => (
                <Link key={red.name} href={red.href} target="_blank">
                  <div className="w-14 h-9 p-2 hover:opacity-75 rounded-full flex items-center">
                    {red.icon}
                  </div>
                </Link>
              ))} 
            </div>
          </div>

          {/* Columna de items */}
          <div className="text-center col-span-1 md:col-span-3 mt-10 md:mt-0 place-self-center ">
            <ul className="lg:text-[18px] xl:text-[18px] leading-[40px] text-text-tertiary font-normal font-Lato">
              {Links.map((item) => (
                  <li><Link href={item.href}>{item.name.toLocaleUpperCase()}</Link></li>
                ))}
                <Contactusform className='ml-0'/>
            </ul>
          </div>
        </div>
      </footer>
  );
}
