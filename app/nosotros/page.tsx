import { Navigation } from "@/components/navigation"
import Link from "next/link"

export const metadata = {
  title: "Nosotros - keplerbrand",
  description: "Conoce al equipo detrás de keplerbrand y nuestra filosofía de trabajo.",
}

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Nosotros</h1>
        <p className="mt-6 text-xl text-black/70 max-w-2xl leading-relaxed">
          Un equipo dedicado a transformar ideas en experiencias digitales memorables.
        </p>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 text-balance">
            Creemos en el poder del diseño minimalista y la estrategia centrada en datos para crear impacto real.
          </h2>
          <p className="text-black/60 text-lg leading-relaxed">
            En keplerbrand, cada proyecto es una oportunidad para innovar y superar expectativas. Trabajamos con marcas
            que buscan diferenciarse y conectar auténticamente con su audiencia.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 py-24 border-t border-black/10">
        <h2 className="text-3xl font-medium mb-16">Nuestros Valores</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-medium">Minimalismo</h3>
            <p className="text-black/60 leading-relaxed">
              Creemos que menos es más. Cada elemento debe tener un propósito claro y aportar valor.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-medium">Innovación</h3>
            <p className="text-black/60 leading-relaxed">
              Exploramos constantemente nuevas tecnologías y metodologías para ofrecer soluciones vanguardistas.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-medium">Excelencia</h3>
            <p className="text-black/60 leading-relaxed">
              Nos comprometemos con la calidad en cada detalle, desde la estrategia hasta la ejecución.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="container mx-auto px-6 py-24 border-t border-black/10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light mb-8">Nuestro Enfoque</h2>
            <div className="space-y-6 text-black/60 leading-relaxed">
              Trabajamos como una extensión de tu equipo, no como un proveedor externo. Esto nos permite entender
              profundamente tu negocio y crear soluciones verdaderamente personalizadas. Combinamos creatividad con
              análisis de datos para tomar decisiones informadas. Cada estrategia está respaldada por investigación y
              métricas claras de éxito. La transparencia es fundamental en nuestra forma de trabajar. Mantenemos
              comunicación constante y reportes claros sobre el progreso de cada proyecto.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="border border-black/10 p-8">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-black/60 text-sm">Proyectos Completados</div>
            </div>
            <div className="border border-black/10 p-8">
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-black/60 text-sm">Clientes Satisfechos</div>
            </div>
            <div className="border border-black/10 p-8">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-black/60 text-sm">Años de Experiencia</div>
            </div>
            <div className="border border-black/10 p-8">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-black/60 text-sm">Tasa de Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-24 border-t border-black/10">
        <h2 className="text-3xl font-medium mb-16">Equipo Multidisciplinario</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="aspect-square bg-black/5 mb-4 overflow-hidden">
              <img
                src="/images/cesar-andrade.jpeg"
                alt="Estratega Digital"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="font-medium">Estrategas Digitales</h3>
            <p className="text-black/50 text-sm">Expertos en planificación y análisis</p>
          </div>
          <div className="space-y-3">
            <div className="aspect-square bg-black/5 mb-4" />
            <h3 className="font-medium">Diseñadores</h3>
            <p className="text-black/50 text-sm">Creativos visuales y UX/UI</p>
          </div>
          <div className="space-y-3">
            <div className="aspect-square bg-black/5 mb-4" />
            <h3 className="font-medium">Desarrolladores</h3>
            <p className="text-black/50 text-sm">Full-stack y especialistas</p>
          </div>
          <div className="space-y-3">
            <div className="aspect-square bg-black/5 mb-4" />
            <h3 className="font-medium">Content Creators</h3>
            <p className="text-black/50 text-sm">Copywriters y productores</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              ¿Quieres conocer más sobre cómo trabajamos?
            </h2>
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors font-medium"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-white/10">
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
