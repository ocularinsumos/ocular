'use client'
import productos from "../../components/Constantes/productos.json";
import Servicio from "@/components/Servicio/Servicio";
import { usePathname } from "next/navigation";

export default function ProductosPage() {
  const path = usePathname();
  const foundProduct = productos.find(
    (prod) => prod.id.toLowerCase() === path.replace('/', '').toLowerCase()
  );
//  console.log(foundProduct)

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
