'use client'

import { ContactForm, Footer } from "@/components/components-customs"
import Header from "@/components/components-customs/headers/Header"
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