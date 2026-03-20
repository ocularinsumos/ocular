import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Ocular Insumos Quirúrgicos',
  description: 'Política de privacidad de Ocular Insumos Quirúrgicos.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-gray-800">
      <h1 className="mb-6 text-3xl font-bold">Política de Privacidad</h1>

      <p className="mb-4">
        En <strong>Ocular Insumos Quirúrgicos</strong>, valoramos y respetamos
        la privacidad de nuestros usuarios, clientes y contactos. Esta política
        describe cómo recopilamos, usamos y protegemos la información personal
        que recibimos a través de nuestro sitio web, formularios de contacto,
        WhatsApp Business y otros canales de comunicación.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold">
        1. Información que recopilamos
      </h2>
      <p className="mb-4">
        Podemos recopilar información como nombre, número de teléfono, dirección
        de correo electrónico, nombre de la empresa o institución, y cualquier
        otro dato que el usuario proporcione voluntariamente al contactarse con
        nosotros.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold">
        2. Uso de la información
      </h2>
      <p className="mb-4">La información recopilada podrá ser utilizada para:</p>
      <ul className="mb-4 list-disc space-y-2 pl-6">
        <li>Responder consultas y solicitudes comerciales.</li>
        <li>Brindar atención al cliente y soporte.</li>
        <li>Enviar información sobre productos, servicios o cotizaciones.</li>
        <li>Mejorar nuestros canales de comunicación y atención.</li>
        <li>Cumplir obligaciones legales o regulatorias.</li>
      </ul>

      <h2 className="mb-3 mt-8 text-2xl font-semibold">
        3. Protección de los datos
      </h2>
      <p className="mb-4">
        Adoptamos medidas razonables de seguridad para proteger la información
        personal contra accesos no autorizados, alteración, divulgación o
        destrucción.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold">
        4. Compartición de información
      </h2>
      <p className="mb-4">
        No vendemos ni compartimos información personal con terceros, salvo
        cuando sea necesario para prestar nuestros servicios, por requerimiento
        legal o con autorización del usuario.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold">
        5. Uso de WhatsApp Business y herramientas de terceros
      </h2>
      <p className="mb-4">
        Cuando un usuario se comunica con nosotros a través de WhatsApp
        Business, los datos intercambiados podrán ser procesados mediante
        herramientas de Meta Platforms y otras plataformas tecnológicas
        relacionadas con la gestión de mensajes y automatizaciones.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold">6. Derechos del usuario</h2>
      <p className="mb-4">
        El usuario puede solicitar el acceso, rectificación o eliminación de sus
        datos personales comunicándose por los canales de contacto indicados en
        este sitio.
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold">7. Contacto</h2>
      <p className="mb-4">
        Para consultas relacionadas con privacidad o tratamiento de datos,
        podés escribirnos a:{' '}
        <a
          href="mailto:ocularcirugia@hotmail.com"
          className="font-medium text-blue-600 underline"
        >
          ocularcirugia@hotmail.com
        </a>
      </p>

      <h2 className="mb-3 mt-8 text-2xl font-semibold">
        8. Cambios en esta política
      </h2>
      <p className="mb-4">
        Nos reservamos el derecho de actualizar esta Política de Privacidad en
        cualquier momento. Las modificaciones entrarán en vigencia desde su
        publicación en esta página.
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Última actualización: marzo de 2026
      </p>
    </main>
  );
}