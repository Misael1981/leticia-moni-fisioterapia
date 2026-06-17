import AboutSection from "@/components/AboutSection"
import GataDaLuaSession from "@/components/GataDaLuaSession"
import HeroSection from "@/components/HeroSection"
import OurServices from "@/components/OurServices"
import TestimonialSection from "@/components/TestimonialSection"

export default function Home() {
  return (
    <div className="w-full">
      <main>
        <HeroSection />

        <OurServices />

        <AboutSection />

        <GataDaLuaSession />

        <TestimonialSection />
      </main>
    </div>
  )
}
