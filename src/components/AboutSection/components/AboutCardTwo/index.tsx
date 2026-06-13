import CTAButton from "@/components/CTAButton"
import Image from "next/image"

const AboutCardTwo = () => {
  return (
    <div className="flex h-[70vh] w-full flex-col gap-4 lg:h-[90vh]">
      <div className="flex h-1/2 w-full flex-col gap-4">
        <div className="flex h-1/2 w-full gap-4">
          <div className="bg-beige-gradient text-cream h-full flex-1 rounded-lg p-1 md:p-4">
            <h3 className="text-lg font-bold lg:text-2xl"> 2022</h3>
            <p className="text-xs uppercase">Bacharel em Fisioterapia</p>
          </div>
          <div className="bg-cream-gradient text-blue-dark h-full flex-1 rounded-lg p-1 md:p-4">
            <h3 className="text-lg font-bold lg:text-2xl"> 2026</h3>
            <p className="text-xs uppercase">
              PÓS GRADUANDA EM DOCÊNCIA DO ENSINO SUPERIOR
            </p>
          </div>
        </div>
        <div className="flex h-1/2 w-full gap-4">
          <div className="bg-beige-gradient text-cream h-full flex-1 rounded-lg p-1 md:p-4">
            <h3 className="text-lg font-bold lg:text-2xl"> 2023</h3>
            <p className="text-xs uppercase">
              PÓS GRADUADA EM FISIOTERAPIA NAS DISFUNÇÕES TEMPOROMANDIBULARES E
              DOR OROFACIAL
            </p>
          </div>
          <div className="bg-blue-gradient text-cream h-full flex-1 rounded-lg p-1 md:p-4">
            <h3 className="text-lg font-bold lg:text-2xl"> 2023</h3>
            <p className="text-xs uppercase">PÓS GRADUADA EM ACUPUNTURA</p>
          </div>
        </div>
      </div>
      <div className="relative h-1/2 w-full overflow-hidden rounded-lg">
        <Image
          src="/images/about/about-action.webp"
          alt="Letícia Mori"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-amber-900/40" />

        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          <h2 className="text-2xl font-semibold">Tomada de ação</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            eum tempora ratione quidem aliquid veniam, iure culpa aspernatur
            nemo, repellat pariatur quisquam quam dolores rem vitae explicabo
            rerum praesentium inventore corrupti eius perferendis facere ad
            quod. Itaque eligendi quisquam iusto!
          </p>

          <div className="flex justify-end">
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCardTwo
