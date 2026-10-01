import { FaLightbulb, FaSeedling } from "react-icons/fa"

export default function AcademyApproachSection() {
  return (
    <section className="bg-blue-50 py-14 lg:py-20">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
          <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6 lg:p-8 text-center flex flex-col items-center">
            <div className="bg-[#4EA5A7]/10 p-4 rounded-full mb-4">
              <FaSeedling className="text-[#4EA5A7] text-2xl" />
            </div>
            <h2 className="text-lg lg:text-xl font-black text-[#2C3E50] leading-snug mb-3">
              Un ecosistema de aprendizaje, actualización y certificación
            </h2>
            <p className="text-sm lg:text-base text-[#2C3E50]/70 leading-relaxed">
              El Centro de Conocimiento MAPURA conecta el conocimiento con la práctica y acompaña al usuario durante
              todo su proceso de formación.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6 lg:p-8 text-center flex flex-col items-center">
            <div className="bg-[#4EA5A7]/10 p-4 rounded-full mb-4">
              <FaLightbulb className="text-[#4EA5A7] text-2xl" />
            </div>
            <h2 className="text-lg lg:text-xl font-black text-[#2C3E50] leading-snug mb-3">
              Conocimiento que se convierte en práctica
            </h2>
            <p className="text-sm lg:text-base text-[#2C3E50]/70 leading-relaxed">
              Combinamos experiencia profesional, actualización jurídica y aprendizaje práctico para que cada
              participante comprenda, aplique y fortalezca sus competencias profesionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
