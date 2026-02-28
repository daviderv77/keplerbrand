import { Navigation } from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Proyectos - keplerbrand",
  description: "Explora nuestros proyectos de marketing digital y branding.",
}

const projects = [
  {
    id: 1,
    title: "Branding Sip Music",
    category: "Branding",
    description: "Creación digital para productora musical.",
    year: "2024",
    slug: "sip-music",
    backgroundImage: "/images/sip-207.jpeg",
  },
  {
    id: 2,
    title: "Dental Armony",
    category: "Desarrollo Web",
    description: "Sitio web profesional para clínica dental con diseño moderno y funcional.",
    year: "2024",
    slug: "dental-armony",
    backgroundImage: "/images/armony-hero.jpg",
  },
  {
    id: 3,
    title: "E-commerce Fashion",
    category: "Desarrollo Web",
    description: "Plataforma de comercio electrónico con experiencia de usuario optimizada.",
    year: "2024",
  },
  {
    id: 4,
    title: "Campaña Digital Global",
    category: "Marketing Digital",
    description: "Estrategia multicanal para lanzamiento de producto internacional.",
    year: "2023",
  },
  {
    id: 5,
    title: "App Móvil Fintech",
    category: "UX/UI Design",
    description: "Diseño de interfaz para aplicación financiera mobile-first.",
    year: "2023",
  },
  {
    id: 6,
    title: "Portal Corporativo",
    category: "Desarrollo Web",
    description: "Sitio web corporativo con gestión de contenidos y analytics.",
    year: "2023",
  },
  {
    id: 7,
    title: "Estrategia Social Media",
    category: "Marketing Digital",
    description: "Gestión integral de redes sociales y creación de contenido.",
    year: "2024",
  },
]

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Proyectos</h1>
        <p className="mt-6 text-xl text-white/70 max-w-2xl leading-relaxed">
          Una selección de trabajos que demuestran nuestro compromiso con la excelencia y la innovación.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={project.slug ? `/proyectos/${project.slug}` : "#"}
              className="bg-black p-12 hover:bg-white/5 transition-all duration-500 group cursor-pointer block relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.backgroundImage && (
                <>
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.backgroundImage || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-0" />
                </>
              )}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-white/40 text-sm">{project.category}</span>
                  <span className="text-white/40 text-sm">{project.year}</span>
                </div>
                <h3 className="text-3xl font-medium mb-4 group-hover:text-white/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24 border-t border-white/10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">¿Tienes un proyecto en mente?</h2>
          <Link
            href="/contacto"
            className="inline-block px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors font-medium"
          >
            Hablemos
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
