import { getTreatments } from "@/data/get-treatments"
import ComponentHeader from "./components/ComponentHeader"
import TreatmentsList from "./components/TreatmentsList"

const OurServices = async () => {
  const treatments = await getTreatments()

  return (
    <section className="bg-cream flex justify-center p-4 lg:p-8">
      <div className="max-w-5xl space-y-4 lg:space-y-8">
        <ComponentHeader />

        <div className="text-blue-custom space-y-4">
          <TreatmentsList treatments={treatments} />
          <div className="text-center">
            <p className="text-blue-dark text-lg font-semibold">
              Diferencial do atendimento
            </p>
            <p className="text-md">
              Cada plano terapêutico é personalizado, respeitando as
              necessidades, queixas e história de cada paciente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
