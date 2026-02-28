import { Navigation } from "@/components/navigation"
import { Wormhole } from "@/components/wormhole"
import { SaturnSection } from "@/components/saturn-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="relative">
        <Wormhole />
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-light leading-tight text-balance">
            Combinamos estrategia, diseño, tecnología y contenido para crear impacto digital.
          </h2>
          <div className="mt-12 flex gap-6">
            <a
              href="/proyectos"
              className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors font-medium"
            >
              Ver Proyectos
            </a>
            <a
              href="/contacto"
              className="px-8 py-3 border border-white hover:bg-white/10 transition-colors font-medium"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black text-balance">Nuestros Proyectos</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mb-6">
            <a
              href="/proyectos/sip-music"
              className="md:col-span-2 group relative overflow-hidden bg-gray-100 aspect-square block"
            >
              <img
                src="/images/sip-205.jpeg"
                alt="Sip Music Session 5"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-medium">Branding Sip Music</span>
              </div>
            </a>

            <a
              href="/proyectos/sip-music"
              className="md:col-span-3 group relative overflow-hidden bg-gray-100 aspect-square block"
            >
              <img
                src="/images/sip-208.jpeg"
                alt="Sip Music Festival"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-medium">Branding Sip Music</span>
              </div>
            </a>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <a
              href="/proyectos/dental-armony"
              className="md:col-span-3 group relative overflow-hidden bg-gray-100 aspect-square block"
            >
              <img
                src="/images/armony-hero.jpg"
                alt="Dental Armony - Clínica Dental en Loja"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-medium">Sitio Web Dental Armony</span>
              </div>
            </a>

            <a
              href="/proyectos/dental-armony"
              className="md:col-span-2 group relative overflow-hidden bg-gray-100 aspect-square block"
            >
              <img
                src="/images/armony-results.jpg"
                alt="Dental Armony - Resultados de Tratamientos"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-medium">Sitio Web Dental Armony</span>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/proyectos"
              className="inline-block px-8 py-3 bg-black text-white hover:bg-black/90 transition-colors font-medium"
            >
              Ver Todos los Proyectos
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 border-t border-white/10">
        <SaturnSection />
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/60 text-sm">© 2025 keplerbrand. Todos los derechos reservados.</p>
            <div className="flex gap-8 text-sm">
              <a href="/proyectos" className="text-white/60 hover:text-white transition-colors">
                Proyectos
              </a>
              <a href="/servicios" className="text-white/60 hover:text-white transition-colors">
                Servicios
              </a>
              <a href="/nosotros" className="text-white/60 hover:text-white transition-colors">
                Nosotros
              </a>
              <a href="/contacto" className="text-white/60 hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
