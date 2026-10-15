import { FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa"

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Mapura+Grupo+Consultor+%7C+Abogados/@3.5506895,-76.2924628,1086m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e3a050051720b25:0x596f567203f7b177!8m2!3d3.5506895!4d-76.2898879!16s%2Fg%2F11xt0yny0s!5m1!1e1"
const INSTAGRAM_URL = "https://www.instagram.com/mapuragrupoconsultor"
const YOUTUBE_URL = "https://youtube.com/@ccmgrupoconsultor?si=n10-x9GuDYLEEVj4"

const cards = [
  {
    icon: FaGoogle,
    title: "Déjanos tu reseña en Google",
    description: "Tu opinión nos motiva a mejorar y ayudar a más personas.",
    cta: "Dejar reseña",
    href: GOOGLE_MAPS_URL,
  },
  {
    icon: FaInstagram,
    title: "Síguenos en Instagram",
    description: "Contenido útil, novedades y consejos sobre soluciones jurídicas.",
    cta: "Seguir",
    href: INSTAGRAM_URL,
  },
  {
    icon: FaYoutube,
    title: "Suscríbete en YouTube",
    description: "Conferencias, explicaciones y contenido educativo para tu tranquilidad financiera.",
    cta: "Suscribirse",
    href: YOUTUBE_URL,
  },
]

export default function SocialGrowthSection() {
  return (
    <section className="bg-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-black text-[#2C3E50] mb-4">
            Tu opinión nos ayuda a seguir creciendo
          </h2>
          <p className="text-base lg:text-lg text-[#2C3E50]/80">
            Gracias por confiar en nosotros. Te invitamos a compartir tu experiencia y seguirnos en nuestras redes.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-blue-100 text-center flex flex-col items-center"
              >
                <div className="bg-[#4EA5A7] p-4 rounded-full mb-4">
                  <Icon className="text-white text-xl" />
                </div>
                <h3 className="font-black text-[#2C3E50] text-base lg:text-lg mb-2">{card.title}</h3>
                <p className="text-[#2C3E50]/70 text-sm leading-relaxed mb-6">{card.description}</p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-[#2C3E50] hover:bg-[#1a252f] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
                >
                  {card.cta} →
                </a>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-[#2C3E50]/60 mt-10">¡Gracias por ser parte de nuestra comunidad!</p>
      </div>
    </section>
  )
}
