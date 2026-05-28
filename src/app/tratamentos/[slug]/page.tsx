import { getTreatmentBySlug } from "@/data/get-treatment-by-slug"
import { notFound } from "next/navigation"
import TreatmentHeader from "./components/TreatmentHeader"

interface TreatmentPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const resolvedParams = await params

  const treatment = await getTreatmentBySlug(resolvedParams.slug)

  if (!treatment) {
    notFound()
  }

  return (
    <div>
      <TreatmentHeader
        name={treatment.name}
        description={treatment.description}
        imageUrl={treatment.imageUrl}
      />
    </div>
  )
}
