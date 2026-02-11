'use client'
import Categorias from "@/components/Categorias/Categorias";
import Productos from "@/components/Productos/Productos";
import JsonLd from "@/components/Seo/JsonLd";
import { useMessages } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

  // Check if this is the cataratas category to add link to lenses page
  const isCatarataSCategory = pathId === 'cataratas';

  return (
    <section>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Link href={`/${locale}`} className="hover:text-primary">
            {isSpanish ? 'Inicio' : 'Home'}
          </Link>
          <span>/</span>
          <Link href={`/${locale}#categorias`} className="hover:text-primary">
            {isSpanish ? 'Categorías' : 'Categories'}
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">{foundProduct.title}</span>
        </div>
      </div>
      
      <Categorias 
        titulo={foundProduct.title} 
        imagen={foundProduct.img}
        icono={foundProduct.icono}
        cat={foundProduct.productos}
      />
      
      {isCatarataSCategory && (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 md:px-12 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isSpanish ? '¿Necesitas lentes intraoculares para cirugía de cataratas?' : 'Do you need intraocular lenses for cataract surgery?'}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {isSpanish 
                ? 'Descubre nuestra selección completa de lentes intraoculares: monofocales, multifocales, tóricos y asféricos. Marcas premium con certificación ANMAT.'
                : 'Discover our complete selection of intraocular lenses: monofocal, multifocal, toric and aspheric. Premium brands with ANMAT certification.'}
            </p>
            <Link 
              href={`/${locale}/lentes-intraoculares`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {isSpanish ? 'Ver catálogo de lentes intraoculares →' : 'View intraocular lenses catalog →'}
            </Link>
          </div>
        </div>
      )}
      
      <Productos producto={messages.producto} texto={messages.productos} categorias={messages.categorias}/>
      
      {/* JSON-LD Schemas */}
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumbSchema} />
    </section>
  );
}