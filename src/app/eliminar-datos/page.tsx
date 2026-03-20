import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eliminación de Datos | Ocular Insumos Quirúrgicos',
  description: 'Solicitud de eliminación de datos personales.',
};

export default function EliminarDatosPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-gray-800">
      <h1 className="mb-6 text-3xl font-bold">Eliminación de Datos</h1>

      <p className="mb-4">
        Si deseas solicitar la eliminación de tus datos personales de nuestros
        registros, podés hacerlo enviando una solicitud por correo electrónico a:
      </p>

      <p className="mb-6">
        <a
          href="mailto:ocularcirugia@hotmail.com?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos"
          className="font-medium text-blue-600 underline"
        >
          ocularcirugia@hotmail.com
        </a>
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold">
        Información que debe incluir la solicitud
      </h2>
      <ul className="mb-4 list-disc space-y-2 pl-6">
        <li>Nombre y apellido.</li>
        <li>Número de teléfono o correo electrónico asociado.</li>
        <li>Detalle de la solicitud de eliminación.</li>
        <li>Cualquier dato adicional que permita identificar el registro.</li>
      </ul>

      <h2 className="mb-3 mt-8 text-2xl font-semibold">Plazo de respuesta</h2>
      <p className="mb-4">
        Analizaremos cada solicitud y responderemos dentro de un plazo razonable,
        conforme a la normativa aplicable y a nuestras obligaciones legales y
        operativas.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold">Excepciones</h2>
      <p className="mb-4">
        En algunos casos, podremos conservar cierta información cuando exista una
        obligación legal, fiscal, administrativa o de seguridad que así lo
        requiera.
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Última actualización: marzo de 2026
      </p>
    </main>
  );
}