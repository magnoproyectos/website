"use client"

import { useEffect, useState } from "react"

// Banner de cookies con el modo de consentimiento de Google.
// La elección se guarda en el navegador y se comunica a Tag Manager.
const STORAGE_KEY = "mp-consent"

const copy = {
  es: {
    text: "Usamos cookies de análisis y, más adelante, de publicidad para entender cómo se usa el sitio. Solo se activan si las aceptas.",
    accept: "Aceptar",
    reject: "Rechazar",
    label: "Aviso de cookies",
  },
  en: {
    text: "We use analytics cookies and, later on, advertising cookies to understand how the site is used. They are only enabled if you accept them.",
    accept: "Accept",
    reject: "Reject",
    label: "Cookie notice",
  },
}

type Choice = "granted" | "denied"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function applyConsent(choice: Choice) {
  window.gtag?.("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  })
  window.dataLayer?.push({ event: "consent_update", consent: choice })
}

export function openCookieSettings() {
  window.dispatchEvent(new Event("mp:open-cookies"))
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState<"es" | "en">("es")

  useEffect(() => {
    setLang(window.location.pathname.startsWith("/en") ? "en" : "es")
    let stored: string | null = null
    try { stored = window.localStorage.getItem(STORAGE_KEY) } catch {}
    if (stored !== "granted" && stored !== "denied") setOpen(true)
    const reopen = () => setOpen(true)
    window.addEventListener("mp:open-cookies", reopen)
    return () => window.removeEventListener("mp:open-cookies", reopen)
  }, [])

  const choose = (choice: Choice) => {
    try { window.localStorage.setItem(STORAGE_KEY, choice) } catch {}
    applyConsent(choice)
    setOpen(false)
  }

  if (!open) return null
  const t = copy[lang]
  return (
    <div className="cookie-banner" role="region" aria-label={t.label}>
      <p>{t.text}</p>
      <div className="cookie-actions">
        <button type="button" className="cookie-button" onClick={() => choose("denied")}>{t.reject}</button>
        <button type="button" className="cookie-button" onClick={() => choose("granted")}>{t.accept}</button>
      </div>
    </div>
  )
}
