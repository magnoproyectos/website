import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Lexend } from "next/font/google"
import Script from "next/script"
import "./globals.css"

// Tipografía del manual de marca: Lexend 600 para títulos y 400 para textos.
const lexend = Lexend({ subsets: ["latin"], weight: ["400", "600"], display: "swap", variable: "--font-lexend" })

// Google Tag Manager: Analytics (G-PW2W6C1D2Z) y los píxeles se configuran dentro del contenedor
const GTM_ID = "GTM-N8KMCZ"

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
  return (
    <html lang="es" className={lexend.variable}>
      <body>
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        {children}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </body>
    </html>
  )
}
