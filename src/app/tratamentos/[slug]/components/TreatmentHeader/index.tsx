import BadgeStylized from "@/components/BadgeStylized"
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
    <section className="bg-blue-dark relative flex min-h-[40vh] w-full items-center justify-center overflow-hidden p-4">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" />
      </div>
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
          <BadgeStylized content="Tratamento especializado" />
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-center text-sm opacity-70 lg:text-start">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default TreatmentHeader
