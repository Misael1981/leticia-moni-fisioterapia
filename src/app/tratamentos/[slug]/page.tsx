import { getTreatmentBySlug } from "@/data/get-treatment-by-slug"
import { notFound } from "next/navigation"
import TreatmentHeader from "./components/TreatmentHeader"
import DescriptionCards from "./components/DescriptionCards"
import { Badge } from "@/components/ui/badge"
import TreatmentAction from "./components/TreatmentAction"

interface TreatmentPageProps {
  params: Promise<{
    slug: string
  }>
}

const tags = [
  "Tontura",
  "Vertigem posicional",
  "Desequilíbrio",
  "Dor",
  "Pós-labirintite",
  "Pós-cirúrgico",
]

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const resolvedParams = await params

  const treatment = await getTreatmentBySlug(resolvedParams.slug)

  if (!treatment) {
    notFound()
  }

  return (
    <div className="space-y-4 lg:space-y-6">
      <TreatmentHeader
        name={treatment.name}
        description={treatment.description}
        imageUrl={treatment.imageUrl}
      />
      <section className="flex items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <DescriptionCards>
            <div className="space-y-2">
              <h3 className="text-blue-custom font-semibold uppercase">
                O que é
              </h3>
              <p className="text-blue-dark text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                officiis eveniet, praesentium, expedita dignissimos iure cum
                ullam distinctio mollitia deserunt aliquid sed error dolorum
                repellat iusto eius facilis cupiditate aspernatur non soluta.
                Unde sed odio atque culpa saepe necessitatibus aut incidunt ex
                omnis rerum. Corrupti maiores ipsam incidunt!
              </p>
            </div>
          </DescriptionCards>

          <DescriptionCards>
            <div className="space-y-2">
              <h3 className="text-blue-custom font-semibold uppercase">
                Indicado para
              </h3>

              <div className="flex w-full flex-wrap items-center justify-around gap-4">
                {tags.map((tag) => (
                  <Badge key={tag} className="text-md bg-blue-custom p-3">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </DescriptionCards>

          <div className="flex w-full flex-wrap gap-4">
            <DescriptionCards>
              <div className="space-y-2">
                <h3 className="text-blue-custom text-center text-2xl font-semibold uppercase">
                  6-8
                </h3>
                <p className="text-blue-dark text-center text-sm">
                  semanas de tratamento (em média)
                </p>
              </div>
            </DescriptionCards>

            <DescriptionCards>
              <div className="space-y-2">
                <h3 className="text-blue-custom text-center text-2xl font-semibold">
                  1-2x
                </h3>

                <p className="text-blue-dark text-center text-sm">
                  sessões semanais
                </p>
              </div>
            </DescriptionCards>
          </div>

          <DescriptionCards>
            <div className="space-y-2">
              <h3 className="text-blue-custom font-semibold uppercase">
                Como é o atendimento
              </h3>
              <p className="text-blue-dark text-sm">
                Cada plano é personalizado após avaliação detalhada. Os
                exercícios são realizados em consultório e em casa, com
                acompanhamento contínuo da evolução do paciente.
              </p>
            </div>
          </DescriptionCards>
        </div>
      </section>

      <div className="flex w-full flex-col items-center justify-between gap-6 p-4">
        <TreatmentAction />
      </div>
    </div>
  )
}
