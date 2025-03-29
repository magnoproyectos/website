"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

interface PricingProps {
  dictionary: {
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
  isAnnual: boolean
  setIsAnnual: (value: boolean) => void
}

export default function Pricing({ dictionary, isAnnual, setIsAnnual }: PricingProps) {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dictionary.title}</h2>
            <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">{dictionary.subtitle}</p>
          </div>

          <div className="flex items-center space-x-2 mt-8">
            <span className={`text-sm ${!isAnnual ? "text-white" : "text-white/70"}`}>{dictionary.monthlyLabel}</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-sm ${isAnnual ? "text-white" : "text-white/70"}`}>{dictionary.annualLabel}</span>
            {isAnnual && (
              <span className="ml-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                {dictionary.annualDiscount}
              </span>
            )}
          </div>
        </div>

        <div className="mx-auto grid max-w-screen-lg gap-6 py-12 md:grid-cols-3">
          {/* Starter Plan */}
          <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-black p-6 shadow-lg">
            <div>
              <h3 className="text-xl font-bold">{dictionary.plans.starter.name}</h3>
              <p className="mt-2 text-sm text-white/70">{dictionary.plans.starter.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold">
                  {isAnnual ? dictionary.plans.starter.price.annual : dictionary.plans.starter.price.monthly}
                </span>
                <span className="text-sm text-white/70">{isAnnual ? "/year" : "/month"}</span>
              </div>
              <ul className="mt-6 space-y-4">
                {dictionary.plans.starter.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button className="mt-8 w-full">{dictionary.plans.starter.cta}</Button>
          </div>

          {/* Pro Plan */}
          <div className="relative flex flex-col justify-between rounded-lg border border-purple-500/50 bg-black p-6 shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-500 px-3 py-1 text-xs font-medium">
              {dictionary.plans.pro.popular}
            </div>
            <div>
              <h3 className="text-xl font-bold">{dictionary.plans.pro.name}</h3>
              <p className="mt-2 text-sm text-white/70">{dictionary.plans.pro.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold">
                  {isAnnual ? dictionary.plans.pro.price.annual : dictionary.plans.pro.price.monthly}
                </span>
                <span className="text-sm text-white/70">{isAnnual ? "/year" : "/month"}</span>
              </div>
              <ul className="mt-6 space-y-4">
                {dictionary.plans.pro.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button className="mt-8 w-full bg-purple-500 hover:bg-purple-600">{dictionary.plans.pro.cta}</Button>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-black p-6 shadow-lg">
            <div>
              <h3 className="text-xl font-bold">{dictionary.plans.enterprise.name}</h3>
              <p className="mt-2 text-sm text-white/70">{dictionary.plans.enterprise.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold">
                  {isAnnual ? dictionary.plans.enterprise.price.annual : dictionary.plans.enterprise.price.monthly}
                </span>
                <span className="text-sm text-white/70">{isAnnual ? "/year" : "/month"}</span>
              </div>
              <ul className="mt-6 space-y-4">
                {dictionary.plans.enterprise.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 space-y-2">
              <Button className="w-full">{dictionary.plans.enterprise.cta}</Button>
              <Button variant="link" className="w-full text-white/70 hover:text-white">
                {dictionary.plans.enterprise.contactSales}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

