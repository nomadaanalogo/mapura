import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PoliticaPrivacidad() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Contenido */}
      <div className="container mx-auto px-4 pt-24 pb-16 lg:pt-28 max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-black text-[#2C3E50] mb-8">
          Política de Protección de Datos Personales
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-[#2C3E50]">
          <section>
            <h2 className="text-2xl font-bold text-[#4EA5A7] mb-4">1. Responsable del Tratamiento</h2>
            <p>
              <strong>MAPURA GRUPO CONSULTOR</strong>, con domicilio en Colombia, es responsable del tratamiento de los
              datos personales que nos proporciones a través de nuestro sitio web y formularios de contacto.
            </p>
            <p>
              <strong>Correo electrónico:</strong> Info@grupomapura.co
              <br />
              <strong>Teléfono:</strong> +57 3106537502
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4EA5A7] mb-4">2. Datos que Recopilamos</h2>
            <p>Recopilamos los siguientes datos personales cuando te contactas con nosotros:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre completo</li>
              <li>Ciudad de residencia</li>
              <li>Número de teléfono</li>
              <li>Correo electrónico</li>
              <li>Información sobre tu situación financiera (monto de deudas, activos, actividad económica)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4EA5A7] mb-4">3. Finalidad del Tratamiento</h2>
            <p>Utilizamos tus datos personales para las siguientes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Evaluar tu caso y situación financiera</li>
              <li>Contactarte para ofrecerte nuestros servicios de asesoría en Ley de Insolvencia</li>
              <li>Enviarte información sobre nuestros servicios</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Mantener un registro de nuestras comunicaciones y consultas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4EA5A7] mb-4">4. Base Legal del Tratamiento</h2>
            <p>
              El tratamiento de tus datos personales se basa en tu consentimiento informado, otorgado al momento de
              llenar nuestro formulario de contacto y aceptar esta política de protección de datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4EA5A7] mb-4">5. Conservación de los Datos</h2>
            <p>
              Conservaremos tus datos personales durante el tiempo necesario para cumplir con las finalidades para las
              cuales fueron recopilados y para cumplir con obligaciones legales. En general, conservaremos tus datos por
              un período de hasta 10 años, según lo establecido por la normativa colombiana aplicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4EA5A7] mb-4">6. Derechos del Titular</h2>
            <p>Como titular de tus datos personales, tienes derecho a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Acceder</strong> a tus datos personales
              </li>
              <li>
                <strong>Rectificar</strong> datos inexactos o incompletos
              </li>
              <li>
                <strong>Solicitar la supresión</strong> de tus datos cuando ya no sean necesarios
              </li>
              <li>
                <strong>Revocar la autorización</strong> para el tratamiento de tus datos
              </li>
              <li>
                <strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio
              </li>
            </ul>
            <p>
              Para ejercer estos derechos, puedes contactarnos al correo electrónico{" "}
              <strong>Info@grupomapura.co</strong> o al teléfono <strong>+57 3106537502</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4EA5A7] mb-4">7. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas técnicas, administrativas y físicas apropiadas para proteger tus datos personales
              contra acceso no autorizado, pérdida, destrucción o alteración. Sin embargo, ningún método de transmisión
              por Internet o almacenamiento electrónico es 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4EA5A7] mb-4">8. Transferencia de Datos</h2>
            <p>
              Tus datos personales pueden ser compartidos con terceros proveedores de servicios que nos ayudan a operar
              nuestro negocio (como servicios de almacenamiento en la nube). Todos nuestros proveedores están obligados
              a mantener la confidencialidad y seguridad de tus datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4EA5A7] mb-4">9. Cookies y Tecnologías Similares</h2>
            <p>
              Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar tu experiencia de
              navegación. Puedes configurar tu navegador para rechazar todas las cookies o para indicarte cuando se
              envía una cookie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4EA5A7] mb-4">10. Modificaciones a esta Política</h2>
            <p>
              Nos reservamos el derecho de modificar esta Política de Protección de Datos en cualquier momento. Las
              modificaciones serán publicadas en nuestro sitio web y entrarán en vigor inmediatamente después de su
              publicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4EA5A7] mb-4">11. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta Política de Protección de Datos o sobre cómo manejamos tus datos
              personales, puedes contactarnos:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <p>
                <strong>Email:</strong> Info@grupomapura.co
              </p>
              <p>
                <strong>Teléfono:</strong> +57 3106537502
              </p>
              <p>
                <strong>WhatsApp:</strong> +57 3106537502
              </p>
            </div>
          </section>

          <section className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>Última actualización:</strong> Enero 2025
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-[#4EA5A7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2C3E50] transition-colors duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
