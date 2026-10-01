"use client"

import Image from "next/image"
import { FaMapMarkerAlt, FaVideo } from "react-icons/fa"

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Mapura+Grupo+Consultor+%7C+Abogados/@3.5506895,-76.2924628,1086m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e3a050051720b25:0x596f567203f7b177!8m2!3d3.5506895!4d-76.2898879!16s%2Fg%2F11xt0yny0s!5m1!1e1"

const officePhotos = [
  { src: "/images/sede-1.webp", alt: "Sede de Mapura Grupo Consultor en Palmira - recepción" },
  { src: "/images/sede-2.webp", alt: "Sede de Mapura Grupo Consultor en Palmira - sala de reuniones" },
  { src: "/images/sede-3.webp", alt: "Sede de Mapura Grupo Consultor en Palmira - oficina" },
  { src: "/images/sede-4.webp", alt: "Sede de Mapura Grupo Consultor en Palmira - fachada" },
]

export default function LocationSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
            Atención presencial y virtual a nivel nacional
          </h2>
          
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-white border-2 border-[#4EA5A7]/20 rounded-2xl p-4 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#4EA5A7]/40">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="bg-[#2C3E50] rounded-xl p-3 lg:p-4 flex-shrink-0">
                <FaMapMarkerAlt className="text-2xl lg:text-4xl text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-3xl font-bold text-[#2C3E50] mb-2 lg:mb-3">
                  Visítanos en nuestra sede principal
                </h3>
                <p className="text-base lg:text-xl text-[#2C3E50]/80 leading-relaxed mb-4">
                  📍 Calle 62 # 25ª-28, Las Mercedes
                  <br />
                  Palmira, Valle del Cauca
                </p>

                <div className="grid grid-cols-5 gap-2 lg:gap-3 max-w-md">
                  {officePhotos.map((photo) => (
                    <div
                      key={photo.src}
                      className="relative aspect-square rounded-lg overflow-hidden shadow-sm"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="80px"
                      />
                    </div>
                  ))}
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square rounded-lg overflow-hidden shadow-sm"
                    aria-label="Ver ubicación en Google Maps"
                  >
                    <iframe
                      src="https://www.google.com/maps?q=3.5506895,-76.2898879&z=16&output=embed"
                      title="Ubicación de Mapura Grupo Consultor en Palmira"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                    />
                  </a>
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#4EA5A7] font-semibold text-sm mt-3 hover:underline"
                >
                  <FaMapMarkerAlt className="text-xs" />
                  Ver ubicación en Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-[#4EA5A7]/20 rounded-2xl p-4 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#4EA5A7]/40">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="bg-[#4EA5A7] rounded-xl p-3 lg:p-4 flex-shrink-0">
                <FaVideo className="text-2xl lg:text-4xl text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-3xl font-bold text-[#2C3E50] mb-2 lg:mb-3">Atención a Nivel Nacional</h3>
                <p className="text-base lg:text-lg text-[#2C3E50]/80 mb-3 lg:mb-4">Con presencia en:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-3 mb-3 lg:mb-4">
                  {["Palmira", "Cali", "Pereira", "Medellín", "Bogotá"].map((city) => (
                    <span
                      key={city}
                      className="bg-[#E8F4F8] px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg text-[#2C3E50] font-semibold text-xs lg:text-base flex items-center gap-1 lg:gap-2 justify-center"
                    >
                      <FaMapMarkerAlt className="text-[#4EA5A7] text-xs" />
                      {city}
                    </span>
                  ))}
                </div>
                <p className="text-base lg:text-lg text-[#2C3E50]/80 mb-3 lg:mb-4">
                  También puedes agendar tu cita virtual si estás en otra ciudad.
                </p>
                <button
                  onClick={() => {
                    const contactSection = document.querySelector("#contact-form")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth", block: "center" })
                    }
                  }}
                  className="bg-[#4EA5A7] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg text-sm lg:text-base font-bold hover:bg-[#3d8486] transition-colors duration-300 w-full sm:w-auto"
                >
                  Agenda tu consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
