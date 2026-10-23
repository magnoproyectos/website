import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "MagnoProyectos — Inteligencia artificial aplicada",
  description: "Aplicamos inteligencia artificial para resolver problemas del día a día de las empresas. Menos fricción. Más posibilidades.",
  icons: { icon: "/icon.svg" },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}
