"use client"

import { useEffect, useState } from "react"

const projectImages = [
  "/images/sip-205.jpeg",
  "/images/sip-208.jpeg",
  "/images/sip-207.jpeg",
  "/images/sip-206.jpeg",
  "/images/armony-hero.jpg",
  "/images/armony-results.jpg",
  "/images/sip-202.jpeg",
  "/images/sip-204.jpeg",
]

export function MaintenanceGate({ children }: { children: React.ReactNode }) {
  const [isMaintenanceMode] = useState(true)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (!isMaintenanceMode) return
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % projectImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isMaintenanceMode])

  if (!isMaintenanceMode) {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background images carousel */}
      {projectImages.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: currentImage === index ? 0.12 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Grid overlay of project images */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-1 opacity-[0.06]">
        {projectImages.map((src) => (
          <div key={src} className="overflow-hidden">
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Logo / Brand */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black">
            keplerbrand
          </h1>
          <div className="w-16 h-px bg-black/30 mx-auto mt-6" />
        </div>

        {/* Maintenance message */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-6">
            En mantenimiento
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-black leading-relaxed text-balance mb-6">
            Proximamente veras nuestro trabajo aqui
          </h2>
          <p className="text-lg text-black/50 font-light">
            Estate atento, estamos preparando algo increible.
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="w-2 h-2 bg-black/30 rounded-full animate-pulse" style={{ animationDelay: "0s" }} />
          <span className="w-2 h-2 bg-black/30 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
          <span className="w-2 h-2 bg-black/30 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
        </div>

        {/* Contact */}
        <div className="text-sm text-black/40">
          <p>Mientras tanto, contactanos en</p>
          <a
            href="mailto:hola@keplerbrand.com"
            className="text-black/70 hover:text-black transition-colors underline underline-offset-4"
          >
            hola@keplerbrand.com
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-center">
        <p className="text-xs text-black/30">
          &copy; 2025 keplerbrand. Todos los derechos reservados.
        </p>
      </div>
    </div>
  )
}
