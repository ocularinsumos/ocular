// Preguntas frecuentes por patología (contenido único para SEO + FAQPage JSON-LD).
// Clave: id de la patología en minúsculas (ver pathologySlug en seo.js).
// Contenido informativo general; no reemplaza la indicación del médico cirujano.

const es = {
  cataratas: [
    { q: '¿Qué es la catarata y cuándo se opera?', a: 'La catarata es la opacificación del cristalino, la lente natural del ojo, y provoca visión borrosa y sensibilidad al deslumbramiento. La indicación quirúrgica la define el oftalmólogo según cuánto afecta la visión y la vida diaria del paciente.' },
    { q: '¿Qué insumos se utilizan en una cirugía de cataratas?', a: 'Habitualmente se emplean lente intraocular (LIO), viscoelástico, cuchillas o bisturíes, cánulas, suturas y soluciones irrigantes. En esta página podés ver los insumos disponibles y consultarnos por cada uno.' },
    { q: '¿Qué tipos de lentes intraoculares existen?', a: 'Hay lentes monofocales, multifocales y tóricos, y modelos plegables hidrofílicos o hidrofóbicos. La elección depende de la anatomía del ojo y del objetivo visual, y la decide el cirujano.' },
    { q: '¿Las lentes tienen certificación ANMAT?', a: 'Trabajamos con productos que cuentan con la habilitación correspondiente para su comercialización en Argentina. Consultanos para recibir la documentación de cada producto.' },
  ],
  cornea: [
    { q: '¿Qué es la córnea y qué cirugías existen?', a: 'La córnea es la capa transparente que cubre el frente del ojo y enfoca la luz. Entre las cirugías más frecuentes están el trasplante de córnea (queratoplastia), el cross-linking y los procedimientos de superficie ocular.' },
    { q: '¿Qué insumos se necesitan en cirugía de córnea?', a: 'Según la técnica se emplean suturas de nailon de calibre fino, bisturíes y cuchillas, cánulas, sustancias viscoelásticas y colorantes. Consultanos por cada insumo y su disponibilidad.' },
    { q: '¿Cómo solicito un presupuesto de insumos?', a: 'Podés escribirnos por WhatsApp desde el botón de esta página indicando el producto y la cantidad. Te respondemos con precio, stock y plazos de entrega.' },
  ],
  pterigion: [
    { q: '¿Qué es el pterigión?', a: 'Es un crecimiento de tejido de la conjuntiva que avanza sobre la córnea, asociado a la exposición al sol, el viento y el polvo. Cuando afecta la visión o provoca molestias, el cirujano puede indicar su extirpación.' },
    { q: '¿Qué insumos se utilizan en la cirugía de pterigión?', a: 'Se utilizan suturas finas, bisturíes y cuchillas, cánulas y, en algunas técnicas, adhesivos de tejido. Revisá el listado de esta página o consultanos.' },
    { q: '¿Hacen envíos a todo el país?', a: 'Sí, realizamos envíos de insumos a todo Argentina. Coordinamos plazos y forma de entrega al confirmar el pedido.' },
  ],
  retina: [
    { q: '¿Qué es la cirugía de retina?', a: 'Abarca los procedimientos que tratan enfermedades de la retina, como el desprendimiento de retina, la retinopatía diabética o los agujeros maculares. Suele realizarse mediante vitrectomía.' },
    { q: '¿Qué insumos se utilizan en una vitrectomía?', a: 'Se emplean cánulas y trócares, gases intraoculares, sustancias como aceite de silicona o colorantes, y suturas. Podés ver las categorías en esta web y consultarnos por la disponibilidad.' },
    { q: '¿Para qué sirven los gases intraoculares?', a: 'Se inyectan dentro del ojo para ayudar a mantener la retina apoyada durante la cicatrización. El tipo y la concentración los define el cirujano según el caso.' },
  ],
  glaucoma: [
    { q: '¿Qué es el glaucoma?', a: 'Es una enfermedad que daña el nervio óptico, generalmente asociada a presión intraocular elevada. Si el tratamiento con medicación o láser no alcanza, el oftalmólogo puede indicar una cirugía para disminuir la presión.' },
    { q: '¿Qué insumos se utilizan en la cirugía de glaucoma?', a: 'Según la técnica se emplean implantes de drenaje, suturas, bisturíes y cuchillas, cánulas y sustancias viscoelásticas. Consultanos por la disponibilidad de cada insumo.' },
    { q: '¿Ofrecen asesoramiento sobre los productos?', a: 'Sí, brindamos asesoramiento sobre los productos y su disponibilidad. La indicación clínica y la elección del material corresponden siempre al médico cirujano.' },
  ],
};

