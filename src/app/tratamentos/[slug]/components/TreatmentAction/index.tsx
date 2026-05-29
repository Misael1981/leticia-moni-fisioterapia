import Link from "next/link"

const TreatmentAction = () => {
  return (
    <section className="bg-blue-custom flex w-full max-w-5xl flex-wrap items-center justify-center gap-2 rounded-lg p-6 lg:justify-around">
      <h3 className="text-center text-2xl text-white">
        Quer saber se esse tratamento é indicado para você?
      </h3>
      <Link
        href="/"
        className="rounded-lg border border-white px-4 py-2 text-white"
      >
        Agendar Avaliação
      </Link>
    </section>
  )
}

export default TreatmentAction
