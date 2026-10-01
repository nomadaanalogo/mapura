"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaPhone, FaWhatsapp, FaInstagram, FaInfoCircle, FaCheck, FaArrowLeft } from "react-icons/fa"
import Link from "next/link"

const TOTAL_STEPS = 5

const TIPOS_DEUDA = [
  "Préstamos bancarios",
  "Tarjeta de crédito",
  "Crédito de libre inversión",
  "Crédito de consumo",
  "Crédito de libranza",
  "Crédito de Leasing",
  "Crédito vehicular",
  "Crédito hipotecario",
  "Crédito educativo (Icetex)",
  "Créditos con Cooperativas",
  "Otros créditos",
]

const BIENES_OPCIONES = ["Vivienda", "Vehículo", "Local comercial", "Establecimiento de comercio", "Lote", "Otro", "Ninguno"]

const AFECTACIONES_OPCIONES = [
  "Embargo y secuestro de bienes",
  "Aprehensión de vehículo",
  "No tiene medidas cautelares",
  "Desconocido",
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
  tipoDeudaOtro: "",
  montoDeuda: "",
  ingresoMensual: "",
  moraSuperior90: "",
  bienes: [] as string[],
  bienesOtro: "",
  valorActivos: "",
  afectacionesInmuebles: "",
  procesosCobro: "",
  tiposProcesoCobro: [] as string[],
  descripcion: "",
}

type FormData = typeof initialFormData

