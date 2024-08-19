"use client";
import Link from "next/link";
import Links from "../Constantes/Links";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { generateHref } from "@/Utils/generateHref";
import Contactusform from "../Contact/Contactus";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(""); // Estado para el enlace activo
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos <= prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <div className="py-8 lg:py-[48px]">
      <Disclosure as="nav" className={`fixed top-0 left-0 right-0 sm:py-0 md:py-4 bg-primary text-text-tertiary border-neutral-200 backdrop-blur-sm z-20`}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 py-1 md:py-0 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-start">
                  <div className="flex flex-shrink-0 items-center  mr-10 ">
                    <Link href="/" className="">
                      <img src="/images/logos/ocularNav.webp" alt="Ocular"  className="py-4" style={{ filter: 'drop-shadow(10px 10px 40px rgba(255, 255, 255))' }} aria-label="Logo Ocular" width={160}  height={'auto'} />
                    </Link>
                  </div>
                  <div className="hidden md:flex md:ml-6">
                    <div className="flex space-x-5 items-center">
                      {Links.map((item) => (
                        <Link key={item.name} href={generateHref(null, item.href)} className={classNames(activeLink === item.href ? "text-white font-latoRegular relative inline-block group": "text-textLigth relative inline-block group" )} aria-current={activeLink === item.href ? "page" : undefined} onClick={() => handleLinkClick(item.href)} aria-label={item.name}>
                          <span className={classNames("absolute  bottom-[-1px] h-[1.5px] bg-white transition-transform duration-300 ease-out", activeLink === item.href
                                ? "scale-x-100 inset-x-0"
                                : "scale-x-0 group-hover:scale-x-100 inset-x-1"
                            )}></span>
                          {item.name.toLocaleUpperCase()}
                        </Link>
                      ))}
                      <Contactusform />
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                    {/* Botón de menú móvil */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-blue-400 p-1">
                      <span className="sr-only">Open main menu</span>
                      {open 
                        ? (<XMarkIcon className="block h-6 w-6" aria-label="close menu" />) 
                        : (<Bars3Icon className="block h-6 w-6" aria-label="open menu"  />)}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden z-50">
              <div className="space-y-1 px-4 pt-2 pb-3 min-h-screen border-t border-[#807f6c] bg-primary">
                {Links.map((item) => (
                  <Disclosure.Button key={item.name} as="a" className={classNames(
                      "block p-4 text-base font-medium border-b border-[#807f6c] hover:text-text-secondary",
                      activeLink === item.href ? "bg-blue-300 text-text-secondary" : "text-text-tertiary "
                    )} aria-current={activeLink === item.href ? "page" : undefined} onClick={() => handleLinkClick(item.href)} aria-label='' >
                    {item.name.toLocaleUpperCase()}
                  </Disclosure.Button>
                ))}
                <div className="flex w-full text-start font-semibold">
                  <Contactusform />
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
