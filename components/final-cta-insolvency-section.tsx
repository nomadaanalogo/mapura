import { FaBalanceScale, FaMapMarkerAlt } from "react-icons/fa"

const cities = ["Palmira", "Cali", "Pereira", "Medellín", "Bogotá"]

export default function FinalCtaInsolvencySection() {
  return (
    <section className="bg-blue-50 pt-16 lg:pt-24 pb-10 lg:pb-14">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <div className="bg-[#4EA5A7]/10 p-4 rounded-full">
              <FaBalanceScale className="text-[#4EA5A7] text-3xl" />
            </div>
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50] leading-tight">
            No sigas enfrentando tus deudas a ciegas
          </h2>

          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 lg:p-8 text-left sm:text-center space-y-4">
            <p className="text-base lg:text-lg text-[#2C3E50]/80 leading-relaxed">
              ¿Tienes embargos, demandas, deudas atrasadas o simplemente ya no puedes seguir pagando? No adivines qué
              hacer. Conoce primero tus opciones legales.
            </p>
            <p className="text-base lg:text-lg font-semibold text-[#2C3E50] leading-relaxed">
              Cuéntanos brevemente tu situación y nuestro equipo evaluará si la Ley de Insolvencia Económica puede ser
              una alternativa para ti.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 pt-2">
            <span className="flex items-center gap-1.5 text-[#2C3E50]/70 text-sm font-semibold mr-1">
              <FaMapMarkerAlt className="text-[#4EA5A7]" />
              Atención presencial y virtual a nivel nacional:
            </span>
            {cities.map((city) => (
              <span
                key={city}
                className="bg-white border border-[#4EA5A7]/30 text-[#2C3E50] px-3 py-1 rounded-full text-sm font-semibold shadow-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
