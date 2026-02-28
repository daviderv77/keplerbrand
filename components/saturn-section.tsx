"use client"

export function SaturnSection() {
  return (
    <div className="relative w-full py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Saturn illustration */}
          <div className="relative flex justify-center">
            <div className="saturn-container">
              <div className="saturn-rings-wrapper">
                <div className="saturn-ring ring-1" />
                <div className="saturn-ring ring-2" />
                <div className="saturn-ring ring-3" />
                <div className="saturn-planet" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-balance">
              ¿Listo para llevar tu proyecto al siguiente nivel?
            </h2>
            <p className="text-white/70 text-xl leading-relaxed">Contáctanos</p>
            <div>
              <a
                href="/contacto"
                className="inline-block px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors font-medium text-lg"
              >
                Agendar Cita
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
