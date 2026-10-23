import type { Locale } from "@/i18n-config"

const content = {
  es: {
    label: "INTELIGENCIA ARTIFICIAL APLICADA",
    title: <>Menos fricción.<br />Más <em>posibilidades.</em></>,
    description: "Aplicamos inteligencia artificial para resolver problemas del día a día de las empresas.",
    note: "Simplificar tareas, conectar información y liberar tiempo para lo que importa. Empezamos por entender el problema.",
    status: "Una nueva etapa, en marcha",
    footer: "Problemas reales. Soluciones con sentido.",
    language: "Read in English",
  },
  en: {
    label: "APPLIED ARTIFICIAL INTELLIGENCE",
    title: <>Less friction.<br />More <em>possibilities.</em></>,
    description: "We apply artificial intelligence to solve everyday business problems.",
    note: "Simplifying tasks, connecting information and freeing up time for what matters. We start by understanding the problem.",
    status: "A new chapter, underway",
    footer: "Real problems. Thoughtful solutions.",
    language: "Leer en español",
  },
}

export default function LandingPage({ lang = "es" }: { lang?: Locale }) {
  const copy = content[lang]
  return (
    <div className="landing" lang={lang}>
      <header className="site-header">
        <a className="brand" href={lang === "es" ? "/" : "/en/"} aria-label="MagnoProyectos">
          <span className="brand-mark" aria-hidden="true">m<span>·</span></span>
          <span>MagnoProyectos</span>
        </a>
        <a className="language-link" href={lang === "es" ? "/en/" : "/es/"} lang={lang === "es" ? "en" : "es"} aria-label={copy.language}>
          {lang === "es" ? "EN" : "ES"}<span aria-hidden="true">↗</span>
        </a>
      </header>
      <main id="main-content">
        <div className="intro">
          <p className="eyebrow"><span aria-hidden="true" />{copy.label}</p>
          <h1>{copy.title}</h1>
          <p className="description">{copy.description}</p>
        </div>
        <div className="chapter">
          <span className="chapter-number" aria-hidden="true">01 /</span>
          <p>{copy.note}</p>
          <span className="chapter-symbol" aria-hidden="true">✳</span>
        </div>
      </main>
      <footer className="site-footer">
        <span className="status"><span aria-hidden="true" />{copy.status}</span>
        <span>{copy.footer}</span>
      </footer>
    </div>
  )
}
