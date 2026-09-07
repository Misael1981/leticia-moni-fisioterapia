import CTAButton from "@/components/CTAButton"
import Image from "next/image"

const AboutCardTwo = () => {
  return (
    <div className="hidden h-[70vh] w-full flex-col gap-4 md:flex lg:h-[90vh]">
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

        <div className="absolute inset-0 flex flex-col justify-between space-y-3 p-4 text-white">
          <h2 className="text-center text-lg font-semibold">
            Clique no botão abaixo, agende o seu atendimento e dê o primeiro
            passo para sua recuperação.
          </h2>
          <div className="space-y-2 text-justify">
            <p className="text-xs">
              Viver com dor ou tensão constante não precisa ser o seu normal.
            </p>
            <p className="text-xs">
              O desconforto e a disfunção drenam sua energia, atrapalham seu
              sono e roubam seu foco. Você não precisa apenas{" "}
              <strong>aguentar</strong> o dia a dia. Com um tratamento
              direcionado, é possível aliviar os pontos de pressão, recuperar a
              leveza e devolver ao seu corpo a liberdade para funcionar em
              harmonia. **Acredite na sua recuperação.** Agende seu atendimento
              e dê o primeiro passo.
            </p>
          </div>

          <div className="flex justify-end">
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCardTwo
