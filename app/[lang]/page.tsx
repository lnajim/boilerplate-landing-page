'use client'

import React, { useState } from 'react';
import GradientHeader from "@/components/components-customs/Header/GradientHeader"
import Header from "@/components/components-customs/Header/Header"
import ParallaxScrollHero from "@/components/hero-sections/ParallaxScrollHero"
import AnimatedSvgHero from "@/components/hero-sections/AnimatedSvgHero"
import TypingAnimationHero from "@/components/hero-sections/TypingAnimationHero"
import InteractiveParticlesHero from "@/components/hero-sections/InteractiveParticlesHero"
import GridServiceSection from "@/components/service-sections/GridServiceSection"
import CarouselServiceSection from "@/components/service-sections/CarouselServiceSection"
import SimpleContactForm from "@/components/contact-forms/SimpleContactForm"
import TwoColumnContactForm from "@/components/contact-forms/TwoColumnContactForm"
import SimpleFooter from "@/components/footers/SimpleFooter"
import MultiColumnFooter from "@/components/footers/MultiColumnFooter"
import useTranslationStore from "@/stores/TranslationStore"
import { Button } from "@/components/ui/button"
import GradientFloatingHero from '@/components/hero-sections/GradientFloatingHero';

export default function Home() {
  const { dictionary, language, setLanguage } = useTranslationStore()
  const [currentHero, setCurrentHero] = useState<number>(0)
  const [currentService, setCurrentService] = useState<number>(0)
  const [currentContact, setCurrentContact] = useState<number>(0)
  const [currentFooter, setCurrentFooter] = useState<number>(0)

  const heroComponents = [
    GradientFloatingHero,
    ParallaxScrollHero,
    AnimatedSvgHero,
    TypingAnimationHero,
    InteractiveParticlesHero
  ]

  const serviceComponents = [
    GridServiceSection,
    CarouselServiceSection
  ]

  const contactComponents = [
    SimpleContactForm,
    TwoColumnContactForm
  ]

  const footerComponents = [
    SimpleFooter,
    MultiColumnFooter
  ]

  const HeroComponent = heroComponents[currentHero]
  const ServiceComponent = serviceComponents[currentService]
  const ContactComponent = contactComponents[currentContact]
  const FooterComponent = footerComponents[currentFooter]

  const nextComponent = (setter: React.Dispatch<React.SetStateAction<number>>, length: number) => {
    setter((prev) => (prev + 1) % length)
  }

  // Transform the services data to match the expected format
  const servicesData = Object.entries(dictionary.ServicesSection)
    .filter(([key]) => key !== 'sectionTitle')
    .map(([_, value]) => value as { title: string; description: string });

  return (
    <div>
      {/* Choose which header to use */}
      <GradientHeader />
      {/* or */}
      <ParallaxScrollHero
        title={dictionary.HeroSection.title}
        description={dictionary.HeroSection.description}
        callToActionButton={dictionary.HeroSection.buttonText}
      />
      <GridServiceSection title={dictionary.ServicesSection.sectionTitle} services={servicesData} />
    </div>
  )
}