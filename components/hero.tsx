import { Button } from "@/components/ui/button"

interface HeroProps {
  dictionary: {
    title: string
    subtitle: string
    cta: string
    secondaryCta: string
  }
}

export default function Hero({ dictionary }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{dictionary.title}</h1>
              <p className="max-w-[600px] text-white/70 md:text-xl">{dictionary.subtitle}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-white text-black hover:bg-white/90">{dictionary.cta}</Button>
              <Button variant="outline">{dictionary.secondaryCta}</Button>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 relative">
                <div className="absolute inset-0 bg-black/50 rounded-lg backdrop-blur-sm border border-white/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
    </section>
  )
}

