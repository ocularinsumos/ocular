// Loader de next/image: usa las transformaciones de Cloudinary (formato y calidad
// automáticos + ancho responsivo). Las imágenes locales se sirven tal cual.
export default function imageLoader({ src, width, quality }) {
  if (src.includes('res.cloudinary.com') && src.includes('/image/upload/') && !src.endsWith('.svg')) {
    const params = `f_auto,q_${quality || 'auto'},w_${width},c_limit`;
    return src.replace('/image/upload/', `/image/upload/${params}/`);
  }
  // Local o SVG: sin transformación (el query evita la advertencia de "width" ignorado)
  return src.includes('?') ? src : `${src}?w=${width}`;
}
