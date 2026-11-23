"use client"

import { usePathname } from "next/navigation"
import { FaWhatsapp } from "react-icons/fa"
import { trackLead } from "@/lib/fbq"

const MENSAJE =
  "Hola buen día, vengo desde la página web y me gustaría saber si aplico para la ley de insolvencia"

export default function WhatsAppFloatButton() {
  const pathname = usePathname()
  const isInsolvenciaPage = pathname === "/" || pathname.startsWith("/insolvencia-economica")

  if (!isInsolvenciaPage) return null

  return (
    <a
      href={`https://wa.me/573207927154?text=${encodeURIComponent(MENSAJE)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead()}
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-4 left-4 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl transition-transform hover:scale-110 animate-in fade-in zoom-in duration-300"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  )
}
