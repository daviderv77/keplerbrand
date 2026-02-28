"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { useState } from "react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Gracias por tu mensaje. Te contactaremos pronto.")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Contacto</h1>
        <p className="mt-6 text-xl text-white/70 max-w-2xl leading-relaxed">
          Estamos listos para escuchar tu proyecto y ayudarte a alcanzar tus objetivos.
        </p>
      </section>

      {/* Contact Form and Info */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-medium mb-8">Cuéntanos sobre tu proyecto</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-white/70">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 focus:border-white/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-white/70">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 focus:border-white/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm mb-2 text-white/70">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 focus:border-white/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-white/70">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 focus:border-white/50 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-3 px-8 hover:bg-white/90 transition-colors font-medium"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-medium mb-8">Información de Contacto</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white/50 text-sm mb-2">Email</h3>
                  <a href="mailto:keplerbrandone@gmail.com" className="text-lg hover:text-white/70 transition-colors">
                    keplerbrandone@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-white/50 text-sm mb-2">Teléfono</h3>
                  <a href="tel:+34900000000" className="text-lg hover:text-white/70 transition-colors">
                    +34 900 000 000
                  </a>
                </div>
                <div>
                  <h3 className="text-white/50 text-sm mb-2">Ubicación</h3>
                  <p className="text-lg">Madrid, España</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-12">
              <h3 className="text-xl font-medium mb-6">Síguenos</h3>
              <div className="flex gap-6">
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Instagram
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  LinkedIn
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Twitter
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Behance
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-12">
              <h3 className="text-xl font-medium mb-4">Horario</h3>
              <p className="text-white/60 leading-relaxed">
                Lunes a Viernes: 9:00 - 18:00
                <br />
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="container mx-auto px-6 py-24 border-t border-white/10">
        <div className="aspect-[21/9] bg-white/5 flex items-center justify-center">
          <p className="text-white/40">[ Mapa de ubicación ]</p>
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
