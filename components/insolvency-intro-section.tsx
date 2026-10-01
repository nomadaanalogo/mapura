import { FaBalanceScale, FaComments } from "react-icons/fa"

export default function InsolvencyIntroSection() {
  return (
    <section className="bg-blue-50 py-14 lg:py-20">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
          <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6 lg:p-8 text-center flex flex-col items-center">
            <div className="bg-[#4EA5A7]/10 p-4 rounded-full mb-4">
              <FaBalanceScale className="text-[#4EA5A7] text-2xl" />
            </div>
            <h2 className="text-lg lg:text-xl font-black text-[#2C3E50] leading-snug mb-3">
              La Ley de Insolvencia es la herramienta legal para superar la crisis financiera
            </h2>
            <p className="text-sm lg:text-base text-[#2C3E50]/70 leading-relaxed">
              Te acompañamos para negociar con tus acreedores y construir una solución de pago acorde a tu capacidad
              económica.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6 lg:p-8 text-center flex flex-col items-center">
            <div className="bg-[#4EA5A7]/10 p-4 rounded-full mb-4">
              <FaComments className="text-[#4EA5A7] text-2xl" />
            </div>
            <h2 className="text-lg lg:text-xl font-black text-[#2C3E50] leading-snug mb-3">
              Una firma de consultoría legal centrada en el cliente
            </h2>
            <p className="text-sm lg:text-base text-[#2C3E50]/70 leading-relaxed">
              En Mapura no eres un caso más: entendemos tu realidad, escuchamos y diseñamos la estrategia legal que te
              devuelva la tranquilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
