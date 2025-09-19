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
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",                           // ← cambio
  "serviceType": foundProduct.title,            // nombre del servicio
  "name": foundProduct.title,
  ...(foundProduct.img ? { "image": [imageAbs] } : {}),
  "url": pageUrl,
  "areaServed": "AR",
  "provider": { "@id": "https://ocularinsumosquirurgicos.com/#org" }
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
      <JsonLd data={serviceJsonLd} />
    </section>
  );
}
