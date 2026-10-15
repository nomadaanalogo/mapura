import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InlineVideoPlayer from "@/components/inline-video-player"

export const metadata: Metadata = {
  title: "Video de bienvenida | Mapura Grupo Consultor",
  description: "Mensaje de bienvenida de la Dra. Claudia Zapata Mapura, fundadora de Mapura Grupo Consultor.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function BienvenidaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 pt-28 pb-16 lg:pt-32 max-w-lg text-center">
        <h1 className="text-2xl lg:text-3xl font-black text-[#2C3E50] mb-3">
          Un mensaje de bienvenida para ti
        </h1>
        <p className="text-[#2C3E50]/70 mb-8">
          La Dra. Claudia Zapata Mapura, fundadora de Mapura Grupo Consultor, te da la bienvenida.
        </p>

        <div className="max-w-xs mx-auto relative rounded-2xl overflow-hidden shadow-xl aspect-[9/16]">
          <InlineVideoPlayer
            src="/videos/video-email.mp4"
            poster="/images/video-email-poster.webp"
            alt="Video de bienvenida de la Dra. Claudia Zapata Mapura"
          />
        </div>

        <a
          href="https://wa.me/573106537502"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3.5 px-8 font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400"
        >
          Escríbenos por WhatsApp
        </a>
      </div>

      <Footer />
    </main>
  )
}
