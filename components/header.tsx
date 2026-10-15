"use client"

import { FaPhone, FaInstagram, FaBars, FaTimes, FaHome, FaBriefcase, FaGraduationCap, FaCommentDots } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const NAV_ITEMS = [
  { href: "/", label: "Inicio", icon: FaHome },
  { href: "/servicios", label: "Otros Servicios", icon: FaBriefcase },
  { href: "/academia", label: "Academia", icon: FaGraduationCap },
  { href: "#contact-form", label: "Contacto", icon: FaCommentDots },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white py-1 fixed top-0 left-0 right-0 z-50 shadow-md">
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

            <nav className="hidden lg:flex items-center gap-1 font-semibold">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === pathname
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm transition-colors ${
                      isActive
                        ? "bg-blue-50 text-[#4EA5A7] shadow-[inset_0_1px_4px_rgba(0,0,0,0.12)]"
                        : "text-[#2C3E50] hover:text-[#4EA5A7] hover:bg-blue-50/60"
                    }`}
                  >
                    <Icon className="text-xs" />
                    {item.label}
                  </Link>
                )
              })}
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
            <nav className="lg:hidden flex flex-col gap-1 py-4 border-t border-gray-100 mt-1 font-semibold">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === pathname
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-blue-50 text-[#4EA5A7] shadow-[inset_0_1px_4px_rgba(0,0,0,0.12)]"
                        : "text-[#2C3E50] hover:text-[#4EA5A7] hover:bg-blue-50/60"
                    }`}
                  >
                    <Icon className="text-sm" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          )}
        </div>
      </header>
      {/* Spacer so fixed-position header doesn't cover page content */}
      <div className="h-[60px] lg:h-[64px]" />
    </>
  )
}
