import Image from "next/image"
import HeroSectionContent from "./components/HeroSectionContent"

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] bg-[url('/images/hero.webp')] bg-cover bg-center lg:min-h-[80vh]">
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 flex min-h-[70vh] w-full items-center justify-center px-4 lg:min-h-[80vh] lg:px-16">
        <HeroSectionContent />
        <div className="hidden min-h-[70vh] w-1/2 items-end lg:flex lg:min-h-[80vh]">
          <div className="relative h-108 w-108">
            <Image
              src="/images/leticia.webp"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
