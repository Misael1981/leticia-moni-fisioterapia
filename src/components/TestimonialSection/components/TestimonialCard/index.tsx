import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Rating } from "../Rating"
import { Quote } from "lucide-react"

type TestimonialCardProps = {
  testimonial: {
    id: number
    name: string
    treatment: string
    recovery: string
    thumbnail: string
    videoUrl: string
    quote: string
    rating: number
  }
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="flex h-45 w-full max-w-80 flex-col justify-between gap-4 rounded-lg bg-white p-4">
      <Rating rating={testimonial.rating} />
      <div>
        <p className="line-clamp-3 text-sm">{testimonial.quote}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={testimonial.thumbnail}
              alt={testimonial.name}
              className="grayscale"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-0">
            <p className="text-sm font-semibold">{testimonial.name}</p>
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
