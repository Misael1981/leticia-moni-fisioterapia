import { db } from "@/lib/prisma"

export async function getProductsCategories() {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        name: "asc",
      },
      select: {
        id: true,
        name: true,
        description: true,

        products: {
          where: {
            isActive: true,
          },
          select: {
            id: true,
            name: true,
            indications: true,
            images: {
              select: {
                id: true,
                url: true,
              },
            },
          },
        },
      },
    })

    return categories
  } catch (error) {
    console.error("Erro ao buscar categorias de produtos:", error)
    throw new Error("Não foi possível carregar as categorias de produtos.")
  }
}
