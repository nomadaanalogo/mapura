import Image from "next/image"
import { FaPlay } from "react-icons/fa"

const YOUTUBE_URL = "https://youtube.com/@ccmgrupoconsultor?si=n10-x9GuDYLEEVj4"

export default function VideoSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50] mb-4">Conoce a Mapura</h2>
          <p className="text-base lg:text-lg text-[#2C3E50]/80 leading-relaxed">
            Más de una firma de abogados, somos el equipo que muchas familias y empresarios eligen cuando más lo
            necesitan. Conoce quiénes somos y cómo trabajamos.
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

        <p className="text-center text-sm lg:text-base text-[#2C3E50]/70 max-w-2xl mx-auto mt-6">
          Liderado por la Abg. <strong className="text-[#2C3E50]">Claudia Zapata Mapura</strong>, experta en Ley de
          Insolvencia con participación activa en los principales congresos jurídicos del país.
        </p>
      </div>
    </section>
  )
}
