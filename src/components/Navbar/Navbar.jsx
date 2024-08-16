'use client'
import Link from "next/link";
import Links from "../Constantes/Links";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { generateHref } from "@/Utils/generateHref";
import Contactusform from "../Contact/Contactus";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const path = usePathname();
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

  return (
    <div className="py-[32px] lg:py-[48px]">
      <Disclosure as="nav" className={`fixed top-0 left-0 right-0 sm:py-0 md:py-4 bg-primary text-text-tertiary border-neutral-200 backdrop-blur-sm z-20`}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-start">
                  <div className="flex flex-shrink-0 items-center ml-5 md:ml-0 mr-10 md:pl-0">
                    <Link href="/">
                      <img loading='lazy' src='images/logos/OcularNav.webp' alt="Ocular" className=" w-36 lg:w-44"/>
                    </Link>
                  </div>
                  <div className="hidden md:flex md:ml-6">
                    <div className="flex space-x-5 items-center">
                      {Links.map((item) => (
                        <Link key={item.name} href={generateHref(path, item.href)} className={classNames(item.current ? "text-text-secondary font-latoRegular" : "text-textLigth hover:text-secondary")} aria-current={item.current ? "page" : undefined}>
                          {item.name.toLocaleUpperCase()}
                        </Link>
                      ))}
                      <Contactusform />
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                    {/* Botón de menú móvil */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-neutral-900">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden z-50">
              <div className="space-y-1 px-4 pt-2 pb-3 min-h-screen border-t border-[#807f6c] bg-primary">
                {Links.map((item) => (
                  <Disclosure.Button key={item.name} as="a" href={generateHref(path, item.href)} className={classNames("text-text-tertiary block py-4 text-base font-medium border-b border-[#807f6c] hover:text-text-secondary")} aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
