'use client'

import { Header, ContactForm, Footer } from "@/components/components-customs"
import HeroSection from "@/components/components-customs/HeroSection"
import ServiceSection from "@/components/components-customs/ServiceSection"
import useTranslationStore from "@/stores/TranslationStore"

export default function Home() {
  const { dictionary, language, setLanguage } = useTranslationStore()

  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceSection />
      <ContactForm />
      <Footer />
    </div>
  )
}