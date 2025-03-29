import type { Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/dictionaries"
import LandingPage from "@/components/landing-page"

export default async function Home(props: {
  params: { lang: Locale }
}) {
  const { lang } = props.params;
  const dictionary = await getDictionary(lang)

  return <LandingPage dictionary={dictionary} lang={lang} />
}

