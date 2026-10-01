import { FaSearch, FaShieldAlt, FaHandshake } from "react-icons/fa"

const steps = [
  {
    icon: FaSearch,
    title: "Entendemos tu caso",
    description: "Conocemos tu situación y encontramos el camino legal más adecuado para ti.",
  },
  {
    icon: FaShieldAlt,
    title: "Recuperas el control",
    description:
      "Una vez admitido el trámite, la ley contempla la suspensión de acciones de cobro y medidas cautelares.",
  },
  {
    icon: FaHandshake,
    title: "Construimos una solución",
    description: "Negociamos con tus acreedores buscando un acuerdo de pago que puedas cumplir.",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50]">Un proceso claro, en 3 pasos</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative bg-blue-50 rounded-2xl p-6 lg:p-8 border border-blue-100 text-center space-y-4"
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2C3E50] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <div className="bg-[#4EA5A7] p-4 rounded-full inline-flex mt-2">
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="font-black text-[#2C3E50] text-lg">{step.title}</h3>
                <p className="text-[#2C3E50]/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
