"use client"

import { useEffect, useState } from "react"

type DotSection = { el: HTMLElement; label: string }

// Puntos de navegación lateral: detecta las <section> hijas directas de <main>
// y marca en cuál va el usuario, para que sepa que hay más contenido abajo.
export default function SectionDotsNav() {
  const [sections, setSections] = useState<DotSection[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const found = Array.from(document.querySelectorAll<HTMLElement>("main > section")).map((el, i) => ({
      el,
      label: el.querySelector("h1, h2")?.textContent?.trim() || `Sección ${i + 1}`,
    }))
    setSections(found)

    const onScroll = () => {
      const line = window.innerHeight * 0.4
      let current = 0
      found.forEach((s, i) => {
        if (s.el.getBoundingClientRect().top <= line) current = i
      })
      setActive(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const goTo = (el: HTMLElement) => {
    const header = document.querySelector("header")
    const offset = header ? header.getBoundingClientRect().height : 0
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" })
  }

  if (sections.length < 2) return null

  return (
    <nav
      aria-label="Secciones de la página"
      className="fixed right-2 lg:right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2.5 lg:gap-3"
    >
      {sections.map((s, i) => {
        const isActive = i === active
        return (
          <button
            key={i}
            type="button"
            onClick={() => goTo(s.el)}
            aria-label={s.label}
            aria-current={isActive ? "true" : undefined}
            title={s.label}
            className="group flex items-center justify-center w-5 h-5"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3.5 h-3.5 bg-[#4EA5A7] ring-2 ring-white shadow-[0_0_12px_rgba(78,165,167,0.8)]"
                  : "w-2 h-2 bg-[#2C3E50]/40 ring-1 ring-white/70 group-hover:bg-[#4EA5A7]/70"
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
