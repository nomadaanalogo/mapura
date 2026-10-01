"use client"

import type React from "react"

import { FaStar } from "react-icons/fa"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Laura M.",
    role: "Empleada",
    text: "Gracias a Mapura detuve el embargo de mi salario y hoy pago mis deudas sin presión. Me devolvieron la tranquilidad.",
  },
  {
    name: "Carlos R.",
    role: "Comerciante",
    text: "Pensé que perdería mi negocio. La ley me permitió renegociar y proteger mi negocio.",
  },
  {
    name: "Natalia G.",
    role: "Empresaria",
    text: "Me acompañaron durante todo el proceso de reorganización de mi empresa. Profesionales y humanos.",
  },
]

export default function TestimonialsSection() {
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

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

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
      // For mobile, calculate based on 90% width + gaps
      const baseTranslate = -(currentIndex * (90 + (100 - 90) / 2))
      if (isDragging && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const dragPercent = (dragOffset / containerWidth) * 100
        return baseTranslate + dragPercent
      }
      return baseTranslate
    } else {
      // For desktop, calculate based on 100% / itemsPerView
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
    const totalSlides = testimonials.length - itemsPerView + 1
    return ((currentIndex + 1) / totalSlides) * 100
  }

  return (
    <section className="bg-[#E8F4F8] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
            Historias reales, resultados reales
          </h2>
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
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width:
                        itemsPerView === 1 ? "90%" : itemsPerView === 2 ? "calc(50% - 8px)" : "calc(33.333% - 10.67px)",
                    }}
                  >
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                      <div className="flex space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-xl" />
                        ))}
                      </div>
                      <p className="text-[#2C3E50] text-base lg:text-lg mb-6 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="font-bold text-[#2C3E50] text-lg">{testimonial.name}</p>
                        <p className="text-[#4EA5A7] text-sm">{testimonial.role}</p>
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
