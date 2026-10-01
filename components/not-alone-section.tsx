"use client"
import { useState, useEffect } from "react"
import { FaUsers, FaBalanceScale, FaHandshake } from "react-icons/fa"

const testimonials = [
  {
    icon: <FaUsers className="text-4xl text-[#4EA5A7]" />,
    text: (
      <span>
        Estar endeudado <strong className="text-[#4EA5A7]">no es un delito ni un fracaso</strong>. En Colombia,{" "}
        <strong className="text-[#4EA5A7]">más de 10 millones de personas</strong> están reportadas en centrales de
        riesgo y aún así,<strong className="text-[#4EA5A7]"> existe una alternativa</strong>.
      </span>
    ),
  },
  {
    icon: <FaBalanceScale className="text-4xl text-[#4EA5A7]" />,
    text: (
      <span>
        Con la <strong className="text-[#4EA5A7]">Ley de Insolvencia</strong>, tienes la oportunidad de{" "}
        <strong className="text-[#4EA5A7]">retomar el control</strong> y recuperar tu{" "}
        <strong className="text-[#4EA5A7]">estabilidad financiera</strong>.
      </span>
    ),
  },
  {
    icon: <FaHandshake className="text-4xl text-[#4EA5A7]" />,
    text: (
      <span>
        En Mapura somos <strong className="text-[#4EA5A7]">expertos en guiarte paso a paso</strong> para acogerte a la
        ley de insolvencia.
      </span>
    ),
  },
]

export default function NotAloneSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 15000) // Cambiado de 10000 (10 segundos) a 15000 (15 segundos)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="py-16 lg:py-24 relative"
      style={{
        backgroundImage: `url('/images/fondo-textura-mapura.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#4EA5A7]/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">No es el final, te vamos a guiar</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl min-h-[300px] flex items-center justify-center border border-gray-100"
            onTouchStart={(e) => {
              const touch = e.touches[0]
              e.currentTarget.dataset.startX = touch.clientX.toString()
            }}
            onTouchEnd={(e) => {
              const startX = Number.parseFloat(e.currentTarget.dataset.startX || "0")
              const endX = e.changedTouches[0].clientX
              const diff = startX - endX

              if (Math.abs(diff) > 50) {
                // Minimum swipe distance
                if (diff > 0) {
                  // Swipe left - next
                  setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
                } else {
                  // Swipe right - previous
                  setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
                }
              }
            }}
          >
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-6">{testimonials[currentIndex].icon}</div>
              <p className="text-xl lg:text-2xl text-[#2C3E50] leading-relaxed font-semibold">
                {testimonials[currentIndex].text}
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
