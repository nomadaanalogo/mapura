import { FaGavel, FaHeart, FaComments, FaGlobeAmericas } from "react-icons/fa"

const benefits = [
  {
    icon: FaGavel,
    title: "Especialización real",
    description: "Insolvencia no es un servicio más en nuestro portafolio: es nuestra especialidad principal.",
  },
  {
    icon: FaHeart,
    title: "Acompañamiento humano",
    description: "Sabemos que detrás de cada caso hay una familia o un negocio en riesgo.",
  },
  {
    icon: FaComments,
    title: "Siempre a tu lado",
    description: "Te acompañamos, te explicamos y te damos claridad en cada etapa del proceso.",
  },
  {
    icon: FaGlobeAmericas,
    title: "Cobertura nacional",
    description:
      "Atención virtual a nivel nacional y presencial en Cali, Palmira, Pereira, Medellín y Bogotá.",
  },
]

export default function InsolvencyBrandSection() {
  return (
    <section className="bg-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50]">¿Por qué elegir a Mapura Grupo Consultor?</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-blue-100 text-center space-y-4"
              >
                <div className="bg-[#4EA5A7] p-4 rounded-full inline-flex">
                  <Icon className="text-white text-xl" />
                </div>
                <h3 className="font-black text-[#2C3E50] text-base lg:text-lg">{benefit.title}</h3>
                <p className="text-[#2C3E50]/70 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
