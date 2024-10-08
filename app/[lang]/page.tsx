'use client'

import { ContactForm, Footer } from "@/components/components-customs"
import TwoColumnContactForm from "@/components/components-customs/contact-form/TwoColumnContactForm"
import Header from "@/components/components-customs/headers/Header"
import TypingAnimationHero from "@/components/components-customs/hero-sections/TypingAnimationHero"
import HeroSection from "@/components/components-customs/HeroSection"
import CarouselServiceSection from "@/components/components-customs/service-sections/CarouselServiceSection"
import ServiceSection from "@/components/components-customs/ServiceSection"
import useTranslationStore from "@/stores/TranslationStore"

export default function Home() {
  const { dictionary, language, setLanguage } = useTranslationStore()

  return (
    <div>
      <Header />
      <TypingAnimationHero />
      <CarouselServiceSection />
      <TwoColumnContactForm />
      <Footer />
    </div>
  )
}