import { Badge } from "@/components/ui/badge"
import Image from "next/image"

type TreatmentHeaderProps = {
  name: string
  description: string | null
  imageUrl: string | null
}

const TreatmentHeader = ({
  name,
  description,
  imageUrl,
}: TreatmentHeaderProps) => {
  return (
    <section className="bg-blue-custom flex min-h-[40vh] w-full items-center justify-center p-4">
      <div className="flex max-w-5xl flex-col items-center justify-center gap-4 lg:flex-row">
        <div className="relative h-24 w-24">
          <Image
            src={imageUrl || "/placeholder.png"}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-white lg:items-start">
          <Badge className="bg-blue-light">Tratamento especializado</Badge>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-center text-sm opacity-70 lg:text-start">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default TreatmentHeader
