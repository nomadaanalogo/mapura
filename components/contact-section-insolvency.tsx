"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { FaPhone, FaWhatsapp, FaInstagram, FaCheck, FaArrowLeft } from "react-icons/fa"
import Link from "next/link"
import InlineVideoPlayer from "@/components/inline-video-player"

const TOTAL_STEPS = 2

const TIPOS_DEUDA = [
  "Libre Inversión",
  "Libranza",
  "Vehicular",
  "Educativo (ICETEX)",
  "Tarjeta de crédito",
  "Consumo",
  "Leasing",
  "Hipotecario",
  "Laborales",
  "Alimentos",
  "Fiscales (Impuestos DIAN, Gobernación, Alcaldía)",
  "Seguridad Social (EPS, ARL, AFP, PARAFISCALES)",
]

const PROCESO_COBRO_OPCIONES = [
  "Embargo de salarios",
  "Embargo de cuentas bancarias",
  "Embargo y secuestro de bienes",
  "Aprehensión de vehículo",
  "No tiene medidas cautelares",
  "Desconocido",
]

const initialFormData = {
  nombre: "",
  telefono: "",
  email: "",
  tiposDeuda: [] as string[],
  mora2Deudas90: "",
  valorTotalDeudas: "",
  procesosCobro: "",
  tiposProcesoCobro: [] as string[],
}

type FormData = typeof initialFormData

