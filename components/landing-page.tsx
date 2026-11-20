import type { Locale } from "@/i18n-config"

// Datos de contacto
const EMAIL = "hello@magnoproyectos.com"
const WHATSAPP_NUMBER = "34624741291"
const WHATSAPP_LABEL = "+34 624 74 12 91"

type Service = { title: string; text: string; examples: string[]; result: string }
type Step = { title: string; text: string }

const content = {
  es: {
    home: "Magno Proyectos, inicio",
    navLabel: "Secciones",
    nav: { services: "Servicios", process: "Cómo trabajamos", contact: "Contacto" },
    label: "INTELIGENCIA ARTIFICIAL APLICADA",
    title: <><span>Automatizamos tareas.</span> <span>Creamos soluciones tecnológicas a medida.</span> <span>Capacitamos equipos para usar IA de forma segura y eficiente.</span></>,
    description: "Trabajamos con pymes, despachos profesionales e inmobiliarias que quieren dedicar menos tiempo a tareas repetitivas y atender mejor a sus clientes.",
    heroCta: "Cuéntanos qué necesitas",
    heroWhatsapp: "Escríbenos por WhatsApp",
    servicesTitle: "Qué hacemos",
    servicesLead: "Tres líneas de trabajo. Cada solución se adapta después de revisar el proceso y las herramientas de la empresa.",
    examplesLabel: "Ejemplos",
    resultLabel: "Qué queda funcionando",
    services: [
      {
        title: "Automatización de tareas",
        text: "Consultas, citas, correos y seguimiento de clientes que se resuelven solos, con una persona cuando hace falta.",
        examples: [
          "Primera respuesta inmediata a cada consulta, asignación a una persona y recordatorios hasta el siguiente paso.",
          "Asistente de WhatsApp o chat que responde con la información aprobada por la empresa y deriva a una persona cuando hace falta.",
          "Reserva de citas por WhatsApp con confirmación, recordatorio y opción de reprogramar.",
          "Lectura de las facturas que llegan por correo y registro ordenado en una hoja de cálculo.",
        ],
        result: "Un flujo probado y documentado, con una guía de uso y una forma clara de volver al trabajo manual si algo falla.",
      },
      {
        title: "Soluciones tecnológicas a medida",
        text: "Herramientas conectadas, datos en un solo lugar y respuestas fáciles de encontrar, diseñadas para tu empresa.",
        examples: [
          "Generador de presupuestos que arma cotizaciones a partir de los datos de cada pedido.",
          "Conexión entre formularios, CRM y hojas de cálculo para dejar de copiar datos a mano.",
          "Asistente que encuentra respuestas en manuales, contratos o documentos internos.",
          "Reportes de ventas que se arman solos con datos de varias herramientas.",
        ],
        result: "Una solución implementada por etapas, con pruebas, documentación y traspaso al equipo. Si no está claro por dónde empezar, un diagnóstico previo define qué conviene resolver primero.",
      },
      {
        title: "Capacitación en inteligencia artificial",
        text: "Tu equipo aprende a usar IA de forma segura y eficiente en su trabajo real, con criterios para revisar los resultados.",
        examples: [
          "Preparar propuestas comerciales con IA y revisar el resultado antes de enviarlo.",
          "Redactar documentos y correos habituales con un método común para todo el equipo.",
          "Resumir y analizar reportes, encuestas o reuniones.",
          "Elegir herramientas adecuadas y proteger la información confidencial.",
        ],
        result: "Guías por tarea, criterios para revisar lo que produce la IA y acompañamiento hasta que el equipo lo incorpora a su trabajo diario.",
      },
    ] as Service[],
    disclaimer: "Los ejemplos muestran soluciones que podemos implementar; no son casos de clientes ni resultados garantizados. El alcance se define en cada proyecto.",
    aboutTitle: "Quiénes somos",
    aboutText: "Magno Proyectos es una consultora boutique de inteligencia artificial y automatización. La dirige Sebastián, con más de 20 años liderando equipos y proyectos de tecnología en empresas de finanzas, inmobiliario, educación y recursos humanos. Combinamos comprensión del negocio, implementación técnica y acompañamiento a los equipos.",
    processTitle: "Cómo trabajamos",
    steps: [
      { title: "Entendemos el problema", text: "Revisamos el proceso, las herramientas y los datos disponibles antes de proponer una solución." },
      { title: "Definimos la solución", text: "Acordamos el alcance, qué se automatiza y en qué momentos interviene una persona." },
      { title: "La ponemos en funcionamiento", text: "Probamos, documentamos y acompañamos al equipo. Medimos el resultado comparando el antes y el después." },
    ] as Step[],
    contactTitle: "Cuéntanos qué necesita tu empresa.",
    contactText: "Empezamos por entender el problema.",
    emailButton: "Escríbenos por correo",
    whatsappButton: "Escríbenos por WhatsApp",
    whatsappText: "Hola, quiero contarles qué necesita mi empresa.",
    status: "Una nueva etapa, en marcha",
    language: "Read in English",
  },
  en: {
    home: "Magno Proyectos, home",
    navLabel: "Sections",
    nav: { services: "Services", process: "How we work", contact: "Contact" },
    label: "APPLIED ARTIFICIAL INTELLIGENCE",
    title: <><span>We automate tasks.</span> <span>Build custom technology solutions.</span> <span>And train teams to use AI safely and efficiently.</span></>,
    description: "We work with small and mid-sized businesses, professional firms and real estate agencies that want to spend less time on repetitive tasks and serve their clients better.",
    heroCta: "Tell us what you need",
    heroWhatsapp: "Message us on WhatsApp",
    servicesTitle: "What we do",
    servicesLead: "Three lines of work. Each solution is adapted after reviewing the company's processes and tools.",
    examplesLabel: "Examples",
    resultLabel: "What stays in place",
    services: [
      {
        title: "Task automation",
        text: "Enquiries, appointments, emails and client follow-up that run on their own, with a person stepping in when needed.",
        examples: [
          "An immediate first reply to every enquiry, assignment to a team member and reminders until the next step.",
          "A WhatsApp or chat assistant that answers with company-approved information and hands over to a person when needed.",
          "Appointment booking over WhatsApp with confirmation, reminders and rescheduling.",
          "Invoices received by email read and logged in an organised spreadsheet.",
        ],
        result: "A tested, documented workflow with a user guide and a clear way to switch back to manual work if something fails.",
      },
      {
        title: "Custom technology solutions",
        text: "Connected tools, data in one place and answers that are easy to find, designed for your business.",
        examples: [
          "A quote generator that builds estimates from each order's details.",
          "Forms, CRM and spreadsheets connected so data no longer has to be copied by hand.",
          "An assistant that finds answers in manuals, contracts or internal documents.",
          "Sales reports that build themselves from data in several tools.",
        ],
        result: "A solution delivered in stages, with testing, documentation and handover to the team. If the starting point is unclear, an initial assessment sets the priorities.",
      },
      {
        title: "AI training",
        text: "Your team learns to use AI safely and efficiently on real work, with clear criteria for reviewing the results.",
        examples: [
          "Preparing sales proposals with AI and reviewing the result before sending it.",
          "Writing routine documents and emails with a shared method across the team.",
          "Summarising and analysing reports, surveys or meetings.",
          "Choosing suitable tools and protecting confidential information.",
        ],
        result: "Task guides, criteria for reviewing AI output and support until the team makes it part of daily work.",
      },
    ] as Service[],
    disclaimer: "These examples show solutions we can implement; they are not client case studies or guaranteed results. Scope is defined for each project.",
    aboutTitle: "Who we are",
    aboutText: "Magno Proyectos is a boutique AI and automation consultancy. It is led by Sebastián, who has more than 20 years of experience leading technology teams and projects in finance, real estate, education and HR. We combine business understanding, technical implementation and hands-on support for teams.",
    processTitle: "How we work",
    steps: [
      { title: "We understand the problem", text: "We review the process, tools and available data before proposing a solution." },
      { title: "We define the solution", text: "We agree on the scope, what gets automated and when a person steps in." },
      { title: "We put it into operation", text: "We test, document and support the team. We measure results by comparing before and after." },
    ] as Step[],
    contactTitle: "Tell us what your business needs.",
    contactText: "We start by understanding the problem.",
    emailButton: "Email us",
    whatsappButton: "Message us on WhatsApp",
    whatsappText: "Hello, I would like to tell you what my business needs.",
    status: "A new chapter, underway",
    language: "Leer en español",
  },
}

