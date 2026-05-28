"use client"

import TreatmentCard from "../TreatmentCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

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
    <div className="flex w-full justify-center px-4 md:px-8 lg:px-0">
      <Carousel
        className="w-full max-w-60 sm:max-w-lg lg:max-w-5xl"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent className="flex lg:ml-0 lg:grid lg:flex-none lg:grid-cols-4 lg:gap-6">
          {treatments.map((treatment) => (
            <CarouselItem
              key={treatment.id}
              className="basis-full pl-4 sm:basis-[50%] lg:basis-full lg:pl-0"
            >
              <TreatmentCard treatment={treatment} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="lg:hidden" />
        <CarouselNext className="lg:hidden" />
      </Carousel>
    </div>
  )
}

export default TreatmentsList
