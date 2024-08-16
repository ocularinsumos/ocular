"use client";
import Slider from "react-slick";
import React from "react";
import postData from "../Constantes/comentarios";
import './comentarios.css'

export default function comentarios() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2.5,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="comentarios" >
      <div className="items-center mx-auto  pb-20 pt-10 md:pt-0 text-center text-3xl text-[#cdad85] "> 
      <h4 className="lema text-6xl leading-[60px]   md:text-[60px]  "> Testimonios </h4>
        <div className="sm:flex justify-around items-center pb-6 text-textLigth"></div>
        <Slider {...settings}>
          {postData.map((items, i) => (
            <article key={i}>
              <div className="bg-white m-4 p-8 text-center text-[#605f4b] shadow-lg rounded-md card">
                <p className="text-sm italic font-medium leading-6">"{items.detail}"</p>
                <h2 className="text-lg font-medium py-4">{items.name}</h2>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
}
