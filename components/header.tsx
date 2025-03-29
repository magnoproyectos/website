"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { type Locale, i18n } from "@/i18n-config"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface HeaderProps {
  dictionary: {
    nav: {
      features: string
      pricing: string
      docs: string
      blog: string
    }
    cta: {
      login: string
      signup: string
    }
  }
  lang: Locale
}

export default function Header({ dictionary, lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Remove the language prefix from pathname to get the route
  const route = pathname.replace(`/${lang}`, "") || "/"

  const switchLanguage = (newLang: string) => {
    // Redirect to the same page but with a different language
    window.location.href = `/${newLang}${route}`
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-white" />
            <span className="font-bold">MagnoProyectos</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link href={`/${lang}#features`} className="text-sm text-white/70 hover:text-white transition-colors">
              {dictionary.nav.features}
            </Link>
            <Link href={`/${lang}#pricing`} className="text-sm text-white/70 hover:text-white transition-colors">
              {dictionary.nav.pricing}
            </Link>
            <Link href={`/${lang}/docs`} className="text-sm text-white/70 hover:text-white transition-colors">
              {dictionary.nav.docs}
            </Link>
            <Link href={`/${lang}/blog`} className="text-sm text-white/70 hover:text-white transition-colors">
              {dictionary.nav.blog}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Switch language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {i18n.locales.map((locale) => (
                <DropdownMenuItem
                  key={locale}
                  onClick={() => switchLanguage(locale)}
                  className={locale === lang ? "bg-accent" : ""}
                >
                  {locale === "en" ? "English" : "Español"}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="text-sm text-white/70 hover:text-white">
              {dictionary.cta.login}
            </Button>
            <Button className="bg-white text-black hover:bg-white/90">{dictionary.cta.signup}</Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10">
          <div className="container flex flex-col space-y-4 py-4 px-4">
            <Link
              href={`/${lang}#features`}
              className="text-sm py-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.nav.features}
            </Link>
            <Link
              href={`/${lang}#pricing`}
              className="text-sm py-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.nav.pricing}
            </Link>
            <Link
              href={`/${lang}/docs`}
              className="text-sm py-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.nav.docs}
            </Link>
            <Link
              href={`/${lang}/blog`}
              className="text-sm py-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.nav.blog}
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="w-full justify-center">
                {dictionary.cta.login}
              </Button>
              <Button className="w-full justify-center bg-white text-black hover:bg-white/90">
                {dictionary.cta.signup}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

