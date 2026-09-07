import Image from "next/image"

import TestimonialCarousel from "./components/TestimonialCarousel"
import { getTestimonials } from "@/data/testimonials.queries"
import Link from "next/link"
import { getClinicWhatsApp } from "@/data/get-clinic"

const TestimonialSection = async () => {
  const [whatsapp, testimonials] = await Promise.all([
    getClinicWhatsApp(),
    getTestimonials(),
  ])

  const rawPhone = whatsapp?.whatsapp
  const cleanPhone = rawPhone ? `55${rawPhone.replace(/\D/g, "")}` : ""

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

        {whatsapp && (
          <div className="flex justify-center lg:justify-end">
            <Link
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                "Olá! Gostaria de agendar uma avaliação.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-gradient inline-flex items-center justify-center rounded-md px-3 py-2 font-medium text-white shadow-lg shadow-sky-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-900/30 hover:brightness-110"
            >
              Agendar minha avaliação
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default TestimonialSection
