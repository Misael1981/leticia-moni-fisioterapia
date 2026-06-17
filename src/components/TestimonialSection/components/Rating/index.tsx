import { Star } from "lucide-react"

type RatingProps = {
  rating: number
}

export function Rating({ rating }: RatingProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={18}
          className={
            index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }
        />
      ))}
    </div>
  )
}
