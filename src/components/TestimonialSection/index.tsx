import Image from "next/image"
import { Button } from "../ui/button"
import TestimonialCarousel from "./components/TestimonialCarousel"
import { getTestimonials } from "@/data/testimonials.queries"

const TestimonialSection = async () => {
  const testimonials = await getTestimonials()

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

        <TestimonialCarousel testimonials={testimonials} />

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