export default function ContactSectionInsolvency() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [acceptPolicy, setAcceptPolicy] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [stepError, setStepError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleCheckbox = (field: "tiposDeuda" | "bienes" | "tiposProcesoCobro", value: string) => {
    setFormData((prev) => {
      const current = prev[field]

      if (field === "bienes") {
        if (value === "Ninguno") {
          return { ...prev, bienes: current.includes("Ninguno") ? [] : ["Ninguno"] }
        }
        const withoutNinguno = current.filter((v) => v !== "Ninguno")
        const next = withoutNinguno.includes(value)
          ? withoutNinguno.filter((v) => v !== value)
          : [...withoutNinguno, value]
        return { ...prev, bienes: next }
      }

      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
      return { ...prev, [field]: next }
    })
  }

  // Orden: 1) deuda, 2) bienes, 3) procesos legales, 4) descripción, 5) datos de contacto + política
  const validateStep = (currentStep: number) => {
    if (currentStep === 1) {
      if (formData.tiposDeuda.length === 0 || !formData.montoDeuda || !formData.ingresoMensual || !formData.moraSuperior90) {
        return "Completa todos los campos de esta sección para continuar."
      }
      if (formData.tiposDeuda.includes("Otros créditos") && !formData.tipoDeudaOtro) {
        return "Cuéntanos qué tipo de obligación es."
      }
    }
    if (currentStep === 2) {
      if (formData.bienes.length === 0) {
        return "Selecciona al menos una opción, o marca 'Ninguno'."
      }
      if (formData.bienes.includes("Otro") && !formData.bienesOtro) {
        return "Especifica qué otro bien posees."
      }
    }
    if (currentStep === 3) {
      if (!formData.afectacionesInmuebles || !formData.procesosCobro) {
        return "Completa todos los campos de esta sección para continuar."
      }
      if (formData.procesosCobro === "Sí" && formData.tiposProcesoCobro.length === 0) {
        return "Selecciona qué tipo de proceso te han iniciado."
      }
    }
    if (currentStep === 4) {
      if (!formData.descripcion) {
        return "Cuéntanos brevemente tu situación para continuar."
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
        "https://script.google.com/macros/s/AKfycbxdI5v9z1aaGFrEDd3B6jPSEgQuEYcVbE5HOs5ij_z6it74-lmf8s_rlbfm_1XIyYiA/exec",
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
            tipoDeudaOtro: formData.tipoDeudaOtro,
            montoDeuda: formData.montoDeuda,
            ingresoMensual: formData.ingresoMensual,
            moraSuperior90: formData.moraSuperior90,
            bienes: formData.bienes.join(", "),
            bienesOtro: formData.bienesOtro,
            valorActivos: formData.valorActivos,
            afectacionesInmuebles: formData.afectacionesInmuebles,
            procesosCobro: formData.procesosCobro,
            tiposProcesoCobro: formData.tiposProcesoCobro.join(", "),
            mensaje: formData.descripcion,
          }),
        },
      )

      setStatusMessage("Datos enviados correctamente. Redirigiendo a WhatsApp...")

      const resumen = [
        `*Nueva consulta de Insolvencia Económica*`,
        ``,
        `*Nombre:* ${formData.nombre}`,
        `*Teléfono:* ${formData.telefono}`,
        `*Email:* ${formData.email}`,
        `*Tipo(s) de deuda:* ${formData.tiposDeuda.join(", ")}${formData.tipoDeudaOtro ? ` (${formData.tipoDeudaOtro})` : ""}`,
        `*Monto de la deuda:* ${formData.montoDeuda}`,
        `*Ingreso mensual:* ${formData.ingresoMensual}`,
        `*Mora superior a 90 días:* ${formData.moraSuperior90}`,
        `*Bienes:* ${formData.bienes.join(", ")}${formData.bienesOtro ? ` (${formData.bienesOtro})` : ""}`,
        `*Valor aproximado de activos en Colombia:* ${formData.valorActivos || "No especifica"}`,
        `*Afectaciones sobre inmuebles:* ${formData.afectacionesInmuebles}`,
        `*Procesos de cobro iniciados:* ${formData.procesosCobro}${
          formData.tiposProcesoCobro.length ? ` (${formData.tiposProcesoCobro.join(", ")})` : ""
        }`,
        `*Descripción:*`,
        formData.descripcion,
      ].join("\n")

      const whatsappURL = `https://wa.me/573106537502?text=${encodeURIComponent(resumen)}`
      window.open(whatsappURL, "_blank")

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
    name: "moraSuperior90" | "procesosCobro"
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

  const stepTitles = [
    "Tu situación de deuda",
    "Tus bienes y activos",
    "Procesos legales en curso",
    "Cuéntanos tu caso",
    "Tus datos de contacto",
  ]

  return (
    <section id="contact-form" className="bg-gradient-to-br from-[#2C3E50] to-[#4EA5A7] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Inicia tu proceso de Insolvencia
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            Responde unas pocas preguntas y evaluemos si puedes acogerte a la Ley de Insolvencia. Un experto se
            comunicará contigo en las próximas 24 horas.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
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

                    {formData.tiposDeuda.includes("Otros créditos") && (
                      <div className="mt-3 space-y-2">
                        <div className="flex items-start gap-2 bg-white/10 p-3 rounded-lg text-white/80 text-xs">
                          <FaInfoCircle className="mt-0.5 flex-shrink-0" />
                          <span>
                            Por ejemplo, créditos de tipo fiscal: impuestos, DIAN, gobernaciones, alcaldías, etc.
                          </span>
                        </div>
                        <Input
                          name="tipoDeudaOtro"
                          value={formData.tipoDeudaOtro}
                          onChange={handleInputChange}
                          placeholder="Especifica el tipo de obligación *"
                          className={inputClass}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-white/90 text-sm font-semibold mb-2 block">
                      ¿Cuánto debe actualmente? *
                    </label>
                    <Input
                      name="montoDeuda"
                      value={formData.montoDeuda}
                      onChange={handleInputChange}
                      placeholder="Ej: $50.000.000"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="text-white/90 text-sm font-semibold mb-2 block">
                      ¿Cuál es su ingreso mensual actual? *
                    </label>
                    <Input
                      name="ingresoMensual"
                      value={formData.ingresoMensual}
                      onChange={handleInputChange}
                      placeholder="Ej: $3.000.000"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="text-white/90 text-sm font-semibold mb-2 block">
                      ¿Tiene mora superior a 90 días? *
                    </label>
                    <YesNoToggle name="moraSuperior90" value={formData.moraSuperior90} />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-white/90 text-sm font-semibold mb-3 block">
                      ¿Posee bienes a su nombre en Colombia y/o en el exterior? *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {BIENES_OPCIONES.map((opcion) => {
                        const checked = formData.bienes.includes(opcion)
                        return (
                          <button
                            type="button"
                            key={opcion}
                            onClick={() => toggleCheckbox("bienes", opcion)}
                            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border-2 text-sm font-semibold text-left transition-colors ${
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

                    {formData.bienes.includes("Otro") && (
                      <Input
                        name="bienesOtro"
                        value={formData.bienesOtro}
                        onChange={handleInputChange}
                        placeholder="Especifica qué otro bien posees *"
                        className={`${inputClass} mt-3`}
                      />
                    )}
                  </div>

                  <div>
                    <label className="text-white/90 text-sm font-semibold mb-2 block">
                      ¿Cuál es el valor aproximado de sus activos en Colombia?{" "}
                      <span className="text-white/60 font-normal">(opcional)</span>
                    </label>
                    <Input
                      name="valorActivos"
                      value={formData.valorActivos}
                      onChange={handleInputChange}
                      placeholder="Ej: $200.000.000"
                      className={inputClass}
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-white/90 text-sm font-semibold mb-3 block">
                      ¿Tiene bienes inmuebles en Colombia con las siguientes afectaciones? *
                    </label>
                    <div className="space-y-2">
                      {AFECTACIONES_OPCIONES.map((opcion) => {
                        const checked = formData.afectacionesInmuebles === opcion
                        return (
                          <button
                            type="button"
                            key={opcion}
                            onClick={() => setFormData((prev) => ({ ...prev, afectacionesInmuebles: opcion }))}
                            className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg border-2 text-sm font-semibold text-left transition-colors ${
                              checked
                                ? "bg-white text-[#2C3E50] border-white"
                                : "bg-white/15 text-white border-white/40 hover:bg-white/25"
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 border ${
                                checked ? "bg-green-500 border-green-500" : "border-white/60"
                              }`}
                            >
                              {checked && <FaCheck className="text-white text-[9px]" />}
                            </span>
                            {opcion}
                          </button>
                        )
                      })}
                    </div>
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

              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-white/90 text-sm font-semibold mb-2 block">
                      Cuéntanos sobre tu situación de deuda *
                    </label>
                    <p className="text-white/60 text-xs mb-3">
                      Por ejemplo: embargos, descuentos por nómina, reportes en centrales, etc.
                    </p>
                    <Textarea
                      name="descripcion"
                      value={formData.descripcion}
                      onChange={handleInputChange}
                      placeholder="Escribe aquí..."
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>
              )}

              {step === 5 && (
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
