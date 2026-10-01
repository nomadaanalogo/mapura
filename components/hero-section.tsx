"use client"
import { FaShieldAlt, FaHandHoldingUsd, FaBalanceScale } from "react-icons/fa"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="bg-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-6">
            
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-black text-[#2C3E50] leading-tight">
              ¿Te hacen descuentos a la nomina y los ingresos no te alcanzan?
            </h2>
            <p className="text-xl lg:text-2xl text-[#4EA5A7] font-bold">
              En Mapura te brindamos la oportunidad de recuperar tu liquidez.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-[#4EA5A7]/10 p-4 rounded-full">
                <FaBalanceScale className="text-[#4EA5A7] text-3xl" />
              </div>
              <span className="text-[#2C3E50] text-lg font-bold">
                Negocia tus pasivos de acuerdo a tu capacidad de pago
              </span>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-[#4EA5A7]/10 p-4 rounded-full">
                <FaShieldAlt className="text-[#4EA5A7] text-3xl" />
              </div>
              <span className="text-[#2C3E50] text-lg font-bold">Detén el acoso de cobranzas y medidas de embargo</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-[#4EA5A7]/10 p-4 rounded-full">
                <FaHandHoldingUsd className="text-[#4EA5A7] text-3xl" />
              </div>
              <span className="text-[#2C3E50] text-lg font-bold">Recupera tu estabilidad económica y emocional</span>
            </div>
          </div>

          <button
            onClick={() => {
              const contactSection = document.querySelector("#contact-form")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400"
          >
            Evaluamos tu caso gratis
          </button>
        </div>
      </div>
    </section>
  )
}
