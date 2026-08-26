import { db } from "@/lib/prisma"

interface GetProductsCategoriesParams {
  clinicId?: string
}

export async function getProductsCategories({
  clinicId,
}: GetProductsCategoriesParams = {}) {
  try {
    const categories = await db.category.findMany({
      // where: {
      //   ...(clinicId ? { clinicId } : {}),
      //   products: {
      //     some: {
      //       isActive: true,
      //     },
      //   },
      // },
      // orderBy: {
      //   name: "asc",
      // },
      select: {
        id: true,
        name: true,
        description: true,
        products: {
          where: {
            isActive: true,
            ...(clinicId ? { clinicId } : {}),
          },
          orderBy: {
            name: "asc",
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
