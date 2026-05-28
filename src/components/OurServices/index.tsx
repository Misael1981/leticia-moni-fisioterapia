import { getTreatments } from "@/data/get-treatments"
import ComponentHeader from "./components/ComponentHeader"
import TreatmentsList from "./components/TreatmentsList"

const OurServices = async () => {
  const treatments = await getTreatments()

  return (
    <section className="bg-cream flex min-h-[50vh] justify-center p-4 lg:p-8">
      <div className="max-w-5xl space-y-4">
        <ComponentHeader />

        <TreatmentsList treatments={treatments} />
      </div>
    </section>
  )
}

export default OurServices
