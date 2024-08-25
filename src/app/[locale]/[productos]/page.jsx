'use client'
import Servicio from "@/components/Servicio/Servicio";
import { useMessages } from "next-intl";
import { usePathname } from "next/navigation";

export default function ProductosPage() {

  const pathId = usePathname().split('/')[2]?.toLowerCase();
  console.log(pathId)
  const foundProduct = useMessages().producto.find(
    (prod) => prod.id.toLowerCase() === `/${pathId}` || prod.id.toLowerCase() === pathId
   )
   console.log(foundProduct)
   if (!foundProduct) {
     return <p>Product not found.</p>; 
   }

  return (
    <section>
      <Servicio 
        titulo={foundProduct.title} 
        texto={foundProduct.texto} 
        imagen={foundProduct.img}
        texto2={foundProduct.texto2} 
        texto3={foundProduct.texto3} 
        icono={foundProduct.icono}
      />
    </section>
  );
}
