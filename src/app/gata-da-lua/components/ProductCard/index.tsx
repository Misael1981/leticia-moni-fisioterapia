import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

type ProductCardProps = {
  product: {
    name: string
    id: string
    description: string | null
    benefits: string | null
    indications: string | null
    images: {
      id: string
      url: string
    }[]
  }
  phone: string | null
}

const ProductCard = ({ product, phone }: ProductCardProps) => {
  const imageUrl = product.images[0]?.url || "/images/logo.svg"

  return (
    <article
      id={product.id}
      className="group flex w-full max-w-5xl flex-col gap-4 rounded-lg bg-white/3 p-4 transition-shadow hover:shadow-lg lg:flex-row-reverse"
    >
      {/* Imagem */}
      <div className="shrink-0 overflow-hidden rounded-md lg:w-62 lg:self-stretch">
        <Image
          src={imageUrl}
          alt={product.name || "Imagem do produto"}
          width={250}
          height={250}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex w-full flex-col justify-between">
        <div>
          {/* Nome */}
          <h3 className="text-cream w-fit text-xl font-semibold">
            {product.name}
          </h3>

          {/* Descrição */}
          <p className="mt-2 text-sm">{product.description}</p>

          {/* Informações */}
          <div className="mt-4 space-y-3 text-xs">
            <div>
              <p className="text-base font-semibold">Indicações:</p>
              <p className="mt-1 text-white/80">{product.indications}</p>
            </div>

            <div>
              <p className="text-base font-semibold">Benefícios:</p>
              <p className="mt-1 text-white/80">{product.benefits}</p>
            </div>
          </div>
        </div>

        {/* Ação */}
        <div className="mt-4 flex justify-end">
          <Link
            href={`https://wa.me/${phone?.replace(/\D/g, "")}?text=${encodeURIComponent(
              "Olá! Gostaria de saber mais informações sobre os Blends disponíveis.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-md bg-green-600 px-4 py-2 hover:bg-green-700"
          >
            <FaWhatsapp />
            Comprar
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
