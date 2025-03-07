'use client';
import Servicio from "@/components/Servicio/Servicio";
import Productos from "@/components/Productos/Productos";
import { useMessages } from "next-intl";
import { usePathname } from "next/navigation";

export default function ProductosPage() {
  const messages = useMessages();
  const pathId = usePathname().split('/')[2]?.toLowerCase();

  const foundProduct = messages.producto.find(
    (prod) => prod.id.toLowerCase() === pathId
  );

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
        texto4={foundProduct.texto4} 
        icono={foundProduct.icono}
        prod={foundProduct.productos}
      />
      <Productos producto={messages.producto} texto={messages.productos} categorias={messages.categorias}/> 
    </section>
  );
}
