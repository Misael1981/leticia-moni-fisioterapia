import { getProductsCategories } from "@/data/get-product-categories"
import Image from "next/image"
import CarouselStore from "./components/CarouselStore"
import Link from "next/link"

const GataDaLuaSession = async () => {
  const clinicId = "main-clinic"
  const categories = await getProductsCategories({ clinicId })

  const targetCategory =
    categories.find((c) => c.name === "Produtos Terapêuticos") || categories[0]

  if (!targetCategory) {
    return null
  }

  return (
    <section className="bg-blue-gradient flex min-h-[50vh] w-full justify-center p-4 text-white lg:p-8">
      <div className="w-full max-w-6xl space-y-6">
        <div className="space-y-4">
          <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
            <div>
              <Image
                src="/images/gata-da-lua/logo-gata-da-lua.webp"
                alt="Logo Gata da Lua"
                width={90}
                height={90}
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <h2 className="font-story text-center text-4xl font-bold text-white/80 lg:text-6xl">
                Gata da Lua
              </h2>
              <p className="font-heading text-center text-sm tracking-widest text-white/60 uppercase">
                {categories[0].name}
              </p>
            </div>
          </div>

          <div>
            {/* 3. Optional chaining caso a categoria não tenha descrição cadastrada */}
            <p className="line-clamp-4 text-center text-sm">
              {targetCategory.description ||
                "Conheça nossos produtos de aromaterapia."}
            </p>
            <div className="flex justify-end">
              <Link href="/gata-da-lua" className="text-amber-400 lg:hidden">
                leia mais
              </Link>
            </div>
          </div>
        </div>

        {/* 4. Passa apenas os produtos da categoria garantida */}
        {categories[0].products && categories[0].products.length > 0 && (
          <CarouselStore products={categories[0].products} />
        )}

        <div className="flex justify-end">
          <Link
            href="/gata-da-lua"
            className="bg-cream-gradient text-blue-custom rounded-md px-3 py-2 font-semibold"
          >
            Conheça toda nossa linha
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GataDaLuaSession
