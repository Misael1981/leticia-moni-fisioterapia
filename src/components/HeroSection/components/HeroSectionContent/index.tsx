import CTAButton from "@/components/CTAButton"
import Image from "next/image"

const HeroSectionContent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:w-1/2 lg:flex-1 lg:pl-32">
      <div className="relative h-24 w-24">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="text-center text-white">
        <h1 className="font-fancy text-5xl tracking-wider"> Letícia Moni</h1>
        <p className="text-lg">
          Fisioterapia Especializada em Reabilitação de Face, Cabeça e Pescoço
        </p>
      </div>
      <CTAButton />
    </div>
  )
}

export default HeroSectionContent
