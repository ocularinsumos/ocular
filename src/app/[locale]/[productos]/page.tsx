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
  const locale = (pathname ?? '').split('/')[1] || 'es';
  const isSpanish = locale === 'es';

  const foundProduct = messages.producto.find(
    (prod: any) => prod.id.toLowerCase() === pathId
  );

  if (!foundProduct) return <p>{isSpanish ? 'Producto no encontrado.' : 'Product not found.'}</p>;

  const SITE = 'https://ocularinsumosquirurgicos.com';
  const pageUrl = `${SITE}${pathname}`.replace(/([^:]\/)\/+/g, "$1");
  const imageAbs = foundProduct.img?.startsWith("http")
    ? foundProduct.img
    : `${SITE}/${foundProduct.img?.replace(/^\//, '') || ""}`;

  // Enhanced Medical Service JSON-LD
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": pageUrl,
    "name": foundProduct.title,
    "alternateName": foundProduct.title,
    "description": [foundProduct.texto, foundProduct.texto2, foundProduct.texto3, foundProduct.texto4]
      .filter(Boolean)
      .join(' '),
    "image": imageAbs,
    "url": pageUrl,
    "procedureType": "Ophthalmic Surgery",
    "medicationUsed": foundProduct.productos?.map((p: any) => ({
      "@type": "Drug",
      "name": p.title || p.name
    })) || [],
    "bodyLocation": {
      "@type": "AnatomicalStructure",
      "name": "Eye"
    },
    "medicalSpecialty": "Ophthalmology",
    "availableService": {
      "@type": "MedicalTherapy",
      "name": foundProduct.title,
      "availableIn": {
        "@type": "Country",
        "name": "Argentina"
      }
    }
  };

  // Medical Product Offering
  const productOfferSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${isSpanish ? 'Insumos para' : 'Supplies for'} ${foundProduct.title}`,
    "description": `${isSpanish ? 'Lista de productos quirúrgicos para' : 'List of surgical products for'} ${foundProduct.title}`,
    "itemListElement": foundProduct.productos?.map((prod: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "MedicalDevice",
        "name": prod.title || prod.name,
        "description": prod.description || `${isSpanish ? 'Insumo quirúrgico para' : 'Surgical supply for'} ${foundProduct.title}`,
        "medicalSpecialty": "Ophthalmology"
      }
    })) || []
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
        "name": isSpanish ? "Productos" : "Products",
        "item": `${SITE}/${locale}#productos`
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

      {/* Enhanced JSON-LD Schemas */}
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={productOfferSchema} />
      <JsonLd data={breadcrumbSchema} />
    </section>
  );
}
