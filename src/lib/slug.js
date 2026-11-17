// Funciones puras (sin fs) para poder usarse también en el middleware (edge).

// Slug canónico de categoría: minúsculas y guiones (Lente_Intraocular -> lente-intraocular)
export const categorySlug = (idOrSlug) =>
  String(idOrSlug).trim().toLowerCase().replace(/_/g, '-');
