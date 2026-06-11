import BadgeStylized from "@/components/BadgeStylized"
import TestimonialCard from "../TestimonialCard"
import { testimonials } from "@/constants/forks"

const TestimonialsTreatment = () => {
  return (
    <section className="bg-blue-dark relative overflow-hidden py-12 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-16 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <BadgeStylized content="Histórias Reais de Recuperação" />

          <h2 className="mt-6 text-2xl font-bold tracking-tight md:text-3xl">
            Veja como esse tratamento impactou a vida dos nossos pacientes
          </h2>

          <p className="mt-6 text-base leading-8 text-neutral-300">
            Cada recuperação possui uma história única. Esses depoimentos
            mostram experiências reais de pessoas que confiaram no tratamento e
            recuperaram qualidade de vida, movimento e confiança.
          </p>
        </div>

        <div className="scroll-snap-x-mandatory flex w-full scroll-px-6 gap-8 overflow-x-scroll md:justify-center [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              className="scroll-snap-start w-[calc(100vw-3rem)] shrink-0 sm:w-75"
            />
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl md:p-12">
          <h3 className="text-3xl font-bold">
            Seu processo de recuperação também pode começar hoje
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
            Cada paciente possui necessidades únicas. Nossa equipe está pronta
            para entender o seu caso e construir um tratamento personalizado.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-neutral-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-300">
              Agendar Avaliação
            </button>

            <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsTreatment
