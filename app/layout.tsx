import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Lexend } from "next/font/google"
import "./globals.css"

// Tipografía del manual de marca: Lexend 600 para títulos y 400 para textos.
const lexend = Lexend({ subsets: ["latin"], weight: ["400", "600"], display: "swap", variable: "--font-lexend" })

export const metadata: Metadata = {
  title: "Magno Proyectos — Inteligencia artificial aplicada",
  description: "Magno Proyectos automatiza tareas, diseña e implementa soluciones tecnológicas a medida y capacita a equipos para trabajar con inteligencia artificial de forma segura y eficiente.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="es" className={lexend.variable}><body>{children}</body></html>
}
