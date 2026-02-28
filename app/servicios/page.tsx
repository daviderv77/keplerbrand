import { Navigation } from "@/components/navigation"
import Link from "next/link"

export const metadata = {
  title: "Servicios - keplerbrand",
  description: "Servicios de marketing digital, branding, desarrollo web y estrategia digital.",
}

const services = [
  {
    title: "Estrategia Digital",
    description: "Desarrollamos planes estratégicos basados en datos y objetivos claros.",
    features: [
      "Análisis de mercado y competencia",
      "Definición de objetivos y KPIs",
      "Plan de acción y roadmap",
      "Optimización continua",
    ],
  },
  {
    title: "Branding & Diseño",
    description: "Creamos identidades visuales memorables y sistemas de diseño coherentes.",
    features: ["Identidad visual corporativa", "Diseño de logotipos", "Branding guidelines", "Material promocional"],
  },
  {
    title: "Desarrollo Web",
    description: "Construimos experiencias digitales rápidas, seguras y escalables.",
    features: ["Sitios web responsive", "E-commerce y plataformas", "Aplicaciones web", "Optimización SEO técnico"],
  },
  {
    title: "Marketing Digital",
    description: "Implementamos campañas efectivas en múltiples canales digitales.",
    features: ["Social media marketing", "Content marketing", "Email marketing", "Publicidad digital (SEM/Social Ads)"],
  },
  {
    title: "Contenido",
    description: "Producimos contenido relevante que conecta con tu audiencia.",
    features: [
      "Estrategia de contenidos",
      "Copywriting y redacción",
      "Producción audiovisual",
      "Gestión de contenidos",
    ],
  },
  {
    title: "Analítica & Datos",
    description: "Medimos, analizamos y optimizamos cada aspecto de tu presencia digital.",
    features: ["Implementación de analytics", "Reportes y dashboards", "A/B testing", "Optimización de conversiones"],
  },
]

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Servicios</h1>
        <p className="mt-6 text-xl text-white/70 max-w-2xl leading-relaxed">
          Soluciones integrales de marketing digital diseñadas para impulsar tu negocio.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="border border-white/10 p-10 hover:border-white/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-3xl font-medium mb-4 group-hover:text-white/80 transition-colors">{service.title}</h3>
              <p className="text-white/60 leading-relaxed mb-8">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-white/50 text-sm">
                    <span className="mt-1.5 w-1 h-1 bg-white/50 rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-6 py-24 border-t border-white/10">
        <h2 className="text-4xl md:text-5xl font-light mb-16">Nuestro Proceso</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-5xl font-bold text-white/20">01</div>
            <h3 className="text-xl font-medium">Descubrimiento</h3>
            <p className="text-white/60 text-sm leading-relaxed">Entendemos tu negocio, objetivos y audiencia.</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold text-white/20">02</div>
            <h3 className="text-xl font-medium">Estrategia</h3>
            <p className="text-white/60 text-sm leading-relaxed">Desarrollamos un plan detallado y medible.</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold text-white/20">03</div>
            <h3 className="text-xl font-medium">Ejecución</h3>
            <p className="text-white/60 text-sm leading-relaxed">Implementamos con precisión y calidad.</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold text-white/20">04</div>
            <h3 className="text-xl font-medium">Optimización</h3>
            <p className="text-white/60 text-sm leading-relaxed">Medimos resultados y mejoramos continuamente.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24 border-t border-white/10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">¿Listo para comenzar?</h2>
          <Link
            href="/contacto"
            className="inline-block px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors font-medium"
          >
            Contactar
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
