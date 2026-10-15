import { FaBalanceScale, FaComments, FaPlay } from "react-icons/fa"
import InlineVideoPlayer from "@/components/inline-video-player"

export default function InsolvencyIntroSection() {
  return (
    <section className="bg-blue-50 py-14 lg:py-20">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-5 items-stretch">
          {/* Video */}
          <div className="flex flex-col gap-3">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-blue-100 aspect-[9/16] lg:h-full lg:aspect-auto">
              <InlineVideoPlayer
                src="/videos/video-web.mp4"
                poster="/images/video-web-poster.webp"
                alt="Conoce a la Dra. Claudia Mapura y el equipo de Mapura Grupo Consultor"
              />
            </div>
            <div className="flex items-center justify-center gap-2 text-[#2C3E50]/70 text-sm font-semibold">
              <FaPlay className="text-[#4EA5A7] text-xs" />
              Mira el video y conoce quiénes te acompañan en tu proceso
            </div>
          </div>

          {/* Las dos tarjetas, apiladas */}
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6 lg:p-8 text-left flex flex-col items-start flex-1">
              <div className="bg-[#4EA5A7]/10 p-4 rounded-full mb-4">
                <FaBalanceScale className="text-[#4EA5A7] text-2xl" />
              </div>
              <h2 className="text-lg lg:text-xl font-black text-[#2C3E50] leading-snug mb-3">
                La Ley de Insolvencia es la herramienta legal para superar la crisis financiera
              </h2>
              <p className="text-sm lg:text-base text-[#2C3E50]/70 leading-relaxed">
                Te acompañamos para <strong className="text-[#2C3E50] font-semibold">negociar con tus acreedores</strong>{" "}
                y construir una <strong className="text-[#2C3E50] font-semibold">solución de pago acorde a tu capacidad económica</strong>.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6 lg:p-8 text-left flex flex-col items-start flex-1">
              <div className="bg-[#4EA5A7]/10 p-4 rounded-full mb-4">
                <FaComments className="text-[#4EA5A7] text-2xl" />
              </div>
              <h2 className="text-lg lg:text-xl font-black text-[#2C3E50] leading-snug mb-3">
                Una firma de consultoría legal centrada en el cliente
              </h2>
              <p className="text-sm lg:text-base text-[#2C3E50]/70 leading-relaxed">
                En MAPURA Grupo Consultor, <strong className="text-[#2C3E50] font-semibold">entendemos cada caso desde la realidad y las necesidades de nuestros clientes</strong>,
                no desde soluciones genéricas. <strong className="text-[#2C3E50] font-semibold">Escuchamos, orientamos y diseñamos estrategias legales</strong>{" "}
                que te permitan recuperar tu tranquilidad financiera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
