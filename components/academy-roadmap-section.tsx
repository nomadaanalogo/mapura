import { FaArrowRight } from "react-icons/fa"

const roadmap = ["Fundamentos", "Profundización", "Aplicación", "Actualización", "Certificación"]

export default function AcademyRoadmapSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50] mb-4">Ruta de formación</h2>
          <p className="text-base lg:text-lg text-[#2C3E50]/80 leading-relaxed">
            La oferta académica se organiza como una ruta progresiva que te permite avanzar según tus necesidades.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-3 max-w-4xl mx-auto mb-10">
          {roadmap.map((stage, index) => (
            <div key={stage} className="flex items-center gap-2 lg:gap-3">
              <span className="bg-blue-50 border border-[#4EA5A7]/30 text-[#2C3E50] px-4 py-2 lg:px-6 lg:py-3 rounded-full font-bold text-sm lg:text-base">
                {stage}
              </span>
              {index < roadmap.length - 1 && <FaArrowRight className="text-[#4EA5A7] text-sm lg:text-base" />}
            </div>
          ))}
        </div>

        <p className="text-center text-sm lg:text-base text-[#2C3E50]/70 max-w-2xl mx-auto mb-12">
          Este enfoque permite que el Centro de Conocimiento Mapura evolucione de un catálogo de cursos hacia una
          experiencia educativa en la que la organización te acompaña durante todo tu proceso de aprendizaje.
        </p>

        <div className="max-w-2xl mx-auto bg-blue-50 rounded-2xl p-6 lg:p-8 text-center border border-blue-100">
          <p className="text-sm lg:text-base text-[#2C3E50]/70 leading-relaxed">
            Seguimos construyendo: próximamente sumaremos diplomados, programas especializados, certificaciones
            propias, formación empresarial y educación continua.
          </p>
        </div>
      </div>
    </section>
  )
}
