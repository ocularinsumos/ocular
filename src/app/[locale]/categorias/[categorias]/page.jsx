'use client'
import Categorias from "@/components/Categorias/Categorias";
import Productos from "@/components/Productos/Productos";
import { useMessages } from "next-intl";
import { usePathname } from "next/navigation";

export default function ProductosPage() {
  const messages = useMessages();

  const pathId = usePathname().split('/')[3]?.toLowerCase();
  //console.log(pathId)
  //console.log('useMessages:',useMessages().categorias)
  const foundProduct = useMessages().categorias.find(
    (cat) => cat.id.toLowerCase() === `/${pathId}` || cat.id.toLowerCase() === pathId
   )
   //console.log('Found:',foundProduct)
   if (!foundProduct) {
     return <p>Product not found.</p>; 
   }

  return (
    <section>
      <Categorias 
        titulo={foundProduct.title} 
        imagen={foundProduct.img}
        icono={foundProduct.icono}
        cat={foundProduct.productos}
      />
      <Productos producto={messages.producto} texto={messages.productos} categorias={messages.categorias}/> 
      
    </section>
  );
}
