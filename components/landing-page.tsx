"use client"

import { useState } from "react"
import type { Locale } from "@/i18n-config"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Pricing from "@/components/pricing"
import Features from "@/components/features"
import Footer from "@/components/footer"
import type { Dictionary } from "@/lib/dictionaries"

interface LandingPageProps {
  dictionary: Dictionary
  lang: Locale
}

export default function LandingPage({ dictionary, lang }: LandingPageProps) {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header dictionary={dictionary.header} lang={lang} />
      <main className="flex-1">
        <Hero dictionary={dictionary.hero} />
        <Pricing dictionary={dictionary.pricing} isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        <Features dictionary={dictionary.features} />
      </main>
      <Footer dictionary={dictionary.footer} />
    </div>
  )
}

