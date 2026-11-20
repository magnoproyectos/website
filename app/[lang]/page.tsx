import { notFound } from "next/navigation"
import { i18n, type Locale } from "@/i18n-config"
import LandingPage from "@/components/landing-page"

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return lang === "en" ? {
    title: "Magno Proyectos — Applied artificial intelligence",
    description: "Magno Proyectos automates tasks, designs and implements custom technology solutions, and trains teams to use artificial intelligence safely and efficiently.",
  } : {}
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!i18n.locales.includes(lang as Locale)) notFound()
  return <LandingPage lang={lang as Locale} />
}
