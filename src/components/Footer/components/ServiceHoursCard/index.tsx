import type { Prisma } from "@misael1981/physio-database"
import { parseTimeSlots } from "@/helpers/parse-time-slots"

const DAYS_OF_WEEK = [
  "Domingo",
  "Segunda Feira",
  "Terça Feira",
  "Quarta Feira",
  "Quinta Feira",
  "Sexta Feira",
  "Sábado",
] as const

type ServiceHoursCardProps = {
  businessHours:
    | {
        id: string
        createdAt: Date
        updatedAt: Date
        clinicId: string
        dayOfWeek: number
        timeSlots: Prisma.JsonValue
        isClosed: boolean
        displayOrder: number
      }[]
    | undefined
}

const ServiceHoursCard = ({ businessHours }: ServiceHoursCardProps) => {
  if (!businessHours || businessHours.length === 0) return null

  const sortedHours = [...businessHours].sort(
    (a, b) => a.displayOrder - b.displayOrder,
  )

  return (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold">Horário de Atendimento</h4>
      <ul className="space-y-2 text-sm opacity-90">
        {sortedHours.map((hour) => {
          const dayName = DAYS_OF_WEEK[hour.dayOfWeek] ?? "Dia inválido"
          const slots = parseTimeSlots(hour.timeSlots)

          return (
            <li
              key={hour.id}
              className="hover:bg-blue-custom space-x-2 rounded-md p-1"
            >
              <span className="font-semibold">{dayName}:</span>{" "}
              {hour.isClosed || slots.length === 0 ? (
                <span className="text-red-400">Fechado</span>
              ) : (
                slots.map((slot, index) => (
                  <span key={index}>
                    Das {slot.open} às {slot.close}
                    {index < slots.length - 1 ? " / " : ""}
                  </span>
                ))
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ServiceHoursCard
