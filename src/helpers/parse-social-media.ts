import { Prisma } from "@misael1981/physio-database"

export type SocialMediaLinks = {
  facebook?: string
  instagram?: string
  linkedin?: string
}

export function parseSocialMedia(json: Prisma.JsonValue): SocialMediaLinks {
  if (!json || typeof json !== "object" || Array.isArray(json)) return {}
  return json as SocialMediaLinks
}
