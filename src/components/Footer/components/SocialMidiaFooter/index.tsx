import {
  parseSocialMedia,
  SocialMediaLinks,
} from "@/helpers/parse-social-media"
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import type { Prisma } from "@misael1981/physio-database"

type SocialMidiaFooterProps = {
  socialMidia: Prisma.JsonValue | null | undefined
  whatsapp: string | null | undefined
}

const SOCIAL_ICONS = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
} as const

type SocialPlatform = keyof typeof SOCIAL_ICONS

function getActiveSocialLinks(socialMedia: SocialMediaLinks) {
  return (Object.entries(socialMedia) as [SocialPlatform, string][]).filter(
    ([platform, url]) => platform in SOCIAL_ICONS && Boolean(url),
  )
}

const SocialMidiaFooter = ({
  socialMidia,
  whatsapp,
}: SocialMidiaFooterProps) => {
  const socialMedia = socialMidia ? parseSocialMedia(socialMidia) : null
  const socialLinks = socialMedia ? getActiveSocialLinks(socialMedia) : []

  if (!whatsapp && socialLinks.length === 0) return null

  const iconLinkClass =
    "flex items-center justify-center rounded-full text-white shadow-sm transition-all hover:scale-110 hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"

  return (
    <div className="flex flex-col items-center justify-center gap-4 border-b-2 p-4 lg:flex-row lg:justify-between lg:px-8">
      <div>
        <p>Nos siga nas redes sociais</p>
      </div>

      <nav>
        <ul className="flex gap-4">
          {whatsapp && (
            <li>
              <a
                href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={iconLinkClass}
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </li>
          )}
          {socialLinks.map(([platform, url]) => {
            const Icon = SOCIAL_ICONS[platform]
            return (
              <li key={platform}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconLinkClass}
                >
                  <Icon className="h-6 w-6" />
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default SocialMidiaFooter
