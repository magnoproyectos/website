"use client"

import { openCookieSettings } from "./cookie-banner"

export default function CookieSettingsLink({ label }: { label: string }) {
  return <button type="button" className="cookie-settings-link" onClick={openCookieSettings}>{label}</button>
}
