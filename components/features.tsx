import { Server, Shield, Zap, Globe } from "lucide-react"

interface FeaturesProps {
  dictionary: {
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
}

export default function Features({ dictionary }: FeaturesProps) {
  return (
    <section id="features" className="py-20 md:py-32 bg-white/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dictionary.title}</h2>
            <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">{dictionary.subtitle}</p>
          </div>
        </div>

        <div className="mx-auto grid max-w-screen-lg gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/10 bg-black p-6">
            <div className="rounded-full bg-purple-500/10 p-3">
              <Zap className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold">{dictionary.features.performance.title}</h3>
            <p className="text-center text-sm text-white/70">{dictionary.features.performance.description}</p>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/10 bg-black p-6">
            <div className="rounded-full bg-blue-500/10 p-3">
              <Shield className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold">{dictionary.features.security.title}</h3>
            <p className="text-center text-sm text-white/70">{dictionary.features.security.description}</p>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/10 bg-black p-6">
            <div className="rounded-full bg-green-500/10 p-3">
              <Server className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-bold">{dictionary.features.scalability.title}</h3>
            <p className="text-center text-sm text-white/70">{dictionary.features.scalability.description}</p>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/10 bg-black p-6">
            <div className="rounded-full bg-orange-500/10 p-3">
              <Globe className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold">{dictionary.features.global.title}</h3>
            <p className="text-center text-sm text-white/70">{dictionary.features.global.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

