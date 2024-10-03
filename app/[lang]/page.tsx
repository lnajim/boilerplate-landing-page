'use client'

import { appConfig } from "@/app.config";
import SimpleContactForm from "@/components/components-customs/contact-form/SimpleContactForm";
import TwoColumnContactForm from "@/components/components-customs/contact-form/TwoColumnContactForm";
import MultiColumnFooter from "@/components/components-customs/footers/MultiColumnFooter";
import SimpleFooter from "@/components/components-customs/footers/SimpleFooter";
import GradientHeader from "@/components/components-customs/headers/GradientHeader";
import ParallaxScrollHero from "@/components/components-customs/hero-sections/ParallaxScrollHero";

export default function Home() {


  return (
    <div>
      <GradientHeader />
      <ParallaxScrollHero />
      <SimpleContactForm />
      <TwoColumnContactForm />
      <SimpleFooter />
      <MultiColumnFooter links={[{ category: "test", items: appConfig.menu }]} />
    </div>
  )
}