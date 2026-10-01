export default function LawReviewSection() {
  return (
    <section className="bg-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-8 text-[#2C3E50]">
            Conoce la Ley de Insolvencia en Colombia
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed text-[#2C3E50] font-semibold">
              La única herramienta legal que existe para superar la crisis financiera.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#4EA5A7] rounded-2xl p-8 shadow-xl border border-[#4EA5A7] hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-center space-y-4">
              <h3 className="text-2xl lg:text-3xl font-black text-white">LEY 1116 DE 2006</h3>
              <p className="text-white text-lg font-bold leading-relaxed">
                Empresas, comerciantes y controlantes de sociedades.
              </p>
            </div>
          </div>

          <div className="bg-[#4EA5A7] rounded-2xl p-8 shadow-xl border border-[#4EA5A7] hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-center space-y-4">
              <h3 className="text-2xl lg:text-3xl font-black text-white">LEY 2445 DE 2025</h3>
              <p className="text-white text-lg font-bold leading-relaxed">Personas naturales y pequeños comerciantes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