export default function ContactSectionInsolvency() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [acceptPolicy, setAcceptPolicy] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [stepError, setStepError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleCheckbox = (field: "tiposDeuda" | "tiposProcesoCobro", value: string) => {
    setFormData((prev) => {
      const current = prev[field]
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
      return { ...prev, [field]: next }
    })
  }

  // Orden: 1) situación de deuda, 2) datos de contacto + política
  const validateStep = (currentStep: number) => {
    if (currentStep === 1) {
      if (formData.tiposDeuda.length === 0 || !formData.mora2Deudas90 || !formData.valorTotalDeudas || !formData.procesosCobro) {
        return "Completa todos los campos de esta sección para continuar."
      }
      if (formData.procesosCobro === "Sí" && formData.tiposProcesoCobro.length === 0) {
        return "Selecciona qué tipo de proceso te han iniciado."
      }
    }
    return ""
  }

  const scrollToFormTop = () => {
    const card = document.querySelector("#contact-form-card")
    if (card) {
      const headerOffset = 90 // deja ver el botón "Atrás" debajo del navbar fijo
      const top = card.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  const goNext = () => {
    const error = validateStep(step)
    if (error) {
      setStepError(error)
      return
    }
    setStepError("")
    setStep((s) => Math.min(TOTAL_STEPS, s + 1))
    scrollToFormTop()
  }

  const goBack = () => {
    setStepError("")
    setStep((s) => Math.max(1, s - 1))
    scrollToFormTop()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.nombre || !formData.telefono || !formData.email) {
      setStepError("Completa tu nombre, teléfono y correo para enviar tu solicitud.")
      return
    }
    if (!acceptPolicy) {
      alert("Debes aceptar la política de protección de datos para continuar.")
      return
    }

    setIsLoading(true)
    setStatusMessage("Enviando...")

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyfX7ZG6CstCxY_eICazl8r9-zIy8QJyYet2IfUxjWva7fjfP_bpfX0Nsq5hd2rCgOa/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            tipo: "Insolvencia",
            nombre: formData.nombre,
            email: formData.email,
            telefono: formData.telefono,
            tiposDeuda: formData.tiposDeuda.join(", "),
            mora2Deudas90: formData.mora2Deudas90,
            valorTotalDeudas: formData.valorTotalDeudas,
            procesosCobro: formData.procesosCobro,
            tiposProcesoCobro: formData.tiposProcesoCobro.join(", "),
          }),
        },
      )

      const resumen = [
        `*Nueva consulta de Insolvencia Económica*`,
        ``,
        `*Nombre:* ${formData.nombre}`,
        `*Teléfono:* ${formData.telefono}`,
        `*Email:* ${formData.email}`,
        `*Tipo(s) de deuda:* ${formData.tiposDeuda.join(", ")}`,
        `*Dos o más deudas con mora superior a 90 días:* ${formData.mora2Deudas90}`,
        `*Valor total de las deudas:* ${formData.valorTotalDeudas}`,
        `*Procesos de cobro iniciados:* ${formData.procesosCobro}${
          formData.tiposProcesoCobro.length ? ` (${formData.tiposProcesoCobro.join(", ")})` : ""
        }`,
      ].join("\n")

      const whatsappURL = `https://wa.me/573106537502?text=${encodeURIComponent(resumen)}`
      window.open(whatsappURL, "_blank")

      setSubmitted(true)
      setFormData(initialFormData)
      setStep(1)
    } catch (error) {
      console.error("Error al enviar datos:", error)
      setStatusMessage("Hubo un error al enviar los datos. Por favor intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  const inputClass =
    "bg-white/20 backdrop-blur-sm border-white/30 focus:border-white text-white placeholder:text-white/70"

  const YesNoToggle = ({
    name,
    value,
  }: {
    name: "mora2Deudas90" | "procesosCobro"
    value: string
  }) => (
    <div className="flex gap-3">
      {["Sí", "No"].map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setFormData((prev) => ({ ...prev, [name]: option }))}
          className={`flex-1 py-2.5 rounded-lg font-semibold border-2 transition-colors ${
            value === option
              ? "bg-white text-[#2C3E50] border-white"
              : "bg-white/15 text-white border-white/40 hover:bg-white/25"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )

  const stepTitles = ["Tu situación de deuda", "Tus datos de contacto"]

  return (
    <section id="contact-form" className="bg-gradient-to-br from-[#2C3E50] to-[#4EA5A7] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Da el primer paso y recupera tu tranquilidad
          </h2>
          <p className="text-lg md:text-xl text-white/90">Responde las siguientes preguntas y permítenos evaluar tu caso.</p>
          <Link
            href="/servicios#contact-form"
            className="inline-block mt-4 text-white/80 hover:text-white text-sm md:text-base font-semibold underline underline-offset-4 transition-colors"
          >
            ¿Buscas asesoría en otra área del derecho? Escríbenos aquí →
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/20 text-center space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">¡Gracias por confiarnos tu caso!</h3>
              <p className="text-white/90">
                Ya recibimos tu información. Mientras un experto se comunica contigo, conocé a la Dra. Claudia Zapata
                Mapura:
              </p>

              <div className="max-w-xs mx-auto relative rounded-2xl overflow-hidden shadow-xl aspect-[9/16]">
                <InlineVideoPlayer
                  src="/videos/video-email.mp4"
                  poster="/images/video-email-poster.webp"
                  alt="Video de bienvenida de la Dra. Claudia Zapata Mapura"
                />
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-white/70 hover:text-white text-sm underline"
              >
                Volver al formulario
              </button>
            </div>
          ) : (
            <div
              id="contact-form-card"
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/20"
            >
              {step > 1 && (
                <button
                  type="button"
                  onClick={goBack}
                  className="flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm mb-6 -mt-1"
                >
                  <FaArrowLeft className="text-xs" />
                  Atrás
                </button>
              )}

              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80 text-sm font-semibold">
                    Paso {step} de {TOTAL_STEPS}
                  </span>
                  <span className="text-white/80 text-sm font-semibold">{stepTitles[step - 1]}</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-300"
                    style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="text-white/90 text-sm font-semibold mb-1 block">
                        ¿Qué tipo(s) de deuda tienes? *
                      </label>
                      <p className="text-white/60 text-xs mb-3">Puedes seleccionar varias opciones.</p>
                      <div className="grid grid-cols-2 gap-2">
                        {TIPOS_DEUDA.map((tipo) => {
                          const checked = formData.tiposDeuda.includes(tipo)
                          return (
                            <button
                              type="button"
                              key={tipo}
                              onClick={() => toggleCheckbox("tiposDeuda", tipo)}
                              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border-2 text-xs sm:text-sm font-semibold text-left transition-colors ${
                                checked
                                  ? "bg-white text-[#2C3E50] border-white"
                                  : "bg-white/15 text-white border-white/40 hover:bg-white/25"
                              }`}
                            >
                              <span
                                className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border ${
                                  checked ? "bg-green-500 border-green-500" : "border-white/60"
                                }`}
                              >
                                {checked && <FaCheck className="text-white text-[10px]" />}
                              </span>
                              {tipo}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="text-white/90 text-sm font-semibold mb-2 block">
                        ¿Tiene dos o más deudas con mora superior a 90 días? *
                      </label>
                      <YesNoToggle name="mora2Deudas90" value={formData.mora2Deudas90} />
                    </div>

                    <div>
                      <label className="text-white/90 text-sm font-semibold mb-2 block">
                        ¿A cuánto asciende el valor total de sus deudas? *
                      </label>
                      <Input
                        name="valorTotalDeudas"
                        value={formData.valorTotalDeudas}
                        onChange={handleInputChange}
                        placeholder="Ej: $50.000.000"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="text-white/90 text-sm font-semibold mb-2 block">
                        ¿Le han iniciado procesos de cobro (Ejecutivo, Coactivo) en virtud de las deudas que presenta
                        actualmente? *
                      </label>
                      <YesNoToggle name="procesosCobro" value={formData.procesosCobro} />

                      {formData.procesosCobro === "Sí" && (
                        <div className="grid grid-cols-2 gap-2 mt-3">
                          {PROCESO_COBRO_OPCIONES.map((opcion) => {
                            const checked = formData.tiposProcesoCobro.includes(opcion)
                            return (
                              <button
                                type="button"
                                key={opcion}
                                onClick={() => toggleCheckbox("tiposProcesoCobro", opcion)}
                                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border-2 text-xs sm:text-sm font-semibold text-left transition-colors ${
                                  checked
                                    ? "bg-white text-[#2C3E50] border-white"
                                    : "bg-white/15 text-white border-white/40 hover:bg-white/25"
                                }`}
                              >
                                <span
                                  className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border ${
                                    checked ? "bg-green-500 border-green-500" : "border-white/60"
                                  }`}
                                >
                                  {checked && <FaCheck className="text-white text-[10px]" />}
                                </span>
                                {opcion}
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <Input
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Nombre completo *"
                      className={inputClass}
                    />
                    <Input
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="Teléfono *"
                      className={inputClass}
                    />
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Correo electrónico *"
                      type="email"
                      className={inputClass}
                    />

                    <div className="flex items-start space-x-3 bg-white/10 p-4 rounded-lg">
                      <input
                        type="checkbox"
                        id="acceptPolicy"
                        checked={acceptPolicy}
                        onChange={(e) => setAcceptPolicy(e.target.checked)}
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
                  </div>
                )}

                {stepError && (
                  <div className="bg-red-500/20 border border-red-400/40 p-3 rounded-lg text-white text-sm text-center">
                    {stepError}
                  </div>
                )}

                {statusMessage && (
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-white text-center text-sm">
                    {statusMessage}
                  </div>
                )}

                <p className="text-white/70 text-xs text-center">* Campos obligatorios</p>

                <div className="flex justify-center">
                  {step < TOTAL_STEPS ? (
                    <button
                      type="button"
                      onClick={goNext}
                      className="w-full sm:w-64 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3.5 font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400"
                    >
                      Siguiente
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!acceptPolicy || isLoading}
                      className="w-full sm:w-64 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3.5 font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Enviando..." : "Evaluar mi caso por WhatsApp"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            <a href="tel:+573106537502" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <FaPhone className="text-2xl" />
              <div>
                <p className="font-semibold">Llámanos</p>
                <p className="text-white/80">+57 3106537502</p>
              </div>
            </a>

            <a href="https://wa.me/573106537502" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <FaWhatsapp className="text-2xl" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-white/80">+57 3106537502</p>
              </div>
            </a>

            <a href="https://www.instagram.com/mapuragrupoconsultor" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <FaInstagram className="text-2xl" />
              <div>
                <p className="font-semibold">Instagram</p>
                <p className="text-white/80">@mapuragrupoconsultor</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