export default function LandingPage({ lang = "es" }: { lang?: Locale }) {
  const copy = content[lang]
  return (
    <div className="page" lang={lang}>
      {/* Barra marfil con el sello coral con aro (versión principal del manual de marca). */}
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href={lang === "es" ? "/" : "/en/"}>
            <img src="/sello-magno-proyectos.svg" alt={copy.home} width={1024} height={1024} />
          </a>
          <nav className="nav" aria-label={copy.navLabel}>
            <a className="nav-section" href="#servicios">{copy.nav.services}</a>
            <a className="nav-section" href="#proceso">{copy.nav.process}</a>
            <a href="#contacto">{copy.nav.contact}</a>
            <a className="language-link" href={lang === "es" ? "/en/" : "/es/"} lang={lang === "es" ? "en" : "es"} aria-label={copy.language}>
              {lang === "es" ? "EN" : "ES"}<span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
      <main id="main-content">
        <section className="container hero">
          <div className="hero-text">
            <p className="eyebrow"><span aria-hidden="true" />{copy.label}</p>
            <h1>{copy.title}</h1>
            <p className="description">{copy.description}</p>
            <div className="hero-actions">
              <a className="button button-ink" href="#contacto">{copy.heroCta}</a>
              <a className="button button-line" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(copy.whatsappText)}`} target="_blank" rel="noopener noreferrer">{copy.heroWhatsapp}</a>
            </div>
          </div>
          <img className="hero-seal" src="/sello-magno-proyectos.svg" alt="" aria-hidden="true" width={1024} height={1024} />
        </section>
        <section id="servicios" className="container services" aria-labelledby="servicios-titulo">
          <div className="section-head">
            <h2 id="servicios-titulo">{copy.servicesTitle}</h2>
            <p className="section-lead">{copy.servicesLead}</p>
          </div>
          <div className="service-grid">
            {copy.services.map((service, i) => (
              <article className="service-card" key={service.title}>
                <span className="service-number" aria-hidden="true">{`0${i + 1}`}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <h4 className="examples-label">{copy.examplesLabel}</h4>
                <ul className="examples">
                  {service.examples.map((example) => <li key={example}>{example}</li>)}
                </ul>
                <p className="result"><strong>{copy.resultLabel}:</strong> {service.result}</p>
              </article>
            ))}
          </div>
          <p className="disclaimer">{copy.disclaimer}</p>
        </section>
        <section id="nosotros" className="container about" aria-labelledby="nosotros-titulo">
          <h2 id="nosotros-titulo">{copy.aboutTitle}</h2>
          <p>{copy.aboutText}</p>
        </section>
        <section id="proceso" className="process-section" aria-labelledby="proceso-titulo">
          <div className="container process">
            <h2 id="proceso-titulo">{copy.processTitle}</h2>
            <ol className="steps">
              {copy.steps.map((step, i) => (
                <li key={step.title}>
                  <span className="step-number" aria-hidden="true">{`0${i + 1}`}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="contacto" className="band-coral" aria-labelledby="contacto-titulo">
          <div className="container contact">
            <h2 id="contacto-titulo">{copy.contactTitle}</h2>
            <p>{copy.contactText}</p>
            <div className="contact-actions">
              <a className="button" href={`mailto:${EMAIL}`}>{copy.emailButton}</a>
              <a className="button button-outline" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(copy.whatsappText)}`} target="_blank" rel="noopener noreferrer">{copy.whatsappButton}</a>
            </div>
            <p className="contact-details">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <span aria-hidden="true">·</span>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_LABEL}</a>
            </p>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <span className="status"><span aria-hidden="true" />{copy.status}</span>
        <span>© {new Date().getFullYear()} Magno Proyectos · <a href={`mailto:${EMAIL}`}>{EMAIL}</a></span>
      </footer>
    </div>
  )
}
