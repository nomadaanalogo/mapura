"use client"

import Image from "next/image"

export default function AcademyHeroSection() {
  return (
    <section className="pt-6 pb-16 lg:pt-8 lg:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50 to-teal-50">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, #4EA5A7 0%, transparent 70%)",
            filter: "blur(60px)",
            top: "-20%",
            right: "-10%",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #26a69a 0%, transparent 70%)",
            filter: "blur(60px)",
            bottom: "-15%",
            left: "-5%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-16 xl:px-24 relative z-10">
        <div className="flex justify-center mb-8 lg:mb-10">
          <Image
            src="/images/mapura-logo-new.webp"
            alt="Mapura Grupo Consultor"
            width={280}
            height={100}
            className="h-16 lg:h-24 w-auto object-contain"
            priority
          />
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-[#4EA5A7] font-bold uppercase tracking-wide text-xs lg:text-sm">
            Centro de Conocimiento Mapura
          </p>

          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black leading-tight text-[#2C3E50] text-balance">
            Aprende. Actualízate. <span className="text-[#4EA5A7]">Certifícate.</span>
          </h1>

          <p className="text-base lg:text-xl text-[#2C3E50]/80 leading-relaxed max-w-2xl mx-auto">
            Formación práctica en derecho, insolvencia y áreas relacionadas, desarrollada por profesionales que
            llevan el conocimiento del aula a la práctica.
          </p>

          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                const formatsSection = document.querySelector("#formacion")
                if (formatsSection) {
                  formatsSection.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 text-base lg:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400"
            >
              Explorar formación
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
