"use client"

import { useState } from "react"
import Image from "next/image"
import { FaTimes, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"
import { trackLead } from "@/lib/fbq"

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeNXQ09WG8eVyOPuJ7HDN4sdvb21YreiDCaLVq7K70-t5syEQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJmZGlkFlEZGwCJ-JI-If14YGu1AfpL3-NuduxzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaf5IrpkD89KJHKuxATga78-MeufG1A4CLDxPpyN2HEbJasebP_Y-tVOsjk4kw_aem_4EY6NopWa8bOsDDVsOZ1UA"

export default function EventBadge() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-4 right-4 z-40 w-[260px] animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-blue-100 p-4 pt-5">
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Cerrar"
          className="absolute top-2 right-2 text-[#2C3E50]/50 hover:text-[#2C3E50] p-1"
        >
          <FaTimes className="text-xs" />
        </button>

        <Image
          src="/images/mapura-logo-new.webp"
          alt="Mapura Grupo Consultor"
          width={140}
          height={48}
          className="h-7 w-auto object-contain mb-3"
        />

        <p className="text-base font-black text-[#4EA5A7] leading-snug mb-2">
          ¡Regístrate gratis! Conferencia sobre la Ley de Insolvencia
        </p>

        <div className="space-y-1 mb-3">
          <div className="flex items-center gap-2 text-xs text-[#2C3E50]/70 font-semibold">
            <FaCalendarAlt className="text-[#4EA5A7]" />
            Miércoles 25 de noviembre, 6:30 p.m.
          </div>
          <div className="flex items-center gap-2 text-xs text-[#2C3E50]/70 font-semibold">
            <FaMapMarkerAlt className="text-[#4EA5A7]" />
            Teatro Materon, Palmira — Cra. 29 No. 30-40
          </div>
        </div>

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead()}
          className="block text-center bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2.5 rounded-xl shadow-md transition-colors"
        >
          Reserva tu cupo
        </a>
      </div>
    </div>
  )
}
