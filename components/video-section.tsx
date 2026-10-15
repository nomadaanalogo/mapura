import Image from "next/image"
import { FaPlay, FaGavel, FaUniversity, FaUsers, FaChalkboardTeacher } from "react-icons/fa"

const YOUTUBE_URL = "https://youtube.com/@ccmgrupoconsultor?si=n10-x9GuDYLEEVj4"

export default function VideoSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50] mb-4">Conoce a Mapura</h2>
          <p className="text-base lg:text-lg text-[#2C3E50]/80 leading-relaxed">
            Más que una firma de abogados, somos un equipo que acompaña a personas, familias y empresarios cuando más
            necesitan claridad, respaldo y soluciones. Conoce quiénes somos, cómo trabajamos y por qué tantas
            personas confían en nosotros para encontrar un camino hacia adelante.
          </p>
        </div>

        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block max-w-3xl mx-auto relative rounded-3xl overflow-hidden shadow-xl border border-blue-100 aspect-video"
        >
          <Image
            src="/images/dr-mapura-office.webp"
            alt="Video de bienvenida de Mapura Grupo Consultor"
            fill
            sizes="(max-width: 1024px) 100vw, 768px"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#2C3E50]/50 group-hover:bg-[#2C3E50]/60 transition-colors flex items-center justify-center">
            <div className="bg-white/90 group-hover:bg-white p-5 rounded-full shadow-lg transform group-hover:scale-110 transition-all duration-300 border-2 border-green-500">
              <FaPlay className="text-2xl text-[#2C3E50] ml-1" />
            </div>
          </div>
        </a>

        <div className="max-w-3xl mx-auto mt-8 bg-blue-50 rounded-3xl p-6 lg:p-8">
          <p className="text-center text-base lg:text-lg font-bold text-[#2C3E50] mb-5">
            Dirigido por la abogada <span className="text-[#4EA5A7]">Claudia Zapata Mapura</span>
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-[#4EA5A7]/10 p-2 rounded-full flex-shrink-0 mt-0.5">
                <FaGavel className="text-[#4EA5A7] text-sm" />
              </span>
              <span className="text-sm lg:text-base text-[#2C3E50]/80 leading-relaxed">
                Experta en Ley de Insolvencia
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#4EA5A7]/10 p-2 rounded-full flex-shrink-0 mt-0.5">
                <FaUniversity className="text-[#4EA5A7] text-sm" />
              </span>
              <span className="text-sm lg:text-base text-[#2C3E50]/80 leading-relaxed">
                Miembro del Instituto Iberoamericano de Derecho Concursal y del Instituto Colombiano de Derecho
                Concursal
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#4EA5A7]/10 p-2 rounded-full flex-shrink-0 mt-0.5">
                <FaUsers className="text-[#4EA5A7] text-sm" />
              </span>
              <span className="text-sm lg:text-base text-[#2C3E50]/80 leading-relaxed">
                Miembro de la Junta Directiva de ACEIN y del grupo de Mujeres Expertas en Insolvencia en Colombia
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#4EA5A7]/10 p-2 rounded-full flex-shrink-0 mt-0.5">
                <FaChalkboardTeacher className="text-[#4EA5A7] text-sm" />
              </span>
              <span className="text-sm lg:text-base text-[#2C3E50]/80 leading-relaxed">
                Amplia trayectoria como ponente, conferencista y docente en universidades y Cámaras de Comercio del
                país
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
