"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { FaTimes } from "react-icons/fa"
import { trackLead } from "@/lib/fbq"

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeNXQ09WG8eVyOPuJ7HDN4sdvb21YreiDCaLVq7K70-t5syEQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJmZGlkFlEZGwCJ-JI-If14YGu1AfpL3-NuduxzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaf5IrpkD89KJHKuxATga78-MeufG1A4CLDxPpyN2HEbJasebP_Y-tVOsjk4kw_aem_4EY6NopWa8bOsDDVsOZ1UA"

const SESSION_KEY = "mapura-evento-prima-modal-visto"

export default function EventModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return
    } catch {
      // sessionStorage no disponible (ej. navegación privada): mostramos igual
    }

    const timer = setTimeout(() => {
      setOpen(true)
      try {
        sessionStorage.setItem(SESSION_KEY, "1")
      } catch {
        // ignorar
      }
    }, 700)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="¡Espera! Antes de usar tu prima — Conferencia gratuita sobre la Ley de Insolvencia"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#2C3E50]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-[360px] rounded-3xl overflow-hidden shadow-2xl bg-white animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-[#2C3E50] p-2 rounded-full shadow-lg transition-colors"
        >
          <FaTimes className="text-sm" />
        </button>

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackLead()
            setOpen(false)
          }}
          className="block"
        >
          <Image
            src="/images/evento-prima-insolvencia.webp"
            alt="¡Espera! Antes de usar tu prima — Conoce la Ley de Insolvencia. Conferencia gratuita con la Dra. Claudia Zapata Mapura. Miércoles 25 de noviembre de 2026, 6:30 p.m., Teatro Materon. Reserva tu cupo."
            width={640}
            height={1120}
            className="w-full h-auto block"
            priority
          />
        </a>
      </div>
    </div>
  )
}
