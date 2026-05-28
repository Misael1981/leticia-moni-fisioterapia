import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

type TreatmentCardProps = {
  treatment: {
    id: string
    name: string
    slug: string
    imageUrl: string | null
    description: string | null
  }
}

const TreatmentCard = ({ treatment }: TreatmentCardProps) => {
  return (
    <Link href={`/tratamentos/${treatment.slug}`}>
      <Card className="border-blue-custom h-88 w-full max-w-75 justify-between border-2 p-4 lg:max-w-60">
        <CardHeader className="space-y-2 p-0">
          <div className="flex justify-center">
            <div className="bg-blue-custom relative h-20 w-20 rounded-2xl p-4">
              <Image
                src={treatment.imageUrl || "/placeholder.png"}
                alt={treatment.name}
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
          <CardTitle className="text-blue-dark text-center text-sm">
            {treatment.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <CardDescription className="line-clamp-4 text-center">
            {treatment.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-0">
          <Button variant="ghost" className="text-blue-custom w-full">
            Saiba Mais
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default TreatmentCard
