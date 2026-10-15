export default function EmotionalCtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#2C3E50] to-[#4EA5A7] py-10 lg:py-12">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/images/fondo-textura-mapura.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="text-xl lg:text-2xl font-bold text-white mb-5 max-w-2xl mx-auto leading-snug">
          Cada deuda tiene una salida legal.
          <br />
          Nosotros te ayudamos a encontrarla.
        </p>
        <a
          href="#contact-form"
          className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3.5 px-8 font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-400"
        >
          Quiero recuperar mi tranquilidad
        </a>
      </div>
    </section>
  )
}
