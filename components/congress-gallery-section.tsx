"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CongressGallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Array de 9 imágenes reales para los congresos
  const congressImages = [
    {
      id: 1,
      alt: "Dra. Claudia Mapura en panel sobre estrategias de insolvencia",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/congreso1-5z5OJt4ln0mKnVIq2xPCD1V5p88hiI.jpg",
    },
    {
      id: 2,
      alt: "Congreso Nacional de Gestión Estratégica",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/congreso%202-nBis86PD4s3qxPgCirgagyICj7Td2Z.jpg",
    },
    {
      id: 3,
      alt: "Equipo Mapura en congreso CICI",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/congreso%203-N4Bnncg53VZKKEWXtc6vbd9OFNObpS.jpg",
    },
    {
      id: 4,
      alt: "Conferencia sobre liquidación judicial",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/congreso%204-KU4iqdhhUvPzgjofAW3bbir4Vd9Kgf.jpg",
    },
    {
      id: 5,
      alt: "Dra. Mapura en Encuentro de Mujeres en la Insolvencia",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/congreso%205-7f7OYCOFRhh85gIgFH0vHeEhPT0nNn.jpg",
    },
    {
      id: 6,
      alt: "Panel de mujeres especialistas en insolvencia",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/congreso%206-eJhCSsy3reqCdrK9NsrG9JmpMvKb4x.jpg",
    },
    {
      id: 7,
      alt: "Cámara de Comercio de Cali",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Congreso%207-BcLawla60m6bOhrOpb8zFgmkPJ7VnL.jpg",
    },
    {
      id: 8,
      alt: "Foro Académico Insolvencia",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/congreso%208-gMJmIqbljxnpdKdpk2wAdheuIVjh2f.jpg",
    },
    {
      id: 9,
      alt: "Congreso Nacional de Insolvencia - Foto grupal",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/congreso%209-uFmBUUQtTPkDN7K0z5wDPrmdq3wy9y.jpg",
    },
  ]

  // Responsive items per view
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

  const maxIndex = Math.max(0, congressImages.length - itemsPerView)

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

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-teal-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
            Referentes en el sector jurídico
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La Dra. Claudia Mapura participa activamente en los principales congresos y eventos de insolvencia y
            derecho concursal en Colombia. Su presencia activa en estos espacios respalda, con hechos, la experiencia
            que ofrecemos en cada caso.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-[#4EA5A7]" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-[#4EA5A7]" />
          </button>

          {/* Relative wrapper for gradient fade effect */}
          <div className="relative">
            {itemsPerView === 1 && (
              <>
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/95 via-white/50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/95 via-white/50 to-transparent z-10 pointer-events-none" />
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
                {congressImages.map((image) => (
                  <div
                    key={image.id}
                    className="flex-shrink-0"
                    style={{
                      width:
                        itemsPerView === 1 ? "90%" : itemsPerView === 2 ? "calc(50% - 8px)" : "calc(33.333% - 10.67px)",
                    }}
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/servicios" className="text-[#4EA5A7] font-semibold hover:underline">
            Conocer más sobre Mapura →
          </Link>
        </div>
      </div>
    </section>
  )
}
