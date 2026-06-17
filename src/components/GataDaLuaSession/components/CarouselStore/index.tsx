"use client"

import { useEffect, useState } from "react"
import { ProductDTO } from "@/dtos/categories-products.dto"
import ProductCard from "../ProductCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

type CarouselStoreProps = {
  products: ProductDTO[]
}

const CarouselStore = ({ products }: CarouselStoreProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())

    api.on("select", onSelect)
    api.on("reInit", onSelect)

    const t = setTimeout(() => onSelect(), 0)

    return () => {
      clearTimeout(t)
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  return (
    <div className="flex w-full justify-center md:px-8 lg:px-0">
      <Carousel
        setApi={setApi}
        className="xs:max-w-xs mx-auto w-full max-w-70 sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
        opts={{
          loop: true,
          align: "center",
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem
              key={product.id}
              className="pl-4 sm:basis-3/5 lg:basis-1/2"
            >
              <div
                className={`h-full w-full p-1 transition-all duration-300 ${
                  index === selectedIndex
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-40"
                }`}
              >
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious className="left-0 size-10 rounded-full border-none bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 sm:-left-4 lg:-left-12" />
        <CarouselNext className="right-0 size-10 rounded-full border-none bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 sm:-right-4 lg:-right-12" /> */}
      </Carousel>
    </div>
  )
}

export default CarouselStore
