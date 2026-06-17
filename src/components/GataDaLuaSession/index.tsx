import { getProductsCategories } from "@/data/get-product-categories"
import Image from "next/image"
import CarouselStore from "./components/CarouselStore"
import Link from "next/link"

const GataDaLuaSession = async () => {
  const categories = await getProductsCategories()

  const categoryGataDaLua = categories[0]

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
                Aromaterapia
              </p>
            </div>
          </div>
          <div>
            <p className="line-clamp-4 text-center text-sm">
              {categoryGataDaLua.description}
            </p>
            <div className="flex justify-end">
              <Link href="/gata-da-lua" className="text-amber-400 lg:hidden">
                leia mais
              </Link>
            </div>
          </div>
        </div>

        <CarouselStore products={categoryGataDaLua.products} />
      </div>
    </section>
  )
}

export default GataDaLuaSession
