import Image from "next/image"

type BrandIntroProps = {
  description?: string
}

const BrandIntro = ({ description }: BrandIntroProps) => {
  return (
    <section className="w-full max-w-6xl space-y-4 text-white">
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
        <p className="text-center text-sm">
          {description || "Conheça nossos produtos de aromaterapia."}
        </p>
      </div>
    </section>
  )
}

export default BrandIntro
