import Link from "next/link"

type TestimonialsTreatmentProps = {
  whatsapp: string | null
}

const TestimonialsTreatment = ({ whatsapp }: TestimonialsTreatmentProps) => {
  return (
    <section className="bg-blue-dark relative overflow-hidden py-12 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-16 px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl md:p-12">
          <h3 className="text-3xl font-bold">
            Seu processo de recuperação também pode começar hoje
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
            Cada paciente possui necessidades únicas. Nossa equipe está pronta
            para entender o seu caso e construir um tratamento personalizado.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`https://wa.me/${whatsapp?.replace(/\D/g, "")}?text=${encodeURIComponent(
                "Olá! Gostaria de agendar uma avaliação.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-neutral-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-300`}
            >
              Agendar Avaliação
            </Link>

            <Link
              href={`https://wa.me/${whatsapp?.replace(/\D/g, "")}?text=${encodeURIComponent(
                "Olá! Poderia falar com um especialista?",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsTreatment
