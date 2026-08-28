import Image from "next/image"
import CTAButton from "../CTAButton"
import { getClinic } from "@/data/get-clinic"
import SocialMidiaFooter from "./components/SocialMidiaFooter"
import LinksPageFooter from "./components/LinksPageFooter"
import ServiceHoursCard from "./components/ServiceHoursCard"

const Footer = async () => {
  const clinic = await getClinic()

  return (
    <footer className="bg-blue-dark min-h-[30vh] w-full text-white">
      {/* Social Mídia  */}
      <SocialMidiaFooter
        socialMidia={clinic?.socialMedia}
        whatsapp={clinic?.whatsapp}
      />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center gap-6 px-4 py-8 lg:flex-row lg:justify-around lg:gap-12 lg:px-16">
        {/* Sobre */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/images/logo2.svg"
              alt="Logo da Letícia Moni"
              width={72}
              height={72}
              className="object-contain"
            />
            <h3 className="font-fancy text-cream text-3xl tracking-wider">
              Letícia Moni
            </h3>
          </div>

          <div>
            <p className="text-center text-sm opacity-90">
              Na Letícia Moni Fisioterapia, cada cuidado é pensado de forma
              individualizada, unindo conhecimento, acolhimento e técnicas
              especializadas para promover saúde, funcionalidade e qualidade de
              vida. Um atendimento humanizado, dedicado à reabilitação e ao
              bem-estar em todas as etapas do processo.
            </p>
          </div>

          <CTAButton />
        </div>

        {/* Links e Horário de Atendimento*/}
        <div className="flex w-full flex-col items-center gap-8 md:flex-row lg:items-start lg:justify-between">
          {/* LinksPage */}
          <LinksPageFooter />

          {/* Horário de atendimento */}
          <ServiceHoursCard businessHours={clinic?.businessHours} />
        </div>
      </div>

      {/* Rodapé */}
      <div className="px-4 md:px-8 lg:px-16">
        <div className="border-t py-4">
          <p className="text-cream text-center text-sm">
            Todos os direitos reservados - 2026
          </p>
          <p className="text-center">
            Desenvolvido por{" "}
            <a
              href="https://wa.me/5535999110933"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/70 transition-colors hover:text-white hover:underline"
            >
              Misael Borges — Desenvolvedor FullStack
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