const en = {
  cataracts: [
    { q: 'What is a cataract and when is surgery needed?', a: "A cataract is the clouding of the eye's natural lens, causing blurred vision and glare sensitivity. The ophthalmologist decides when to operate based on how much it affects vision and daily life." },
    { q: 'What supplies are used in cataract surgery?', a: 'Typically an intraocular lens (IOL), viscoelastic, blades or scalpels, cannulas, sutures and irrigating solutions. You can see the available supplies on this page and contact us about each one.' },
    { q: 'What types of intraocular lenses are there?', a: "There are monofocal, multifocal and toric lenses, in foldable hydrophilic or hydrophobic models. The choice depends on the eye's anatomy and the visual goal, and is made by the surgeon." },
    { q: 'Are the lenses ANMAT certified?', a: 'We work with products that hold the required authorization for sale in Argentina. Contact us to receive the documentation for each product.' },
  ],
  cornea: [
    { q: 'What is the cornea and what surgeries exist?', a: 'The cornea is the clear layer covering the front of the eye that focuses light. Common procedures include corneal transplant (keratoplasty), cross-linking and ocular surface procedures.' },
    { q: 'What supplies are needed for corneal surgery?', a: 'Depending on the technique: fine nylon sutures, scalpels and blades, cannulas, viscoelastic substances and dyes. Contact us about each supply and its availability.' },
    { q: 'How do I request a quote?', a: 'Message us on WhatsApp from the button on this page with the product and quantity. We will reply with price, stock and delivery times.' },
  ],
  pterygium: [
    { q: 'What is a pterygium?', a: 'It is a growth of conjunctival tissue that extends onto the cornea, linked to sun, wind and dust exposure. When it affects vision or causes discomfort, the surgeon may recommend removing it.' },
    { q: 'What supplies are used in pterygium surgery?', a: 'Fine sutures, scalpels and blades, cannulas and, in some techniques, tissue adhesives. Check the list on this page or contact us.' },
    { q: 'Do you ship nationwide?', a: 'Yes, we ship supplies throughout Argentina. Delivery time and method are arranged when the order is confirmed.' },
  ],
  retinasurgery: [
    { q: 'What is retina surgery?', a: 'It covers procedures that treat retinal diseases such as retinal detachment, diabetic retinopathy or macular holes. It is usually performed through vitrectomy.' },
    { q: 'What supplies are used in a vitrectomy?', a: 'Cannulas and trocars, intraocular gases, substances such as silicone oil or dyes, and sutures. You can browse the categories on this site and ask about availability.' },
    { q: 'What are intraocular gases used for?', a: 'They are injected into the eye to help keep the retina in place while it heals. The type and concentration are chosen by the surgeon for each case.' },
  ],
  glaucoma: [
    { q: 'What is glaucoma?', a: 'A disease that damages the optic nerve, usually associated with high intraocular pressure. If medication or laser treatment is not enough, the ophthalmologist may recommend surgery to lower the pressure.' },
    { q: 'What supplies are used in glaucoma surgery?', a: 'Depending on the technique: drainage implants, sutures, scalpels and blades, cannulas and viscoelastic substances. Contact us about the availability of each supply.' },
    { q: 'Do you offer advice on the products?', a: 'Yes, we advise on the products and their availability. Clinical indication and choice of material always rest with the surgeon.' },
  ],
};

const data = { es, en };

export function getFaq(locale, slug) {
  return (data[locale] || data.es)[String(slug).toLowerCase()] || [];
}
