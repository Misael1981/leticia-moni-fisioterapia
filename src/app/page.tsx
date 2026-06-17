import AboutSection from "@/components/AboutSection"
import GataDaLuaSession from "@/components/GataDaLuaSession"
import HeroSection from "@/components/HeroSection"
import OurServices from "@/components/OurServices"

export default function Home() {
  return (
    <div className="w-full">
      <main>
        <HeroSection />

        <OurServices />

        <AboutSection />

        <GataDaLuaSession />
      </main>
    </div>
  )
}
