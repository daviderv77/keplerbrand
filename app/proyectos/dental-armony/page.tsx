import { Navigation } from "@/components/navigation"
import Link from "next/link"

export const metadata = {
  title: "Dental Armony - Proyectos | keplerbrand",
  description: "Desarrollo de sitio web profesional para clínica dental.",
}

export default function DentalArmonyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-12">
        <Link
          href="/proyectos"
          className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8"
        >
          ← Volver a Proyectos
        </Link>
        <div className="max-w-4xl">
          <span className="text-white/60 text-sm uppercase tracking-wider">Desarrollo Web</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4 mb-6">Dental Armony</h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Sitio web profesional para clínica dental con diseño moderno, intuitivo y enfocado en la experiencia del
            paciente.
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-2">Cliente</h3>
            <p className="text-lg">Dental Armony</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-2">Servicios</h3>
            <p className="text-lg">Diseño Web, Desarrollo Frontend, UX/UI</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-2">Año</h3>
            <p className="text-lg">2024</p>
          </div>
        </div>

        {/* Project Description */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-medium mb-6">Sobre el Proyecto</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Desarrollamos un sitio web completo para Dental Armony, una clínica dental moderna que necesitaba una
            presencia digital profesional y acogedora. El proyecto se centró en crear una experiencia de usuario
            intuitiva que inspire confianza y facilite el contacto con la clínica.
          </p>
          <p className="text-white/70 leading-relaxed">
            El diseño presenta una estética limpia y profesional, con información clara sobre servicios, equipo médico y
            facilidades de contacto. La navegación fluida permite a los visitantes encontrar rápidamente la información
            que necesitan.
          </p>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-medium mb-6">Galería del Proyecto</h2>
          <div className="grid gap-4">
            {/* Hero Image */}
            <div className="relative overflow-hidden bg-white/5 rounded-lg">
              <img
                src="/images/armony-hero.jpg"
                alt="Dental Armony - Página Principal"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Two Column Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative overflow-hidden bg-white/5 rounded-lg">
                <img
                  src="/images/armony-results.jpg"
                  alt="Dental Armony - Resultados de Tratamientos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden bg-white/5 rounded-lg">
                <img
                  src="/images/armony-patients.jpg"
                  alt="Dental Armony - Momentos de Pacientes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Logo Showcase */}
            <div className="relative overflow-hidden bg-white rounded-lg p-12 flex items-center justify-center">
              <img src="/images/armony-logo.png" alt="Dental Armony Logo" className="w-64 h-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-medium mb-6">Vista Previa del Sitio</h2>
          <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            <div className="bg-white/10 px-6 py-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white/5 rounded px-4 py-2 text-sm text-white/60">https://dentalarmony.com</div>
              </div>
              <a
                href="https://dentalarmony.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Abrir en nueva pestaña ↗
              </a>
            </div>
            <div className="relative w-full" style={{ height: "80vh" }}>
              <iframe
                src="https://dentalarmony.com"
                className="w-full h-full"
                title="Dental Armony Website Preview"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-medium mb-6">Tecnologías Utilizadas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["HTML5", "CSS3", "JavaScript", "Responsive Design"].map((tech) => (
              <div
                key={tech}
                className="bg-white/5 border border-white/10 px-6 py-4 text-center hover:bg-white/10 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24 border-t border-white/10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">¿Necesitas un sitio web profesional?</h2>
          <Link
            href="/contacto"
            className="inline-block px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors font-medium"
          >
            Conversemos
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/60 text-sm">© 2025 keplerbrand. Todos los derechos reservados.</p>
            <div className="flex gap-8 text-sm">
              <Link href="/proyectos" className="text-white/60 hover:text-white transition-colors">
                Proyectos
              </Link>
              <Link href="/servicios" className="text-white/60 hover:text-white transition-colors">
                Servicios
              </Link>
              <Link href="/nosotros" className="text-white/60 hover:text-white transition-colors">
                Nosotros
              </Link>
              <Link href="/contacto" className="text-white/60 hover:text-white transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
