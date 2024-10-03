'use client'

import { appConfig } from "@/app.config";
import SimpleContactForm from "@/components/components-customs/contact-form/SimpleContactForm";
import TwoColumnContactForm from "@/components/components-customs/contact-form/TwoColumnContactForm";
import MultiColumnFooter from "@/components/components-customs/footers/MultiColumnFooter";
import SimpleFooter from "@/components/components-customs/footers/SimpleFooter";
import GradientHeader from "@/components/components-customs/headers/GradientHeader";
import TypingAnimationHero from "@/components/components-customs/hero-sections/TypingAnimationHero";
import CarouselServiceSection from "@/components/components-customs/service-sections/CarouselServiceSection";
export default function Home() {


  return (
    <div>
      <GradientHeader />
      <TypingAnimationHero />
      <CarouselServiceSection />
      <SimpleContactForm />
      <TwoColumnContactForm />
      <SimpleFooter />
      <MultiColumnFooter links={[{ category: "test", items: appConfig.menu }]} />
    </div>
  )
}