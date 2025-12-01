'use client'
import Categorias from "@/components/Categorias/Categorias";
import Productos from "@/components/Productos/Productos";
import JsonLd from "@/components/Seo/JsonLd";
import { useMessages } from "next-intl";
import { usePathname } from "next/navigation";

export default function ProductosPage() {
  const messages = useMessages();
  const pathname = usePathname();
  const pathId = pathname.split('/')[3]?.toLowerCase();
  const locale = pathname.split('/')[1] || 'es';
  const isSpanish = locale === 'es';

  const foundProduct = messages.categorias.find(
    (cat) => cat.id.toLowerCase() === `/${pathId}` || cat.id.toLowerCase() === pathId
   )

   if (!foundProduct) {
     return <p>{isSpanish ? 'Categoría no encontrada.' : 'Category not found.'}</p>; 
   }

  const SITE = 'https://ocularinsumosquirurgicos.com';
  const pageUrl = `${SITE}${pathname}`.replace(/([^:]\/)\/+/g, "$1");
  const imageAbs = foundProduct.img?.startsWith("http")
    ? foundProduct.img
    : `${SITE}/${foundProduct.img?.replace(/^\//, '') || ""}`;

  // Category Collection Schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": pageUrl,
    "name": foundProduct.title,
    "description": `${isSpanish ? 'Categoría de productos' : 'Product category'}: ${foundProduct.title}`,
    "url": pageUrl,
    "image": imageAbs,
    "isPartOf": {
      "@id": `${SITE}/#website`
    },
    "about": {
      "@type": "Thing",
      "name": foundProduct.title
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": foundProduct.productos?.length || 0,
      "itemListElement": foundProduct.productos?.map((prod, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": prod.title || prod.name,
          "description": prod.description || `${isSpanish ? 'Producto en categoría' : 'Product in category'} ${foundProduct.title}`
        }
      })) || []
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isSpanish ? "Inicio" : "Home",
        "item": `${SITE}/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": isSpanish ? "Categorías" : "Categories",
        "item": `${SITE}/${locale}#categorias`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": foundProduct.title,
        "item": pageUrl
      }
    ]
  };

  return (
    <section>
      <Categorias 
        titulo={foundProduct.title} 
        imagen={foundProduct.img}
        icono={foundProduct.icono}
        cat={foundProduct.productos}
      />
      <Productos producto={messages.producto} texto={messages.productos} categorias={messages.categorias}/>
      
      {/* JSON-LD Schemas */}
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumbSchema} />
    </section>
  );
}
