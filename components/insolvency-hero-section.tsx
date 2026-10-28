"use client"

import Image from "next/image"

const YOUTUBE_URL = "https://youtube.com/@ccmgrupoconsultor?si=n10-x9GuDYLEEVj4"

export default function InsolvencyHeroSection() {
  return (
    <section className="pt-6 pb-0 lg:pt-8 lg:pb-20 relative overflow-hidden lg:min-h-[700px]">
      {/* Background: brand texture, light overlay (all breakpoints) */}
      <div
        className="absolute inset-0"
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

          {/* Aligned with the visible top of the logo artwork, not the image box
              (the logo file has ~27% transparent padding above the wordmark) */}
          <div className="absolute lg:top-[70px] lg:right-8">
            {/* Dark vignette behind the label so it stays legible over any part of the photo */}
            <div
              className="absolute -inset-4 -z-10 rounded-2xl"
              style={{
                background: "radial-gradient(circle at top right, rgba(0,0,0,0.55) 0%, transparent 75%)",
              }}
            />
            <div className="border-l-4 border-[#4EA5A7] pl-3 [text-shadow:0_1px_4px_rgba(0,0,0,0.95),0_2px_16px_rgba(0,0,0,0.8)]">
              <p className="text-lg lg:text-2xl font-black text-white whitespace-nowrap tracking-tight">
                Dra. Claudia Zapata Mapura
              </p>
              <p className="text-sm lg:text-base font-semibold text-white whitespace-nowrap">
                Fundadora Mapura Grupo Consultor
              </p>
              <p className="text-sm lg:text-base font-semibold text-white whitespace-nowrap">
                Referente nacional en Ley de Insolvencia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col items-start text-left space-y-6 lg:space-y-10 max-w-4xl lg:max-w-2xl">
          {/* The logo is the page's only H1: its alt text carries the SEO keyword without changing the design */}
          <h1>
            <Image
              src="/images/mapura-logo-new.webp"
              alt="Mapura Grupo Consultor – Abogados en Ley de Insolvencia Económica en Palmira y toda Colombia"
              width={280}
              height={100}
              className="h-24 lg:h-36 w-auto object-contain"
              priority
            />
          </h1>

          <div className="space-y-4 lg:space-y-6">
            <p className="text-[#2C3E50]/80 font-medium lg:font-bold uppercase tracking-wider lg:tracking-wide text-xs lg:text-sm">
              Tu tranquilidad financiera comienza <br className="lg:hidden" />
              con una buena asesoría
            </p>

            <p className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-balance">
              <span className="text-[#2C3E50]">Te ayudamos a recuperar </span>
              <span className="text-[#4EA5A7]">el control de tus finanzas</span>
            </p>
          </div>

          <button
            onClick={() => {
              const contactSection = document.querySelector("#contact-form")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
            className="w-fit bg-green-500 hover:bg-green-600 text-white px-7 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400 flex items-center justify-center self-start text-center relative z-10"
            style={{
              boxShadow: "0 0 30px rgba(34, 197, 94, 0.3), 0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span className="lg:hidden leading-tight">
              Descubre si calificas para la
              <br />
              Ley de Insolvencia
            </span>
            <span className="hidden lg:inline">Descubre si calificas para la Ley de Insolvencia</span>
          </button>

          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 self-start -mt-2 lg:mt-0 text-[#2C3E50]/70 hover:text-[#2C3E50] text-sm font-semibold underline underline-offset-2 transition-colors"
          >
            Conócenos en nuestro canal de YouTube
          </a>

          {/* Mobile photo: shown in normal flow below the content, hidden on desktop (desktop has the full-bleed photo) */}
          {/* Full-width block, edge to edge; top and bottom edges fade 90% into the background */}
          <div className="lg:hidden relative self-start -ml-4 w-screen aspect-square">
            <div
              className="absolute inset-0"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, black 18%, black 82%, rgba(0,0,0,0.1) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, black 18%, black 82%, rgba(0,0,0,0.1) 100%)",
              }}
            >
              <Image
                src="/images/dr-mapura-office.webp"
                alt="Abogada Claudia Zapata Mapura - Experta en Ley de Insolvencia Económica"
                fill
                sizes="100vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute bottom-6 left-4">
              {/* Dark vignette behind the label so it stays legible over any part of the photo */}
              <div
                className="absolute -inset-4 -z-10 rounded-2xl"
                style={{
                  background: "radial-gradient(circle at bottom left, rgba(0,0,0,0.55) 0%, transparent 75%)",
                }}
              />
              <div className="border-l-4 border-[#4EA5A7] pl-3 [text-shadow:0_1px_4px_rgba(0,0,0,0.95),0_2px_16px_rgba(0,0,0,0.8)]">
                <p className="text-base font-black text-white whitespace-nowrap tracking-tight">
                  Dra. Claudia Zapata Mapura
                </p>
                <p className="text-xs font-semibold text-white whitespace-nowrap">Fundadora Mapura Grupo Consultor</p>
                <p className="text-xs font-semibold text-white whitespace-nowrap">
                  Referente nacional en Ley de Insolvencia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
