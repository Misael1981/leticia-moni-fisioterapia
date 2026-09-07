import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Rating } from "../Rating"
import { Quote } from "lucide-react"
import { TestimonialType } from "@/data/testimonials.queries"

type TestimonialCardProps = {
  testimonial: TestimonialType
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="flex max-h-60 w-full flex-1 flex-col justify-between gap-4 rounded-lg bg-white p-4">
      <Rating rating={testimonial.rating} />
      <div>
        <p className="text-sm wrap-break-word whitespace-normal">
          {testimonial.description}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={testimonial.patient.avatarUrl || ""}
              alt={testimonial.patient.name}
              className="grayscale"
            />
            <AvatarFallback className="bg-amber-200">
              {testimonial.patient.name
                .split(" ")
                .map((name) => name[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-0">
            <p className="text-sm font-semibold">{testimonial.patient.name}</p>
            <p className="text-xs text-gray-500">Paciente</p>
          </div>
        </div>
        <div className="text-yellow-500">
          <Quote />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
