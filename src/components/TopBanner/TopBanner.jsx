
import React from "react";
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function TopBanner() {
  const t = useTranslations("TopBanner");
  const c = useTranslations("userData");

  return (
    <section className="flex  items-center md:justify-center justify-around bg-primary min-h-10 lg:min-h-5 content-center text-white py-1 px-6 text-center w-full fixed top-0 z-30">
      <Link href={`tel:${c("telefono")}`} className="flex text-base lg:text-lg font-semibold pr-2 md:pr-10" target="_blank" title={t("texto2")}>
        <span className="hidden md:block">{t("texto1")}</span><strong className="ml-2" >{t("texto2")}</strong>
      </Link>
      <div className="flex">
        <Link className=" items-center text-dark-600 text-slate-800 border-l border-white md:px-10 px-2" target="_blank" href={`https://wa.me/+${c("codigoPais")}${c("contact")}?text=${encodeURIComponent(c("textBoton"))}`} title={encodeURIComponent(c("textBoton"))}>
          <FaWhatsapp className="w-5 h-5 text-text-tertiary" />
        </Link>
        <Link className=" items-center  text-dark-600 text-slate-800  border-l border-white md:pl-10 pl-2" target="_blank" href={`mailto:${c("email")}`} title={c("email")}>
          <EnvelopeIcon className="w-5 h-5 text-text-tertiary" />
        </Link>
      </div>
    </section>
  );
}

export default TopBanner;
