'use client'

import Header from "@/app/[lang]/components/Header"
import HeroSection from "@/app/[lang]/components/HeroSection"
import ServiceSection from "@/app/[lang]/components/ServiceSection"
import ContactForm from "@/app/[lang]/components/ContactForm"
import Footer from "@/app/[lang]/components/Footer"
import useTranslationStore from "@/stores/TranslationStore"

export default function Home() {
  const { dictionary, language, setLanguage } = useTranslationStore()

  return (
    <div>
      <Header />
      {
        /**
         * 
         * <HeroSection dictionary={dictionary} />
      <ServiceSection dictionary={dictionary} />
      <ContactForm dictionary={dictionary} />
      <Footer dictionary={dictionary} />
         */
      }
    </div>
  )
}