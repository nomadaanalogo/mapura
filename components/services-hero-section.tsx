"use client"

import Image from "next/image"
import { FaAward, FaTrophy } from "react-icons/fa"

export default function ServicesHeroSection() {
  return (
    <section className="pt-6 pb-16 lg:pt-8 lg:pb-20 relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* Desktop background: brand texture on the left, behind the text content */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage: `url('/images/fondo-textura-mapura.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/85" />
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

      {/* Mobile background: brand texture, heavily darkened */}
      <div
        className="lg:hidden absolute inset-0"
        style={{
          backgroundImage: `url('/images/fondo-textura-mapura.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#2C3E50]/90" />
      </div>

      {/* Desktop photo, full-bleed on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] h-full hidden lg:flex items-center z-0">
        <div className="relative w-full" style={{ aspectRatio: "1600 / 1067" }}>
          <div
            className="absolute inset-0 opacity-95"
            style={{
              maskImage:
                "linear-gradient(to left, black 70%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 70%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          >
            <Image
              src="/images/abogados_servicio.webp"
              alt="Equipo de abogados de Mapura Grupo Consultor en Palmira"
              fill
              sizes="55vw"
              className="object-cover object-right"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-16 xl:px-24 relative z-10">
        <div className="lg:hidden mb-2">
          <Image
            src="/images/mapura-logo-new.webp"
            alt="Mapura Grupo Consultor"
            width={280}
            height={100}
            className="h-24 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        <div className="flex flex-col items-start text-left space-y-8 lg:space-y-10 max-w-4xl lg:max-w-2xl">
          <Image
            src="/images/mapura-logo-new.webp"
            alt="Mapura Grupo Consultor"
            width={280}
            height={100}
            className="hidden lg:block h-28 w-auto object-contain self-start"
          />

          <div className="space-y-6">
            <p className="text-white/80 lg:text-[#4EA5A7] font-bold uppercase tracking-wide text-xs lg:text-sm">
              Servicios Jurídicos Mapura
            </p>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-balance">
              <span className="text-[#7fd4d6] lg:text-[#4EA5A7]">Abogados en Palmira </span>
              <span className="text-white lg:text-[#2C3E50]">para proteger tus derechos y resolver tus problemas legales</span>
            </h1>

            <p className="text-base lg:text-xl text-white/90 lg:text-[#2C3E50]/80 leading-relaxed text-pretty max-w-3xl lg:max-w-xl">
              Asesoría y representación jurídica para personas, familias, comerciantes y empresas. Atención
              presencial en Palmira y virtual a nivel nacional.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 lg:bg-blue-50 px-3 py-1.5 rounded-full">
                <FaAward className="text-[#7fd4d6] lg:text-[#4EA5A7] text-sm" />
                <span className="text-xs lg:text-sm font-semibold text-white lg:text-[#2C3E50]">
                  +13 años de experiencia
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 lg:bg-blue-50 px-3 py-1.5 rounded-full">
                <FaTrophy className="text-[#7fd4d6] lg:text-[#4EA5A7] text-sm" />
                <span className="text-xs lg:text-sm font-semibold text-white lg:text-[#2C3E50]">
                  +500 casos resueltos
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              const contactSection = document.querySelector("#contact-form")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            }}
            className="w-fit bg-green-500 hover:bg-green-600 text-white px-8 py-2.5 lg:py-4 text-base lg:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400 flex items-center justify-center self-center lg:self-start text-center"
            style={{
              boxShadow: "0 0 30px rgba(34, 197, 94, 0.3), 0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            Agendar mi consulta
          </button>
        </div>
      </div>
    </section>
  )
}
