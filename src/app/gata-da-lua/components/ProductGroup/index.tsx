import ProductCard from "../ProductCard"

type ProductGroupProps = {
  group: {
    name: string
    id: string
    description: string | null
    products: {
      name: string
      id: string
      description: string | null
      benefits: string | null
      indications: string | null
      price: number
      images: {
        id: string
        url: string
      }[]
    }[]
  }
  phone: string | null
}

const ProductGroup = ({ group, phone }: ProductGroupProps) => {
  return (
    <section className="mt-8 w-full max-w-6xl space-y-6 text-white">
      <div className="border-cream flex items-start justify-between gap-4 border-b-2 pb-4">
        <div>
          <h2 className="font-heading text-cream text-2xl font-semibold">
            {group.name}
          </h2>
          {group.description ? (
            <p className="mt-1 text-sm text-gray-200/90">{group.description}</p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        {group.products.map((p) => (
          <ProductCard key={p.id} product={p} phone={phone} />
        ))}
      </div>
    </section>
  )
}

export default ProductGroup
