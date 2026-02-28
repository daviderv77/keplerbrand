import { Navigation } from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Branding Sip Music - keplerbrand",
  description: "Creación digital para productora musical Sip Music.",
}

export default function SipMusicPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Volver a Proyectos
        </Link>

        <div className="max-w-4xl">
          <div className="flex gap-4 mb-6">
            <span className="text-white/40 text-sm">Branding</span>
            <span className="text-white/40 text-sm">•</span>
            <span className="text-white/40 text-sm">2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Branding Sip Music</h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Creación digital completa para productora musical Sip Music. Desarrollamos una identidad visual cósmica y
            vibrante que refleja la energía de sus eventos, combinando elementos espaciales con la cultura de la música
            electrónica.
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div>
            <h3 className="text-white/40 text-sm uppercase tracking-wider mb-2">Cliente</h3>
            <p className="text-lg">Sip Music</p>
          </div>
          <div>
            <h3 className="text-white/40 text-sm uppercase tracking-wider mb-2">Servicios</h3>
            <p className="text-lg">Branding, Diseño Gráfico, Identidad Visual</p>
          </div>
          <div>
            <h3 className="text-white/40 text-sm uppercase tracking-wider mb-2">Año</h3>
            <p className="text-lg">2024</p>
          </div>
        </div>

        {/* Cosmic Style Images Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Identidad Cósmica</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-square overflow-hidden bg-white/5">
              <Image
                src="/images/sip-207.jpeg"
                alt="Sip Music Session 5"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden bg-white/5">
              <Image
                src="/images/sip-205.jpeg"
                alt="The Reggaeton Graham"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden bg-white/5">
              <Image
                src="/images/sip-208.jpeg"
                alt="The Sunset BJ"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden bg-white/5">
              <Image
                src="/images/sip-206.jpeg"
                alt="The Rave Encalada"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Character Style Images Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Mascota y Eventos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative aspect-square overflow-hidden bg-white/5">
              <Image
                src="/images/sip1.jpeg"
                alt="Sip Session 3 Set Time"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden bg-white/5">
              <Image
                src="/images/sip-202.jpeg"
                alt="The Crew Sip x Wilco"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden bg-white/5">
              <Image
                src="/images/sip-203.jpeg"
                alt="Sip Session BJ.11 Estelar"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden bg-white/5 md:col-span-3">
              <Image
                src="/images/sip-204.jpeg"
                alt="The Real After Office"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="max-w-3xl mx-auto py-20 border-y border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Sobre el Proyecto</h2>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              El proyecto de branding para Sip Music buscaba capturar la esencia de una productora musical innovadora
              que fusiona música electrónica con experiencias visuales únicas. Desarrollamos dos líneas visuales
              complementarias que reflejan diferentes aspectos de la marca.
            </p>
            <p>
              La primera línea presenta ilustraciones cósmicas vibrantes con paletas de colores neón, portales
              espaciales y paisajes surrealistas que evocan viajes sonoros y experiencias trascendentales en cada
              evento.
            </p>
            <p>
              La segunda línea introduce un personaje mascota dinosaurio en diferentes contextos, creando una identidad
              más cercana y memorable para la audiencia, manteniendo los colores corporativos rojo y amarillo.
            </p>
            <p>
              Todas las piezas fueron diseñadas para funcionar en formatos digitales y redes sociales, optimizadas para
              captar la atención del público objetivo de la música electrónica y los eventos nocturnos.
            </p>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="container mx-auto px-6 py-24">
        <Link href="/proyectos" className="group block">
          <p className="text-white/40 text-sm mb-4">Siguiente Proyecto</p>
          <h2 className="text-4xl md:text-5xl font-bold group-hover:text-white/80 transition-colors">
            Ver más proyectos →
          </h2>
        </Link>
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
