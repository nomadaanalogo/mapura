import { FaHandshake, FaUsers, FaBriefcase, FaBuilding, FaGavel, FaChevronDown } from "react-icons/fa"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Derecho Civil",
    icon: FaHandshake,
    intro:
      "Cuando un problema legal puede afectar tu patrimonio, necesitas saber exactamente qué puedes reclamar. Atendemos asuntos relacionados con contratos, responsabilidad civil, obligaciones, incumplimientos, daños y perjuicios y otros conflictos de carácter civil. Te acompañamos para entender tus derechos y definir la estrategia jurídica adecuada para tu caso.",
    items: [
      "Contratos y obligaciones",
      "Incumplimientos contractuales",
      "Responsabilidad civil",
      "Reclamaciones por daños",
      "Accidentes de tránsito",
      "Conflictos patrimoniales",
      "Procesos civiles",
    ],
    cta: "Consultar sobre Derecho Civil",
  },
  {
    title: "Derecho de Familia",
    icon: FaUsers,
    intro:
      "Los problemas familiares también necesitan soluciones jurídicas claras. Divorcios, custodia, alimentos, sucesiones y otros procesos familiares pueden involucrar decisiones importantes para tu patrimonio y tu familia. En Mapura te acompañamos con una asesoría clara, profesional y humana durante todo el proceso.",
    items: [
      "Divorcio",
      "Custodia y cuidado personal",
      "Cuota alimentaria",
      "Sucesiones",
      "Regulación de obligaciones familiares",
      "Conflictos relacionados con familia",
    ],
    cta: "Consultar sobre Derecho de Familia",
  },
  {
    title: "Derecho Laboral",
    icon: FaBriefcase,
    intro:
      "Si tus derechos laborales fueron vulnerados, podemos ayudarte a defenderlos. ¿Te despidieron y consideras que fue injustificado? ¿No te pagaron correctamente tu liquidación? ¿Tienes un conflicto con tu empleador y no sabes qué puedes reclamar? Analizamos tu situación y te orientamos sobre las alternativas legales disponibles.",
    items: [
      "Despidos",
      "Liquidaciones",
      "Salarios y prestaciones",
      "Indemnizaciones",
      "Conflictos laborales",
      "Reclamaciones de trabajadores",
      "Asesoría a empleadores",
    ],
    cta: "Consultar sobre Derecho Laboral",
  },
  {
    title: "Derecho Comercial",
    icon: FaBuilding,
    intro:
      "Protege jurídicamente tu negocio antes de que aparezca el problema. Las empresas y los comerciantes enfrentan contratos, obligaciones, proveedores, clientes, socios y decisiones que pueden generar consecuencias legales. Te acompañamos para que puedas tomar decisiones comerciales con mayor seguridad jurídica.",
    items: [
      "Constitución de empresas",
      "Contratos comerciales",
      "Obligaciones entre comerciantes",
      "Relaciones con proveedores y clientes",
      "Asesoría jurídica empresarial",
      "Conflictos comerciales",
      "Prevención y manejo de riesgos legales",
    ],
    cta: "Consultar sobre Derecho Comercial",
  },
  {
    title: "Mecanismos de Resolución de Conflictos",
    icon: FaGavel,
    intro:
      "No todos los conflictos necesitan terminar en un proceso judicial. La conciliación, mediación y otros mecanismos de resolución de conflictos pueden permitir que las partes encuentren una solución sin asumir necesariamente el desgaste y duración de un proceso judicial. Evaluamos tu situación para determinar si existe una alternativa de negociación o resolución adecuada.",
    items: ["Conciliación", "Mediación", "Amigable composición", "Litigios y arbitraje"],
    cta: "Consultar sobre Resolución de Conflictos",
  },
]

export default function ServicesSection() {
  return (
    <section
      className="py-16 lg:py-24 relative"
      style={{
        backgroundImage: `url('/images/fondo-textura-mapura.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#4EA5A7]/85"></div>
      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-white mb-4">Otros Servicios Jurídicos</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border-none"
                >
                  <AccordionTrigger className="px-4 lg:px-8 py-3 lg:py-4 hover:no-underline hover:bg-gray-50 data-[state=open]:bg-[#B8D8D8] transition-colors group [&[data-state=open]>div>div:last-child]:bg-[#2C3E50] [&[data-state=open]>div>div:last-child>svg]:rotate-180 [&>svg]:hidden">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-3 lg:space-x-4">
                        <div className="bg-[#4EA5A7] p-2 lg:p-2.5 rounded-xl flex-shrink-0">
                          <Icon className="text-lg lg:text-2xl text-white" />
                        </div>
                        <h3 className="text-sm lg:text-xl font-bold text-[#2C3E50] text-left">{service.title}</h3>
                      </div>
                      <div className="bg-[#4EA5A7] p-2 lg:p-2.5 rounded-full ml-2 flex-shrink-0 transition-all duration-300">
                        <FaChevronDown className="text-white text-sm lg:text-lg transition-transform duration-300" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 lg:px-8 pb-4">
                    <p className="text-[#2C3E50]/80 text-xs lg:text-base leading-relaxed mb-4">{service.intro}</p>
                    <ul className="space-y-2 mt-2 mb-4">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 lg:space-x-3">
                          <span className="text-[#4EA5A7] mt-0.5 lg:mt-1 text-base lg:text-lg flex-shrink-0">•</span>
                          <span className="text-[#2C3E50] text-xs lg:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-center pt-2">
                      <Button
                        asChild
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <a href="#contact-form">{service.cta}</a>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
