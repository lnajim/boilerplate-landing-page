'use client'

import { appConfig } from "@/app.config";
import GradientHeader from "@/components/components-customs/Header/GradientHeader";
import Header from "@/components/components-customs/Header/Header";
import SimpleContactForm from "@/components/contact-forms/SimpleContactForm";
import TwoColumnContactForm from "@/components/contact-forms/TwoColumnContactForm";
import MultiColumnFooter from "@/components/footers/MultiColumnFooter";
import SimpleFooter from "@/components/footers/SimpleFooter";
import AnimatedSvgHero from "@/components/hero-sections/AnimatedSvgHero";
import GradientFloatingHero from '@/components/hero-sections/GradientFloatingHero';
import InteractiveParticlesHero from "@/components/hero-sections/InteractiveParticlesHero";
import ParallaxScrollHero from "@/components/hero-sections/ParallaxScrollHero";
import TypingAnimationHero from "@/components/hero-sections/TypingAnimationHero";
import CarouselServiceSection from "@/components/service-sections/CarouselServiceSection";
import GridServiceSection from "@/components/service-sections/GridServiceSection";
import useTranslationStore from "@/stores/TranslationStore";
import React, { useState } from 'react';

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
      <ParallaxScrollHero
        title={dictionary.HeroSection.title}
        description={dictionary.HeroSection.description}
        callToActionButton={dictionary.HeroSection.buttonText}
      />
      <SimpleContactForm
        title={dictionary.ContactForm.title}
        namePlaceholder={dictionary.ContactForm.namePlaceholder}
        emailPlaceholder={dictionary.ContactForm.emailPlaceholder}
        messagePlaceholder={dictionary.ContactForm.messagePlaceholder}
        submitButtonText={dictionary.ContactForm.submitButton}
      />
      <TwoColumnContactForm
        title={dictionary.ContactForm.title}
        namePlaceholder={dictionary.ContactForm.namePlaceholder}
        emailPlaceholder={dictionary.ContactForm.emailPlaceholder}
        messagePlaceholder={dictionary.ContactForm.messagePlaceholder}
        submitButtonText={dictionary.ContactForm.submitButton}
      />
      <MultiColumnFooter
        companyName={""}
        links={[
          { category: "category", items: appConfig.menu },
          { category: "category", items: [] },
          { category: "category", items: [] },
          { category: "category", items: [] },
        ]}
      />
    </div>
  )
}