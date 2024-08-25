'use client'
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

function TopBanner() {
  const t = useTranslations('TopBanner')
  const [bannerText, setBannerText] = useState(t('texto1'));

  useEffect(() => {
    const number = Math.floor(Math.random() * 3) + 1;
    setBannerText(t(`texto${number}`));
  }, []);

  return (
    <section className="bg-primary min-h-10 lg:min-h-5 content-center text-white py-1 px-6 text-center w-full fixed top-0 z-30">
      <p className="text-xs md:text-base lg:text-lg font-semibold">{bannerText}</p> 
    </section>
  );
}

export default TopBanner;
