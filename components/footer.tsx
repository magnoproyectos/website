import Link from "next/link"
import { Twitter, Github, Linkedin, Facebook } from "lucide-react"

interface FooterProps {
  dictionary: {
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

export default function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-white" />
              <span className="font-bold">MagnoProyectos</span>
            </Link>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white">
                  {dictionary.company.about}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white">
                  {dictionary.company.careers}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white">
                  {dictionary.company.blog}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white">
                  {dictionary.company.legal}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white">
                  {dictionary.product.features}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white">
                  {dictionary.product.pricing}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white">
                  {dictionary.product.docs}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white">
                  {dictionary.product.resources}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white">
                  {dictionary.support.help}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white">
                  {dictionary.support.status}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white">
                  {dictionary.support.contact}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-white">
                  {dictionary.support.community}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/70">
            {dictionary.copyright.replace("{year}", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  )
}

