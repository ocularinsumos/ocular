'use client';
import Servicio from "../../../components/Servicio/Servicio";
import Productos from "../../../components/Productos/Productos";
import JsonLd from "../../../components/Seo/JsonLd";
import { useMessages } from "next-intl";
import { usePathname } from "next/navigation";

export default function ProductosPage() {
  const messages = useMessages() as any;
  const pathname = usePathname();
  const pathId = (pathname ?? '').split('/')[2]?.toLowerCase();

  const foundProduct = messages.producto.find(
    (prod: any) => prod.id.toLowerCase() === pathId
  );

  if (!foundProduct) return <p>Product not found.</p>;

  const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
  const pageUrl = `${SITE}${pathname}`.replace(/([^:]\/)\/+/g, "$1"); // Evita dobles slashes
  const imageAbs = foundProduct.img?.startsWith("http")
    ? foundProduct.img
    : `${SITE}${foundProduct.img || ""}`;

  // JSON-LD mínimo de Product con TUS datos existentes
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": foundProduct.title,
    ...(foundProduct.img ? { "image": [imageAbs] } : {}),
    "url": pageUrl,
    // Si querés enlazar con tu organización sin agregar ofertas/precios:
    // podés dejar solo el Product. "seller" se suele declarar dentro de "offers".
    // Lo omitimos para no inventar datos.
  };

  return (
    <section>
      <Servicio
        titulo={foundProduct.title}
        texto={foundProduct.texto}
        texto2={foundProduct.texto2}
        texto3={foundProduct.texto3}
        texto4={foundProduct.texto4}
        icono={foundProduct.icono}
        prod={foundProduct.productos}
      />

      <Productos
        producto={messages.producto}
        texto={messages.productos}
        categorias={messages.categorias}
      />

      {/* JSON-LD Product (solo con tus campos existentes) */}
      <JsonLd data={productJsonLd} />
    </section>
  );
}
