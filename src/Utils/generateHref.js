// Función auxiliar para generar el href correcto
export function generateHref(path, itemHref) {
    if (path === '/') {
      return itemHref.startsWith('/') ? itemHref : `/${itemHref}`;
    } else {
      return itemHref.startsWith('/') ? itemHref : `/${itemHref}`;
    }
  }
  