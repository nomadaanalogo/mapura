"use client"

import { FaExclamationTriangle, FaHome, FaCar, FaUniversity, FaMoneyBillWave, FaTree, FaBuilding } from "react-icons/fa"
import Image from "next/image"

export default function PatrimonySection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-50 rounded-3xl p-6 lg:p-12 shadow-2xl border border-blue-100">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 lg:p-4 rounded-full flex-shrink-0">
                    <FaExclamationTriangle className="text-2xl lg:text-3xl text-red-600" />
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50] leading-tight">
                    ¿Tu patrimonio corre riesgo?
                  </h2>
                </div>

                <div className="bg-red-50 p-4 lg:p-6 rounded-2xl border border-red-200">
                  <p className="text-lg lg:text-xl text-[#2C3E50] leading-relaxed font-bold">
                    Actúa antes de que sea tarde y protege tus bienes.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4 bg-white p-4 lg:p-6 rounded-2xl border border-blue-200">
                  <div className="text-center">
                    <FaHome className="text-2xl lg:text-3xl text-[#4EA5A7] mx-auto mb-2" />
                    <span className="text-[#2C3E50] font-bold text-xs lg:text-sm">Casa</span>
                  </div>
                  <div className="text-center">
                    <FaCar className="text-2xl lg:text-3xl text-[#4EA5A7] mx-auto mb-2" />
                    <span className="text-[#2C3E50] font-bold text-xs lg:text-sm">Vehículo</span>
                  </div>
                  <div className="text-center">
                    <FaUniversity className="text-2xl lg:text-3xl text-[#4EA5A7] mx-auto mb-2" />
                    <span className="text-[#2C3E50] font-bold text-xs lg:text-sm">Cuentas bancarias</span>
                  </div>
                  <div className="text-center">
                    <FaMoneyBillWave className="text-2xl lg:text-3xl text-[#4EA5A7] mx-auto mb-2" />
                    <span className="text-[#2C3E50] font-bold text-xs lg:text-sm">Salario</span>
                  </div>
                  <div className="text-center">
                    <FaTree className="text-2xl lg:text-3xl text-[#4EA5A7] mx-auto mb-2" />
                    <span className="text-[#2C3E50] font-bold text-xs lg:text-sm">Fincas</span>
                  </div>
                  <div className="text-center">
                    <FaBuilding className="text-2xl lg:text-3xl text-[#4EA5A7] mx-auto mb-2" />
                    <span className="text-[#2C3E50] font-bold text-xs lg:text-sm">Propiedades</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const contactSection = document.querySelector("#contact-form")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth", block: "center" })
                    }
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-8 lg:px-10 py-3 lg:py-4 text-base lg:text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400"
                >
                  Quiero acogerme a la Ley
                </button>
              </div>

              <div className="bg-white rounded-3xl p-4 lg:p-8 border border-blue-200 order-1 lg:order-2">
                <Image
                  src="/images/mp2-patrimonio.webp"
                  alt="Profesional de Mapura en oficina legal con estatua de la justicia"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
