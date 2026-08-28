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

export async function getProductsForGroups() {
  try {
    const category = await db.category.findFirst({
      where: {
        id: "06ff061f-9c83-450c-b60d-d5762a8ddee5",
      },
      select: {
        id: true,
        name: true,
        description: true,
        clinic: {
          select: {
            whatsapp: true,
          },
        },
        productsGroup: {
          orderBy: {
            position: "asc",
          },
          select: {
            id: true,
            name: true,
            description: true,
            products: {
              orderBy: {
                name: "asc",
              },
              select: {
                id: true,
                name: true,
                description: true,
                indications: true,
                benefits: true,
                price: true,
                images: {
                  select: {
                    id: true,
                    url: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    if (!category) return null

    return {
      ...category,
      productsGroup: category.productsGroup.map((group) => ({
        ...group,
        products: group.products.map((product) => ({
          ...product,
          price: Number(product.price),
        })),
      })),
    }
  } catch (error) {
    console.error("Erro ao buscar categorias de produtos:", error)
    throw new Error("Não foi possível carregar as categorias de produtos.")
  }
}
