import TreatmentCard from "../TreatmentCard"

type TreatmentsListProps = {
  treatments: {
    id: string
    name: string
    slug: string
    imageUrl: string | null
    description: string | null
  }[]
}

const TreatmentsList = ({ treatments }: TreatmentsListProps) => {
  return (
    <div className="flex w-full gap-4 lg:flex-wrap lg:justify-between">
      {treatments.map((treatment) => (
        <TreatmentCard key={treatment.id} treatment={treatment} />
      ))}
    </div>
  )
}

export default TreatmentsList
