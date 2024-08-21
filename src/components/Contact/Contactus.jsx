import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { IoClose } from 'react-icons/io5';
import texto from '../Constantes/texto';

const Contactusform = ({ className = '' }) => {
    let [isOpen, setIsOpen] = useState(false);

    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: '',
    });

    const [selectedOption, setSelectedOption] = useState('');

    const alert = () => {
        Swal.fire({
            title: `${inputValues.input1}, tu mensaje ha sido enviado correctamente.`,
            confirmButtonAriaLabel,
            text: `Pronto se comunicarán contigo al siguiente email, ${inputValues.input2}`,
            icon: 'success',
            confirmButtonText: 'Ok',
        });
    };

    const alertLoading = () => {
        Swal.fire({
            title: 'Aguarde un momento',
            icon:'info',
            text: 'Tu mensaje se está enviando...',
            showConfirmButton: false,
        });
    };

    const alertError = () => {
        Swal.fire({
            text: `${inputValues.input2}, No es un correo electrónico válido`,
            icon: 'error',
            confirmButtonAriaLabel,
            confirmButtonText: 'Ok',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!inputValues.input2.match(emailPattern)) {
            alertError();
        } else {
            try {
                alertLoading();
                const response = await axios.post('/api/contact', {
                    ...inputValues,
                    input4: selectedOption,
                });
                Swal.close();
                if (response.status === 200) {
                    alert();
                    setInputValues({
                        input1: '',
                        input2: '',
                        input3: '',
                    });
                    setSelectedOption('');
                    setIsOpen(false);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const isDisabled = Object.values(inputValues).some((value) => value === '');

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div className={`flex items-center ${className}`}>
                <button 
                    type="button"
                    className="flex justify-center text-base w-full rounded-full bg-transparent text-pink py-2 px-4 md:hidden lg:px-8 navbutton hover:text-white hover:bg-pink"
                    onClick={openModal}
                    aria-label="Abrir formulario de contacto"
                >
                    {texto.contacto.btn}
                </button>
                <div className="hidden md:block">
                    <button 
                        type="button" 
                        className="text-15px space-links" 
                        onClick={openModal}
                        aria-label="Abrir formulario de contacto"
                    >
                        {texto.contacto.btn}
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <button 
                                        type="button" 
                                        onClick={closeModal} 
                                        className="absolute top-5 right-6"
                                        aria-label="Cerrar formulario de contacto"
                                    >
                                        <IoClose size={32} style={{ color: 'gray' }} />
                                    </button>
                                    <div className="py-6 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <div className="flex flex-col items-center">
                                            <img
                                                className="h-48px w-48px lg:block"
                                                src="images/logos/ocularFooter.webp"
                                                alt="Sermar Logo"
                                                width={200}
                                                height={'auto'}
                                            />
                                            <p className={`mb-6 lg:mb-16 mt-4 font-light text-center ${className}`}>{texto.contacto.title}</p>
                                        </div>
                                        <form className="space-y-8" onSubmit={handleSubmit}>
                                            <div>
                                                <label id='nombreForm' htmlFor="text" className="block mb-2 text-sm font-medium text-text-primary">{texto.contacto.nombre}</label>
                                                <input
                                                    id="text"
                                                    name="input1"
                                                    value={inputValues.input1}
                                                    onChange={handleChange}
                                                    type="text"
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Nombre..."
                                                    aria-label="Ingresar nombre"
                                                />
                                            </div>
                                            <div>
                                                <label id='emailForm' htmlFor="email" className="block mb-2 text-sm font-medium text-text-primary">{texto.contacto.email}</label>
                                                <input
                                                    id="email"
                                                    name="input2"
                                                    value={inputValues.input2}
                                                    onChange={handleChange}
                                                    type="email"
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="tu_email@email.com"
                                                    aria-label="Ingresar correo electrónico"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="options"
                                                    className="block mb-2 text-sm font-medium text-text-primary"
                                                >
                                                    {texto.contacto.motivo}
                                                </label>
                                                <select
                                                    id="options"
                                                    name="options"
                                                    value={selectedOption}
                                                    onChange={(e) => setSelectedOption(e.target.value)}
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    aria-label="Seleccionar motivo de contacto"
                                                >
                                                    <option value="otro" disabled>{texto.contacto.opciones.opc1}</option>
                                                    <option value="consulta">{texto.contacto.opciones.opc2}</option>
                                                    <option value="precios">{texto.contacto.opciones.opc3}</option>
                                                    <option value="marca">{texto.contacto.opciones.opc4}</option>
                                                    <option value="envios">{texto.contacto.opciones.opc5}</option>
                                                </select>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="message"
                                                    className="block mb-2 text-sm font-medium text-text-primary"
                                                >
                                                    {texto.contacto.msj}
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="input3"
                                                    value={inputValues.input3}
                                                    onChange={handleChange}
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Dejar un comentario..."
                                                    aria-label="Escribir mensaje"
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isDisabled}
                                                className="py-2 px-5 text-sm bg-primary font-medium w-full text-center text-text-tertiary rounded-lg bg-red hover:bg-primary-hover"
                                                aria-label="Enviar formulario"
                                            >
                                                {texto.contacto.btnEnv}
                                            </button>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Contactusform;
