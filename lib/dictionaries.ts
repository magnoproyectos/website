import "server-only"
import type { Locale } from "@/i18n-config"

export interface Dictionary {
  header: {
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
  hero: {
    title: string
    subtitle: string
    cta: string
    secondaryCta: string
  }
  pricing: {
    title: string
    subtitle: string
    monthlyLabel: string
    annualLabel: string
    annualDiscount: string
    plans: {
      starter: {
        name: string
        description: string
        price: {
          monthly: string
          annual: string
        }
        features: string[]
        cta: string
      }
      pro: {
        name: string
        description: string
        price: {
          monthly: string
          annual: string
        }
        features: string[]
        cta: string
        popular: string
      }
      enterprise: {
        name: string
        description: string
        price: {
          monthly: string
          annual: string
        }
        features: string[]
        cta: string
        contactSales: string
      }
    }
  }
  features: {
    title: string
    subtitle: string
    features: {
      performance: {
        title: string
        description: string
      }
      security: {
        title: string
        description: string
      }
      scalability: {
        title: string
        description: string
      }
      global: {
        title: string
        description: string
      }
    }
  }
  footer: {
    company: {
      about: string
      careers: string
      blog: string
      legal: string
    }
    product: {
      features: string
      pricing: string
      docs: string
      resources: string
    }
    support: {
      help: string
      status: string
      contact: string
      community: string
    }
    copyright: string
  }
}

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()

