import Image from "next/image"
import CTAButton from "../CTAButton"
import { linksPage, openingHours } from "@/constants/navLinks"
import Link from "next/link"
import { getClinic } from "@/data/get-clinic"
import SocialMidiaFooter from "./components/SocialMidiaFooter"

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <CTAButton />
        </div>

        {/* Links e Horário de Atendimento*/}
        <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row lg:justify-between">
          {/* LinksPage */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Links da Página</h4>

            <nav>
              <ul className="space-y-2 text-sm opacity-90">
                {linksPage.map((link) => (
                  <li
                    key={link.id}
                    className="hover:bg-blue-custom rounded-md p-1"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Horário de atendimento */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Horário de Atendimento</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {openingHours.map((hour) => (
                <li
                  key={hour.id}
                  className="hover:bg-blue-custom space-x-2 rounded-md p-1"
                >
                  <span className="font-semibold">{hour.day}:</span>
                  <span>
                    Das {hour.startTime} às {hour.endTime}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="px-4 md:px-8 lg:px-16">
        <div className="border-t py-4">
          <p className="text-center text-sm opacity-90">
            Todos os direitos reservados - 2026
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
