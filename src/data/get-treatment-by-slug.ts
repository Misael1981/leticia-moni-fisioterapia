import { db } from "@/lib/prisma"

export async function getTreatmentBySlug(slug: string) {
  try {
    const treatment = await db.treatment.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        name: true,
        description: true,
        slug: true,
        imageUrl: true,
      },
    })

    return treatment
  } catch (error) {
    console.error("Erro ao buscar  tratamento:", error)
    throw new Error("Não foi possível carregar o tratamento.")
  }
}
