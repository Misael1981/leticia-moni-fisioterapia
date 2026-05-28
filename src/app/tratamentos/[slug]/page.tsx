interface TreatmentPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const resolvedParams = await params

  return (
    <div>
      <h1>{resolvedParams.slug}</h1>
    </div>
  )
}
