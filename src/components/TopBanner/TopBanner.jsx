"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

function TopBanner() {
  const t = useTranslations("TopBanner");
  const c = useTranslations("userData");

  const [bannerText, setBannerText] = useState(t("texto1"));

  useEffect(() => {
    const number = Math.floor(Math.random() * 3) + 1;
    setBannerText(t(`texto${number}`));
  }, []);

  return (
    <section className="flex  items-center md:justify-center justify-around bg-primary min-h-10 lg:min-h-5 content-center text-white py-1 px-6 text-center w-full fixed top-0 z-30">
      <a
        href={`tel:+${c("codigoPais")}${c("contact")}`}
        className="text-xs md:text-base lg:text-lg font-semibold pr-2 md:pr-10"
      >
        {bannerText}
      </a>
      <div className="flex">
        <a
          className=" items-center text-dark-600 text-slate-800 border-l border-white md:px-10 px-2"
          href={`https://wa.me/+${c("codigoPais")}${c(
            "contact"
          )}?text=${encodeURIComponent(c("textBoton"))}`}
        >
          <FaWhatsapp className="w-5 h-5 text-text-tertiary" />
        </a>
        <a
          className=" items-center  text-dark-600 text-slate-800  border-l border-white md:pl-10 pl-2"
          href={`mailto:${t("email")}`}
        >
          <EnvelopeIcon className="w-5 h-5 text-text-tertiary" />
        </a>
      </div>
    </section>
  );
}

export default TopBanner;
