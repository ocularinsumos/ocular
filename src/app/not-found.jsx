import Link from "next/link";

export default function Home() {
  return (
      <div className="bg-[#eae6db]   w-full px-4 md:pt-10 pt-5 pb-16" id="faq">
        <h2 className="text-4xl font-bold text-center text-[#605f4b]">Error - 404</h2>
        <p className="pt-6 pb-16 text-base max-w-2xl text-gray-800 text-center m-auto  ">
          Lo sentimos, la página que estás buscando no se pudo encontrar. Por favor, verifica la URL e inténtalo de nuevo. </p>
        <img loading='lazy'  src='images/404/404.webp'  alt="ruta no encontrada 404"  width={1920}  height={1080} quality={75} sizes="100vw" className="w-[350px] md:w-4/12 justify-center text-center mx-auto" title="ruta no encontrada 404"/>
        <div className="mt-16 text-center">
          <Link href="/" title="Volver">
            <button className="bg-[#605f4b] rounded-md hover:bg-[#424234] active:bg-[#2b2b2b] text-white text-base  px-16 p-3 font-medium">VOLVER</button>
          </Link>
        </div>
      </div>
  );
}
