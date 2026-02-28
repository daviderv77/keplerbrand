import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "keplerbrand - Agencia de Marketing Digital",
  description:
    "Agencia de marketing digital minimalista. Combinamos estrategia, diseño, tecnología y contenido para crear impacto digital.",
  keywords: ["marketing digital", "agencia", "branding", "diseño web", "estrategia digital"],
  authors: [{ name: "keplerbrand" }],
  openGraph: {
    title: "keplerbrand - Agencia de Marketing Digital",
    description: "Combinamos estrategia, diseño, tecnología y contenido para crear impacto digital.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
