import { testimonialsBase } from "@/constants/forks"
import { db } from "@/lib/prisma"
import { Prisma } from "@misael1981/physio-database"

const LIMIT = 25

export type TestimonialType = Prisma.TestimonialGetPayload<{
  select: {
    name: true
    id: true
    createdAt: true
    description: true
    thumbnail: true
    recovery: true
    quote: true
    rating: true
    isPublished: true
    patient: {
      select: {
        id: true
        name: true
        avatarUrl: true
      }
    }
  }
}>

export async function getTestimonials(): Promise<TestimonialType[]> {
  try {
    const dbTestimonials = await db.testimonial.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
      take: LIMIT,
      select: {
        id: true,
        name: true,
        recovery: true,
        thumbnail: true,
        quote: true,
        rating: true,
        description: true,
        isPublished: true,

        createdAt: true,
        patient: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
      },
    })

    if (dbTestimonials.length >= LIMIT) {
      return dbTestimonials
    }

    const needed = LIMIT - dbTestimonials.length

    const formattedLegacy: TestimonialType[] = testimonialsBase.map((item) => ({
      id: `legacy-${item.id}`,
      name: item.name,
      recovery: item.recovery,
      thumbnail: item.thumbnail || null,
      quote: item.quote,
      rating: item.rating,
      description: item.description,
      isPublished: item.isPublished,
      displayOrder: 0,
      createdAt: new Date("2023-01-01"), // Data antiga para ordenação se necessário

      patient: {
        id: item.patient.id,
        name: item.patient.name,
        avatarUrl: item.patient.avatarUrl || null,
      },
    }))

    const legacyToTake = formattedLegacy.slice(0, needed)

    return [...dbTestimonials, ...legacyToTake]
  } catch (error) {
    console.error("Erro ao buscar depoimentos:", error)
    return testimonialsBase.slice(0, LIMIT) as unknown as TestimonialType[]
  }
}
