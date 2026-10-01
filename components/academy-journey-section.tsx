import { FaSearch, FaBookOpen, FaTools, FaSyncAlt, FaCertificate } from "react-icons/fa"

const steps = [
  {
    icon: FaSearch,
    title: "Explora",
    description: "Encuentra la formación que responde a tus intereses y necesidades.",
  },
  {
    icon: FaBookOpen,
    title: "Aprende",
    description: "Accede a contenidos desarrollados por profesionales con experiencia en el campo.",
  },
  {
    icon: FaTools,
    title: "Aplica",
    description: "Trabaja con casos, situaciones y herramientas relacionadas con la práctica profesional.",
  },
  {
    icon: FaSyncAlt,
    title: "Actualízate",
    description: "Mantén tus conocimientos al día frente a los cambios normativos y profesionales.",
  },
  {
    icon: FaCertificate,
    title: "Certifícate",
    description: "Obtén una certificación que acredita tu participación y formación.",
  },
]

export default function AcademyJourneySection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50]">Tu ruta de aprendizaje Mapura</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative bg-blue-50 rounded-2xl p-6 border border-blue-100 text-center space-y-3"
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2C3E50] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <div className="bg-[#4EA5A7] p-4 rounded-full inline-flex mt-2">
                  <Icon className="text-white text-xl" />
                </div>
                <h3 className="font-black text-[#2C3E50] text-base">{step.title}</h3>
                <p className="text-[#2C3E50]/70 text-xs lg:text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
