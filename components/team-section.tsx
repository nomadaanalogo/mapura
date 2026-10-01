"use client"

import type React from "react"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const team = [
  {
    name: "Abg. Claudia Zapata Mapura",
    role: "CEO – Experta en Insolvencia",
    quote: "La insolvencia es la única herramienta legal para superar la crisis financiera",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fondo%20blanco%20cuadrada%201-G9pp5Scqlv38IYXwAQCBUwsFEZe0Lb.png",
  },
  {
    name: "David Arias Zapata",
    role: "Director de marketing",
    quote: "Posicionando la experiencia legal mediante creatividad y estrategia",
    image: "/images/david-arias-new.webp",
  },
  {
    name: "Abg. Laura Vásquez",
    role: "Asistente jurídica",
    quote: "Nuestra prioridad es proteger a nuestros clientes",
    image: "/images/laura-vazquez-new.webp",
  },
  {
    name: "Abg. Isabel Pimienta",
    role: "Asistente legal",
    quote: "La ley es para todos y nuestro deber es hacerla respetar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n0v8V4NA2jTBtYX7Osz0XYQ1MDeMjm.png",
  },
  {
    name: "Valentina Osorio",
    role: "Auxiliar administrativa",
    quote: "Brindar un servicio integral y de calidad es nuestra prioridad",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7sDdGOqCzA2jRJQryOGG6wDY68juQd.png",
  },
]

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, team.length - itemsPerView)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
    setIsDragging(true)
    setDragOffset(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentTouch = e.targetTouches[0].clientX
    setTouchEnd(currentTouch)
    const diff = currentTouch - touchStart
    setDragOffset(diff)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    const swipeDistance = touchStart - touchEnd

    if (swipeDistance > 75) {
      handleNext()
    } else if (swipeDistance < -75) {
      handlePrev()
    }

    setDragOffset(0)
  }

  const getTransform = () => {
    if (itemsPerView === 1) {
      const baseTranslate = -(currentIndex * (90 + (100 - 90) / 2))
      if (isDragging && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const dragPercent = (dragOffset / containerWidth) * 100
        return baseTranslate + dragPercent
      }
      return baseTranslate
    } else {
      const itemWidthPercent = 100 / itemsPerView
      const baseTranslate = -(currentIndex * itemWidthPercent)
      if (isDragging && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const dragPercent = (dragOffset / containerWidth) * 100
        return baseTranslate + dragPercent
      }
      return baseTranslate
    }
  }

  const getProgressWidth = () => {
    const totalSlides = team.length - itemsPerView + 1
    return ((currentIndex + 1) / totalSlides) * 100
  }

  return (
    <section className="bg-[#E8F4F8] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
            Conoce al equipo detrás de Mapura
          </h2>
          <p className="text-lg lg:text-xl text-[#2C3E50]/80">Profesionales comprometidos con tu éxito</p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white hover:bg-[#4EA5A7] text-[#2C3E50] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#2C3E50]"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white hover:bg-[#4EA5A7] text-[#2C3E50] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#2C3E50]"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative">
            {itemsPerView === 1 && (
              <>
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#E8F4F8]/95 via-[#E8F4F8]/50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#E8F4F8]/95 via-[#E8F4F8]/50 to-transparent z-10 pointer-events-none" />
                <div className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none animate-pulse">
                  <ChevronRight className="w-8 h-8 text-[#4EA5A7] drop-shadow-lg" />
                </div>
              </>
            )}

            <div className="overflow-hidden" ref={containerRef}>
              <div
                className="flex gap-4"
                style={{
                  transform: `translateX(${getTransform()}%)`,
                  transition: isDragging ? "none" : "transform 300ms ease-out",
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width:
                        itemsPerView === 1 ? "90%" : itemsPerView === 2 ? "calc(50% - 8px)" : "calc(33.333% - 10.67px)",
                    }}
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative h-80 bg-gradient-to-br from-[#4EA5A7] to-[#2C3E50]">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                          priority={index === 0}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{member.name}</h3>
                        <p className="text-[#4EA5A7] font-semibold mb-4">{member.role}</p>
                        <p className="text-[#2C3E50] text-sm italic leading-relaxed">"{member.quote}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
