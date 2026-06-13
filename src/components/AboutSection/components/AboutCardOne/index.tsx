import Image from "next/image"

const AboutCardOne = () => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden rounded-lg lg:h-[90vh]">
      <Image
        src="/images/about/bg-about2.webp"
        alt="Letícia Mori"
        fill
        className="object-cover"
      />

      {/* Gradiente */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/98 via-slate-900/50 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 via-slate-900/50 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex justify-end">
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src="/images/logo.svg" alt="Logo" width={70} height={70} />
            <h2 className="font-fancy text-blue-dark text-lg font-bold tracking-wider">
              Letícia Moni
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-center text-white">
          <h2 className="text-xl font-semibold">
            Gestão Humana à Reabilitação de Precisão
          </h2>
          <p className="text-xs opacity-60">
            Sempre acreditei que o meu propósito de vida estava conectado ao ser
            humano. Durante minha trajetória como gestora de Recursos Humanos,
            desenvolvi um olhar sensível para escutar, compreender e apoiar as
            pessoas em suas jornadas. No entanto, pulsar em mim o desejo latente
            de entregar algo ainda mais profundo e direto ao próximo.Foi dessa
            busca por gerar um impacto real na qualidade de vida das pessoas que
            nasceu a minha transição para a Fisioterapia. Deixei os bastidores
            corporativos para atuar diretamente na linha de frente da saúde,
            onde o toque, a ciência e a empatia se encontram para restabelecer o
            bem-estar.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutCardOne
