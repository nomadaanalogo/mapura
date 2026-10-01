"use client"

import { FaGraduationCap, FaWhatsapp } from "react-icons/fa"

export default function AcademyFinalCtaSection() {
  return (
    <section className="bg-gradient-to-br from-[#2C3E50] to-[#4EA5A7] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16 text-center">
        <div className="flex justify-center mb-5">
          <div className="bg-white/10 p-4 rounded-full">
            <FaGraduationCap className="text-white text-3xl" />
          </div>
        </div>

        <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 max-w-2xl mx-auto">
          Aprende. Actualízate. Certifícate.
        </h2>
        <p className="text-base lg:text-lg text-white/90 max-w-xl mx-auto mb-8">
          Escríbenos y te avisamos apenas abramos inscripciones para nuestros próximos cursos, webinars y talleres.
        </p>

        <a
          href="https://wa.me/573106537502?text=Hola%2C%20quiero%20que%20me%20avisen%20sobre%20la%20formaci%C3%B3n%20del%20Centro%20de%20Conocimiento%20Mapura"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 text-base lg:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400"
        >
          <FaWhatsapp className="text-xl" />
          Quiero que me avisen
        </a>
      </div>
    </section>
  )
}
