"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaPhone, FaWhatsapp, FaInstagram } from "react-icons/fa"
import Link from "next/link"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    descripcion: "",
  })
  const [acceptPolicy, setAcceptPolicy] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!acceptPolicy) {
      alert("Debes aceptar la política de protección de datos para continuar.")
      return
    }

    setIsLoading(true)
    setStatusMessage("Enviando...")

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxdI5v9z1aaGFrEDd3B6jPSEgQuEYcVbE5HOs5ij_z6it74-lmf8s_rlbfm_1XIyYiA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            tipo: "General",
            nombre: formData.nombre,
            email: formData.email,
            telefono: formData.telefono,
            servicio: "Asesoría Jurídica General",
            mensaje: formData.descripcion,
          }),
        },
      )

      setStatusMessage("Datos enviados correctamente. Redirigiendo a WhatsApp...")

      const mensaje = `*Nueva consulta desde la web*%0A%0A*Nombre:* ${formData.nombre}%0A*Teléfono:* ${formData.telefono}%0A*Email:* ${formData.email}%0A*Descripción del caso:*%0A${formData.descripcion}`
      const whatsappURL = `https://wa.me/573106537502?text=${mensaje}`
      window.open(whatsappURL, "_blank")

      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        descripcion: "",
      })
    } catch (error) {
      console.error("Error al enviar datos:", error)
      setStatusMessage("Hubo un error al enviar los datos. Por favor intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="bg-gradient-to-br from-[#2C3E50] to-[#4EA5A7] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Contáctanos ahora</h2>
          <p className="text-xl text-white/90">
            Deja tus datos y uno de nuestros expertos se comunicará en breve contigo.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            id="contact-form"
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Nombre completo *"
                  required
                  className="bg-white/20 backdrop-blur-sm border-white/30 focus:border-white text-white placeholder:text-white/70"
                />
              </div>

              <div>
                <Input
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  placeholder="Teléfono *"
                  required
                  className="bg-white/20 backdrop-blur-sm border-white/30 focus:border-white text-white placeholder:text-white/70"
                />
              </div>

              <div>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Correo electrónico *"
                  type="email"
                  required
                  className="bg-white/20 backdrop-blur-sm border-white/30 focus:border-white text-white placeholder:text-white/70"
                />
              </div>

              <div>
                <Textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  placeholder="Describe brevemente tu caso *"
                  required
                  rows={5}
                  className="bg-white/20 backdrop-blur-sm border-white/30 focus:border-white text-white placeholder:text-white/70 resize-none"
                />
              </div>

              <div className="flex items-start space-x-3 bg-white/10 p-4 rounded-lg">
                <input
                  type="checkbox"
                  id="acceptPolicy"
                  checked={acceptPolicy}
                  onChange={(e) => setAcceptPolicy(e.target.checked)}
                  required
                  className="mt-1 w-5 h-5 rounded border-white/30 text-[#4EA5A7] focus:ring-[#4EA5A7] focus:ring-offset-0 cursor-pointer"
                />
                <label htmlFor="acceptPolicy" className="text-white text-sm leading-relaxed cursor-pointer">
                  Acepto la{" "}
                  <Link
                    href="/politica-privacidad"
                    target="_blank"
                    className="text-green-300 hover:text-green-200 underline font-semibold"
                  >
                    Política de Protección de Datos Personales
                  </Link>{" "}
                  y autorizo el tratamiento de mis datos para los fines descritos. *
                </label>
              </div>

              <p className="text-white/70 text-xs">* Campos obligatorios</p>

              {statusMessage && (
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-white text-center text-sm">
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={!acceptPolicy || isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Enviando..." : "Enviar consulta por WhatsApp"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-2xl" />
              <div>
                <p className="font-semibold">Llámanos</p>
                <p className="text-white/80">+57 3106537502</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-2xl" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-white/80">+57 3106537502</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <FaInstagram className="text-2xl" />
              <div>
                <p className="font-semibold">Instagram</p>
                <p className="text-white/80">@mapuragrupoconsultor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
