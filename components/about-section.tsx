"use client"

import Image from "next/image"
import { FaCalendarAlt } from "react-icons/fa"

export default function AboutSection() {
  return (
    <section className="pt-6 pb-16 lg:pt-8 lg:pb-20 relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
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
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, #80cbc4 0%, transparent 70%)",
            filter: "blur(50px)",
            top: "40%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] h-full hidden lg:block z-0">
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0 opacity-95"
            style={{
              maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to left, black 70%, transparent 100%)",
            }}
          >
            <Image
              src="/images/dr-mapura-office.webp"
              alt="Dra. Mapura"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col items-start text-left space-y-8 lg:space-y-10 max-w-4xl lg:max-w-2xl">
          <Image
            src="/images/mapura-logo-new.webp"
            alt="Mapura Grupo Consultor"
            width={400}
            height={140}
            className="h-20 lg:h-28 w-auto object-contain self-start"
          />

          <div className="space-y-6">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black leading-tight text-balance">
              <span className="text-[#4EA5A7]">Tu tranquilidad legal comienza con una </span>
              <span className="text-[#2C3E50]">buena asesoría</span>
            </h1>

            <p className="text-base lg:text-xl text-[#2C3E50]/80 leading-relaxed text-pretty max-w-3xl lg:max-w-xl">
              En Mapura grupo consultor somos{" "}
              <strong className="font-bold text-[#2C3E50]">expertos en representación jurídica</strong> integral de
              personas naturales y empresas.
            </p>
          </div>

          <button
            onClick={() => {
              const contactSection = document.querySelector("#contact-form")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 text-base lg:text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400 flex items-center space-x-3 self-start"
            style={{
              boxShadow: "0 0 30px rgba(34, 197, 94, 0.3), 0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FaCalendarAlt />
            <span>Agenda tu consulta</span>
          </button>
        </div>
      </div>
    </section>
  )
}
