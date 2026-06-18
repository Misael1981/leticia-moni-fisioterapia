import { testimonials } from "@/constants/forks"
import Image from "next/image"
import TestimonialCard from "./components/TestimonialCard"
import { Button } from "../ui/button"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

const TestimonialSection = () => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <Image
        src="/images/depoimentos.webp"
        alt="Letícia Mori atendendo um cliente"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#935332]/60" />

      <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-between p-6">
        <div className="space-y-2">
          <span className="text-blue-custom block text-center text-sm font-bold uppercase lg:text-left">
            Depoimentos
          </span>
          <h3 className="text-center text-2xl font-semibold text-white lg:text-left">
            O que dizem nossos pacientes
          </h3>
        </div>

        <ScrollArea className="w-full">
          <div className="flex gap-4 px-2 lg:justify-center">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-[80%] shrink-0 sm:min-w-[320px]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="flex justify-center lg:justify-end">
          <Button className="bg-blue-gradient text-white">
            Agendar minha avaliação
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
