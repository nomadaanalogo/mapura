"use client"

import Link from "next/link"
import { FaGavel } from "react-icons/fa"

const situations = [
  "Sobreendeudamiento",
  "Negociación de deudas",
  "Embargos",
  "Cobros y procesos de ejecución",
  "Descuentos de nómina",
  "Múltiples acreedores",
  "Incumplimiento de obligaciones",
  "Insolvencia de persona natural",
  "Insolvencia de pequeños comerciantes",
]

export default function ServicesInsolvencyHighlightSection() {
  return (
    <section className="bg-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-blue-100 p-6 lg:p-12">
          <p className="text-[#4EA5A7] font-bold uppercase tracking-wide text-sm mb-3">
            Nuestro principal campo de especialización
          </p>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#4EA5A7] p-3 rounded-xl">
              <FaGavel className="text-white text-xl" />
            </div>
            <h2 className="text-2xl lg:text-4xl font-black text-[#2C3E50]">Ley de Insolvencia Económica</h2>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 lg:p-5 mb-6">
            <p className="text-lg font-bold text-[#2C3E50] mb-1">¿Tus deudas ya superan tu capacidad de pago?</p>
            <p className="text-[#2C3E50]/80 leading-relaxed text-sm lg:text-base">
              Existen mecanismos legales para enfrentar el sobreendeudamiento y buscar acuerdos con tus acreedores.
              Esta es una de nuestras principales áreas de especialización.
            </p>
          </div>

          <p className="font-semibold text-[#2C3E50] mb-3">Acompañamos situaciones relacionadas con:</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
            {situations.map((item) => (
              <div key={item} className="flex items-center gap-2 text-[#2C3E50]/80 text-sm lg:text-base">
                <span className="text-[#4EA5A7]">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="font-semibold text-[#2C3E50] mb-4">
            ¿Quieres saber si este mecanismo puede aplicar a tu situación?
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => {
                const contactSection = document.querySelector("#contact-form")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400"
            >
              Evaluar mi caso de insolvencia
            </button>
            <Link href="/" className="text-[#4EA5A7] font-semibold hover:underline">
              Conoce nuestra página especializada en Ley de Insolvencia Económica →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
