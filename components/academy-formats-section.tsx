import { FaBookOpen, FaVideo, FaChalkboardTeacher, FaComments } from "react-icons/fa"

const formats = [
  {
    icon: FaBookOpen,
    title: "Cursos",
    description: "Programas estructurados para profundizar en una temática y desarrollar conocimientos aplicables.",
  },
  {
    icon: FaVideo,
    title: "Webinars",
    description: "Sesiones breves para conocer, actualizarse y comprender temas específicos.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Seminarios y talleres",
    description: "Espacios de aprendizaje práctico basados en casos, ejercicios y participación.",
  },
  {
    icon: FaComments,
    title: "Eventos académicos",
    description: "Conversatorios, encuentros y espacios de actualización con expertos invitados.",
  },
]

export default function AcademyFormatsSection() {
  return (
    <section id="formacion" className="bg-blue-50 py-16 lg:py-24 scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50]">Formatos de aprendizaje</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {formats.map((format, index) => {
            const Icon = format.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-blue-100 text-center space-y-4"
              >
                <div className="bg-[#4EA5A7] p-4 rounded-full inline-flex">
                  <Icon className="text-white text-xl" />
                </div>
                <h3 className="font-black text-[#2C3E50] text-base lg:text-lg">{format.title}</h3>
                <p className="text-[#2C3E50]/70 text-sm leading-relaxed">{format.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
