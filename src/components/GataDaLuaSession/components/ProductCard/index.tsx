import { Button } from "@/components/ui/button"
import { ProductDTO } from "@/dtos/categories-products.dto"
import Image from "next/image"

type ProductCardProps = {
  product: ProductDTO
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="text-blue-custom flex h-100 w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white md:h-135">
      <div className="relative h-64 w-full md:h-96">
        <Image
          src={product.images[0]?.url || "/dores.webp"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="space-2">
          <h3 className="font-fancy text-2xl font-bold tracking-wider">
            {product.name}
          </h3>

          {product.indications && (
            <p>
              <span className="font-semibold">Indicado: </span>
              {product.indications}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <Button className="bg-blue-gradient text-white">Saiba mais</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
