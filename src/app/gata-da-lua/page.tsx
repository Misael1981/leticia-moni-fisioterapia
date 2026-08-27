import { getProductsForGroups } from "@/data/get-product-categories"
import BrandIntro from "./components/BrandIntro"
import ProductGroup from "./components/ProductGroup"

export default async function Page() {
  const category = await getProductsForGroups()

  if (!category) {
    return null
  }

  return (
    <main className="bg-blue-gradient flex min-h-screen flex-col items-center gap-6 p-4">
      <BrandIntro
        description={
          category.description || "Conheça nossos produtos de aromaterapia."
        }
      />

      {category.productsGroup.map((group) => (
        <ProductGroup
          key={group.id}
          group={group}
          phone={category.clinic.whatsapp}
        />
      ))}
    </main>
  )
}
