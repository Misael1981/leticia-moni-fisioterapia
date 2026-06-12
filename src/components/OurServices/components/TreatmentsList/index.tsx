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
        className="xs:max-w-xs mx-auto w-full max-w-70 sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {treatments.map((treatment) => (
            <CarouselItem
              key={treatment.id}
              className="flex basis-full pl-4 sm:basis-1/2 lg:basis-1/4"
            >
              <div className="h-full w-full p-1">
                <TreatmentCard treatment={treatment} />
              </div>
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
