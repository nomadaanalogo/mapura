"use client"

import Image from "next/image"

const YOUTUBE_URL = "https://youtube.com/@ccmgrupoconsultor?si=n10-x9GuDYLEEVj4"

export default function InsolvencyHeroSection() {
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
              alt="Abogada Claudia Zapata Mapura - Experta en Ley de Insolvencia Económica"
              fill
              sizes="55vw"
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
            <p className="text-sm lg:text-base font-bold text-[#2C3E50] whitespace-nowrap">Dra. Claudia Mapura</p>
            <p className="text-xs lg:text-sm text-[#4EA5A7] font-semibold whitespace-nowrap">
              Referente nacional en Ley de Insolvencia
            </p>
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
              Tu tranquilidad financiera comienza con una buena asesoría
            </p>

            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black leading-tight text-balance">
              <span className="text-white lg:text-[#2C3E50]">Te ayudamos a recuperar el </span>
              <span className="text-[#7fd4d6] lg:text-[#4EA5A7]">control de tus finanzas</span>
            </h1>
          </div>

          <div className="lg:hidden self-center flex flex-col items-center gap-2">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg">
              <Image
                src="/images/mp1-hero.webp"
                alt="Dra. Claudia Zapata Mapura"
                fill
                sizes="96px"
                priority
                className="object-cover object-top"
              />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-white whitespace-nowrap">Dra. Claudia Mapura</p>
              <p className="text-xs text-[#7fd4d6] font-semibold">Referente nacional en Ley de Insolvencia</p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:w-fit">
            <button
              onClick={() => {
                const contactSection = document.querySelector("#contact-form")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
              className="w-fit bg-green-500 hover:bg-green-600 text-white px-8 py-2.5 lg:py-4 text-base lg:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400 flex items-center justify-center self-center lg:self-start text-center"
              style={{
                boxShadow: "0 0 30px rgba(34, 197, 94, 0.3), 0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span className="lg:hidden">
                Descubre si calificas
                <br />
                para la Ley de Insolvencia
              </span>
              <span className="hidden lg:inline">Descubre si calificas para la Ley de Insolvencia</span>
            </button>

            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 lg:text-[#2C3E50]/70 hover:text-white lg:hover:text-[#2C3E50] text-sm font-semibold underline underline-offset-2 transition-colors"
            >
              Conócenos en nuestro canal de YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
