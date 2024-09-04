// app/[lang]/page.tsx
import { Locale } from "../../i18n-type";
import { getDictionary } from "../../utils";
import { Header, Hero, Service, ContactForm, Footer } from "@/app/[lang]/components/index";
import { useLanguageStore } from '@/stores/LanguageStore'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const { setLanguage } = useLanguageStore.getState()
  setLanguage(lang)

  return (
    <>
      <Header dictionary={dictionary.Header} lang={lang} />
      <main>
        <Hero dictionary={dictionary.HeroSection} />
        <Service dictionary={dictionary.ServicesSection} />
        <ContactForm dictionary={dictionary.ContactForm} />
      </main>
      <Footer dictionary={dictionary.Footer} />
    </>
  );
}