"use client"

import { FaCalendarAlt } from "react-icons/fa"
import Image from "next/image"
import { useState } from "react"

export default function SolutionSection() {
  const [showVideoModal, setShowVideoModal] = useState(false)

  return (
    <section className="bg-white pt-6 pb-16 lg:pt-8 lg:pb-20">
      <div className="container mx-auto px-4 lg:px-16 xl:px-24">
        {/* Logo at the top */}
        <div className="flex justify-center mb-8 lg:mb-10">
          <Image
            src="/images/mapura-logo-new.webp"
            alt="Mapura Grupo Consultor"
            width={280}
            height={100}
            className="h-16 lg:h-28 w-auto object-contain"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          <div className="flex flex-col justify-between h-full space-y-6 lg:pr-8">
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-5xl font-black leading-tight">
                <span className="text-[#2C3E50]">¿Preocupado por las deudas?</span>
                <br />
                <span className="text-[#4EA5A7]">Calma, tenemos la solución.</span>
              </h1>
              <p className="text-lg lg:text-xl text-[#2C3E50] leading-relaxed font-medium">
                Con la Ley de Insolvencia podemos ayudarte a recuperar tu tranquilidad.
              </p>
            </div>

            <button
              onClick={() => {
                const contactSection = document.querySelector("#contact-form")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 text-base lg:text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400 flex items-center space-x-3 w-fit"
            >
              <FaCalendarAlt />
              <span>Agenda tu consulta gratis</span>
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative bg-gradient-to-br from-[#2C3E50] to-[#1a252f] p-0.5 rounded-2xl shadow-2xl w-full max-w-md">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/mp1-hero.webp"
                  alt="Profesional de Mapura - Expertos en Ley de Insolvencia"
                  fill
                  className="object-cover object-top rounded-2xl"
                />
                {/* Botón de play */}
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="absolute top-4 left-4 bg-white/90 hover:bg-white text-[#2C3E50] p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-10 border-2 border-green-500"
                >
                  <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                {/* Nombre de la abogada */}
                <div className="absolute bottom-4 left-0 right-0 mx-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <p
                      className="text-sm lg:text-base font-semibold text-[#2C3E50]"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                    >
                      Abogada Claudia Zapata Mapura
                    </p>
                    <p
                      className="text-xs lg:text-sm text-[#4EA5A7]"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                    >
                      Experta en insolvencia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal del video */}
        {showVideoModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white rounded-2xl p-4 max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-full z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video
                src="https://aphuffggbxzkzibe.public.blob.vercel-storage.com/lv_0_20250922101701.mp4"
                controls
                autoPlay
                className="w-full h-auto rounded-lg"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
