import { FaCheckCircle, FaClock, FaUsers, FaBalanceScale } from "react-icons/fa"

const cases = [
  {
    icon: FaBalanceScale,
    title: "Insolvencia de persona natural",
    description: "Logramos suspender un embargo y negociar deudas reduciendo un 35% del total adeudado.",
    duration: "3 meses",
    color: "bg-[#4EA5A7]",
  },
  {
    icon: FaUsers,
    title: "Divorcio con hijos menores",
    description: "Se obtuvo una regulación justa de custodia y cuota alimentaria.",
    duration: "45 días",
    color: "bg-[#4EA5A7]",
  },
  {
    icon: FaCheckCircle,
    title: "Reorganización empresarial",
    description:
      "Asesoramos una empresa de servicios en crisis logrando conservar todos los empleos y estabilizar su flujo financiero.",
    duration: "5 meses",
    color: "bg-[#4EA5A7]",
  },
  {
    icon: FaClock,
    title: "Accidente de tránsito con daño material",
    description: "El cliente fue indemnizado por la aseguradora tras probar la responsabilidad del tercero.",
    duration: "2 meses",
    color: "bg-[#4EA5A7]",
  },
]

export default function SuccessCasesSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
            Casos que demuestran que la Ley funciona
          </h2>
          
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon
            return (
              <div
                key={index}
                className={`${caseItem.color} rounded-2xl p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex items-start space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <div className="bg-white/20 p-3 md:p-4 rounded-xl backdrop-blur-sm flex-shrink-0">
                    <Icon className="text-2xl md:text-3xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 break-words">{caseItem.title}</h3>
                    <div className="flex items-center space-x-2 text-xs md:text-sm opacity-90">
                      <FaClock className="flex-shrink-0" />
                      <span>Duración: {caseItem.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">{caseItem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
