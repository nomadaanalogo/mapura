import Image from "next/image"
import { FaInstagram, FaYoutube } from "react-icons/fa"

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Mapura+Grupo+Consultor+%7C+Abogados/@3.5506895,-76.2924628,1086m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e3a050051720b25:0x596f567203f7b177!8m2!3d3.5506895!4d-76.2898879!16s%2Fg%2F11xt0yny0s!5m1!1e1"
const INSTAGRAM_URL = "https://www.instagram.com/mapuragrupoconsultor"
const YOUTUBE_URL = "https://youtube.com/@ccmgrupoconsultor?si=n10-x9GuDYLEEVj4"

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  )
}

const cards = [
  {
    logo: <GoogleLogo className="w-6 h-6 lg:w-8 lg:h-8" />,
    badgeClass: "bg-white border border-gray-200",
    title: "Déjanos tu reseña en Google",
    description: "Tu opinión nos motiva a mejorar y ayudar a más personas.",
    cta: "Dejar reseña",
    ctaClass: "bg-[#EA4335] hover:bg-[#d33426]",
    href: GOOGLE_MAPS_URL,
  },
  {
    logo: <FaInstagram className="w-5 h-5 lg:w-6 lg:h-6 text-white" />,
    badgeClass: "bg-gradient-to-tr from-[#FEDA75] via-[#D62976] to-[#4F5BD5]",
    title: "Síguenos en Instagram",
    description: "Contenido útil, novedades y consejos sobre soluciones jurídicas.",
    cta: "Seguir",
    ctaClass: "bg-gradient-to-r from-[#D62976] to-[#4F5BD5] hover:opacity-90",
    href: INSTAGRAM_URL,
  },
  {
    logo: <FaYoutube className="w-5 h-5 lg:w-6 lg:h-6 text-white" />,
    badgeClass: "bg-[#FF0000]",
    title: "Suscríbete en YouTube",
    description: "Conferencias, explicaciones y contenido educativo para tu tranquilidad financiera.",
    cta: "Suscribirse",
    ctaClass: "bg-[#FF0000] hover:bg-[#d60000]",
    href: YOUTUBE_URL,
  },
]

export default function SocialGrowthSection() {
  return (
    <section className="bg-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="max-w-2xl lg:max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100">
          {/* Banner: texture + copy on the left, real review screenshot on the right */}
          <div className="grid sm:grid-cols-2">
            <div
              className="relative p-8 lg:p-10 flex flex-col justify-center overflow-hidden"
              style={{
                backgroundImage: `url('/images/fondo-textura-mapura.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50]/90 to-[#4EA5A7]/90" />
              <div className="relative z-10">
                <Image
                  src="/images/mapura-logo-new.webp"
                  alt="Mapura Grupo Consultor"
                  width={160}
                  height={56}
                  className="h-9 w-auto object-contain mb-6"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <h2 className="text-2xl lg:text-4xl font-black text-white leading-tight">
                  Tu opinión nos ayuda a seguir <span className="text-[#7fd4d6]">creciendo</span>
                </h2>
              </div>
            </div>

            <div className="relative min-h-[260px] sm:min-h-0">
              <Image
                src="/images/pantalla-google-review.webp"
                alt="Cliente dejando una reseña de 5 estrellas a Mapura en Google"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="p-6 lg:p-10">
            <p className="text-center text-[#2C3E50]/70 max-w-xl mx-auto mb-8 lg:mb-10">
              Gracias por confiar en nosotros. Te invitamos a compartir tu experiencia y seguirnos en nuestras redes.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-5">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-blue-50 rounded-xl sm:rounded-2xl p-2.5 sm:p-5 lg:p-6 text-center flex flex-col items-center border border-blue-100"
                >
                  <div
                    className={`w-9 h-9 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-2 sm:mb-4 shadow-sm ${card.badgeClass}`}
                  >
                    {card.logo}
                  </div>
                  <h3 className="font-black text-[#2C3E50] text-[10px] sm:text-sm lg:text-base mb-1 sm:mb-1.5 leading-tight">
                    {card.title}
                  </h3>
                  <p className="hidden sm:block text-[#2C3E50]/70 text-xs lg:text-sm leading-relaxed mb-5">
                    {card.description}
                  </p>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto text-white font-semibold px-2 sm:px-5 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-xs lg:text-sm transition-colors whitespace-nowrap ${card.ctaClass}`}
                  >
                    {card.cta} →
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-[#4EA5A7] italic font-bold text-lg lg:text-xl mt-10">
              ¡Gracias por ser parte de nuestra comunidad!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
