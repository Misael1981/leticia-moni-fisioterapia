import { db } from "@/lib/prisma"

export async function getClinic() {
  try {
    const clinic = db.clinic.findFirst({
      include: {
        businessHours: true,
      },
    })

    return clinic
  } catch (error) {
    console.error("Erro ao buscar os dados da clínica:", error)
    throw new Error("Não foi possível carregar os dados da clínica.")
  }
}
