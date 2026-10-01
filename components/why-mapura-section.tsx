import { FaBalanceScale, FaMapMarkerAlt, FaFlag, FaHandsHelping } from "react-icons/fa"

const features = [
  {
    icon: <FaBalanceScale className="text-3xl text-[#4EA5A7]" />,
    title: "Experiencia",
    text: "Contamos con experiencia en diferentes áreas del derecho y acompañamos tanto a personas naturales como a empresas.",
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-[#4EA5A7]" />,
    title: "Presencia en Palmira",
    text: "Nuestra sede principal está en Palmira, Valle del Cauca, donde atendemos presencialmente a nuestros clientes.",
  },
  {
    icon: <FaFlag className="text-3xl text-[#4EA5A7]" />,
    title: "Atención nacional",
    text: "Si estás en Cali, Bogotá, Medellín, Pereira o cualquier otra ciudad de Colombia, también puedes recibir atención virtual.",
  },
  {
    icon: <FaHandsHelping className="text-3xl text-[#4EA5A7]" />,
    title: "Acompañamiento",
    text: "No queremos que simplemente conozcas una norma. Queremos que entiendas qué significa para tu situación y cuáles son tus alternativas.",
  },
]

export default function WhyMapuraSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-[#2C3E50] mb-4">¿Por qué elegir Mapura?</h2>
          <p className="text-lg text-[#2C3E50]/70">Experiencia jurídica con atención cercana</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-blue-100 hover:transform hover:scale-105 transition-all duration-300 w-full max-w-sm"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-white rounded-full p-4 shadow-lg">{feature.icon}</div>
                <h3 className="text-[#2C3E50] text-lg font-bold">{feature.title}</h3>
                <p className="text-[#2C3E50]/80 leading-relaxed">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
