"use client"

import { FaPhone, FaInstagram, FaBars, FaTimes } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false)
  const [hoveringTop, setHoveringTop] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isVisible = scrolledPastHero || hoveringTop

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("section")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setScrolledPastHero(window.scrollY > heroBottom - 100)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setHoveringTop(e.clientY <= 60)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <header
      className={`bg-white py-1 fixed top-0 left-0 right-0 z-50 shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger menu */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden text-[#2C3E50] p-1"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>

            <Image
              src="/images/mapura-logo-new.webp"
              alt="Mapura Grupo Consultor"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-6 text-[#2C3E50] font-semibold">
            <Link href="/" className="hover:text-[#4EA5A7] transition-colors">
              Inicio
            </Link>
            <Link href="/servicios" className="hover:text-[#4EA5A7] transition-colors">
              Servicios
            </Link>
            <Link href="/academia" className="hover:text-[#4EA5A7] transition-colors">
              Academia
            </Link>
            <a href="#contact-form" className="hover:text-[#4EA5A7] transition-colors">
              Contacto
            </a>
          </nav>

          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Desktop contact info */}
            <div className="hidden lg:flex items-center space-x-6 text-[#2C3E50]">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-sm" />
                <span className="text-sm">+57 3106537502</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaInstagram className="text-sm" />
                <span className="text-sm">@mapuragrupoconsultor</span>
              </div>
            </div>

            {/* Mobile phone link */}
            <a
              href="tel:+573106537502"
              className="lg:hidden flex items-center gap-1.5 text-[#2C3E50]"
              aria-label="Llamar a Mapura"
            >
              <FaPhone className="text-sm" />
              <span className="text-xs font-semibold whitespace-nowrap">310 653 7502</span>
            </a>

            {/* Button visible on all screen sizes */}
            <button
              onClick={() => {
                const contactSection = document.querySelector("#contact-form")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
              className="bg-green-500 text-white px-4 lg:px-6 py-2 text-sm lg:text-base rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
            >
              Evalúa tu caso
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="lg:hidden flex flex-col py-4 border-t border-gray-100 mt-1 text-[#2C3E50] font-semibold">
            <Link href="/" className="py-2 hover:text-[#4EA5A7] transition-colors" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="py-2 hover:text-[#4EA5A7] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/academia"
              className="py-2 hover:text-[#4EA5A7] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Academia
            </Link>
            <a
              href="#contact-form"
              className="py-2 hover:text-[#4EA5A7] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
