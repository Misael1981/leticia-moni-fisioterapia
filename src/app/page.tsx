import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import OurServices from "@/components/OurServices"

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main>
        <HeroSection />
        <OurServices />
      </main>
    </div>
  )
}
